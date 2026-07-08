// Commission data for the three practice areas.
// Extracted programmatically from the original index.html tables (zero manual
// transcription). Each list is rendered three ways, exactly as the original did:
//   - desktop scrollable table (all rows)
//   - mobile preview cards (first PREVIEW_COUNT rows)
//   - "View All" overlay cards (all rows)

export type Commission = {
  forumClass: string;
  forum: string;
  role: string;
  project: string;
  location: string;
  scope: string;
};

export type ServiceKey = "disputes" | "expert" | "advisory";

// Number of preview cards shown on mobile before the "View All" button.
export const PREVIEW_COUNT = 6;

export const disputes: Commission[] = [
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Marine Oil And Gas Infrastructure",
    "location": "UAE",
    "scope": "Contractor Claim – Prolongation, Entitlement, Quantum Methodology"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Exhibition Centre Development",
    "location": "Saudi Arabia",
    "scope": "Employer Vs Contractor – Variations, Preliminaries, Time-Related Costs"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Mixed-Use Property Development",
    "location": "Saudi Arabia",
    "scope": "Contractor Claim – Prolongation, Disruption, Additional Variations"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Phosphate Processing Plant",
    "location": "Morocco",
    "scope": "Contractor Claim – Prolongation, Disruption, Variations, Overheads"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Oil And Gas Process Plant",
    "location": "UAE",
    "scope": "Contractor Claim – EOT, Disruption, Productivity Loss"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Luxury Hotel Development",
    "location": "UAE",
    "scope": "Contractor Claim – Change, Access, Rework"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Hospital Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Risk Assessment, Settlement Scenarios"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Construction Project",
    "location": "United Kingdom",
    "scope": "Referring Party Claim – Quantum Schedules, Evidential Support"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Infrastructure Contractor Portfolio",
    "location": "UAE",
    "scope": "Independent Review On Contract Risk, Notices, Claims Provisions"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Airport Cargo Facility",
    "location": "Qatar",
    "scope": "Independent Opinion On Design, Construction Contract Issues"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Party Representative",
    "project": "Infrastructure Dispute",
    "location": "Qatar",
    "scope": "Employer Vs Contractor – Mediation Strategy, Strengths, Weaknesses"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Education Infrastructure",
    "location": "Qatar",
    "scope": "Contractor Claim – Additional Services, Entitlement"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Highway Infrastructure",
    "location": "Qatar",
    "scope": "Contractor Claim – EOT, Delay, Infrastructure Works"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Advisor",
    "project": "Rail Infrastructure Operations",
    "location": "Qatar",
    "scope": "Independent Opinion On Cost Benchmarking, OPEX Modelling, Risk Analysis"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Gas Processing Plant",
    "location": "Oman",
    "scope": "Independent Opinion On Productivity, Contract Review, Process Improvement"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "LNG Gas To Liquids Plant",
    "location": "Qatar",
    "scope": "Independent Opinion On Contract Strategy, Productivity, Efficiency"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Commercial Skyscraper",
    "location": "United Kingdom",
    "scope": "Contractor - Claim, Entitlement, Causation, Valuation, Disruption"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "University Research Facility",
    "location": "United Kingdom",
    "scope": "Contractor Vs Subcontractor – Access, Delay, Entitlement, Payment"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Urban Regeneration Scheme",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Entitlement, Notices, Records, Cost Analysis"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Residential Skyscraper",
    "location": "United Kingdom",
    "scope": "Contractor - Claim, Entitlement, Causation, Valuation, Suspension"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Urban Regeneration Scheme",
    "location": "United Kingdom",
    "scope": "Subcontractor - Claim, Quantum Analysis, Delay Responsibility, Contra Charges"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Advisor",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Contractor - Lifecycle Commercial Management, Claims, Final Account"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Advisor",
    "project": "Commercial Office",
    "location": "United Kingdom",
    "scope": "Contractor - Contract Review, Negotiation, Risk Mitigation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Commercial Office Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices, Valuation, Defects"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Delay, Liquidated Damages, Variations"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Defects, Loss, Damage"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Value Of Work, Loss And Expense"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Cultural Building Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Defects, Repudiation, Damages"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "Morocco",
    "scope": "Employer Vs Contractor – Contract Interpretation, Payment Terms"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Commercial Office Development",
    "location": "United Kingdom",
    "scope": "Contractor Claim – Head Office Overheads, Profit"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Commercial Units Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Defects, Loss"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Industrial Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Certification, Loss, Damages"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Termination, Valuation, Counterclaims"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Mechanical Works Project",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Repudiation, Damages, Loss Of Profit"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Warehouse Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Defective Works, Loss"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Infrastructure Works",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Design Responsibility"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Termination, Repudiation, Counterclaims"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Terms, Estoppel, Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Right To Payment"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Labour Supply Contract",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Mixed-Use Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Insolvency, Interim Payments"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Mixed-Use Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Termination, Valuation, Counterclaims"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Refurbishment Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Completion, Defects"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "University Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Sports Facility Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Waiver, Estoppel, Payment"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "University Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Interim Certificate, Payment"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Termination, Defects, Valuation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Mixed-Use Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Interim Certificate, Payment"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Care Home Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Interim Certificate, Payment"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "General Construction Project",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Certified Sum, Payment"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Road Infrastructure",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation, Defects"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Student Accommodation Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation, Design Responsibility"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Completion Notice, Defects"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Professional Services Project",
    "location": "United Kingdom",
    "scope": "Employer Vs Consultant – Fees, Payment"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Infrastructure Works",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Refurbishment",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation, Defects"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "University Laboratory",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Estoppel, Contract Interpretation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Retail Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Final Account"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "University Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Notices"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Conversion Project",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Final Account"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Airport Fit-Out",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Final Account"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Building Refurbishment",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Defects, Delay"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Fit-Out",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Dispute"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Mixed-Use Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Dispute"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation, Defects"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Housing Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Education Facility",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Commercial Office Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Final Account"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Hotel Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation Dispute"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Infrastructure Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Variation Interpretation"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Residential Conversion Project",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation Dispute"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Facilities Management Contract",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Payment Mechanism Interpretation"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Advisor",
    "project": "Retail Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Termination, Claims, Court Expert"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Oil And Gas Process Plant",
    "location": "Saudi Arabia",
    "scope": "Contractor Claim – Entitlement, Claim Preparation"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Modular Housing Development",
    "location": "Saudi Arabia",
    "scope": "Independent Opinion On Contract Terms"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Commercial Office Tower",
    "location": "Saudi Arabia",
    "scope": "Independent Opinion On Design Responsibility"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Infrastructure Tunnelling Works",
    "location": "Qatar",
    "scope": "Employer Vs Contractor – Groundwater, Liability"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Retail Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Termination, Counterclaims"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Cultural Museum Development",
    "location": "Qatar",
    "scope": "Contractor Claim – Entitlement, Analysis"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Road And Drainage Infrastructure",
    "location": "Qatar",
    "scope": "Contractor Claim – Dewatering Dispute"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Road And Drainage Infrastructure",
    "location": "Qatar",
    "scope": "Contractor Claim – Measurement Dispute"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Phosphate Processing Plant",
    "location": "Morocco",
    "scope": "Contractor Claim – Entitlement, Preparation"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Luxury Hotel Development",
    "location": "UAE",
    "scope": "Independent Opinion On Contract Interpretation"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Residential Tower Development",
    "location": "UAE",
    "scope": "Contractor Vs Subcontractor – Claim Review"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Commercial Development",
    "location": "Saudi Arabia",
    "scope": "Independent Opinion On Contract Interpretation"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Research Facility Development",
    "location": "Antarctica",
    "scope": "Contractor Claim – Valuation, NEC3"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Construction Dispute",
    "location": "Unknown",
    "scope": "Independent Opinion On Adjudication Decision"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Commercial Office Development",
    "location": "United Kingdom",
    "scope": "Claimant – Payment Dispute"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Hospital Development",
    "location": "United Kingdom",
    "scope": "Claimant – Payment Dispute"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Commercial Office Development",
    "location": "United Kingdom",
    "scope": "Claimant – Notice Of Referral"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Exhibition Centre Development",
    "location": "United Kingdom",
    "scope": "Claimant – Notice Of Referral"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Professional Services Contract",
    "location": "Unknown",
    "scope": "Independent Opinion On Fees"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Advisor",
    "project": "Subcontract Works",
    "location": "Unknown",
    "scope": "Independent Opinion On Standard Forms"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Party Representative",
    "project": "Building Management System",
    "location": "Unknown",
    "scope": "Employer Vs Contractor – Dispute Support"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Defence Infrastructure",
    "location": "United Kingdom",
    "scope": "Claimant – Notice Of Referral"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Education Facility",
    "location": "United Kingdom",
    "scope": "Respondent – Subcontract Dispute"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Maritime Vessel Project",
    "location": "Unknown",
    "scope": "Contractor Claim – EOT, Loss And Expense"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Construction Subcontract",
    "location": "Unknown",
    "scope": "Independent Opinion On Contractual Provisions"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Advisor",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Negligence, Pre-Action"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Commercial Business District",
    "location": "Saudi Arabia",
    "scope": "Employer Vs Contractor – Delay Claims, Determinations"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Leisure Experience Centre",
    "location": "Saudi Arabia",
    "scope": "Contractor Vs Employer – EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "LPG Import Infrastructure",
    "location": "UAE",
    "scope": "Contractor Vs Employer – Entitlement, EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Oil-Fired Power Plant",
    "location": "UAE",
    "scope": "Contractor Vs Employer – Entitlement, EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Offshore Pipeline Infrastructure",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Entitlement, EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Power And Water Plant",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Entitlement, EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Data Centre Development",
    "location": "Germany",
    "scope": "Contractor Vs Employer – Entitlement, EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Power Transmission Infrastructure",
    "location": "UAE",
    "scope": "Contractor Vs Employer – Variations, Delay, Disruption"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Rail Freight Infrastructure",
    "location": "UAE",
    "scope": "Contractor Vs Employer – Entitlement, EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Hospital Development",
    "location": "Denmark",
    "scope": "Subcontractor Vs Contractor – Delay Analysis, EOT"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Mixed-Use High-Rise Development",
    "location": "UAE",
    "scope": "Contractor Vs Employer – Entitlement, EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Mixed-Use Development",
    "location": "Kazakhstan",
    "scope": "Contractor Vs Employer – Entitlement, EOT Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Party Representative",
    "project": "Mixed-Use Development",
    "location": "UAE",
    "scope": "Contractor Vs Employer – EOT Review, Settlement"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Commercial Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Programme, Claims Determination"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Windfarm Infrastructure",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Multiple Dispute Determinations"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Adjudicator",
    "project": "Rail Infrastructure",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Multiple Dispute Determinations"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Arbitrator",
    "project": "Petrochemical Pipeline",
    "location": "Oman",
    "scope": "Employer Vs Contractor – Technical Dispute Resolution"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Energy From Waste Generation Plant",
    "location": "United Kingdom",
    "scope": "Advocacy, Technical Advice, And Claim Strategy"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Party Representative",
    "project": "Energy From Waste Generation Plant",
    "location": "United Kingdom",
    "scope": "Advocacy, Technical Advice, And Claim Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Marine / Offshore Services",
    "location": "United Kingdom",
    "scope": "Advised Contractor On High Value, Complex Technical And Commercial Disputes"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "International Airport",
    "location": "Doha",
    "scope": "Technical Disputes And Large Cost Claims"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Rail Metro",
    "location": "Qatar",
    "scope": "Technical Disputes And Large Cost Claims"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Party Representative",
    "project": "Highway Infrastructure",
    "location": "Qatar",
    "scope": "Technical Disputes And Large Cost Claims"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Tunnel Infrastructure (26km Hard Rock)",
    "location": "Nepal",
    "scope": "Claims, DAB Strategy, Earthquake Recovery, Administration, Certification"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Advisor",
    "project": "Wastewater Infrastructure",
    "location": "Sri Lanka",
    "scope": "Funder - Dispute Resolution, Defect Rectification & Project Close-Out"
  }
];

