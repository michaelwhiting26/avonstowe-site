import { Reveal } from "./Motion";
import { matters } from "@/lib/matters";

/**
 * Selected matters.
 *
 * A horizontal scroll-snap rail. It uses native overflow scrolling rather than a
 * carousel library or a scroll-jacked slider: horizontal overflow on a child
 * never blocks the page's vertical scroll, so a thumb dragging down the page
 * still moves down the page. There is no JavaScript in this section at all —
 * snapping, momentum, keyboard scrolling and reduced-motion behaviour are all
 * the browser's own.
 *
 * The rail deliberately shows the leading edge of the next card at every width;
 * that overhang is the only affordance needed to say "there is more".
 *
 * Each card carried a summary sentence — "Proceedings concerning prolongation,
 * disruption, variations…" — which listed the same heads that are tagged
 * directly beneath it. Every card said the same thing twice, passively. The
 * sentence is gone; the tags say it once.
 */
export default function MattersSection() {
  return (
    <section className="matters-section" id="matters">
      <Reveal className="matters-head">
        <p className="section-eyebrow">Selected matters</p>
        <h2 className="section-title">Quantum in proceedings</h2>
        <p className="matters-lead">
          Anonymised to project type, forum and the heads in issue. Scroll for more.
        </p>
      </Reveal>

      <ol className="matters-rail" tabIndex={0} aria-label="Selected matters, scrollable">
        {matters.map((matter, i) => (
          <li className="matter-card" key={matter.project}>
            <div className="matter-card-top">
              <span className={`forum-badge forum-${matter.forumKey}`}>{matter.forum}</span>
              <span className="matter-index">{String(i + 1).padStart(2, "0")}</span>
            </div>

            <h3 className="matter-project">{matter.project}</h3>
            <p className="matter-meta">
              {matter.region} <span aria-hidden="true">·</span> {matter.parties}
            </p>
            {matter.contribution ? (
              <p className="matter-contribution">{matter.contribution}</p>
            ) : null}

            <ul className="matter-heads matter-heads-grown">
              {matter.heads.map((head) => (
                <li key={head}>{head}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
