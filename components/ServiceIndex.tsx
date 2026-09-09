import { Reveal, Stagger, Item } from "./Motion";
import { serviceIndex } from "@/lib/serviceIndex";

/**
 * Service index — three practice areas, each a flat lifecycle-ordered list of
 * services. Sits directly beneath the hero, reusing the .intro-band shell so it
 * keeps the same rhythm as the rest of the page.
 */
export default function ServiceIndex() {
  return (
    <section className="intro-band service-index" id="services-index">
      <Reveal className="service-index-head">
        <p className="intro-label">What We Do</p>
        <h2 className="intro-heading">What you can instruct us to do.</h2>
        <p className="intro-body">
          Three practice areas. Within each, the work runs in the order it arises — Project
          Advisory across the life of the project, Claims &amp; Disputes across the life of a
          dispute, and Expert Witness across the life of an appointment.
        </p>
      </Reveal>

      <div className="service-index-grid">
        {serviceIndex.map((column) => (
          <Stagger className="service-index-col" key={column.key}>
            <Item className="service-index-colhead">
              <h3 className="service-index-title">{column.title}</h3>
              <p className="service-index-lead">{column.lead}</p>
            </Item>

            {column.services.map((service, i) => (
              <Item className="service-line" key={service.name}>
                <p className="service-line-num">{String(i + 1).padStart(2, "0")}</p>
                <h4 className="service-line-title">{service.name}</h4>
                <p className="service-line-desc">{service.desc}</p>
              </Item>
            ))}
          </Stagger>
        ))}
      </div>
    </section>
  );
}
