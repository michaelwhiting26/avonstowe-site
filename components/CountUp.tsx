"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts an integer up from 0 to `value` the first time it scrolls into view.
 * Uses the shared expo-out easing so the tally decelerates like everything else.
 *
 * Under reduced-motion it renders the final value immediately.
 */
export default function CountUp({
  value,
  duration = 1.1,
}: {
  value: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    let raf = 0;
    let start: number | null = null;
    // Expo-out: a monotonic tally that decelerates like the rest of the site.
    const ease = (t: number) => 1 - Math.pow(2, -10 * t);

    function tick(now: number) {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / (duration * 1000));
      setDisplay(Math.round(ease(t) * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration]);

  return <span ref={ref}>{display}</span>;
}
