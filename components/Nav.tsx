"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { id: "work", label: "What We Do" },
  { id: "matters", label: "Matters" },
  { id: "person", label: "Principal" },
  { id: "contact", label: "Enquire" },
];

export default function Nav() {
  // Scroll-spy: highlight the nav link for the section currently in view,
  // replicating the original "Active nav link on scroll" script.
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      const scrollMid = window.scrollY + window.innerHeight / 2;
      let active: string | null = null;
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollMid) {
          active = link.id;
        }
      }
      setActiveId(active);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <Link href="/" className="nav-brand">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
        <img src="/mark.png" alt="" className="nav-mark" />
        <span className="nav-wordmark">AVONSTOWE</span>
      </Link>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/#${link.id}`}
              className={activeId === link.id ? "nav-active" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/#contact" className="nav-cta">
        Get In Touch
      </Link>
    </nav>
  );
}
