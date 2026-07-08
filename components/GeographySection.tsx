import { Reveal, Stagger, Item } from "./Motion";

const headingStyle = {
  fontFamily: "'Cormorant Garamond',Georgia,serif",
  // Match the elevated .section-title scale/tracking for cross-section consistency.
  fontSize: "clamp(2.6rem, 3.4vw, 3.4rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.015em",
  fontWeight: 300,
  color: "#fff",
  marginTop: "0.5rem",
} as const;

const leadStyle = {
  fontSize: "14px",
  color: "#8aaee8",
  lineHeight: 1.8,
  marginTop: "1rem",
  maxWidth: "800px",
} as const;

const regions = [
  { region: "Middle East", count: "UAE · Saudi Arabia · Qatar · Oman · Bahrain" },
  { region: "United Kingdom", count: "England · Scotland" },
  { region: "Europe", count: "Denmark · Germany · Sweden · Latvia · Finland" },
  {
    region: "International",
    count:
      "Australia · Canada · Russia · Morocco · Egypt · Israel · Turkey · Iraq · Nepal · Sri Lanka · Kazakhstan",
  },
];

export default function GeographySection() {
  return (
    <section className="geography-section" id="credentials">
      <Reveal>
        <p className="section-eyebrow">Geographic Reach</p>
        <h2 className="section-title" style={headingStyle}>
          International construction experience
        </h2>
        <p style={leadStyle}>
          Advising on major projects across civil and common law jurisdictions.
        </p>
      </Reveal>
      <Stagger className="geo-grid">
        {regions.map((r) => (
          <Item className="geo-item" key={r.region}>
            <div className="geo-region">{r.region}</div>
            <div className="geo-count">{r.count}</div>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
