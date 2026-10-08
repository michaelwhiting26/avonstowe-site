import { Reveal } from "./Motion";
import { matters, recovery } from "@/lib/matters";

/**
 * Selected matters, in two horizontal scroll-snap rails. Native overflow
 * scrolling, no JavaScript: horizontal overflow on a child never blocks the
 * page's vertical scroll.
 *
 * Forum and region sit in brackets after the project name, as on the CV.
 */
export default function MattersSection() {
  return (
    <section className="matters-section" id="matters">
      <Reveal className="matters-head">
        <p className="section-eyebrow">Selected matters</p>
        <h2 className="section-title">Quantum analysis</h2>
        <p className="matters-lead">
          Anonymised to project type, forum and the heads in issue. Scroll for more.
        </p>
      </Reveal>

      <ol className="matters-rail" tabIndex={0} aria-label="Quantum analysis matters, scrollable">
        {matters.map((matter, i) => (
          <li className="matter-card" key={matter.project}>
            <div className="matter-card-top">
              <span className="matter-index">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="matter-project">
              {matter.project}{" "}
              <span className="matter-bracket">
                ({matter.forum}, {matter.region})
              </span>
            </h3>
            <p className="matter-meta">{matter.parties}</p>
            <ul className="matter-heads matter-heads-grown">
              {matter.heads.map((head) => (
                <li key={head}>{head}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <Reveal className="matters-head matters-head-second">
        <h2 className="section-title">Claims and commercial recovery</h2>
      </Reveal>

      <ol className="matters-rail" tabIndex={0} aria-label="Commercial recovery matters, scrollable">
        {recovery.map((item, i) => (
          <li className="matter-card" key={item.project}>
            <div className="matter-card-top">
              <span className="matter-index">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="matter-project">
              {item.project} <span className="matter-bracket">({item.place})</span>
            </h3>
            <p className="matter-meta">{item.party}</p>
            <p className="matter-summary">{item.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
