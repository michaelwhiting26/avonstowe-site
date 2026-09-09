import { Reveal } from "./Motion";

/**
 * One discipline — the section that answers "what does that actually mean?"
 * straight after the hero's claim. Copy approved verbatim; see
 * docs/site-copy-forensic-quantum.md.
 *
 * Three paragraphs, one reading column at every width. They are prose, not
 * three cards: turning them into a grid because there happen to be three of
 * them would break the argument into fragments.
 */
export default function DisciplineSection() {
  return (
    <section className="discipline-section" id="discipline">
      <Reveal>
        <p className="section-eyebrow">One discipline</p>
        <div className="discipline-body">
          <p>Avonstowe is an independent quantum practice.</p>
          <p>
            That means valuing the change, testing what the other side has claimed for it, and
            building the analysis to a standard that survives a joint statement and a hearing. It is
            the work that sits underneath an expert report, a claim, a defence or a settlement — and
            it is all Avonstowe does.
          </p>
          <p>
            Where a matter needs delay or technical evidence alongside quantum, Avonstowe works with
            practitioners it can introduce.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
