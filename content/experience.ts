/**
 * Experience: sectors, contract forms and regions.
 *
 * ============================================================================
 * CONFIDENTIALITY RULE — READ BEFORE EDITING
 * ============================================================================
 * This page replaced a public table of ~276 individual commissions. That table
 * was removed deliberately, not for brevity.
 *
 * Apply this test to every statement below before publishing it:
 *
 *   "Could a reasonably informed person working in this part of the construction
 *    disputes market identify the specific matter from the information given?"
 *
 * If yes — do not publish it.
 *
 * PUBLISHABLE: sector, broad project type, contract form, professional role,
 * broad region, claim type.
 *
 * NOT PUBLISHABLE: project names, party names, contractor/subcontractor
 * descriptions where identifying, arbitral institution combined with an
 * identifiable project, arbitration seat where identifying, city or site,
 * values tied to disputes, dispute dates, proceeding years, and — importantly —
 * any COMBINATION of the above that becomes identifying when read together.
 *
 * The combination rule is why regions below are stated broadly (GCC, North
 * Africa) rather than by country, and why project types are stated as classes of
 * facility rather than as facilities. A single named plant in a named country in
 * a named year is identifiable even though each element looks innocuous alone.
 *
 * Detailed matter-level experience belongs in the private capability pack, which
 * is issued directly and is NOT part of this repository or this build.
 * ============================================================================
 *
 * EVIDENCE BASE
 * Sectors and claim types below are derived from the firm's own commission
 * record. Contract forms are constrained: see `contractForms` for what is and is
 * not currently supportable.
 */

export type Sector = {
  title: string;
  /** Project classes — types of facility, never named facilities. */
  detail: string;
  /** Nature of the analytical work. */
  work: string;
  /** Broad regions only. */
  regions: string;
};

export const sectors: Sector[] = [
  {
    title: "Process plant and energy",
    detail:
      "LPG extraction and fractionation, phosphate processing and refinery environments, gas processing, and thermal, solar and waste-to-energy generation.",
    work: "Quantum analysis supporting appointed experts in international arbitration, and claim preparation and defence for project parties.",
    regions: "Middle East, North Africa and Europe.",
  },
  {
    title: "Transport infrastructure",
    detail:
      "Airport terminals and airside facilities, metro and heavy rail, highways, and hard-rock tunnelling.",
    work: "Prolongation, disruption and variation analysis; quantum and delay support to party-appointed experts.",
    regions: "GCC, UK and Central Asia.",
  },
  {
    title: "Utilities and water",
    detail:
      "Desalination and combined power and water, water distribution networks, sewerage and wastewater treatment.",
    work: "Entitlement and valuation analysis, defective works and prolongation claims.",
    regions: "GCC, UK and Asia-Pacific.",
  },
  {
    title: "Marine and offshore",
    detail:
      "Offshore pipelines, offshore wind, marine oil and gas infrastructure, and vessel construction.",
    work: "Delay responsibility, valuation and loss of profit analysis.",
    regions: "Middle East, UK and Northern Europe.",
  },
  {
    title: "Buildings and development",
    detail:
      "High-rise residential and mixed-use, hotels, commercial offices, retail, hospitals, education and research facilities, stadia and cultural buildings.",
    work: "Variations, prolongation, disruption, loss and expense, final account and defects analysis.",
    regions: "GCC, UK and Europe.",
  },
];

/**
 * CONTRACT FORMS.
 *
 * EVIDENCE: the lead professional's CV of record (July 2026) states experience with
 * "JCT, NEC, FIDIC, PFI and bespoke contract forms". NEC3 and NEC4 are each
 * corroborated by named engagements, as is PFI. That is the basis for this list.
 *
 * STILL CONSTRAINED — FIDIC is published as a family of contracts only. No Book
 * (Red / Yellow / Silver) and no edition year is claimed, because the source
 * material evidences FIDIC generally and not any specific Book or edition. Do NOT
 * convert broad FIDIC experience into a Book or edition claim without documentary
 * support: it is the single easiest thing on this site for a knowledgeable reader
 * to test in conversation.
 *
 * The same discipline applies to any form added later. "We have used it" is enough
 * to name the family; it is not enough to name the edition.
 */
export const contractForms: { name: string; note: string }[] = [
  {
    name: "FIDIC",
    note: "International construction and plant contracts, including employer-designed and contractor-designed forms.",
  },
  {
    name: "NEC",
    note: "NEC3 and NEC4, including the compensation-event and assessment regime.",
  },
  {
    name: "JCT",
    note: "Main contract and subcontract forms on UK building and development work.",
  },
  {
    name: "PFI",
    note: "Long-term project agreements, including market testing, procurement and final account.",
  },
  {
    name: "Bespoke and amended forms",
    note: "Heavily amended standard forms and bespoke EPC and subcontract documents.",
  },
];

/**
 * REGIONS — broad descriptions only.
 * Ordered by weight of experience in the underlying record. Countries are named
 * only where doing so does not, in combination with sector, narrow the field to an
 * identifiable matter.
 */
export const regions: { name: string; note: string }[] = [
  { name: "GCC", note: "The principal centre of the firm's process plant, infrastructure and buildings work." },
  { name: "United Kingdom", note: "Buildings, infrastructure and energy, including adjudication-track disputes." },
  { name: "North Africa", note: "Process plant, principally phosphate processing and associated facilities." },
  { name: "Asia-Pacific", note: "Infrastructure and utilities, including tunnelling and wastewater." },
  { name: "Europe", note: "Energy generation, data centres, healthcare and marine construction." },
];

/**
 * Claim types. All are evidenced in the commission record and none is
 * matter-identifying in isolation or in combination.
 */
export const claimTypes: string[] = [
  "Prolongation",
  "Disruption and lost productivity",
  "Variations and change",
  "Loss and expense",
  "Head office overheads and profit",
  "Extensions of time",
  "Valuation and measurement",
  "Defective works",
  "Termination and repudiation",
  "Final account",
];
