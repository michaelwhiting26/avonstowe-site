"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * A link with a subtle "magnetic" pull toward the cursor, springing back on
 * exit. Deliberately gentle (default strength 0.3, capped travel) to stay on
 * the restrained/authoritative side rather than feeling toy-like.
 *
 * Falls back to a plain <a> under reduced-motion or on coarse (touch) pointers.
 */
export default function MagneticButton({
  href,
  className,
  children,
  strength = 0.3,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  if (reduce) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.a>
  );
}
