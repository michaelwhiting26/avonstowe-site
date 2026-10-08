import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="nav-brand footer-brand">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
        <img src="/mark.png" alt="" className="nav-mark" />
        <span className="nav-wordmark">AVONSTOWE</span>
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
  );
}
