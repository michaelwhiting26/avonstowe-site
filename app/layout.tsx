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
const TITLE = "Avonstowe | Construction & Engineering Disputes";
const DESCRIPTION =
  "Independent quantum, delay and commercial expertise across construction and engineering disputes. Partner-level service across the Middle East, UK and internationally.";

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
      <body>
        <OverlayProvider>
          <SmoothScroll>
            <ScrollProgress />
            <BackToTop />
            <CookieBanner />
            <Nav />
            {children}
            <Footer />
            <CustomCursor />
          </SmoothScroll>
        </OverlayProvider>
      </body>
    </html>
  );
}
