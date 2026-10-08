import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/lib/site";

// Self-hosted via next/font: served from our own origin, no third-party request.
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary", title: site.title, description: site.description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        {/* Marks the document as JavaScript-capable BEFORE first paint. The
            reveal animations are scoped to this class, so with JS off the page
            renders fully visible. See components/Motion.tsx. */}
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
        <SmoothScroll>
          <ScrollProgress />
          <BackToTop />
          <header className="site-header">
            <Link className="brand" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
              <img src="/mark.png" alt="" width={32} height={32} />
              <span>AVONSTOWE</span>
            </Link>
            <Link className="header-link" href="/#contact">
              Contact
            </Link>
          </header>
          <main id="main">{children}</main>
          <footer className="footer">
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
              <img src="/mark.png" alt="" className="footer-mark" />
              <span className="footer-wordmark">AVONSTOWE</span>
            </div>
            <div className="footer-note">Quantity Surveying · Forensic Quantum</div>
          
            <div className="footer-contact">
              <p>
                Enquiries: <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p>{site.location}</p>
              <p>
                {site.legalEntity} · {site.licence}
              </p>
            </div>
            <div className="footer-legal">
              <Link href="/legal/#privacy">Privacy Notice</Link>
              <Link href="/legal/#terms">Terms of Use</Link>
              <Link href="/legal/#cookies">Cookie Policy</Link>
            </div>
          </footer>
          <CustomCursor />
          <RevealObserver />
        </SmoothScroll>
      </body>
    </html>
  );
}
