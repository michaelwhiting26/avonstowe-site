import { site, hero, services, enquiries } from "@/lib/site";
import { matters, recovery } from "@/lib/matters";
import { person } from "@/lib/person";

/**
 * One page, read top to bottom on a phone:
 * what the practice is -> what it does -> matters -> person -> contact.
 */
export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.titleLead} <span>{hero.titleRest}</span>
        </h1>
        <p className="lede">{hero.sub}</p>
        <div className="actions">
          <a className="btn btn-primary" href="#contact">
            Discuss a matter
          </a>
          <a className="btn" href="#michael">
            Who does the work
          </a>
        </div>
      </section>

      <section id="work">
        <p className="eyebrow">What we do</p>
        <ul className="cards">
          {services.map((v) => (
            <li key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="matters">
        <p className="eyebrow">Selected matters</p>
        <h2>Quantum analysis</h2>
        <ul className="matters">
          {matters.map((m) => (
            <li key={m.project}>
              <h3>
                {m.project}{" "}
                <span>
                  ({m.forum}, {m.region})
                </span>
              </h3>
              <p className="matter-parties">{m.parties}</p>
              <p>{m.heads.join(" · ")}</p>
            </li>
          ))}
        </ul>
        <h2 className="second">Claims and commercial recovery</h2>
        <ul className="matters">
          {recovery.map((r) => (
            <li key={r.project}>
              <h3>
                {r.project} <span>({r.place})</span>
              </h3>
              <p className="matter-parties">{r.party}</p>
              <p>{r.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="michael">
        <p className="eyebrow">Who does the work</p>
        <h2>{person.name}</h2>
        <p className="role">{person.role}</p>
        <p>{person.bio}</p>
        <div className="facts">
          <div>
            <h3>Qualifications</h3>
            <ul>
              {person.credentials.map((c) => (
                <li key={c.text}>
                  {c.text}
                  {c.inProgress && <span className="muted"> (in progress)</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Career</h3>
            <ul>
              {person.career.map((e) => (
                <li key={e.organisation}>
                  {e.organisation} <span className="muted">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Enquiries</p>
        <h2>Discuss a matter</h2>
        <p>{enquiries}</p>
        <a className="btn btn-primary" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <p className="note">
          Please do not send confidential or privileged material until a conflict check is complete.
        </p>
      </section>
    </>
  );
}
