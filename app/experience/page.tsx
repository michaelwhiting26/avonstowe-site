import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import { claimTypes, contractForms, regions, sectors } from "@/content/experience";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Experience",
  description:
    "Sectors, contract forms and regions: process plant and energy, transport infrastructure, utilities, marine and buildings across the GCC, UK, North Africa, Asia-Pacific and Europe.",
  path: "/experience",
});

/**
 * NOTE FOR MAINTAINERS
 * This page replaced a public table of individual commissions. Everything here is
 * pitched at sector / contract form / region level on purpose. Before adding detail,
 * read the confidentiality rule at the top of content/experience.ts.
 */
export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Sectors, contract forms and regions"
        lede="Experience is described by sector, contract form and region. Individual matters are not identified — details are provided in a private capability note on request, subject to the confidentiality owed on each."
      />

      {/* Sectors */}
      <section className="section" aria-labelledby="sectors">
        <div className="shell">
          <hr className="rule" />
          <h2 id="sectors" className="mt-5 text-[length:var(--text-h2)]">
            Sectors
          </h2>

          <div className="mt-10 flex flex-col">
            {sectors.map((s) => (
              <article
                key={s.title}
                className="grid gap-4 border-t border-[var(--color-paper-line)] py-8 md:grid-cols-[16rem_1fr] md:gap-10"
              >
                <h3 className="text-[length:var(--text-h3)] text-[var(--color-ink)]">{s.title}</h3>
                <div>
                  <p className="text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {s.detail}
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {s.work}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-brass-deep)]">{s.regions}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contract forms */}
      <section className="section bg-[var(--color-paper-warm)]" aria-labelledby="contract-forms">
        <div className="shell">
          <hr className="rule" />
          <h2 id="contract-forms" className="mt-5 text-[length:var(--text-h2)]">
            Contract forms
          </h2>
          <p className="lede mt-4">
            Stated at the level the record supports. Specific Books and editions are not claimed.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {contractForms.map((f) => (
              <div key={f.name} className="border-t border-[var(--color-paper-line)] pt-5">
                <dt className="font-serif text-[length:var(--text-h3)]">{f.name}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                  {f.note}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Regions */}
      <section className="section" aria-labelledby="regions">
        <div className="shell">
          <hr className="rule" />
          <h2 id="regions" className="mt-5 text-[length:var(--text-h2)]">
            Regions
          </h2>
          <p className="lede mt-4">
            Described broadly. Individual project locations and seats of arbitration are not
            published.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <div key={r.name} className="border-t border-[var(--color-paper-line)] pt-5">
                <dt className="font-serif text-[length:var(--text-h3)]">{r.name}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                  {r.note}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Claim types */}
      <section className="section bg-[var(--color-paper-warm)]" aria-labelledby="claim-types">
        <div className="shell">
          <hr className="rule" />
          <h2 id="claim-types" className="mt-5 text-[length:var(--text-h2)]">
            Claim types
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {claimTypes.map((c) => (
              <li
                key={c}
                className="border border-[var(--color-paper-line)] bg-[var(--color-paper)] px-3 py-1.5 text-sm text-[var(--color-ink)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA
        heading="Request capability information"
        body="A private capability note covering relevant matter-level experience is available on request, subject to the confidentiality owed on each matter."
      />
    </>
  );
}
