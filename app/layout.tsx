import type { Metadata, Viewport } from "next";
import "./globals.css";
import OverlayProvider from "@/components/OverlayProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/CustomCursor";

// SEO metadata preserved verbatim from the original <head>.
export const metadata: Metadata = {
  title: "Avonstowe | Construction & Engineering Disputes",
  description:
    "Independent quantum, delay and commercial expertise across construction and engineering disputes. Partner-level service across the Middle East, UK and internationally.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts preserved exactly as the original site loaded them.
            Kept as a direct <link> (rather than next/font) so the existing CSS,
            which references the 'Cormorant Garamond' and 'Inter' family names
            directly, renders identically. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <OverlayProvider>
          <ScrollProgress />
          <BackToTop />
          <CookieBanner />
          <Nav />
          {children}
          <Footer />
          <CustomCursor />
        </OverlayProvider>
      </body>
    </html>
  );
}
