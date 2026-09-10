import { Reveal, Stagger, Item } from "./Motion";
import { method } from "@/lib/method";

/**
 * Reassurance. No competitor in the twelve-firm study publishes a working
 * method, which makes this the one differentiator available truthfully and
 * immediately — and it is what answers "why should I trust how they work".

 */
export default function MethodSection() {
  return (
    <section className="method-section" id="method">
      <Reveal>
        <p className="section-eyebrow">Method</p>
        <h2 className="section-title">{method.heading}</h2>
        <p className="method-intro">{method.intro}</p>
      </Reveal>

      <Stagger className="method-grid">
        {method.points.map((point) => (
          <Item className="method-point" key={point.title}>
            <h3 className="method-point-title">{point.title}</h3>
            <p className="method-point-body">{point.body}</p>
          </Item>
        ))}
      </Stagger>

    </section>
  );
}
