"use client";

import { useEffect } from "react";

/**
 * Adds `is-revealed` to scroll-triggered reveal targets as they enter view.
 *
 * This is an enhancement only: the hidden start state lives in CSS behind
 * `html.js`, so if this component never runs, or its bundle never arrives,
 * every target stays in its visible resting state. See components/Motion.tsx.
 */
export default function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[data-reveal], [data-reveal-group="scroll"] > [data-reveal-item]'
      )
    );

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-12% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    // Safety net: if the observer somehow never fires (a stale rootMargin
    // against a short page, a browser quirk), reveal everything rather than
    // leave content hidden. The page is readable either way.
    const failsafe = window.setTimeout(() => {
      targets.forEach((el) => el.classList.add("is-revealed"));
    }, 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
