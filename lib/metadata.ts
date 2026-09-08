import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Per-page metadata. Every page gets a unique title, a concise description and a
 * canonical URL. Descriptions state what the page contains — they are not keyword
 * lists, and they should read as a sentence a person would say.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  // next.config sets trailingSlash: true, so the emitted URL for /contact is
  // /contact/. Canonicals must match the URL actually served or they contradict it.
  const canonical = path === "/" ? "/" : `${path}/`;
  const url = path === "/" ? `${site.url}/` : `${site.url}${path}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: "en_GB",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
