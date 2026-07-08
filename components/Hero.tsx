export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-rule"></div>
      <p className="hero-eyebrow">
        Construction &amp; Engineering Disputes · Expert Appointments · Project Advisory
      </p>
      <h1 className="hero-title">
        {/* The two spans render inline on mobile (<=768px); the original HTML kept a
            whitespace-collapsed space between them, which JSX would otherwise drop. */}
        <span className="hero-line hero-line-white">Independent expertise in</span>{" "}
        <span className="hero-line hero-line-gold">complex construction matters</span>
      </h1>
      <p className="hero-desc">
        Avonstowe advises on complex construction and engineering disputes and major projects. We
        provide independent expert analysis, commercial judgement and senior-led dispute resolution
        - across arbitration, adjudication, litigation and project advisory.
      </p>

      <div className="hero-actions">
        <a href="#contact" className="btn-primary">
          Discuss Your Matter
        </a>
        <a href="#services" className="btn-ghost">
          What We Do
        </a>
      </div>
    </section>
  );
}
