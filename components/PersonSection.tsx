import { Reveal, Stagger, Item } from "./Motion";
import { person } from "@/lib/person";

/**
 * The person link in the credibility chain — the one rev1 was judged to break,
 * and the one absent from this lineage entirely until now.
 *
 * The career chain carries dates rather than adjectives so the reader computes
 * seniority instead of being told it.
 */
export default function PersonSection() {
  return (
    <section className="person-section" id="person">
      <Reveal>
        <p className="section-eyebrow">Who does the work</p>
        {/* Name and capabilities on the left, biography in the column beside
            them — the right-hand half was empty and the bio was running to an
            unreadable measure across the full width. Stacks on a phone in the
            same reading order. */}
        <div className="person-intro">
          <div>
            <h2 className="section-title">
              {person.name}
              {person.postNominals.length > 0 && (
                <span className="person-postnominals"> {person.postNominals.join(" ")}</span>
              )}
            </h2>
            <p className="person-role">{person.role}</p>
          </div>
          <p className="person-bio">{person.bio}</p>
        </div>
      </Reveal>

      <div className="person-grid">
        <Stagger className="person-block">
          <Item as="h3" className="person-block-title">
            Qualifications
          </Item>
          <Item as="ul" className="person-list">
            {person.credentials.map((c) => (
              <li key={c.text}>
                {c.text}
                {c.inProgress && <span className="person-note"> — in progress</span>}
              </li>
            ))}
          </Item>
        </Stagger>

        <Stagger className="person-block">
          <Item as="h3" className="person-block-title">
            Career
          </Item>
          <Item as="ul" className="person-list person-career">
            {person.career.map((entry) => (
              <li key={entry.organisation}>
                <span className="person-org">{entry.organisation}</span>
                <span className="person-period">{entry.period}</span>
              </li>
            ))}
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
