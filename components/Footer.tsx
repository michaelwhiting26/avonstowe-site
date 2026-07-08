"use client";

import { useOverlay } from "./OverlayProvider";

export default function Footer() {
  const { openLegal } = useOverlay();

  return (
    <footer>
      <div className="nav-brand footer-brand">
        {/* eslint-disable-next-line @next/next/no-img-element -- preserve original decorative <img> markup exactly */}
        <img src="/CBA13159-0A15-4F65-B264-79D219268DD6.PNG" alt="" className="nav-mark" />
        <span className="nav-wordmark">AVONSTOWE</span>
      </div>
      <div className="footer-note">
        Construction &amp; Engineering Disputes · Expert Appointments · Project Advisory
      </div>

      <div className="footer-contact">
        <p>
          Enquiries: <a href="mailto:michael@avonstowe.com">michael@avonstowe.com</a>
        </p>
        <p>Dubai, United Arab Emirates</p>
        <p>Avonstowe FZ LLC</p>
      </div>
      <div className="footer-legal">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openLegal("privacy");
          }}
        >
          Privacy Notice
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openLegal("terms");
          }}
        >
          Terms of Use
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openLegal("cookies");
          }}
        >
          Cookie Policy
        </a>
      </div>
    </footer>
  );
}