export const expert: Commission[] = [
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "Luxury Residential Development",
    "location": "UAE",
    "scope": "Contractor Vs Subcontractor - Variations, Performance Bond, Legal Costs, Financing"
  },
  {
    "forumClass": "forum-expert",
    "forum": "Expert Determination",
    "role": "Quantum Expert",
    "project": "Phosphate Processing Plant",
    "location": "Morocco",
    "scope": "Employer Vs Contractor - Prolongation, Disruption, Variations, Overheads"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "Phosphate Processing Plant",
    "location": "Morocco",
    "scope": "Employer Vs Contractor - Prolongation, Disruption, Variations, Overheads"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "Phosphate Processing Plant",
    "location": "Morocco",
    "scope": "Contractor Vs Subcontractor - Prolongation, Disruption, Variations, Defects"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "Luxury Hotel Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor - Variations, Prolongation, Disruption, MEP Scope Creep"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "LPG Extraction Plant",
    "location": "Oman",
    "scope": "Contractor Vs Subcontractor - Prolongation, Disruption, Variations, Overheads"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "Oil And Gas Process Plant",
    "location": "UAE",
    "scope": "Subcontractor Claim - Prolongation, Disruption, Idle Time"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Major Airport Infrastructure",
    "location": "Qatar",
    "scope": "Employer Vs Contractor – MEP Disputes, Prolongation, Disruption, Variations"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Major Airport Infrastructure",
    "location": "UAE",
    "scope": "Contractor Claim – Prolongation, Disruption, MEP Works"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Major Airport Infrastructure",
    "location": "Oman",
    "scope": "Employer Vs Contractor – Variations, Specialist Systems Packages"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Gas-Fired Power Plant",
    "location": "Saudi Arabia",
    "scope": "Employer Vs Contractor – Prolongation, Disruption"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Desalination And Power Plant",
    "location": "UAE",
    "scope": "Contractor Claim – Entitlement, Valuation, Preliminary Assessment"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Oil Refinery Facility",
    "location": "Egypt",
    "scope": "Employer Vs Contractor – Prolongation, Disruption, Variations"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Water Distribution Network",
    "location": "Oman",
    "scope": "Employer Vs Contractor – Defective Works, Prolongation"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Assistant Quantum Expert",
    "project": "Education Research Facility",
    "location": "Qatar",
    "scope": "Contractor Claim – Entitlement, Valuation Methodology"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Assistant Quantum Expert",
    "project": "Cultural Museum Development",
    "location": "GCC",
    "scope": "Contractor Claim – Variations, Prolongation, Extensions Of Time"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Quantum Expert",
    "project": "Oil And Gas Pipeline Plant",
    "location": "UAE",
    "scope": "Independent Opinion On Quantum Assessment"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "Retail Mall Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Variations, Prolongation, Preliminaries"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Quantum Expert",
    "project": "Infrastructure Dispute",
    "location": "UAE",
    "scope": "Independent Opinion On Merits, Quantum, Funding Assessment"
  },
  {
    "forumClass": "forum-expert",
    "forum": "Expert Determination",
    "role": "Quantum Expert",
    "project": "LNG Processing Plant",
    "location": "Canada",
    "scope": "Independent Opinion On Entitlement, Quantum, Dispute Evaluation"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Expert",
    "project": "Infrastructure Project",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Delay, Disruption, Financial Claims"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Expert",
    "project": "Construction Project",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Variations, Valuation"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Quantum Expert",
    "project": "Luxury Hotel Development",
    "location": "UAE",
    "scope": "Contractor Vs Developer – Time, Cost Claims"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Quantum Expert",
    "project": "Desalination And Power Plant",
    "location": "UAE",
    "scope": "Independent Opinion On Quantum Assessment"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Quantum Expert",
    "project": "Coal-Fired Power Plant",
    "location": "South Africa",
    "scope": "Independent Opinion On Cost To Complete"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "Retail Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Value Of Work, Claims"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Expert",
    "project": "Offshore Wind Farm",
    "location": "North Sea",
    "scope": "Employer Vs Contractor – Delay, Valuation"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Quantum Expert",
    "project": "Commercial Office Development",
    "location": "Russia",
    "scope": "Employer Vs Contractor – Valuation, Loss And Expense"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Assistant Quantum Expert",
    "project": "Sports Stadium Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation, Ancillary Claims"
  },
  {
    "forumClass": "forum-adjudication",
    "forum": "Adjudication",
    "role": "Assistant Quantum Expert",
    "project": "Sports Stadium Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Assistant Quantum Expert",
    "project": "Airport Infrastructure",
    "location": "Barbados",
    "scope": "Employer Vs Contractor – Value Of Work, Loss And Expense"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Assistant Quantum Expert",
    "project": "Residential Refurbishment",
    "location": "Barbados",
    "scope": "Employer Vs Contractor – Value Of Work"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Transport Infrastructure",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Value Of Work, Loss And Expense"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Quantum Expert",
    "project": "Residential Development",
    "location": "Sark",
    "scope": "Employer Vs Contractor – Negligence, Contract Administration"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Assistant Quantum Expert",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Value Of Work, Loss And Expense"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Quantum Expert",
    "project": "Commercial Office Development",
    "location": "United Kingdom",
    "scope": "Independent Opinion On Remedial Works Valuation"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Assistant Quantum Expert",
    "project": "Gas Processing Plant",
    "location": "Nigeria",
    "scope": "Employer Vs Contractor – Value Of Work, Loss And Expense"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Assistant Quantum Expert",
    "project": "Pipeline Infrastructure",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Remedial Works"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Quantum Expert",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Value Of Work, Loss And Expense"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Quantum Expert",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Independent Opinion On Valuation"
  },
  {
    "forumClass": "forum-litigation",
    "forum": "Litigation",
    "role": "Assistant Quantum Expert",
    "project": "Maritime Transport Vessels",
    "location": "Poland",
    "scope": "Employer Vs Contractor – Loss Of Profit"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Delay Expert",
    "project": "LPG Extraction Plant",
    "location": "Oman",
    "scope": "Contractor Vs Subcontractor – Delay Responsibility, EOT"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Delay Expert",
    "project": "Oil Refinery Plant",
    "location": "UAE",
    "scope": "Contractor Vs Subcontractor – Delay Responsibility"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Delay Expert",
    "project": "Oil Refinery Plant",
    "location": "UAE",
    "scope": "Contractor Vs Subcontractor – Delay Responsibility"
  },
  {
    "forumClass": "forum-expert",
    "forum": "Expert Determination",
    "role": "Delay Expert",
    "project": "Phosphate Processing Plant",
    "location": "Morocco",
    "scope": "Employer Vs Contractor – Delay Analysis, EOT"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Delay Expert",
    "project": "Solar Power Plant",
    "location": "Israel",
    "scope": "Contractor Vs Subcontractor – Delay Responsibility"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Delay Expert",
    "project": "Luxury Hotel Development",
    "location": "UAE",
    "scope": "Subcontractor Vs Contractor – Delay Responsibility"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Delay Expert",
    "project": "Hospital Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Delay Responsibility, EOT"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Delay Expert",
    "project": "Urban Rail Infrastructure",
    "location": "UAE",
    "scope": "Contractor Vs Subcontractor – Delay Responsibility"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Delay Expert",
    "project": "Major Airport Infrastructure",
    "location": "Qatar",
    "scope": "Contractor Vs Subcontractor – Delay Responsibility, EOT"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Gas Processing Plant",
    "location": "Qatar",
    "scope": "Contractor Vs Subcontractor – Delay Analysis, EOT"
  },
  {
    "forumClass": "forum-expert",
    "forum": "Expert Determination",
    "role": "Assistant Delay Expert",
    "project": "Phosphate Processing Plant",
    "location": "Morocco",
    "scope": "Employer Vs Contractor – Delay Analysis, EOT"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Waste To Energy Plant",
    "location": "Finland",
    "scope": "Employer Vs Contractor – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Sewerage Treatment Plant",
    "location": "Qatar",
    "scope": "Joint Venture Dispute – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Major Airport Infrastructure",
    "location": "Qatar",
    "scope": "Subcontractor Vs Contractor – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Major Airport Infrastructure",
    "location": "Qatar",
    "scope": "Contractor Vs Employer – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Major Rail Infrastructure",
    "location": "Qatar",
    "scope": "Consultant Vs Contractor – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Highway Infrastructure",
    "location": "Kazakhstan",
    "scope": "Employer Vs Contractor – Delay Analysis, EOT"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Sports Stadium Development",
    "location": "Qatar",
    "scope": "Contractor Vs Subcontractor – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "High-Rise Residential Tower",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "High-Rise Residential Tower",
    "location": "UAE",
    "scope": "Contractor Vs Subcontractor – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Luxury Hotel Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Delay Analysis"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Assistant Delay Expert",
    "project": "Mixed-Use Development",
    "location": "UAE",
    "scope": "Employer Vs Contractor – Delay Analysis"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Assistant Delay Expert",
    "project": "Oil Processing Facility",
    "location": "Iraq",
    "scope": "Contractor Vs Employer – Delay Analysis, EOT"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Assistant Delay Expert",
    "project": "Gas Pipeline Infrastructure",
    "location": "Turkey",
    "scope": "Independent Opinion On Delay Claims"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Technical Expert",
    "project": "Major Airport Infrastructure",
    "location": "UAE",
    "scope": "Claimant - Technical Expert Witness"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Technical Expert",
    "project": "LNG Liquid Containment Tank",
    "location": "Australia",
    "scope": "Technical Expert Witness - Structural Post-Tensioning Issues"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Technical Expert",
    "project": "Bahrain Bay Infrastructure",
    "location": "Bahrain",
    "scope": "Technical Expert Witness - Below Ground Technical Failures"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Technical Expert",
    "project": "Six Tower Blocks",
    "location": "UAE",
    "scope": "Technical Expert Witness"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Technical Expert",
    "project": "Qatar World Cup Infrastructure",
    "location": "Qatar",
    "scope": "Technical Expert Witness"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Technical Expert",
    "project": "Qatar World Cup Highways",
    "location": "Qatar",
    "scope": "Technical Expert Witness"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Technical Expert",
    "project": "Qatar World Cup Infrastructure",
    "location": "Qatar",
    "scope": "Technical Expert Witness"
  },
  {
    "forumClass": "forum-arbitration",
    "forum": "Arbitration",
    "role": "Technical Expert",
    "project": "Qatar World Cup Highways",
    "location": "Qatar",
    "scope": "Technical Expert Witness"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Technical Expert",
    "project": "Energy Infrastructure",
    "location": "Sweden",
    "scope": "Technical Expert Witness - Technical Failures, Claims Strategy"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Technical Expert",
    "project": "Engineering Consultancy Support",
    "location": "UAE",
    "scope": "Provided Ad Hoc Expert Advice"
  },
  {
    "forumClass": "forum-advisory",
    "forum": "Advisory",
    "role": "Technical Expert",
    "project": "Commecial Consultancy Support",
    "location": "UAE",
    "scope": "Provided Ad Hoc Expert Advice"
  }
];

