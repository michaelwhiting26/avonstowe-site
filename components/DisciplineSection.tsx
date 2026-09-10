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
          {/* The hero already states the discipline, the sector and the standing. This
              section starts where the hero stops: the standard the work is held to. */}
          <p>
            The analysis is proportionate to what is in issue, delivered on the date agreed, and set
            out so a tribunal can follow it.
          </p>
          <p>
            The opinion is reasoned, and it covers what the evidence shows whether or not that
            favours the party instructing.
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
