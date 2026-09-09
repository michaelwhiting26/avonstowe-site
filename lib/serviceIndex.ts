/**
 * The service index: three practice areas, each a flat list of services running
 * in lifecycle order — the earliest thing Avonstowe would be instructed to do
 * first, the latest last.
 *
 * Project Advisory runs the life cycle of the project, from strategic definition
 * before anything is designed through to the agreed final account. Claims &
 * Disputes runs the life cycle of a dispute, from the first look at entitlement
 * through to enforcement. Expert Witness runs the life cycle of an appointment,
 * across the three disciplines the site already names — quantum, delay and
 * technical.
 *
 * Every entry is drawn from the corpus reviews (RICS Black Books, RICS expert
 * witness material, forensic quantum, delay analysis, the Balfour Beatty
 * material, the LLM modules and the Report Library work product). Each is a
 * service Avonstowe can evidence having performed.
 */
export type IndexedService = { name: string; desc: string };

export type ServiceColumn = {
  key: string;
  title: string;
  lead: string;
  services: IndexedService[];
};

export const serviceIndex: ServiceColumn[] = [
  {
    key: "advisory",
    title: "Project Advisory",
    lead: "Quantity surveying and commercial management across the life of the project, from strategic definition to the agreed final account.",
    services: [
      { name: "Strategic Definition and Feasibility", desc: "Testing whether the scheme is affordable and deliverable before design money is committed." },
      { name: "Order of Cost Estimating", desc: "Establishing the first reliable cost of the project from area, function or elemental data." },
      { name: "Cost Planning", desc: "Developing the estimate into an elemental cost plan that holds the design to budget as it develops." },
      { name: "Whole Life and Life Cycle Costing", desc: "Assessing capital, operating, maintenance and replacement cost together, rather than capital cost alone." },
      { name: "Procurement Strategy and Contract Selection", desc: "Choosing the route and the form of contract that fit the client's appetite for risk, time and price certainty." },
      { name: "Tender Documentation and Bills of Quantities", desc: "Preparing the documents that price the works and set the measurement rules the account will be run on." },
      { name: "Tender Analysis and Contractor Selection", desc: "Interrogating bids for arithmetic, qualification, front-loading and undisclosed risk before award." },
      { name: "Contract Administration", desc: "Running the contract as written: instructions, notices, certificates and the machinery of time and payment." },
      { name: "Interim Valuation and Payment", desc: "Valuing work in progress and certifying payment on time and on the contractual basis." },
      { name: "Change and Variation Control", desc: "Valuing instructed change as it happens, and keeping the account current rather than reconstructing it later." },
      { name: "Cost Reporting and Forecasting", desc: "Reporting committed, incurred and forecast cost so the outturn position is known before it arrives." },
      { name: "Cash Flow and Funding", desc: "Modelling drawdown and cash position across the programme, and the cost of funding the gap." },
      { name: "Risk and Contingency Management", desc: "Quantifying project risk and holding contingency against it, rather than absorbing it silently into the account." },
      { name: "Programme and Commercial Interface", desc: "Keeping the programme and the commercial position aligned, so time and money tell the same story." },
      { name: "Extension of Time and Loss and Expense", desc: "Assessing contractor entitlement to time and money during the works, on behalf of either party." },
      { name: "Project Records and Audit Readiness", desc: "Building the contemporaneous record that sound commercial management needs — and that any later claim depends on." },
      { name: "Defects, Handover and Making Good", desc: "Valuing outstanding and defective work through completion, handover and the rectification period." },
      { name: "Final Account Agreement", desc: "Closing the account on a defensible figure: contract sum, change, credits, payments, retention and set-off." },
    ],
  },
  {
    key: "disputes",
    title: "Claims & Disputes",
    lead: "Claims and disputes from the first look at entitlement through to award and enforcement, with the delay and quantum analysis beneath every head.",
    services: [
      { name: "Entitlement and Contract Review", desc: "Establishing what the contract actually gives you before any claim is written." },
      { name: "Notice and Compliance Review", desc: "Checking whether the conditions precedent were met, and what can still be preserved if they were not." },
      { name: "Claim Strategy and Prospects Assessment", desc: "An early, honest view of whether the claim can be run, and what it is realistically worth." },
      { name: "Records and Evidence Assembly", desc: "Assembling the contemporaneous record — programmes, ledgers, timesheets, correspondence — the claim will have to stand on." },
      { name: "Delay Analysis", desc: "Establishing what actually drove completion, by a method the project's records will carry." },
      { name: "Disruption and Lost Productivity Analysis", desc: "Quantifying disrupted labour and plant, measured against the project's own productivity evidence." },
      { name: "Quantum Assessment", desc: "Valuing every head of claim — change, prolongation, overhead, financing and consequential loss — to a traceable figure." },
      { name: "Claim Preparation and Presentation", desc: "Building and writing the claim so entitlement, causation and quantum read as one connected case." },
      { name: "Claim Response and Rebuttal", desc: "Taking apart an overstated claim: global, unlinked, unsupported or recovered twice." },
      { name: "Counterclaim and Backcharge Assessment", desc: "Substantiating or resisting the money charged back across the contractual interface." },
      { name: "Negotiation and Settlement Support", desc: "An independent assessed range, and the analysis behind it, to settle on informed terms rather than instinct." },
      { name: "Mediation Support", desc: "Independent assessment prepared to inform a mediation — written to be shown to the other side." },
      { name: "Adjudication Support", desc: "Referral and response documents, and the analysis behind them, on the statutory timetable." },
      { name: "Arbitration and Litigation Support", desc: "Analytical and commercial support to the legal team through pleadings, disclosure, evidence and hearing." },
      { name: "Enforcement and Post-Award Assessment", desc: "Working through what an award or decision actually means for the account, and what remains to be recovered." },
    ],
  },
  {
    key: "expert",
    title: "Expert Witness",
    lead: "Independent expert evidence on quantum, delay and technical issues, and the analysis and drafting that stands behind an appointed expert's report.",
    services: [
      { name: "Appointment, Scope and Independence", desc: "Agreeing the instruction, the scope boundaries and the disclosure position before the first section is written." },
      { name: "Quantum Expert Evidence", desc: "Independent opinion on the valuation of the works, the change, the loss and the counterclaims." },
      { name: "Delay Expert Evidence", desc: "Independent opinion on critical delay, concurrency and entitlement to extension of time." },
      { name: "Technical Expert Evidence", desc: "Independent opinion on workmanship, specification and technical cause, where the issue is not one of money or time." },
      { name: "Support to Appointed Experts", desc: "The analysis, workbooks, schedules and section drafting behind a report the appointed expert puts his name to." },
      { name: "Expert Reports", desc: "The served report itself: instructions, documents considered, head-by-head assessment and signed declaration." },
      { name: "Responsive and Reply Reports", desc: "Answering the opposing expert head by head in his own structure, and replying to what is newly raised." },
      { name: "Joint Statements and Expert Meetings", desc: "Narrowing the case in the joint statement without conceding ground by drafting slippage." },
      { name: "Hearing Support", desc: "Preparing the expert and the evidence for examination, and answering what the tribunal asks during the hearing." },
      { name: "Dispute Board and Mediation Evidence", desc: "Evidence shaped for the forum it is going to, on the compressed timetable that forum runs to." },
    ],
  },
];
