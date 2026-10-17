import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Google uses lastmod only when it is accurate (and ignores priority/changefreq):
  // this is the date the page copy last changed. Update it with the copy.
  const copyChanged = new Date("2026-10-17");
  return [
    { url: `${site.url}/`, lastModified: copyChanged },
    { url: `${site.url}/legal/`, lastModified: copyChanged },
  ];
}
