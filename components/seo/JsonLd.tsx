/**
 * Renders a JSON-LD document.
 *
 * The payload is built server-side from typed content, never from user input, so
 * dangerouslySetInnerHTML is safe here. `<` is escaped anyway so the JSON can never
 * terminate the script element early.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
