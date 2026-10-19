import { site, hero, experience } from "@/lib/site";
import { person } from "@/lib/person";
import { Reveal, Stagger, Item } from "@/components/Motion";
import MagneticButton from "@/components/MagneticButton";
import ContactForm from "@/components/ContactForm";

/**
 * One page, read top to bottom on a phone:
 * what the practice is and where -> experience -> person -> contact.
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

      <section id="quantum">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2>Quantum analysis</h2>
          <p>{experience.quantum}</p>
        </Reveal>
      </section>

      <section id="recovery">
        <Reveal>
          <h2>Claims and commercial recovery</h2>
          <p>{experience.recovery}</p>
        </Reveal>
      </section>

      <section id="commercial">
        <Reveal>
          <h2>Commercial management</h2>
          <p>{experience.commercial}</p>
        </Reveal>
      </section>

      <section id="michael">
        <Reveal>
          <p className="eyebrow">About Michael</p>
          <h2>{person.name}</h2>
          <p className="role">{person.role}</p>
          {person.bio.split("\n\n").map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </Reveal>
        <div className="facts">
          <div>
            <h3>Qualifications</h3>
            <Stagger as="ul">
              {person.credentials.map((c) => (
                <Item as="li" key={c.text}>
                  {c.text}
                  {c.inProgress && <span className="muted"> ({c.expected ?? "in progress"})</span>}
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
          <ContactForm />
          <p className="cf-or">Or contact Michael directly:</p>
          <div className="actions">
            <MagneticButton href={`mailto:${site.email}`} className="btn-primary">
              {site.email}
            </MagneticButton>
            <MagneticButton href={site.whatsappUrl} className="btn-ghost">
              WhatsApp {site.whatsapp}
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
