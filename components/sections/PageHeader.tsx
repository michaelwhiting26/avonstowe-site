/** Consistent page opening: eyebrow, H1 and a short standfirst. */
export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="border-b border-[var(--color-paper-line)] bg-[var(--color-paper-warm)]">
      <div className="shell py-12 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-[22ch] text-[length:var(--text-h1)]">{title}</h1>
        {lede && <p className="lede mt-5">{lede}</p>}
      </div>
    </div>
  );
}
