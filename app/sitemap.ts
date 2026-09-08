import type { MetadataRoute } from "next";
import { legalNav, primaryNav, site } from "@/content/site";

// Required for `output: export` — tells Next this route is fully static.
export const dynamic = "force-static";

/** Static sitemap generated from the navigation definitions — one source of truth. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...primaryNav.map((n) => n.href), ...legalNav.map((n) => n.href)];

  return routes.map((path) => ({
    url: path === "/" ? `${site.url}/` : `${site.url}${path}/`,
    lastModified: new Date("2026-08-15"),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/expert-support" ? 0.9 : 0.7,
  }));
}
