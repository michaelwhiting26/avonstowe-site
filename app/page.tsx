import { site, hero, services, enquiries } from "@/lib/site";
import { matters, recovery } from "@/lib/matters";
import { person } from "@/lib/person";
import { Reveal, Stagger, Item } from "@/components/Motion";
import MagneticButton from "@/components/MagneticButton";

/**
 * One page, read top to bottom on a phone:
 * what the practice is -> what it does -> matters -> person -> contact.
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
          <Item as="p" className="eyebrow">
            {hero.eyebrow}
          </Item>
          <Item as="h1">
            {hero.titleLead} <span>{hero.titleRest}</span>
          </Item>
          <Item as="p" className="lede">
            {hero.sub}
          </Item>
          <Item className="actions">
            <MagneticButton href="#contact" className="btn-primary">
              Discuss a matter
            </MagneticButton>
            <MagneticButton href="#michael" className="btn-ghost">
              Who does the work
            </MagneticButton>
          </Item>
        </Stagger>
      </section>

      <section id="work">
        <Reveal as="p" className="eyebrow">
          What we do
        </Reveal>
        <Stagger as="ul" className="cards">
          {services.map((v) => (
            <Item as="li" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </Item>
          ))}
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
          <p className="eyebrow">Who does the work</p>
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
          <p className="eyebrow">Enquiries</p>
          <h2>Discuss a matter</h2>
          <p>{enquiries}</p>
          <div className="actions">
            <MagneticButton href={`mailto:${site.email}`} className="btn-primary">
              {site.email}
            </MagneticButton>
          </div>
          <p className="note">
            Please do not send confidential or privileged material until a conflict check is complete.
          </p>
        </Reveal>
      </section>
    </>
  );
}
