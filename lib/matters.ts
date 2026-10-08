/**
 * Selected matters — the quantum work, stated in Michael Whiting's own words.
 *
 * This replaces the 276-row commission table, which was a career record covering
 * roles the practice does not hold out (58 adjudicator appointments, one
 * arbitrator appointment) and attributed to nobody. These six are the quantum
 * proceedings themselves. Wording is supplied by him and is not to be
 * embellished: it is anonymised to project type, forum, jurisdiction, the
 * parties' relationship and the heads in issue — nothing that identifies a
 * matter.
 *
 * The commission record that used to sit in lib/commissions.ts was removed on
 * 10 September 2026: cross-checking it against John Nestor's CV established it
 * was his career, not Avonstowe's. Nothing on this site may be sourced from it.
 * The map is driven by lib/publishedRegions.ts, which states coverage rather
 * than making any claim about work done.
 */
export type Matter = {
  project: string;
  forum: string;
  /** Badge class suffix, matching the existing .forum-badge palette. */
  forumKey: "arbitration" | "litigation" | "adjudication" | "claim";
  /**
   * Region, not country. Broadened so a matter cannot be identified from the
   * combination of project type, forum and place — and so the three regions
   * here read against the same three the coverage map shows.
   */
  region: string;
  parties: string;
  summary: string;
  heads: string[];
  /**
   * What Avonstowe actually did on the matter — the role held or the deliverable
   * produced, in a short phrase ("Quantum analysis for the party-appointed
   * expert", "Quantum expert report", "Assisted the quantum expert").
   *
   * EVIDENCE RULE: this may only be filled from Michael Whiting's own statement
   * of the role he held on that specific matter. The former lib/commissions.ts
   * was deleted once it was established to be John Nestor's career record, and
   * no role on this site may be sourced from it or from any other
   * practitioner's history. A misstated role is the single claim most likely to
   * be tested in an appointment enquiry.
   *
   * SOURCE for the four arbitration entries: Michael Whiting's CV of 10 Sep
   * 2026, section "Quantum analysis & expert support" — "Michael has supported
   * appointed quantum experts in international arbitration proceedings... His
   * role has included quantum assessment, document review, analysis of project
   * records and expert report drafting."
   *
   * The Court of Session and adjudication matters are not covered by that
   * sentence, which is confined to international arbitration. He confirmed the
   * same role on both directly on 10 September 2026.
   *
   * Left undefined, the card renders without it. Say nothing rather than
   * something unverified.
   */
  contribution?: string;
};

export const matters: Matter[] = [
  {
    // Added 8 October 2026 from the CV of 5 October 2026. No role line: none is stated there.
    project: "Gas Export Pipelines",
    forum: "Claim",
    forumKey: "claim",
    region: "Middle East",
    parties: "Contractor v Client",
    summary:
      "Interim claim concerning disruption valued by measured mile analysis, including derivation of disrupted labour and plant workhours by activity.",
    heads: ["Disruption", "Measured mile analysis", "Labour and plant workhours by activity"],
  },
  {
    project: "LPG Extraction & Fractionation Plant",
    contribution: "Quantum support to the appointed expert",
    forum: "Arbitration",
    forumKey: "arbitration",
    region: "Middle East",
    parties: "Contractor v Client",
    summary:
      "Proceedings concerning prolongation, disruption, variations and head office overheads.",
    heads: ["Prolongation", "Disruption", "Variations", "Head office overheads"],
  },
  {
    project: "Phosphate Plants",
    contribution: "Quantum support to the appointed expert",
    forum: "Arbitration",
    forumKey: "arbitration",
    region: "Africa",
    parties: "Contractor v Subcontractor",
    summary:
      "Proceedings concerning prolongation, disruption, measured work, variations, loss of opportunity costs and head office overheads.",
    heads: ["Prolongation", "Disruption", "Measured work", "Variations", "Loss of opportunity", "Head office overheads"],
  },
  {
    project: "Commercial Office",
    contribution: "Quantum support to the appointed expert",
    forum: "Court of Session",
    forumKey: "litigation",
    region: "United Kingdom",
    parties: "Building Owner v Architect",
    summary:
      "Proceedings concerning remediation and additional works, prolongation, funding and financing costs, energy and operational expenditure, and internal management costs.",
    heads: ["Remediation", "Prolongation", "Funding and financing", "Energy and opex", "Internal management"],
  },
  {
    project: "Retirement Village",
    contribution: "Quantum support to the appointed expert",
    forum: "Adjudication",
    forumKey: "adjudication",
    region: "United Kingdom",
    parties: "MEP Subcontractor v Main Contractor",
    summary:
      "Proceedings concerning prolongation, contra-charges, liquidated damages, retention and interest.",
    heads: ["Prolongation", "Contra-charges", "Liquidated damages", "Retention", "Interest"],
  },
];

/**
 * Claims and commercial recovery — the second group, added 8 October 2026.
 * Wording is from the "Commercial Recovery, Claims & Disputes" section of the
 * CV of 5 October 2026 and is anonymised the same way.
 */
export type Recovery = {
  project: string;
  place: string;
  party: string;
  summary: string;
};

export const recovery: Recovery[] = [
  {
    project: "Landmark Commercial Skyscraper",
    place: "London",
    party: "Subcontractor",
    summary:
      "High-value dispute involving delay, disruption, variations, contra charges, overhead and profit and finance-related claims. Project account reconstructed from first principles.",
  },
  {
    project: "Landmark Power Station Redevelopment",
    place: "London",
    party: "Subcontractor",
    summary:
      "Commercial recovery and account reconstruction relating to variations, provisional sums, delay, acceleration, payment disputes, suspension, contra charges and extension of time.",
  },
  {
    project: "Major Regeneration Scheme",
    place: "London",
    party: "Developer",
    summary:
      "High-value claims across MEP and drylining packages reviewed and rebutted, with negotiated settlements and interim final account agreement.",
  },
];
