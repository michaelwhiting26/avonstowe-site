import { method } from "@/content/method";

/**
 * The method section.
 *
 * Sits between the service grid and the sector strip: once a reader knows what
 * Avonstowe does, the next question is why the numbers should be believed.
 * Deliberately four short points and no further — this is a standard, not an essay.
 */
export default function Method() {
  return (
    <section className="section" aria-labelledby="method-heading">
      <div className="shell">
        <hr className="rule" />
        <h2 id="method-heading" className="mt-5 text-[length:var(--text-h2)]">
          {method.heading}
        </h2>
        <p className="mt-4 max-w-[62ch] text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
          {method.intro}
        </p>

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {method.points.map((p) => (
            <div key={p.title}>
              <h3 className="text-[length:var(--text-h3)] text-[var(--color-ink)]">{p.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
