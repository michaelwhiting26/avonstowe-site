/**
 * All home-page copy in one place.
 *
 * CONTENT RULE (carried from rev2): every statement must be independently
 * verifiable. Nothing is inferred, rounded or invented. Wording follows
 * Michael Whiting's CV of 5 October 2026: the practice is described as a
 * quantity surveying and forensic quantum practice, and the three services
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
  title: "Avonstowe | Quantity Surveying and Forensic Quantum",
  description:
    "Avonstowe is a quantity surveying and forensic quantum practice for construction and engineering projects and disputes, across the United Kingdom, the Middle East and North Africa.",
} as const;

export const hero = {
  eyebrow: "Construction and engineering",
  titleLead: "Quantity surveying",
  titleRest: "and forensic quantum",
  sub: "Avonstowe advises on quantum, commercial and contractual matters on live projects and in arbitration, adjudication and negotiated settlement, across the United Kingdom, the Middle East and North Africa.",
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

export const enquiries =
  "Send the issue and the documents you have. You will get a straight view on whether the quantum can be supported, and what it would take to build it. All enquiries are treated in confidence.";
