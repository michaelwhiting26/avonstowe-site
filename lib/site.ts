/**
 * All site copy in one place. `services` is no longer shown on the page
 * (17 October 2026); it still feeds llms.txt and the structured data.
 *
 * CONTENT RULE (carried from rev2): every statement must be independently
 * verifiable. Nothing is inferred, rounded or invented. Wording follows
 * Michael Whiting's CV of 5 October 2026: the practice is described as a
 * quantity surveying and forensic quantum practice (on 17 October 2026 the front
 * became "a construction and engineering disputes practice"), and the three services
 * mirror the CV's three experience sections.
 */

export const site = {
  name: "Avonstowe",
  url: "https://www.avonstowe.com",
  email: "michael@avonstowe.com",
  location: "United Arab Emirates",
  // Verified 22 August 2026 against the RAKEZ licence.
  legalEntity: "Avonstowe FZ-LLC",
  licence: "RAKEZ licence 47022473",
  title: "Avonstowe | Construction and Engineering Disputes",
  description:
    "Avonstowe is a construction and engineering disputes practice working across the United Kingdom, the Middle East and North Africa: quantum analysis, claims and commercial recovery, and commercial management.",
} as const;

/**
 * The front of the page: one sentence (Michael, 17 October 2026).
 */
export const hero = {
  statement:
    "Avonstowe is a construction and engineering disputes practice, working across the United Kingdom, the Middle East and North Africa.",
} as const;

/**
 * Experience, written about rather than listed (Michael, 18 October 2026: "take
 * them off but write about them"). No project cards: the arbitration matters
 * were other experts' instructions, and a client should not wonder whether its
 * own project is next. Every phrase is drawn from the CV of 15 October 2026.
 */
export const experience = {
  quantum:
    "Quantum analysis in international arbitration, adjudication and court proceedings, on energy, process plant and construction projects across the Middle East, the United Kingdom and North Africa.",
  recovery:
    "Claims and commercial recovery for subcontractors and developers on major UK projects, including residential and commercial towers, a power station redevelopment, a film studio and large regeneration schemes.",
  commercial:
    "Lifecycle quantity surveying and commercial leadership for main contractors and developers on schemes of up to £1bn, across residential, healthcare, luxury retail, hospitality, education and mixed-use regeneration. Procurement, contract management, valuation, change control, cost forecasting, risk reporting and final account, under JCT, NEC, FIDIC, PFI and bespoke forms.",
} as const;

export const services = [
  {
    title: "Forensic quantum analysis",
    text: "Quantum assessment, document review, analysis of project records and report drafting in arbitration, adjudication and litigation.",
  },
  {
    title: "Claims, disputes and commercial recovery",
    text: "Prolongation, disruption, variations, loss and expense, final accounts and payment disputes, for employers, contractors and subcontractors.",
  },
  {
    title: "Quantity surveying and commercial management",
    text: "Procurement, contract management, valuation, change control, cost forecasting and final account, under JCT, NEC, FIDIC and bespoke forms.",
  },
] as const;
