/*
 * Shared motion language for Avonstowe.
 *
 * One easing curve and one duration scale, applied everywhere, is what makes
 * motion read as "designed" rather than incidental. The tone is restrained and
 * authoritative: slow, confident reveals; no bounce, no overshoot.
 */

// Expo-out: a long, decelerating ease that feels composed and senior.
export const EASE = [0.16, 1, 0.3, 1] as const;

export const DUR = {
  fast: 0.5,
  base: 0.9,
  slow: 1.2,
} as const;

// A single element rising into place.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.base, ease: EASE },
  },
} as const;

// Container that reveals its children in a gentle cascade.
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
} as const;

// Child item used inside a `stagger` container.
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.base, ease: EASE },
  },
} as const;

// Reveal once, slightly before the element is fully in view.
export const viewportOnce = { once: true, margin: "-12% 0px" } as const;
