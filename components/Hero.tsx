import { Stagger, Item } from "./Motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-rule"></div>
      <Stagger>
        <Item as="p" className="hero-eyebrow">
          Construction &amp; Engineering Disputes · Expert Appointments · Project Advisory
        </Item>
        <Item as="h1" className="hero-title">
          {/* The two spans render inline on mobile (<=768px); the original HTML kept a
              whitespace-collapsed space between them, which JSX would otherwise drop. */}
          <span className="hero-line hero-line-white">Independent expertise in</span>{" "}
          <span className="hero-line hero-line-gold">complex construction matters</span>
        </Item>
        <Item as="p" className="hero-desc">
          Avonstowe advises on complex construction and engineering disputes and major projects. We
          provide independent expert analysis, commercial judgement and senior-led dispute resolution
          - across arbitration, adjudication, litigation and project advisory.
        </Item>
        <Item className="hero-actions">
          <MagneticButton href="#contact" className="btn-primary">
            Discuss Your Matter
          </MagneticButton>
          <MagneticButton href="#services" className="btn-ghost">
            What We Do
          </MagneticButton>
        </Item>
      </Stagger>
    </section>
  );
}
