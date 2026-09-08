/**
 * Method.
 *
 * CONTENT RULE: every claim in this file must describe a standard Avonstowe
 * actually applies, and must be checkable by a reader of the work. Nothing here
 * may be aspirational. These four points are drawn from the firm's written
 * drafting standard; if the standard changes, this file changes with it.
 */

export const method = {
  heading: "How the work is done",
  intro:
    "Quantum evidence is only as good as the checking behind it. Four standards apply to every " +
    "assessment Avonstowe produces, and to every report it reviews for others.",
  points: [
    {
      title: "Every figure traced to its source",
      body:
        "Each number in an assessment carries a reference to the document it came from — an invoice, " +
        "a ledger entry, a payment notice, a timesheet. A figure that cannot be traced is identified " +
        "as such rather than carried forward.",
    },
    {
      title: "Absence tested before it is asserted",
      body:
        "A finding that supporting material is missing is made only once the relevant records have " +
        "been exhausted. Not found in the first place searched is not the same as does not exist, and " +
        "the distinction decides claims.",
    },
    {
      title: "One structure, every head of claim",
      body:
        "Issue, amount claimed, basis of claim, relevant principles, the parties' positions, evidence " +
        "reviewed, analysis, assessment. The same headings in the same order, so a reader can navigate " +
        "the work and compare one head against another.",
    },
    {
      title: "Opinion separated from fact",
      body:
        "Benchmarks are named. Percentages carry their origin and their limitations. Nothing is " +
        "described as excessive or unreasonable without a stated comparator, and no view is expressed " +
        "on matters outside the writer's expertise.",
    },
  ],
} as const;
