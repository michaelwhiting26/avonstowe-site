import { site, hero } from "@/lib/site";
import { matters, recovery } from "@/lib/matters";
import { person } from "@/lib/person";
import { Reveal, Stagger, Item } from "@/components/Motion";
import MagneticButton from "@/components/MagneticButton";

/**
 * One page, read top to bottom on a phone:
 * what the practice is and where -> matters -> person -> contact.
 * Motion (reveal on scroll, magnetic buttons) is carried from the first build.
 */
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-rule"></div>
        {/* revealOnLoad: above the fold, so it animates from page load rather
            than waiting on an intersection callback. */}
        <Stagger revealOnLoad>
          <Item as="h1" className="statement">
            {hero.statement}
          </Item>
          <Item className="actions">
            <MagneticButton href="#contact" className="btn-primary">
              Discuss a matter
            </MagneticButton>
            <MagneticButton href="#michael" className="btn-ghost">
              About Michael
            </MagneticButton>
          </Item>
        </Stagger>
      </section>

      <section id="matters">
        <Reveal>
          <p className="eyebrow">Selected matters</p>
          <h2>Quantum analysis</h2>
        </Reveal>
        <Stagger as="ul" className="matters">
          {matters.map((m) => (
            <Item as="li" key={m.project}>
              <h3>
                {m.project}{" "}
                <span>
                  ({m.forum}, {m.region})
                </span>
              </h3>
              <p className="matter-parties">{m.parties}</p>
              <p>{m.heads.join(" · ")}</p>
            </Item>
          ))}
        </Stagger>
        <Reveal as="h2" className="second">
          Claims and commercial recovery
        </Reveal>
        <Stagger as="ul" className="matters">
          {recovery.map((r) => (
            <Item as="li" key={r.project}>
              <h3>
                {r.project} <span>({r.place})</span>
              </h3>
              <p className="matter-parties">{r.party}</p>
              <p>{r.summary}</p>
            </Item>
          ))}
        </Stagger>
      </section>

      <section id="michael">
        <Reveal>
          <p className="eyebrow">About Michael</p>
          <h2>{person.name}</h2>
          <p className="role">{person.role}</p>
          <p>{person.bio}</p>
        </Reveal>
        <div className="facts">
          <div>
            <h3>Qualifications</h3>
            <Stagger as="ul">
              {person.credentials.map((c) => (
                <Item as="li" key={c.text}>
                  {c.text}
                  {c.inProgress && <span className="muted"> (in progress)</span>}
                </Item>
              ))}
            </Stagger>
          </div>
          <div>
            <h3>Career</h3>
            <Stagger as="ul">
              {person.career.map((e) => (
                <Item as="li" key={e.organisation}>
                  {e.organisation} <span className="muted">{e.period}</span>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <Reveal>
          <h2>Contact Michael</h2>
          <div className="actions">
            <MagneticButton href={`mailto:${site.email}`} className="btn-primary">
              {site.email}
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
