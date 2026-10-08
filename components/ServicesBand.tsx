import { Reveal, Stagger, Item } from "./Motion";
import { intro, services } from "@/lib/site";

// One icon per service, in the original line-icon style.
const icons = [
  <svg viewBox="0 0 16 16" aria-hidden="true" key="quantum">
    <path d="M8 2.2l4 1.6v3.2c0 2.9-1.7 5-4 6.8-2.3-1.8-4-3.9-4-6.8V3.8L8 2.2z"></path>
  </svg>,
  <svg viewBox="0 0 16 16" aria-hidden="true" key="claims">
    <circle cx="8" cy="8" r="5.5"></circle>
    <path d="M6.2 8.1l1.3 1.4 2.6-3"></path>
  </svg>,
  <svg viewBox="0 0 16 16" aria-hidden="true" key="qs">
    <path d="M3 13V6.5M8 13V3M13 13V8.5"></path>
  </svg>,
];

export default function ServicesBand() {
  return (
    <section className="intro-band" id="work">
      <div className="intro-grid">
        <Reveal>
          <p className="intro-label">{intro.label}</p>
          <h2 className="intro-heading">{intro.heading}</h2>
          <p className="intro-body">{intro.body}</p>
        </Reveal>
        <Stagger className="differentiators">
          {services.map((service, i) => (
            <Item className="diff-item" key={service.title}>
              <div className="diff-icon">{icons[i]}</div>
              <div>
                <div className="diff-title">{service.title}</div>
                <div className="diff-desc">{service.text}</div>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
