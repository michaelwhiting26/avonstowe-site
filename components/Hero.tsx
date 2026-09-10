import { Stagger, Item } from "./Motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-rule"></div>
      <Stagger>
        <Item as="p" className="hero-eyebrow">
          Arbitration · Adjudication · Litigation
        </Item>
        <Item as="h1" className="hero-title">
          {/* The two spans render inline on mobile (<=768px); the original HTML kept a
              whitespace-collapsed space between them, which JSX would otherwise drop. */}
          <span className="hero-line hero-line-white">Forensic quantum analysis</span>{" "}
          <span className="hero-line hero-line-gold">for construction and engineering disputes</span>
        </Item>
        <Item as="p" className="hero-desc">
          Independent specialist practice. Instructed by parties, their legal advisers and
          appointed experts.
        </Item>
        <Item className="hero-actions">
          <MagneticButton href="#contact" className="btn-primary">
            Discuss a matter
          </MagneticButton>
          <MagneticButton href="#matters" className="btn-ghost">
            Selected matters
          </MagneticButton>
        </Item>
      </Stagger>
    </section>
  );
}
