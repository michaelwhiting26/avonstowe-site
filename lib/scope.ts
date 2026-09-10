/**
 * Scope — what the work consists of, split by when it arrives rather than by
 * discipline. The practice is single-discipline; two panels here would break
 * that if they were labelled as two services, so they are labelled by stage.
 *
 * CONTENT RULE: every line must describe work Avonstowe has actually done or
 * can do today. Nothing aspirational. In particular, nothing on this page may
 * assert that Avonstowe accepts appointment as a testifying expert witness —
 * the practice prepares the analysis behind expert evidence and works to a
 * party-appointed expert's instructions. That distinction is the one a
 * tribunal would test, so it is drawn here in the data, not left to styling.
 */

export type ScopeStage = {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
};

export const scope: ScopeStage[] = [
  {
    eyebrow: "01",
    title: "Before proceedings",
    body:
      "Avonstowe values change, tests cost and prepares the account while a project is still " +
      "running. The work is the same forensic analysis a tribunal would see, done early enough " +
      "to be useful — so a party knows what its position is worth before it commits to a fight.",
    items: [
      "Valuation of variations, change and instructed work under the contract's own machinery",
      "Assessment of prolongation, disruption and loss of productivity from contemporaneous records",
      "Final account preparation, reconciliation and negotiation",
      "Review of a claim as pleaded — what the evidence will carry, and what it will not",
      "Records audit: what is being kept, what is missing, and what will be needed if this becomes a dispute",
    ],
  },
  {
    eyebrow: "02",
    title: "In proceedings",
    body:
      "Avonstowe prepares the quantum analysis behind expert evidence in international " +
      "arbitration, adjudication and litigation, and works to the party-appointed expert's " +
      "instructions where one is appointed.",
    items: [
      "Quantum analysis supporting party-appointed experts in institutional and ad hoc arbitration",
      "Prolongation, disruption, variation, loss and expense and damages assessment for reports and joint statements",
      "Rebuttal and testing of an opposing expert's figures, methods and source records",
      "Analysis for adjudication, including responding within the timetable",
      "Early appraisal for law firms and funders on the value and evidential strength of a claim",
    ],
  },
];
