/**
 * Expert Support — forensic quantum analysts supplied to appointed experts,
 * law firms and consultancies.
 *
 * BOUNDARY RULE:
 * Nothing in this file may suggest that an Avonstowe analyst provides the
 * independent expert opinion. Where an expert is appointed, the opinion, the
 * report and the duty to the tribunal remain the appointed expert's. Avonstowe
 * supplies analytical capacity beneath that opinion. Keep this distinction
 * explicit in the copy — it is the difference between a defensible service and
 * one that undermines the expert's independence.
 */

export const expertSupport = {
  proposition:
    "Avonstowe provides forensic quantum analysts to appointed experts, law firms and consultancies on an assignment basis. Document review, quantum assessment, account reconstruction, quantum schedules, report drafting and model build.",

  intro:
    "Expert appointments rarely fail for want of expertise. They come under pressure when the volume of records outruns the time available to work through them — when a tribunal's timetable, a document production round and a rebuttal deadline arrive together. Avonstowe supplies the analytical capacity to absorb that load, working to the appointed expert's method and under their direction.",

  /** Who this page is written for. Used to frame the page, not as a list of clients. */
  audience: [
    "Party-appointed quantum experts",
    "Party-appointed delay experts",
    "International dispute consultancies",
    "Construction law firms",
    "Counsel requiring analytical support",
    "Expert teams needing surge capacity",
  ],

  /** The boundary, stated plainly on the page. */
  boundary: {
    heading: "Where the line sits",
    body:
      "The appointed expert's opinion is their own. Avonstowe analysts work to the expert's chosen methodology, under their direction and subject to their review — carrying out the analysis, building the schedules and drafting to their instruction. They do not form or express the independent opinion, do not sign the report, and are identified to the tribunal in whatever manner the expert and the instructing party consider appropriate.",
  },

  workstreams: [
    {
      title: "Records and document review",
      items: [
        "Structured review of large document populations",
        "Contemporaneous record analysis",
        "Chronology and data organisation",
        "Data-room and document-production support",
      ],
    },
    {
      title: "Quantum analysis",
      items: [
        "Account reconstruction",
        "Valuation and measurement",
        "Quantum assessment",
        "Variation and change analysis",
        "Prolongation",
        "Disruption and labour productivity analysis",
      ],
    },
    {
      title: "Output and deliverables",
      items: [
        "Quantum schedules",
        "Damages and quantum models",
        "Model build and audit",
        "Report drafting support",
        "Expert report appendices",
        "Hearing preparation support",
      ],
    },
  ],

  assignment: {
    heading: "Assignment model",
    body:
      "Support is scoped as an assignment rather than an open retainer. That may be a defined workstream, embedded analytical capacity for the life of a reference, or concentrated support through a specific phase — intensive document review, report preparation, rebuttal, or the run-up to a hearing.",
    modes: [
      "Defined workstreams",
      "Substantial arbitration assignments",
      "Embedded analytical capacity",
      "Report preparation",
      "Rebuttal",
      "Intensive document review",
      "Hearing preparation",
    ],
    /** Illustrative only — never expressed as a guarantee. */
    durationNote:
      "Substantial arbitration assignments commonly require concentrated analyst support over periods of approximately 60–120 days, although engagement length depends on scope, procedural timetable and document volume.",
  },

  engagement: {
    heading: "Engagement basis",
    body:
      "Assignments are agreed on a defined scope with agreed availability for the period required. Support is provided remotely for international references, with working hours aligned to the instructing team's time zone where a procedural timetable demands it. Conflict checks are completed before any assignment is accepted.",
    /**
     * NOTE: Rates are deliberately absent. They belong in the private capability
     * note and proposal, not on the public site. Do not add a day rate here.
     */
    points: [
      "Assignment-based, not retainer-based",
      "Defined scope agreed in advance",
      "Agreed availability for the assignment period",
      "Remote support for international references",
      "Conflict checks before acceptance",
    ],
  },

  /**
   * SOFTWARE — DELIBERATELY OMITTED.
   *
   * The source material evidences no specific software capability. Excel, Power BI,
   * Primavera P6, Asta Powerproject and named document-review platforms were all
   * candidates, and all were omitted because none is evidenced. Claiming a tool that
   * is not used is exactly the kind of unverifiable statement this site exists to
   * avoid — and it is trivially exposed in a first conversation.
   *
   * TODO: Confirm which tools are genuinely used to a professional standard, then
   * populate `software` below and render it on the page. Until then it stays empty
   * and the section does not render.
   */
  software: [] as string[],
};
