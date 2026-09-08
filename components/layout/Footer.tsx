import Image from "next/image";
import Link from "next/link";
import { legalNav, primaryNav, site } from "@/content/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[var(--color-navy-deep)] text-[var(--color-paper)]">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src={site.logoPath} alt="" width={32} height={32} className="h-8 w-8" />
              <span className="font-serif text-lg tracking-[0.18em]">AVONSTOWE</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-paper)]/70">
              {site.positioning.headline}
            </p>
          </div>

          <div>
            <h2 className="eyebrow eyebrow-on-dark">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.contact.email}`} className="link-on-dark">
                  {site.contact.email}
                </a>
              </li>
              <li className="text-[var(--color-paper)]/70">{site.contact.location}</li>
              <li className="text-[var(--color-paper)]/70">{site.legalEntity}</li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow eyebrow-on-dark">Navigate</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[var(--color-paper)]/70 hover:text-[var(--color-brass)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--color-navy-line)] pt-6 text-xs text-[var(--color-paper)]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalEntity}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[var(--color-brass)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
