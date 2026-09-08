import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import { expertSupportTile, services } from "@/content/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "What We Do",
  description:
    "Claims and disputes, party-appointed expert appointments, and project advisory for international construction and engineering matters.",
  path: "/what-we-do",
});

export default function WhatWeDo() {
  return (
    <>
      <PageHeader
        eyebrow="Service lines"
        title="What we do"
        lede="Avonstowe acts for parties to construction and engineering disputes, and for the legal teams advising them. It does not accept neutral appointments."
      />

      <div className="section">
        <div className="shell">
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((s) => (
              // scroll-mt clears the sticky header when linked to by anchor.
              <section key={s.slug} id={s.slug} className="scroll-mt-24">
                <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
                  <p className="font-serif text-[length:var(--text-h2)] text-[var(--color-brass-deep)]">
                    {s.number}
                  </p>
                  <div>
                    <h2 className="text-[length:var(--text-h2)]">{s.title}</h2>
                    <p className="prose-body mt-5">{s.body}</p>

                    <h3 className="eyebrow mt-8">Scope</h3>
                    <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {s.scope.map((item) => (
                        <li
                          key={item}
                          className="border-t border-[var(--color-paper-line)] pt-2 text-[0.9375rem] text-[var(--color-ink-muted)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}

            {/* Fourth service line lives on its own page. */}
            <section className="border-t border-[var(--color-paper-line)] pt-12">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
                <p className="font-serif text-[length:var(--text-h2)] text-[var(--color-brass-deep)]">
                  {expertSupportTile.number}
                </p>
                <div>
                  <h2 className="text-[length:var(--text-h2)]">{expertSupportTile.title}</h2>
                  <p className="prose-body mt-5">{expertSupportTile.summary}</p>
                  <p className="mt-6">
                    <Link href={expertSupportTile.href} className="link">
                      Expert support in detail
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <ContactCTA />
    </>
  );
}
