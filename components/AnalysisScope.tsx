import { Reveal, Stagger, Item } from "./Motion";
import { analysisScope } from "@/lib/analysisScope";

/**
 * What the analysis covers.
 *
 * One column on a phone, two from 768px. DOM order is the reading order at every
 * width — the grid never reorders anything, so the narrow layout is the source
 * of truth rather than a fallback.
 */
export default function AnalysisScope() {
  return (
    <section className="scope-section" id="analysis">
      <Reveal>
        <p className="section-eyebrow">The analysis</p>
        <h2 className="section-title">What the analysis covers</h2>
      </Reveal>
      <Stagger className="scope-grid">
        {analysisScope.map((item) => (
          <Item className="scope-item" key={item.title}>
            <h3 className="scope-item-title">{item.title}</h3>
            <p className="scope-item-body">{item.body}</p>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
