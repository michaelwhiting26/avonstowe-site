const differentiators = [
  {
    title: "Partner-Led Delivery",
    desc: "Every instruction is led and executed by senior experts - no delegation.",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="5" r="2.2"></circle>
        <path d="M3.8 12.2c0-2.2 1.9-3.6 4.2-3.6s4.2 1.4 4.2 3.6"></path>
      </svg>
    ),
  },
  {
    title: "Defensible Expert Analysis",
    desc: "Independent, tribunal-ready opinions on entitlement, causation, delay and valuation.",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 2.2l4 1.6v3.2c0 2.9-1.7 5-4 6.8-2.3-1.8-4-3.9-4-6.8V3.8L8 2.2z"></path>
      </svg>
    ),
  },
  {
    title: "Commercially Grounded Judgement",
    desc: "Commercially grounded advice informed by live project and dispute experience.",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="5.5"></circle>
        <path d="M6.2 8.1l1.3 1.4 2.6-3"></path>
      </svg>
    ),
  },
];

export default function IntroBand() {
  return (
    <section className="intro-band">
      <div className="intro-grid">
        <div>
          <p className="intro-label">The Avonstowe Approach</p>
          <h2 className="intro-heading">Senior-led from instruction to resolution.</h2>
          <p className="intro-body">
            Avonstowe is structured around senior expert involvement. We provide independent advice
            where major projects and complex disputes require clear analysis, commercial judgement
            and defensible evidence.
          </p>
        </div>
        <div className="differentiators">
          {differentiators.map((item) => (
            <div className="diff-item" key={item.title}>
              <div className="diff-icon">{item.icon}</div>
              <div>
                <div className="diff-title">{item.title}</div>
                <div className="diff-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
