import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { getPublishableLead } from "@/lib/consent";
import { assertContentValid } from "@/lib/content-validation";
import { graph, personSchema, professionalServiceSchema } from "@/lib/structured-data";

/**
 * BUILD GATE.
 * Runs during `next build` for every page. Publishing a person without evidenced
 * consent, or shipping prohibited claims, fails the build here rather than being
 * caught by someone reading the site later.
 */
assertContentValid();

const TITLE = "Avonstowe | Forensic Quantum & Delay Analysis";
const DESCRIPTION = `${site.positioning.headline} ${site.positioning.supporting}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITLE,
    // Sub-pages set their own title; this appends the firm name consistently.
    template: "%s | Avonstowe",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1e3b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lead = getPublishableLead();

  // Site-wide entity graph. Person and ProfessionalService reference each other by
  // @id so search engines can resolve them as one organisation and one named person.
  const entityGraph = graph(
    lead ? [professionalServiceSchema(lead), personSchema(lead)] : [professionalServiceSchema(null)],
  );

  return (
    <html lang="en-GB">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-navy)] focus:px-4 focus:py-2 focus:text-[var(--color-paper)]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={entityGraph} />
      </body>
    </html>
  );
}
