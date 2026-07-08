"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { fadeUp, stagger, staggerItem, viewportOnce } from "@/lib/motion";

/**
 * Motion primitives for Avonstowe's restrained reveal language.
 *
 * All of these respect `prefers-reduced-motion`: when the user has asked for
 * reduced motion, elements render in their final state with no animation
 * (an Awwwards accessibility requirement, and simply correct).
 */

type Tag = keyof React.JSX.IntrinsicElements;

interface RevealProps extends HTMLMotionProps<"div"> {
  as?: Tag;
  /** Optional stagger index -> a small, ordered delay. */
  delay?: number;
}

/** A single element that fades + rises into view once. */
export function Reveal({ as = "div", delay = 0, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as as "div"] as typeof motion.div;

  if (reduce) {
    // Render statically in the "shown" position.
    const Static = as as "div";
    const { className, style, id, role } = rest as Record<string, unknown>;
    return (
      <Static className={className as string} style={style as React.CSSProperties} id={id as string} role={role as string}>
        {children as React.ReactNode}
      </Static>
    );
  }

  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ ...fadeUp.show.transition, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Container whose direct <Item> children cascade in. */
export function Stagger({ as = "div", children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as as "div"] as typeof motion.div;

  if (reduce) {
    const Static = as as "div";
    const { className, style, id } = rest as Record<string, unknown>;
    return (
      <Static className={className as string} style={style as React.CSSProperties} id={id as string}>
        {children as React.ReactNode}
      </Static>
    );
  }

  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** A child of <Stagger>. */
export function Item({ as = "div", children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as as "div"] as typeof motion.div;

  if (reduce) {
    const Static = as as "div";
    const { className, style } = rest as Record<string, unknown>;
    return (
      <Static className={className as string} style={style as React.CSSProperties}>
        {children as React.ReactNode}
      </Static>
    );
  }

  return (
    <Comp variants={staggerItem} {...rest}>
      {children}
    </Comp>
  );
}
