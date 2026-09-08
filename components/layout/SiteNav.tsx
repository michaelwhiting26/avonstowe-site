"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { primaryNav } from "@/content/site";

/**
 * Primary navigation.
 *
 * This is the only interactive component on the site, and the only one that
 * hydrates. It exists as a client component for two reasons: marking the current
 * page with aria-current, and the mobile disclosure. Everything else on the site is
 * a server component.
 */
export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Close the mobile menu on navigation — soft navigation would otherwise leave it
  // open over the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent the page scrolling behind the open mobile menu.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes the menu.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Desktop */}
      <ul className="hidden items-center gap-8 lg:flex">
        {primaryNav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={`text-sm transition-colors hover:text-[var(--color-brass-deep)] ${
                isCurrent(item.href)
                  ? "text-[var(--color-ink)] font-medium"
                  : "text-[var(--color-ink-muted)]"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        className="inline-flex items-center gap-2 border border-[var(--color-paper-line)] px-3 py-2 text-sm lg:hidden"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="flex w-4 flex-col gap-[3px]">
          <span className="h-px w-full bg-[var(--color-ink)]" />
          <span className="h-px w-full bg-[var(--color-ink)]" />
          <span className="h-px w-full bg-[var(--color-ink)]" />
        </span>
        <span aria-hidden="true">Menu</span>
      </button>

      {/* Mobile panel */}
      {open && (
        <div
          id={menuId}
          className="fixed inset-x-0 top-[var(--header-h,4.25rem)] bottom-0 z-50 overflow-y-auto border-t border-[var(--color-paper-line)] bg-[var(--color-paper)] lg:hidden"
        >
          <nav aria-label="Primary" className="shell py-6">
            <ul className="flex flex-col">
              {primaryNav.map((item) => (
                <li key={item.href} className="border-b border-[var(--color-paper-line)]">
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="block py-4 font-serif text-xl text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary mt-8 w-full">
              Discuss an instruction
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
