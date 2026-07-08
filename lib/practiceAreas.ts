import type { ServiceKey } from "./commissions";

// Static intro content for each practice-area tab/panel, transcribed verbatim
// from the original service-intro blocks in index.html.
export type PracticeArea = {
  key: ServiceKey;
  number: string;
  title: string;
  desc: string;
  tags: string[];
  // Title shown in the "View All Commissions" overlay header (openOverlay() map).
  overlayTitle: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    key: "disputes",
    number: "01",
    title: "Claims & Disputes",
    desc: "We advise on complex construction and engineering disputes arising from major projects.",
    tags: [
      "Arbitration",
      "Adjudication",
      "Litigation",
      "Mediation",
      "Prolongation",
      "Disruption",
      "Variations",
      "Loss & Expense",
    ],
    overlayTitle: "Claims & Disputes",
  },
  {
    key: "expert",
    number: "02",
    title: "Expert Appointments",
    desc: "We accept appointments as quantum, delay and technical experts in arbitration, adjudication and related proceedings.",
    tags: [
      "Quantum Expert",
      "Delay Expert",
      "Technical Expert",
      "Adjudicator",
      "Arbitrator",
      "Expert Determination",
    ],
    overlayTitle: "Expert Appointments",
  },
  {
    key: "advisory",
    number: "03",
    title: "Project Advisory",
    desc: "We advise on the commercial and contractual management of major construction and engineering projects, from procurement and contract strategy through project delivery and final account resolution.",
    tags: [
      "Commercial Management",
      "Planning Management",
      "Project Management",
      "Contract Administration",
      "Change Control",
      "Final Account",
    ],
    overlayTitle: "Project Advisory",
  },
];
