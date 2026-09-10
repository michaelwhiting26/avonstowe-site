import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import OverlayProvider from "@/components/OverlayProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import RevealObserver from "@/components/RevealObserver";

// Self-hosted via next/font: fonts are served from our own origin (no
// render-blocking third-party request, automatic preload, display: swap).
// Exposed as CSS variables the stylesheet consumes through --serif / --sans.
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://www.avonstowe.com";
const TITLE = "Avonstowe | Forensic Quantum Analysis";
const DESCRIPTION =
  "Avonstowe provides forensic quantum analysis to appointed experts, legal teams and parties in construction and engineering disputes, across the United Kingdom, the Gulf and North Africa.";

// Favicons come from the App Router file convention (app/icon.png,
// app/apple-icon.png) using the current Avonstowe brand mark.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Avonstowe",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        {/* Marks the document as JavaScript-capable BEFORE first paint. Every
            reveal animation and the custom cursor are scoped to this class, so
            a browser with JS off — or a bundle that never arrives — renders the
            page fully visible and fully usable. See components/Motion.tsx. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <OverlayProvider>
          <SmoothScroll>
            <ScrollProgress />
            <BackToTop />
            <CookieBanner />
            <Nav />
            <main id="main">{children}</main>
            <Footer />
            <CustomCursor />
            <RevealObserver />
          </SmoothScroll>
        </OverlayProvider>
      </body>
    </html>
  );
}
