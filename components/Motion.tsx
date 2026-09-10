import { Children, cloneElement, isValidElement } from "react";

/**
 * Motion primitives for Avonstowe's restrained reveal language.
 *
 * WHY THESE ARE NOT CLIENT COMPONENTS ANY MORE
 * --------------------------------------------
 * These used to wrap `motion/react`, which serialises its `initial="hidden"`
 * variant to an inline `opacity:0` during server rendering. That put 19
 * elements into the served HTML invisible — the entire hero among them — so
 * the page's opening claim depended on React hydrating successfully before
 * anyone could read it. A failed or slow bundle left a blank hero.
 *
 * The resting state is now the visible one. These components emit plain
 * elements with `data-reveal` hooks; the hidden start state exists only in CSS,
 * and only under `html.js`, a class added by a tiny inline script in <head>.
 * So:
 *
 *   - no JavaScript at all        -> everything visible, no animation
 *   - JS that fails after parse   -> hero still animates (CSS-driven, on load)
 *   - crawler that renders no JS  -> reads the same visible markup a person does
 *
 * `prefers-reduced-motion` is honoured in CSS rather than by a hook, which also
 * means it is correct on the server instead of only after mount.
 */

type Tag = keyof React.JSX.IntrinsicElements;

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  as?: Tag;
  children?: React.ReactNode;
};

/** A single element that fades and rises into view once, on scroll. */
export function Reveal({ as: Comp = "div", children, ...rest }: RevealProps) {
  const El = Comp as "div";
  return (
    <El data-reveal="" {...rest}>
      {children}
    </El>
  );
}

type StaggerProps = RevealProps & {
  /**
   * Reveal on load rather than on scroll. Use for anything above the fold —
   * an observer cannot fire before first paint, so scroll-triggering the hero
   * would reintroduce the blank-first-frame problem this file exists to fix.
   */
  revealOnLoad?: boolean;
};

/** Container whose direct <Item> children cascade in. */
export function Stagger({ as: Comp = "div", revealOnLoad = false, children, ...rest }: StaggerProps) {
  const El = Comp as "div";
  // The cascade delay is positional, so the index is injected here rather than
  // asking every call site to count its own children.
  let index = 0;
  const indexed = Children.map(children, (child) => {
    // Every element child is indexed, not only <Item>: at this point <Item> has
    // not rendered, so its data-reveal-item attribute does not exist yet on the
    // props object. Indexing a non-Item child is harmless — the custom property
    // simply goes unread.
    if (!isValidElement(child)) return child;
    const existing = (child.props as { style?: React.CSSProperties }).style;
    const style = {
      ...existing,
      ["--reveal-index"]: String(index++),
    } as React.CSSProperties;
    return cloneElement(child as React.ReactElement<{ style?: React.CSSProperties }>, { style });
  });

  return (
    <El data-reveal-group={revealOnLoad ? "load" : "scroll"} {...rest}>
      {indexed}
    </El>
  );
}

/** A child of <Stagger>. */
export function Item({ as: Comp = "div", children, ...rest }: RevealProps) {
  const El = Comp as "div";
  return (
    <El data-reveal-item="" {...rest}>
      {children}
    </El>
  );
}
