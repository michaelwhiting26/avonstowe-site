import { Stagger, Item } from "./Motion";
import MagneticButton from "./MagneticButton";
import { hero } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-rule"></div>
      {/* revealOnLoad: this is the first thing anyone sees, so it animates from
          page load rather than waiting on an intersection callback. */}
      <Stagger revealOnLoad>
        <Item as="p" className="hero-eyebrow">
          {hero.eyebrow}
        </Item>
        <Item as="h1" className="hero-title">
          <span className="hero-line hero-line-white">{hero.titleLead}</span>{" "}
          <span className="hero-line hero-line-gold">{hero.titleRest}</span>
        </Item>
        <Item as="p" className="hero-desc">
          {hero.sub}
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
