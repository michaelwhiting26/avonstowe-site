import PageHeader from "./PageHeader";
import type { LegalDoc } from "@/content/legal";

/** Renders a structured legal document. Content comes from content/legal.ts. */
export default function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={doc.title} />

      <div className="section">
        <div className="shell">
          <p className="text-sm text-[var(--color-ink-muted)]">Last updated: {doc.lastUpdated}</p>

          <div className="mt-10 max-w-[70ch]">
            {doc.sections.map((section, i) => (
              <section key={section.heading ?? `intro-${i}`} className="mb-10">
                {section.heading && (
                  <h2 className="mb-3 text-[length:var(--text-h3)]">{section.heading}</h2>
                )}

                {section.paragraphs?.map((p) => (
                  <p key={p} className="mb-3 leading-relaxed text-[var(--color-ink-muted)]">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-3 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="border-t border-[var(--color-paper-line)] pt-2 text-[0.9375rem] text-[var(--color-ink-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
