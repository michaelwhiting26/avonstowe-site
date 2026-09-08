/**
 * Service lines.
 *
 * POSITIONING RULE — party-side only.
 * Avonstowe is marketed exclusively as a party-side consultancy. Nothing in this
 * file may advertise, imply or list neutral appointments: adjudicator, arbitrator,
 * dispute board / DAB / DAAB, tribunal-appointed or independent neutral roles.
 * Neutral work undertaken independently by individual panel members sits outside
 * the Avonstowe proposition and is not marketed through this website.
 *
 * "Expert Appointments" below means PARTY-APPOINTED experts sourced or assembled
 * through Avonstowe. It does not mean tribunal appointments.
 */

export type Service = {
  slug: string;
  number: string;
  title: string;
  /** One-line summary used on tiles and in the home page grid. */
  summary: string;
  /** Body copy, ~100–140 words. */
  body: string;
  /** Concrete scope items. Specific terms only — no marketing adjectives. */
  scope: string[];
};

export const services: Service[] = [
  {
    slug: "claims-and-disputes",
    number: "02",
    title: "Claims & Disputes",
    summary:
      "Preparation, defence and rebuttal of construction and engineering claims, with the quantum analysis to support them.",
    body:
      "Avonstowe prepares, defends and rebuts claims on construction and engineering projects, and carries out the quantum analysis that sits beneath them. Work typically covers entitlement and causation, valuation of variations and change, prolongation and disruption, loss and expense, and disputed final accounts. Analysis is built from contemporaneous records — programmes, cost ledgers, correspondence, site records and payment applications — and presented so that each figure can be traced to its source. Support extends to negotiated settlement and to the analytical work required in arbitration, adjudication and litigation. Avonstowe acts for parties and works alongside their legal advisers; it does not provide legal advice or act as legal representative.",
    scope: [
      "Claim preparation and presentation",
      "Claim defence and rebuttal",
      "Variation and change analysis",
      "Prolongation",
      "Disruption and lost productivity",
      "Loss and expense",
      "Final account disputes",
      "Commercial recovery",
      "Quantum analysis",
      "Delay analysis where relevant",
      "Negotiated settlement support",
    ],
  },
  {
    slug: "expert-appointments",
    number: "03",
    title: "Expert Appointments",
    summary:
      "Party-appointed quantum, delay and technical experts, sourced or assembled through Avonstowe's professional network.",
    body:
      "Where a party requires expert evidence, Avonstowe can provide or assemble appropriate quantum, delay and technical expert capability through its professional network. These are party-appointed roles: the expert is instructed by a party or its legal advisers and owes the usual overriding duty to the tribunal or court. Avonstowe does not market neutral appointments, and does not hold out any individual as having accepted an appointment unless that is factually the case. Individuals in the network are independent professionals rather than employees, partners or directors of Avonstowe, and are identified publicly only where they have given consent. Suitability, availability and conflict position are confirmed before any introduction is made.",
    scope: [
      "Party-appointed quantum experts",
      "Party-appointed delay experts",
      "Technical experts",
      "Expert team assembly",
      "Conflict and availability checks",
      "Expert report support",
    ],
  },
  {
    slug: "project-advisory",
    number: "04",
    title: "Project Advisory",
    summary:
      "Commercial and contractual support through the project lifecycle, from procurement to final account.",
    body:
      "Avonstowe advises on the commercial and contractual management of construction and engineering projects, from procurement and contract strategy through delivery to final account. Work includes contract administration, notice and change-control regimes, valuation and payment, the interface between programme and commercial position, and the recording of entitlement as it arises rather than reconstructing it later. The emphasis is on records and process discipline: the same evidence that supports sound commercial management is the evidence a claim or defence later depends on. This is secondary to the firm's dispute work and is most often taken on where a project carries live commercial exposure or is heading toward a formal dispute.",
    scope: [
      "Procurement and contract strategy",
      "Contract administration",
      "Change control",
      "Commercial management",
      "Payment and valuation",
      "Programme and commercial interface",
      "Risk",
      "Final account",
    ],
  },
];

/**
 * The lead service line. It has its own page because it addresses a different
 * buyer — appointed experts, law firms and consultancies rather than project
 * parties — and because it is the work Avonstowe does most of.
 */
export const expertSupportTile = {
  slug: "expert-support",
  number: "01",
  title: "Expert Support",
  summary:
    "Forensic quantum analysts supplied to appointed experts, law firms and consultancies on an assignment basis.",
  href: "/expert-support",
};
