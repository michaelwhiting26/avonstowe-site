import LegalDocument from "@/components/sections/LegalDocument";
import { cookies } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cookies.title,
  description: cookies.description,
  path: "/cookies",
});

export default function Page() {
  return <LegalDocument doc={cookies} />;
}
