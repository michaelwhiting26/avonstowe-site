import { processSteps } from "@/lib/process";

/**
 * The rail beside the enquiry form: what happens after someone sends it.
 *
 * It exists because the three things that stop a stranger emailing a quantum
 * practice — can they act, does finding out cost me anything, when do I hear —
 * are answered nowhere on any competitor site. Each step therefore carries a
 * commitment: a timescale, a price, or a named deliverable. A step that says
 * only "we discuss your requirements" should be deleted rather than kept.
 *
 * Wording is constrained by the RICS expert witness standard; see lib/process.ts
 * for the provisions and why the fee sits at step three.
 */
export default function ProcessRail() {
  return (
    <div className="process-rail">
      <p className="section-eyebrow">What happens next</p>
      <ol className="process-list">
        {processSteps.map((step) => (
          <li className="process-step" key={step.number}>
            <span className="process-node" aria-hidden="true" />
            <p className="process-number">{step.number}</p>
            <h3 className="process-title">{step.title}</h3>
            {step.tag ? <p className="process-tag">{step.tag}</p> : null}
            <p className="process-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
