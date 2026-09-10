/**
 * The named practitioner.
 *
 * Ported from rev2:content/people.ts on 10 September 2026. The bio and the
 * credential wording passed an evidence and consent process on that branch and
 * are reproduced verbatim. Do not rewrite them here.
 *
 * ==========================================================================
 * MAINTAINER RULE — READ BEFORE ADDING ANYONE
 * ==========================================================================
 * Adding any second person to this file requires porting lib/consent.ts and
 * lib/content-validation.ts from rev2 FIRST. Nobody except the site's owner is
 * published without a recorded, evidenced consent, and that guard must be
 * mechanical rather than remembered. rev2 enforces it at build time; this
 * branch does not, because it publishes exactly one person — the owner, who is
 * the author of his own consent record. That justification disappears the
 * moment a second name is added.
 * ==========================================================================
 */

export type Credential = {
  text: string;
  /** true where the qualification is being read rather than held. */
  inProgress: boolean;
};

export type CareerEntry = {
  organisation: string;
  period: string;
};

export type Person = {
  name: string;
  postNominals: string[];
  role: string;
  /** Sit directly under the name. */
  specialisms: string[];
  credentials: Credential[];
  /** Dated, so a reader can compute seniority rather than be told it. */
  career: CareerEntry[];
  bio: string;
};

/**
 * WP0-C — no role title is published. The CV of record says "Partner",
 * LinkedIn says "Principal" and rev2 says "Founder"; three public sources
 * cannot disagree on the site. Add `role` here once one is confirmed.
 */
export const person: Person = {
  name: "Michael Whiting",
  postNominals: [],
  // Confirmed 10 September 2026. Must match LinkedIn and the CV of record.
  role: "Principal",
  // PLACEHOLDER — supplied 10 September 2026, to be reviewed.
  specialisms: [
    "Drafting, interpreting and applying commercial terms in contracts",
    "Able objectively to rank a range of potential valuation outcomes",
    "Quantum on international infrastructure and energy projects — airports, refineries, power and process plant",
    "Independent, technical opinion evidence to assist a court, tribunal, or arbitrator in resolving disputes",
  ],
  credentials: [
    /**
     * RICS's own term, used verbatim in their criteria documents and on every
     * register footnote. Held first because it is the only credential here with
     * an institution behind it.
     *
     * NOT "RICS Registered Expert Witness". That designation does not appear
     * against this name on the published lists (October 2025, September 2025) or
     * on the March 2026 Accredited register, and RICS closed it to anyone
     * passing the certificate after June 2024 — the whole designation expires on
     * 1 January 2028. Restore it only on written confirmation from RICS DRS.
     */
    { text: "RICS Expert Witness Certificate", inProgress: false },
    { text: "BSc (Hons) Quantity Surveying", inProgress: false },
    { text: "LLB (Hons)", inProgress: true },
    { text: "Diploma in Forensic Quantum Analysis", inProgress: true },
    { text: "Member, Society of Construction Law", inProgress: false },
  ],
  // From the CV of record (10 September 2026). Dates only — the reader draws
  // the conclusion about seniority.
  career: [
    { organisation: "Avonstowe", period: "2022 — present" },
    { organisation: "McLaren Construction", period: "2019 — 2022" },
    { organisation: "Balfour Beatty", period: "2014 — 2019" },
  ],
  bio:
    "Michael supports party-appointed quantum experts in international arbitration and advises employers, contractors and subcontractors on prolongation, disruption, variations, productivity, loss and expense, final accounts and commercial recovery. He works across process plant and energy, infrastructure and major development, principally in the GCC, the United Kingdom and North Africa. He entered the industry at sixteen as an apprentice quantity surveyor with Balfour Beatty, and that contractor-side background — procurement, valuation, change control and distressed account recovery — is what the forensic work is built on.",
};
