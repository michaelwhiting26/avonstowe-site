import { Reveal, Stagger, Item } from "./Motion";
import { scope } from "@/lib/scope";

/**
 * Scope — answers "what would you actually do for me?" between the discipline
 * claim and the matters that prove it.
 *
 * Two panels, not two services: the eyebrows are numbered because the split is
 * a genuine sequence (a matter passes through stage one before stage two), which
 * is the only thing that earns numbered markers here.
 */
export default function ScopeSection() {
  return (
    <section className="scope-section" id="scope">
      <Reveal>
        <p className="section-eyebrow">Scope</p>
        <h2 className="section-title">Where the work arrives</h2>
      </Reveal>

      <Stagger className="scope-grid">
        {scope.map((stage) => (
          <Item className="scope-panel" key={stage.title}>
            <p className="scope-panel-eyebrow">{stage.eyebrow}</p>
            <h3 className="scope-panel-title">{stage.title}</h3>
            <p className="scope-panel-body">{stage.body}</p>
            <ul className="scope-list">
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
