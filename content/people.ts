/**
 * People — data-driven, consent-controlled.
 *
 * ============================================================================
 * CONSENT RULE — READ BEFORE ADDING ANYONE
 * ============================================================================
 * Nobody appears on this website unless they have given consent to appear, and
 * then only to the extent of that consent.
 *
 *  1. A person renders publicly ONLY where consent.status === "granted".
 *  2. Even then, ONLY the fields listed in consent.scope render. A granted
 *     consent covering ["name", "credentials"] does not authorise publishing a
 *     biography, an affiliation or a photograph.
 *  3. "pending" and "declined" people are omitted ENTIRELY. No placeholder card,
 *     no "coming soon", no initials, no anonymised entry, no reserved space, no
 *     hidden metadata. They must not reach the HTML at all.
 *  4. A granted consent with an empty evidenceRef FAILS THE BUILD. Consent that
 *     cannot be evidenced is not consent.
 *  5. Affiliation is verified independently, per person. One person's CV is not
 *     evidence of another person's current employer. Affiliations go stale —
 *     treat every one as unverified until independently checked and dated.
 *
 * These rules are enforced centrally in lib/consent.ts and validated at build
 * time by lib/content-validation.ts. Do not re-implement consent filtering in
 * a page or component.
 * ============================================================================
 */

export type ConsentScope = "name" | "credentials" | "affiliation" | "bio" | "photo";

export type ConsentStatus = "granted" | "pending" | "declined";

export const CONSENT_SCOPES: readonly ConsentScope[] = [
  "name",
  "credentials",
  "affiliation",
  "bio",
  "photo",
] as const;

export const CONSENT_STATUSES: readonly ConsentStatus[] = [
  "granted",
  "pending",
  "declined",
] as const;

/**
 * A field whose publication is permitted by consent but whose ACCURACY is tracked
 * separately. Consent governs whether we may publish; `verified` governs whether
 * we believe it is currently true. Both must hold before the field renders.
 *
 * This separation exists because the two failure modes are different: publishing
 * without permission is a consent breach; publishing a stale affiliation is a
 * factual misstatement about a third party. Either is damaging.
 */
export type VerifiedField<T> = {
  value: T;
  verified: boolean;
  /** Where the verification came from. Required when verified is true. */
  sourceRef?: string;
  /** ISO date of verification. Required when verified is true. */
  verifiedDateISO?: string;
};

export type Consent = {
  status: ConsentStatus;
  /** ISO date consent was given. */
  dateISO: string;
  /** Exactly which fields may be published. */
  scope: ConsentScope[];
  /** Where the consent record is held. Must be non-empty when status is granted. */
  evidenceRef: string;
};

export type PanelMember = {
  slug: string;
  name: string;
  postNominals: string[];
  role: string;
  /** Current employer or professional affiliation — independently verified. */
  affiliation: VerifiedField<string>;
  bio: string;
  photoPath?: string;
  /** Credentials shown publicly. Only entries that can be checked by a stranger. */
  credentials: string[];
  consent: Consent;
};

/**
 * THE LEAD PROFESSIONAL.
 *
 * SOURCE OF RECORD: the subject's own professional CV, dated July 2026, held by
 * the firm. Referred to below as "CV of record (July 2026)". That document is
 * privileged and confidential in its original context — nothing from the matter it
 * accompanied appears here or anywhere in this repository. Only the subject's own
 * qualifications, employment history and generic practice description are used.
 *
 * Every credential below is independently checkable by a stranger: a registration
 * that can be searched, or an awarding institution that can be asked. That is the
 * test. Nothing is listed that fails it.
 *
 * ---------------------------------------------------------------------------
 * STILL OUTSTANDING
 * ---------------------------------------------------------------------------
 * TODO: Supply an approved headshot and confirm publication approval, then set
 * photoPath and add "photo" to consent.scope. This is now the only remaining gap
 * in the lead profile.
 *
 * TODO (minor): Confirm the job title. "Founder" reflects the person's role as
 * principal of Avonstowe. The CV of record gives his title at his other firm,
 * which is deliberately not used here.
 *
 * DELIBERATELY OMITTED:
 * - HNC and BTEC in Quantity Surveying (Chartered Surveyors Training Trust). Both
 *   are held, but a BSc supersedes them and listing all three reads as padding.
 *   Restraint is the house style; add them back only if there is a reason to.
 * - Any current employer other than Avonstowe. See the note on affiliation below.
 * - MRICS / FCIArb / MCIArb. NOT held. Do not add them. RICS *Registered Expert
 *   Witness* is a separate registration from RICS chartered membership — do not
 *   let the two blur into each other in copy.
 * ---------------------------------------------------------------------------
 */
