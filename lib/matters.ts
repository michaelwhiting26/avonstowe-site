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
 * The commission record in lib/commissions.ts is retained as the data behind the
 * map, which counts jurisdictions rather than making a claim about roles.
 */
export type Matter = {
  project: string;
  forum: string;
  /** Badge class suffix, matching the existing .forum-badge palette. */
  forumKey: "arbitration" | "litigation" | "adjudication";
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
   * of the role he held on that specific matter. It must NOT be inferred from
   * lib/commissions.ts — that file records the career by project TYPE, holds
   * several differing roles against the same project name, and does not contain
   * two of these six matters at all. Matching a role across is guesswork, and a
   * misstated role is the single claim most likely to be tested in an
   * appointment enquiry.
   *
   * SOURCE for the four arbitration entries: Michael Whiting's CV of 10 Sep
   * 2026, section "Quantum analysis & expert support" — "Michael has supported
   * appointed quantum experts in international arbitration proceedings... His
   * role has included quantum assessment, document review, analysis of project
   * records and expert report drafting."
   *
   * The Court of Session and adjudication matters are NOT covered by that
   * sentence, which is confined to international arbitration. They remain
   * undefined pending his confirmation.
   *
   * Left undefined, the card renders without it. Say nothing rather than
   * something unverified.
   */
  contribution?: string;
};

export const matters: Matter[] = [
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
    project: "Landmark Hotel",
    contribution: "Quantum support to the appointed expert",
    forum: "Arbitration",
    forumKey: "arbitration",
    region: "Middle East",
    parties: "Contractor v MEP Subcontractor",
    summary:
      "Proceedings concerning prolongation, disruption, variations and scope creep.",
    heads: ["Prolongation", "Disruption", "Variations", "Scope creep"],
  },
  {
    project: "Slaughterhouse & Associated Infrastructure",
    contribution: "Quantum support to the appointed expert",
    forum: "Arbitration",
    forumKey: "arbitration",
    region: "Middle East",
    parties: "Contractor v Client",
    summary:
      "Proceedings concerning prolongation, disruption, variations, late payment and head office overhead claims.",
    heads: ["Prolongation", "Disruption", "Variations", "Late payment", "Head office overheads"],
  },
  {
    project: "Commercial Office",
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
    forum: "Adjudication",
    forumKey: "adjudication",
    region: "United Kingdom",
    parties: "MEP Subcontractor v Main Contractor",
    summary:
      "Proceedings concerning prolongation, contra-charges, liquidated damages, retention and interest.",
    heads: ["Prolongation", "Contra-charges", "Liquidated damages", "Retention", "Interest"],
  },
];