export const advisory: Commission[] = [
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Major Rail Infrastructure",
    "location": "Saudi Arabia",
    "scope": "Employer Vs Contractor – Variations, Valuation, Change Control, Final Account"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Highway Infrastructure Programme",
    "location": "Qatar",
    "scope": "Employer Vs Contractor – Claims Backlog, Determinations, Dispute Mitigation"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Residential Housing Development",
    "location": "UAE",
    "scope": "Contractor - Claims, Valuation, Subcontract Management, Change Control"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Prison",
    "location": "United Kingdom",
    "scope": "Contractor - Valuation, Variations, Contract Administration"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Commercial And Retail Developments",
    "location": "United Kingdom",
    "scope": "Contractor - Measurement, Subcontract Management, Payments"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "Golf Course Redevelopment",
    "location": "Denmark",
    "scope": "Contractor - Procurement & Contract Administration"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Residential Development",
    "location": "United Kingdom",
    "scope": "Subcontractor - Claim, Valuation, Cost Control, Final Account"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Commercial Development",
    "location": "United Kingdom",
    "scope": "Subcontractor - Procurement, Contract Administration, Payment, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Urban Regeneration Scheme",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Procurement, Valuation, Claims, Adjudication"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Hospital Development",
    "location": "United Kingdom",
    "scope": "Contractor - Lifecycle Management"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Movie Studio",
    "location": "United Kingdom",
    "scope": "Subcontractor - Project Recovery, Claim, Change, Contra Charges, Final Account"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Urban Regeneration Scheme",
    "location": "United Kingdom",
    "scope": "Developer - Procurement, Commercial Management, Contract Administration"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Retail Redevelopment",
    "location": "United Kingdom",
    "scope": "Contractor - Valuation, Change Control, Acceleration"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Luxury Hotel Development",
    "location": "United Kingdom",
    "scope": "Contractor - Lifecycle Management, Procurement, Dispute Resolution"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Student Accommodation",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Procurement, Valuation, Claims, Adjudication"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Museum Fit-Out",
    "location": "United Kingdom",
    "scope": "Contractor - Tendering, Procurement"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Commercial Office Fit-Out",
    "location": "United Kingdom",
    "scope": "Contractor - Lifecycle Management, Procurement, Reporting, Final Account"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Mixed-Use Development",
    "location": "United Kingdom",
    "scope": "Employer Vs Contractor – Valuation, Change Control, Claims, Dispute Resolution"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "School",
    "location": "United Kingdom",
    "scope": "Contractor - Lifecycle Management, Valuation, Claims, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Civic Infrastructure",
    "location": "United Kingdom",
    "scope": "Contractor - Final Account, Subcontractor Accounts, Agreement"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Community Hall",
    "location": "United Kingdom",
    "scope": "Contractor - Final Account, Subcontractor Accounts, Agreement"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Power Plant",
    "location": "South Africa",
    "scope": "Employer Vs Contractor – Adjudication Support, Compensation Events"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Commercial Office",
    "location": "United Kingdom",
    "scope": "Contractor - Procurement, Subcontract Management"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Rail Infrastructure",
    "location": "United Kingdom",
    "scope": "Contractor - Procurement, Subcontract Management, Final Account"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Light Rail Infrastructure",
    "location": "Denmark",
    "scope": "Contractor - Supplier Management, Account Control"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Shopping Centre",
    "location": "United Kingdom",
    "scope": "Contractor - Subcontract Accounts, Management"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "School Development",
    "location": "United Kingdom",
    "scope": "Contractor - Final Account, Procurement"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Highway Infrastructure",
    "location": "United Kingdom",
    "scope": "Contractor - Contract Administration"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Motorway Infrastructure",
    "location": "United Kingdom",
    "scope": "Contractor - Contract Administration"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Commercial Management",
    "project": "Commercial Office Fit-Out",
    "location": "United Kingdom",
    "scope": "Contractor - Contract Administration"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Major Airport Fit-Out",
    "location": "Qatar",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Airport Terminal Infrastructure",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Airport Infrastructure",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Hospital Development",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, EOT"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Residential And Commercial Tower",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Residential Tower Development",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Residential Tower Development",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Residential Tower Development",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Luxury Hotel Refurbishment",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, EOT"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Airport Facility Development",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, EOT"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Rail Infrastructure Project",
    "location": "United Kingdom",
    "scope": "Contractor - Planning, Programming, EOT"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Mixed-Use Development",
    "location": "UAE",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Education Facility Redevelopment",
    "location": "United Kingdom",
    "scope": "Contractor - Planning, Programming, EOT"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Transport Terminal Refurbishment",
    "location": "United Kingdom",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Commercial Office Fit-Out",
    "location": "United Kingdom",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Data Centre Development",
    "location": "United Kingdom",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Government Office Development",
    "location": "United Kingdom",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Planning Manager",
    "project": "Hospital Development",
    "location": "United Kingdom",
    "scope": "Contractor - Planning, Programming, Reporting"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "International Airport",
    "location": "Doha",
    "scope": "Employer Vs Contractor"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "Rail Metro",
    "location": "Qatar",
    "scope": "Employer Vs Contractor"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "Highway Infrastructure",
    "location": "Qatar",
    "scope": "Employer Vs Contractor"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "LNG Terminal",
    "location": "Australia",
    "scope": "Technical Project & Claims Manager"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "LNG Terminal",
    "location": "United Kingdom",
    "scope": "Owner’s Project & Contracts Manager & Procurement"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "LNG Process And Infrastructure",
    "location": "Qatar",
    "scope": "Owner’s Project & Contracts Manager"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "New Build School",
    "location": "United Kingdom",
    "scope": "Owner’s Project & Contracts Manager"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "New Build School",
    "location": "United Kingdom",
    "scope": "Owner’s Project & Contracts Manager"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "Pharmaceutical Factory",
    "location": "United Kingdom",
    "scope": "Owner’s Project & Contracts Manager"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "Steel Rolling Mill",
    "location": "United Kingdom",
    "scope": "Owner’s Project & Contracts Manager"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "Highway Infrastructure",
    "location": "United Kingdom",
    "scope": "Owner’s Project & Contracts Manager"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Project Management",
    "project": "120mw Power Station",
    "location": "United Kingdom",
    "scope": "Owner's Project Manager"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Landmark Large-Scale Financial District",
    "location": "United Kingdom",
    "scope": "Owner’s Project Co-Ordinator"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Island Marine Jetty",
    "location": "Bahamas",
    "scope": "Engineer"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Supreme Court Building",
    "location": "Bahamas",
    "scope": "Engineer"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Major Offshore Oilfield",
    "location": "Qatar",
    "scope": "Engineer"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Marine Infrastructure",
    "location": "Worldwide",
    "scope": "Engineer"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Port Infrastructure",
    "location": "Worldwide",
    "scope": "Engineer"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Airport Infrastructure",
    "location": "Caribbean",
    "scope": "Engineer"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Major Post Tensioned Bridge",
    "location": "Worldwide",
    "scope": "Engineer"
  },
  {
    "forumClass": "forum-project",
    "forum": "Project",
    "role": "Engineer",
    "project": "Hydroelectric Power Dam",
    "location": "Sri Lanka",
    "scope": "Engineer"
  }
];

export const commissions: Record<ServiceKey, Commission[]> = {
  disputes,
  expert,
  advisory,
};
