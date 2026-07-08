"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "services", label: "What We Do" },
  { id: "credentials", label: "Geographic Reach" },
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
      <div className="nav-brand">
        {/* eslint-disable-next-line @next/next/no-img-element -- preserve original decorative <img> markup exactly */}
        <img src="/CBA13159-0A15-4F65-B264-79D219268DD6.PNG" alt="" className="nav-mark" />
        <span className="nav-wordmark">AVONSTOWE</span>
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeId === link.id ? "nav-active" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">
        Get In Touch
      </a>
    </nav>
  );
}