export const lead: PanelMember = {
  slug: "michael-whiting",
  name: "Michael Whiting",
  // Only completed, awarded qualifications become post-nominals. The LLB is in
  // progress and appears in `credentials` marked as such, never as a post-nominal.
  postNominals: ["BSc (Hons)"],
  role: "Founder",
  /**
   * AFFILIATION — publish Avonstowe only.
   *
   * The CV of record shows a current consultancy engagement with another firm
   * (2022–present). That is deliberately NOT published here: on Avonstowe's own
   * site his affiliation is Avonstowe, and publishing a competing firm's name on
   * this site raises commercial and restraint questions that are the subject's to
   * resolve, not this build's.
   *
   * NOTE FOR MAINTAINERS: earlier drafts of this file recorded that affiliation as
   * "stale". That was wrong — it is current as at July 2026. Corrected here so the
   * error is not inherited. Rule 5 still applies to everyone else: verify each
   * person's affiliation independently and date it.
   */
  affiliation: {
    value: "Avonstowe",
    verified: true,
    sourceRef: "Principal of the firm; verified from domain and entity records held by the firm.",
    verifiedDateISO: "2026-08-15",
  },
  bio:
    "Michael Whiting leads Avonstowe's forensic work: the quantum analysis that sits beneath construction and engineering disputes. He supports party-appointed quantum experts in international arbitration and advises employers, contractors and subcontractors on prolongation, disruption, variations, productivity, loss and expense, final accounts and commercial recovery. He works across process plant and energy, infrastructure and major development, principally in the GCC, the United Kingdom and North Africa. He entered the industry at sixteen as an apprentice quantity surveyor with Balfour Beatty, and that contractor-side background — procurement, subcontract management, valuation, change control, distressed account recovery and final account negotiation — is what the forensic work is built on.",
  credentials: [
    "RICS Registered Expert Witness",
    "BSc (Hons) Quantity Surveying — London South Bank University",
    "LLB (Hons) — University of London (in progress)",
    "Forensic Quantum Analysis — College of Contract Management (in progress)",
    "Forensic Schedule Analysis — College of Contract Management (in progress)",
    "Member, Society of Construction Law",
  ],
  consent: {
    status: "granted",
    dateISO: "2026-08-15",
    scope: ["name", "credentials", "affiliation", "bio"],
    evidenceRef:
      "Principal of the firm; publication authorised as owner of this website. Credentials taken from his own CV of record (July 2026), supplied by him for this purpose.",
  },
};

/**
 * PANEL / NETWORK MEMBERS.
 *
 * Empty by design. No panel member has documented consent, so none is published.
 * An empty panel renders as nothing at all — not as an empty state, and not as an
 * anonymised list.
 *
 * TODO: For each person to be added, obtain and record: written consent, the date
 * given, the exact scope consented to, and a reference to where that consent is
 * held. Then verify their current affiliation independently and date it — one
 * person's CV is never evidence of another person's current employer, and
 * affiliations go stale between the date a CV was written and the date you publish.
 *
 * Verify it for the person in front of you, from a source about them, on the day
 * you publish. That is the whole of Rule 5.
 *
 * Add entries as:
 *
 *   {
 *     slug: "…",
 *     name: "…",
 *     postNominals: ["…"],
 *     role: "…",
 *     affiliation: { value: "…", verified: true, sourceRef: "…", verifiedDateISO: "…" },
 *     bio: "…",
 *     credentials: ["…"],
 *     consent: {
 *       status: "granted",
 *       dateISO: "…",
 *       scope: ["name", "credentials"],
 *       evidenceRef: "…",   // never empty when granted — the build will fail
 *     },
 *   }
 */
export const panel: PanelMember[] = [];
