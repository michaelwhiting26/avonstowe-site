import { Stagger, Item } from "./Motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-rule"></div>
      <Stagger>
        <Item as="p" className="hero-eyebrow">
          United Kingdom · Gulf · North Africa
        </Item>
        <Item as="h1" className="hero-title">
          {/* The two spans render inline on mobile (<=768px); the original HTML kept a
              whitespace-collapsed space between them, which JSX would otherwise drop. */}
          <span className="hero-line hero-line-white">Forensic quantum analysis</span>{" "}
          <span className="hero-line hero-line-gold">for construction and engineering disputes</span>
        </Item>
        <Item as="p" className="hero-desc">
          Avonstowe quantifies loss on construction and engineering disputes, and builds the
          analysis that appointed experts, legal teams and parties rely on.
        </Item>
        <Item className="hero-actions">
          <MagneticButton href="#contact" className="btn-primary">
            Discuss a matter
          </MagneticButton>
          <MagneticButton href="#analysis" className="btn-ghost">
            The analysis
          </MagneticButton>
        </Item>
      </Stagger>
    </section>
  );
}
