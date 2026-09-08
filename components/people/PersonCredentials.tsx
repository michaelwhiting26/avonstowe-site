/**
 * Credentials list.
 *
 * Renders nothing at all when there are no credentials. There is deliberately no
 * "credentials to follow" or similar placeholder: an empty credentials list means
 * we have nothing a stranger could verify, and saying so on the page would be worse
 * than saying nothing.
 */
export default function PersonCredentials({ credentials }: { credentials?: string[] }) {
  if (!credentials || credentials.length === 0) return null;

  return (
    <div className="mt-6">
      <h4 className="eyebrow">Credentials</h4>
      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
        {credentials.map((c) => (
          <li
            key={c}
            className="border border-[var(--color-paper-line)] bg-[var(--color-paper-warm)] px-3 py-1 text-sm text-[var(--color-ink)]"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
