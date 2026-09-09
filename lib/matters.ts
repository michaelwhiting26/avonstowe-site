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
  jurisdiction: string;
  parties: string;
  summary: string;
  heads: string[];
};

export const matters: Matter[] = [
  {
    project: "Phosphate Plants",
    forum: "Arbitration",
    forumKey: "arbitration",
    jurisdiction: "Morocco",
    parties: "Contractor v Subcontractor",
    summary:
      "Proceedings concerning prolongation, disruption, measured work, variations, loss of opportunity costs and head office overheads.",
    heads: ["Prolongation", "Disruption", "Measured work", "Variations", "Loss of opportunity", "Head office overheads"],
  },
  {
    project: "Landmark Hotel",
    forum: "Arbitration",
    forumKey: "arbitration",
    jurisdiction: "UAE",
    parties: "Contractor v MEP Subcontractor",
    summary:
      "Proceedings concerning prolongation, disruption, variations and scope creep.",
    heads: ["Prolongation", "Disruption", "Variations", "Scope creep"],
  },
  {
    project: "LPG Extraction & Fractionation Plant",
    forum: "Arbitration",
    forumKey: "arbitration",
    jurisdiction: "Oman",
    parties: "Contractor v Client",
    summary:
      "Proceedings concerning prolongation, disruption, variations and head office overheads.",
    heads: ["Prolongation", "Disruption", "Variations", "Head office overheads"],
  },
  {
    project: "Slaughterhouse & Associated Infrastructure",
    forum: "Arbitration",
    forumKey: "arbitration",
    jurisdiction: "Oman",
    parties: "Contractor v Client",
    summary:
      "Proceedings concerning prolongation, disruption, variations, late payment and head office overhead claims.",
    heads: ["Prolongation", "Disruption", "Variations", "Late payment", "Head office overheads"],
  },
  {
    project: "Commercial Office",
    forum: "Court of Session",
    forumKey: "litigation",
    jurisdiction: "Scotland, UK",
    parties: "Building Owner v Architect",
    summary:
      "Proceedings concerning remediation and additional works, prolongation, funding and financing costs, energy and operational expenditure, and internal management costs.",
    heads: ["Remediation", "Prolongation", "Funding and financing", "Energy and opex", "Internal management"],
  },
  {
    project: "Retirement Village",
    forum: "Adjudication",
    forumKey: "adjudication",
    jurisdiction: "UK",
    parties: "MEP Subcontractor v Main Contractor",
    summary:
      "Proceedings concerning prolongation, contra-charges, liquidated damages, retention and interest.",
    heads: ["Prolongation", "Contra-charges", "Liquidated damages", "Retention", "Interest"],
  },
];
