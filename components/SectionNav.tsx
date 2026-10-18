"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Thin three-column bar between the hero and the matters (Michael, 18 October
 * 2026), one column per area of work. It sticks under the header as the page scrolls; the column for the
 * section in view is lit, and its underline fills as that section is read.
 */
const items = [
  { id: "quantum", label: "Quantum analysis" },
  { id: "recovery", label: "Claims and recovery" },
  { id: "commercial", label: "Commercial management" },
] as const;

export default function SectionNav() {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");

    function update() {
      const nav = navRef.current;
      if (!nav) return;
      const headerH = header?.offsetHeight ?? 0;
      nav.style.top = headerH + "px";
      // The line a reader is "on": just below the header and this bar.
      const line = headerH + nav.offsetHeight + 80;

      let current: string | null = null;
      let pct = 0;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) {
          current = item.id;
          pct = Math.min(1, Math.max(0, (line - r.top) / r.height));
        }
      }
      setActive(current);
      setProgress(pct);
    }

    // The header changes height as it compacts on scroll; follow it exactly.
    const ro = header ? new ResizeObserver(update) : null;
    if (header && ro) ro.observe(header);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      ro?.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className="section-nav" ref={navRef} aria-label="Sections">
      <ul>
        {items.map((item) => {
          const on = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={on ? "active" : undefined}
                aria-current={on ? "true" : undefined}
              >
                {item.label}
                <span
                  className="section-nav-fill"
                  style={{ transform: `scaleX(${on ? progress : 0})` }}
                ></span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
