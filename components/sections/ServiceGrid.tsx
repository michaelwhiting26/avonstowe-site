import Link from "next/link";
import { expertSupportTile, services } from "@/content/services";

/**
 * Expert Support leads, then the three party-side service lines.
 * Expert Support links out because it addresses a different buyer and has its own
 * page; the other three link to their section on /what-we-do.
 */
export default function ServiceGrid() {
  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="shell">
        <hr className="rule" />
        <h2 id="services-heading" className="mt-5 text-[length:var(--text-h2)]">
          What we do
        </h2>

        <div className="mt-10 grid gap-px border border-[var(--color-paper-line)] bg-[var(--color-paper-line)] md:grid-cols-2">

          <Link
            href={expertSupportTile.href}
            className="group flex flex-col bg-[var(--color-navy)] p-7 text-[var(--color-paper)] transition-colors hover:bg-[var(--color-navy-soft)] md:p-9"
          >
            <span className="font-serif text-sm text-[var(--color-brass)]">
              {expertSupportTile.number}
            </span>
            <h3 className="mt-3 text-[length:var(--text-h3)] text-[var(--color-paper)]">
              {expertSupportTile.title}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-paper)]/75">
              {expertSupportTile.summary}
            </p>
            <span className="mt-6 text-sm text-[var(--color-brass)] group-hover:underline">
              Read more
            </span>
          </Link>

          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/what-we-do#${s.slug}`}
              className="group flex flex-col bg-[var(--color-paper)] p-7 transition-colors hover:bg-white md:p-9"
            >
              <span className="font-serif text-sm text-[var(--color-brass-deep)]">{s.number}</span>
              <h3 className="mt-3 text-[length:var(--text-h3)] text-[var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                {s.summary}
              </p>
              <span className="mt-6 text-sm text-[var(--color-brass-deep)] group-hover:underline">
                Read more
              </span>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
