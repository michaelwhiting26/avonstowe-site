import Link from "next/link";
import { regions, sectors } from "@/content/experience";

/**
 * Sector / experience strip for the home page.
 *
 * Shows sector titles and the class of facility only — never a named project.
 * See the confidentiality rule at the top of content/experience.ts before adding
 * any further detail here.
 */
export default function SectorStrip() {
  return (
    <section className="section bg-[var(--color-paper-warm)]" aria-labelledby="sectors-heading">
      <div className="shell">
        <hr className="rule" />
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="sectors-heading" className="text-[length:var(--text-h2)]">
            Where the experience sits
          </h2>
          <Link href="/experience" className="link text-sm">
            Sectors, contract forms and regions
          </Link>
        </div>

        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <div key={s.title} className="border-t border-[var(--color-paper-line)] pt-5">
              <dt className="font-serif text-[length:var(--text-h3)] text-[var(--color-ink)]">
                {s.title}
              </dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                {s.detail}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm text-[var(--color-ink-muted)]">
          <span className="font-medium text-[var(--color-ink)]">Regions:</span>{" "}
          {regions.map((r) => r.name).join(" · ")}
        </p>
      </div>
    </section>
  );
}
