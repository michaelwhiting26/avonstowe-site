/**
 * All site copy in one place. `services` is no longer shown on the page
 * (17 October 2026); it still feeds llms.txt and the structured data.
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

/**
 * The front of the page: one paragraph saying what the practice does
 * (Michael, 17 October 2026: "what it does on the tin"). `accent` is set in
 * the brass italic; the three parts read as one paragraph.
 */
export const hero = {
  lead: "Avonstowe is a quantity surveying and forensic quantum practice. We work out what construction and engineering work is worth,",
  accent: "and what is owed.",
  rest: "On live projects, that means valuations, change and final accounts. In a dispute, it means rebuilding the figures from the project records and setting them out for adjudication, arbitration or settlement. We work across the UK, the Middle East and North Africa.",
} as const;

export const statement = `${hero.lead} ${hero.accent} ${hero.rest}`;

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
