/**
 * Consent gating for people data.
 *
 * This module is the ONLY place consent is interpreted. Pages and components must
 * consume `getPublishablePanelMembers()` / `getPublishableMemberFields()` and must
 * never read `PanelMember.consent` themselves — inconsistent per-page logic is how
 * an unconsented person ends up in the HTML.
 *
 * See content/people.ts for the rules these functions enforce.
 */

import {
  CONSENT_SCOPES,
  CONSENT_STATUSES,
  lead,
  panel,
  type ConsentScope,
  type PanelMember,
} from "@/content/people";

/**
 * A person reduced to exactly what consent permits publishing.
 * Every field is optional because every field is separately consented. A component
 * receiving this type cannot accidentally render something unconsented — the field
 * simply is not there.
 */
export type PublicPerson = {
  slug: string;
  name?: string;
  postNominals?: string[];
  role?: string;
  affiliation?: string;
  bio?: string;
  photoPath?: string;
  credentials?: string[];
};

/** True only where the person may appear publicly at all. */
export function isPublishable(member: PanelMember): boolean {
  return member.consent.status === "granted";
}

function allows(member: PanelMember, scope: ConsentScope): boolean {
  return member.consent.scope.includes(scope);
}

/**
 * Reduce a member to their consented fields.
 *
 * Notes on specific fields:
 * - `role` is published under the "name" scope: it identifies the person's function
 *   rather than a credential or affiliation, and a name with no role is not useful.
 * - `affiliation` requires BOTH consent to publish AND independent verification.
 *   An unverified affiliation is withheld even where consent covers it, because the
 *   risk is a false statement about a third party's employer.
 * - `photoPath` requires the "photo" scope AND an actual path.
 */
export function getPublishableMemberFields(member: PanelMember): PublicPerson | null {
  if (!isPublishable(member)) return null;

  const person: PublicPerson = { slug: member.slug };

  if (allows(member, "name")) {
    person.name = member.name;
    person.role = member.role;
    if (member.postNominals.length > 0) person.postNominals = member.postNominals;
  }

  if (allows(member, "credentials") && member.credentials.length > 0) {
    person.credentials = member.credentials;
  }

  if (allows(member, "affiliation") && member.affiliation.verified) {
    person.affiliation = member.affiliation.value;
  }

  if (allows(member, "bio") && member.bio.trim() !== "") {
    person.bio = member.bio;
  }

  if (allows(member, "photo") && member.photoPath) {
    person.photoPath = member.photoPath;
  }

  // A person with no publishable name is not a person we can present. Withhold
  // entirely rather than render an anonymous card.
  if (!person.name) return null;

  return person;
}

/** Every panel member who may be shown, reduced to consented fields. */
export function getPublishablePanelMembers(): PublicPerson[] {
  return panel
    .map(getPublishableMemberFields)
    .filter((p): p is PublicPerson => p !== null);
}

/** The lead professional, consent-filtered like everyone else. */
export function getPublishableLead(): PublicPerson | null {
  return getPublishableMemberFields(lead);
}

/* -------------------------------------------------------------------------- */
/* Build-time validation                                                       */
/* -------------------------------------------------------------------------- */

export type ValidationIssue = { level: "error" | "warning"; where: string; message: string };

/**
 * Validate all people content. Errors FAIL THE BUILD; warnings are printed.
 *
 * Errors are reserved for conditions that would publish something we have no right
 * to publish, or that would silently mislead. Warnings flag content that is
 * incomplete but safe.
 */
export function validatePeopleContent(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const everyone: PanelMember[] = [lead, ...panel];
  const seenSlugs = new Set<string>();

  for (const m of everyone) {
    const where = `people: ${m.slug || "(missing slug)"}`;

    if (!m.slug || m.slug.trim() === "") {
      issues.push({ level: "error", where, message: "slug is required." });
    } else if (seenSlugs.has(m.slug)) {
      issues.push({ level: "error", where, message: `duplicate slug "${m.slug}".` });
    } else {
      seenSlugs.add(m.slug);
    }

    if (!CONSENT_STATUSES.includes(m.consent.status)) {
      issues.push({
        level: "error",
        where,
        message: `invalid consent status "${m.consent.status}". Must be one of: ${CONSENT_STATUSES.join(", ")}.`,
      });
    }

    for (const scope of m.consent.scope) {
      if (!CONSENT_SCOPES.includes(scope)) {
        issues.push({
          level: "error",
          where,
          message: `invalid consent scope "${scope}". Must be one of: ${CONSENT_SCOPES.join(", ")}.`,
        });
      }
    }

    if (new Set(m.consent.scope).size !== m.consent.scope.length) {
      issues.push({ level: "error", where, message: "duplicate entries in consent.scope." });
    }

    // RULE 4 — granted consent must be evidenced.
    if (m.consent.status === "granted" && m.consent.evidenceRef.trim() === "") {
      issues.push({
        level: "error",
        where,
        message:
          "consent.status is 'granted' but evidenceRef is empty. Consent that cannot be evidenced is not consent.",
      });
    }

    if (m.consent.status === "granted" && !/^\d{4}-\d{2}-\d{2}$/.test(m.consent.dateISO)) {
      issues.push({
        level: "error",
        where,
        message: `consent.dateISO must be an ISO date (YYYY-MM-DD); got "${m.consent.dateISO}".`,
      });
    }

    // A verified affiliation must say how it was verified and when. Otherwise
    // "verified" is just an assertion, which is the thing it exists to prevent.
    if (m.affiliation.verified) {
      if (!m.affiliation.sourceRef || m.affiliation.sourceRef.trim() === "") {
        issues.push({
          level: "error",
          where,
          message: "affiliation.verified is true but sourceRef is empty.",
        });
      }
      if (!m.affiliation.verifiedDateISO || !/^\d{4}-\d{2}-\d{2}$/.test(m.affiliation.verifiedDateISO)) {
        issues.push({
          level: "error",
          where,
          message: "affiliation.verified is true but verifiedDateISO is missing or not an ISO date.",
        });
      }
    } else if (m.consent.scope.includes("affiliation") && m.consent.status === "granted") {
      issues.push({
        level: "warning",
        where,
        message:
          "consent covers 'affiliation' but it is not independently verified, so it will be withheld from the site.",
      });
    }

    // Photo consent without a photo, or a photo without consent.
    if (m.consent.scope.includes("photo") && !m.photoPath) {
      issues.push({
        level: "warning",
        where,
        message: "consent covers 'photo' but no photoPath is set.",
      });
    }
    if (m.photoPath && !m.consent.scope.includes("photo")) {
      issues.push({
        level: "error",
        where,
        message: "photoPath is set but consent.scope does not include 'photo'. It will not be published.",
      });
    }
  }

  // The lead professional is the site's entire credibility mechanism. Missing
  // credentials is a launch blocker, but not a reason to fail a preview build.
  if (lead.credentials.length === 0) {
    issues.push({
      level: "warning",
      where: `people: ${lead.slug}`,
      message:
        "lead professional has no credentials. The site cannot demonstrate verifiable credibility until these are supplied. See TODO in content/people.ts.",
    });
  }
  if (!lead.photoPath) {
    issues.push({
      level: "warning",
      where: `people: ${lead.slug}`,
      message: "lead professional has no approved photograph. See TODO in content/people.ts.",
    });
  }

  return issues;
}
