import LegalDocument from "@/components/sections/LegalDocument";
import { privacy } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: privacy.title,
  description: privacy.description,
  path: "/privacy",
});

export default function Page() {
  return <LegalDocument doc={privacy} />;
}
