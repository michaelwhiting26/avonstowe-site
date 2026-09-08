import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import SiteNav from "./SiteNav";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--color-paper-line)] bg-[var(--color-paper)]/95 backdrop-blur-sm"
      style={{ ["--header-h" as string]: "4.25rem" }}
    >
      <div className="shell flex h-[4.25rem] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Avonstowe — home">
          <Image
            src={site.logoPath}
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span className="font-serif text-lg tracking-[0.18em] text-[var(--color-ink)]">
            AVONSTOWE
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-6">
          <SiteNav />
          <Link href="/contact" className="btn btn-primary hidden lg:inline-flex">
            Discuss an instruction
          </Link>
        </nav>
      </div>
    </header>
  );
}
