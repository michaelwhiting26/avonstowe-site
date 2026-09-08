import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import { expertSupport } from "@/content/expert-support";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Expert Support | Forensic Quantum Analysts",
  description:
    "Forensic quantum analysts supplied to appointed experts, law firms and consultancies on an assignment basis: document review, account reconstruction, quantum schedules, report drafting and model build.",
  path: "/expert-support",
});

export default function ExpertSupport() {
  return (
    <>
      <PageHeader
        eyebrow="Expert support"
        title="Analytical capacity for appointed experts and legal teams"
        lede={expertSupport.proposition}
      />

      {/* Framing + audience */}
      <section className="section" aria-labelledby="intro">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div>
              <hr className="rule" />
              <h2 id="intro" className="mt-5 text-[length:var(--text-h2)]">
                Where this helps
              </h2>
              <p className="prose-body mt-5">{expertSupport.intro}</p>
            </div>
            <div className="border-t border-[var(--color-paper-line)] pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <h3 className="eyebrow">Who instructs us</h3>
              <ul className="mt-4 space-y-2 text-[0.9375rem] text-[var(--color-ink-muted)]">
                {expertSupport.audience.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The independence boundary — deliberately prominent, not a footnote. */}
      <section className="bg-[var(--color-navy)] text-[var(--color-paper)]" aria-labelledby="boundary">
        <div className="shell py-14 md:py-20">
          <hr className="rule rule-on-dark" />
          <h2 id="boundary" className="mt-5 text-[length:var(--text-h2)] text-[var(--color-paper)]">
            {expertSupport.boundary.heading}
          </h2>
          <p className="mt-5 max-w-[70ch] leading-relaxed text-[var(--color-paper)]/80">
            {expertSupport.boundary.body}
          </p>
        </div>
      </section>

      {/* What we support */}
      <section className="section" aria-labelledby="workstreams">
        <div className="shell">
          <hr className="rule" />
          <h2 id="workstreams" className="mt-5 text-[length:var(--text-h2)]">
            What Avonstowe supports
          </h2>

          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {expertSupport.workstreams.map((w) => (
              <div key={w.title} className="border-t border-[var(--color-paper-line)] pt-5">
                <h3 className="font-serif text-[length:var(--text-h3)]">{w.title}</h3>
                <ul className="mt-4 space-y-2">
                  {w.items.map((i) => (
                    <li key={i} className="text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assignment model */}
      <section className="section bg-[var(--color-paper-warm)]" aria-labelledby="assignment">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <hr className="rule" />
              <h2 id="assignment" className="mt-5 text-[length:var(--text-h2)]">
                {expertSupport.assignment.heading}
              </h2>
              <p className="prose-body mt-5">{expertSupport.assignment.body}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {expertSupport.assignment.modes.map((m) => (
                  <li
                    key={m}
                    className="border border-[var(--color-paper-line)] bg-[var(--color-paper)] px-3 py-1.5 text-sm"
                  >
                    {m}
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-l-2 border-[var(--color-brass-deep)] pl-5 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                {expertSupport.assignment.durationNote}
              </p>
            </div>

            <div>
              <hr className="rule" />
              <h2 className="mt-5 text-[length:var(--text-h2)]">
                {expertSupport.engagement.heading}
              </h2>
              <p className="prose-body mt-5">{expertSupport.engagement.body}</p>
              <ul className="mt-6 space-y-2">
                {expertSupport.engagement.points.map((p) => (
                  <li
                    key={p}
                    className="border-t border-[var(--color-paper-line)] pt-2 text-[0.9375rem] text-[var(--color-ink-muted)]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Renders only once genuinely-used tools are confirmed. See content file. */}
          {expertSupport.software.length > 0 && (
            <div className="mt-14">
              <h3 className="eyebrow">Tools</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {expertSupport.software.map((s) => (
                  <li
                    key={s}
                    className="border border-[var(--color-paper-line)] bg-[var(--color-paper)] px-3 py-1.5 text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ContactCTA
        heading="Discuss expert support"
        body="Tell us the reference, the phase it is at and the volume involved, and we will confirm availability and conflict position."
      />
    </>
  );
}
