import LegalDocument from "@/components/sections/LegalDocument";
import { terms } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: terms.title,
  description: terms.description,
  path: "/terms",
});

export default function Page() {
  return <LegalDocument doc={terms} />;
}
