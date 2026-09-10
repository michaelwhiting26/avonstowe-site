/**
 * What happens after an enquiry — the rail beside the contact form.
 *
 * CHECKED AGAINST THE STANDARDS. Every step here was written against RICS
 * `Surveyors acting as expert witnesses`, 5th edition (July 2026, effective
 * 30 November 2026), held at
 * "Z. AI READY FILES/RICS Expert Witness/". The constraints that shaped it:
 *
 *  - 3.2.1(1): instructions must be investigated and verified BEFORE they are
 *    accepted. So the conflict check is its own step, before anything else.
 *
 *  - 2.2(3): "regular reliance on the same instructing party for multiple
 *    instructions" is itself a potential conflict requiring disclosure. The
 *    conflict step is therefore a real check, not a formality.
 *
 *  - 3.3.1(1): "Members must only provide a fee estimate, if requested, once
 *    they have a good understanding of the case and the scope of their
 *    appointment within it." This is why the fee comes at step three and not
 *    step one, and why the papers are read before a number is given.
 *
 *  - 3.3.2(1)-(2): conditional, deferred, incentive and success-based fees are
 *    prohibited save in four narrow exceptions. NOTHING on this rail may imply
 *    that a fee turns on the outcome, or on the analysis being favourable.
 *
 *  - 3.2.1(3)(b): where any part of the work will be done by someone other than
 *    the member — or through AI tools — that must be confirmed in writing before
 *    instructions are accepted and identified in the finished report. Step four
 *    says so on the page rather than leaving it to the engagement letter.
 *
 * If any of those provisions change, change this file in the same edit.
 */

export type ProcessStep = {
  /** Displayed as the node label on the rail. */
  number: string;
  title: string;
  /** Timescale or price commitment, shown as a small tag. Optional. */
  tag?: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Make contact",
    body:
      "Send the issue, the forum and roughly what is in dispute. No documents at this stage — " +
      "enough to see what the matter is.",
  },
  {
    number: "02",
    title: "Conflict check and first view",
    tag: "Within 24 hours · No charge",
    body:
      "Avonstowe confirms whether it can act, and gives a first view: the heads of claim likely " +
      "to be in issue, and whether the quantum can be supported on what you have. If it cannot " +
      "act, or the analysis will not carry, you are told then rather than later.",
  },
  {
    number: "03",
    title: "The papers, then the proposal",
    tag: "Chargeable, agreed in advance",
    body:
      "A fee cannot honestly be quoted before the case is understood, so the papers are read " +
      "first. That review is chargeable at an hourly or day rate agreed before it starts. It " +
      "produces a written proposal: what would be analysed, what it produces, the fee and the " +
      "date. The fee never turns on the outcome.",
  },
  {
    number: "04",
    title: "Instruction",
    body:
      "Terms confirmed in writing, including anything to be done by another practitioner or by " +
      "analytical tools, which is identified in the finished work. The analysis then starts on " +
      "the date in the proposal.",
  },
];
