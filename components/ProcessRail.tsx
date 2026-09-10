import { Reveal, Stagger, Item } from "./Motion";
import { processSteps } from "@/lib/process";

/**
 * The rail beside the enquiry form: what happens after someone sends it.
 *
 * It exists because the three things that stop a stranger instructing a quantum
 * practice — can they act, does finding out cost me anything, when do I hear —
 * are answered nowhere on any competitor site. Each step therefore carries a
 * commitment: a timescale, a price, or a named deliverable. A step that said
 * only "we discuss your requirements" should be deleted rather than kept.
 *
 * The commitment tags are the most valuable content here, so they are set as
 * bordered chips in the same language as the matter cards' forum badges rather
 * than as another line of running text.
 *
 * Wording is constrained by the RICS expert witness standard; see lib/process.ts
 * for the provisions and why the fee sits at step three.
 */
export default function ProcessRail() {
  return (
    <div className="process-rail">
      <Reveal>
        <p className="section-eyebrow">What happens next</p>
      </Reveal>

      <Stagger as="ol" className="process-list">
        {processSteps.map((step) => (
          <Item as="li" className="process-step" key={step.number}>
            <span className="process-node" aria-hidden="true" />
            <p className="process-number">{step.number}</p>
            <h3 className="process-title">{step.title}</h3>
            {step.tag ? <p className="process-tag">{step.tag}</p> : null}
            <p className="process-body">{step.body}</p>
          </Item>
        ))}
      </Stagger>
    </div>
  );
}
