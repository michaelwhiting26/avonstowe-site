"use client";

import { useEffect, useRef } from "react";

// Custom cursor: a brass dot with a trailing ring on fine-pointer (desktop)
// devices. The site's CSS already styles #cursor-dot, #cursor-ring and their
// `.hovering` states — historically the ring was never rendered and the hover
// logic threw, so only a bare dot showed. Tier 2 wires the full behaviour:
//   - the dot tracks the pointer closely; the ring lerps behind it (a calm,
//     weighted trail rather than a rigid follow)
//   - over interactive elements both grow into a "focus" state
// Honours reduced-motion by snapping instantly (no trail) and relies on the
// global reduced-motion CSS to neutralise the scale transitions.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Target (pointer) and current (rendered) positions for the trailing ring.
    let tx = -100,
      ty = -100;
    let rx = tx,
      ry = ty;

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
      // Dot always sits exactly under the pointer.
      dot!.style.left = tx + "px";
      dot!.style.top = ty + "px";
      if (reduce) {
        ring!.style.left = tx + "px";
        ring!.style.top = ty + "px";
      }
    }

    // Interactive-element hover -> focus state on both dot and ring.
    const interactiveSel = 'a, button, [role="button"], .tab-btn, input, textarea, label';
    function onOver(e: MouseEvent) {
      if ((e.target as HTMLElement)?.closest?.(interactiveSel)) {
        dot!.classList.add("hovering");
        ring!.classList.add("hovering");
      }
    }
    function onOut(e: MouseEvent) {
      if ((e.target as HTMLElement)?.closest?.(interactiveSel)) {
        dot!.classList.remove("hovering");
        ring!.classList.remove("hovering");
      }
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    let raf = 0;
    if (!reduce) {
      const follow = () => {
        // Ease the ring toward the pointer for a weighted trail.
        rx += (tx - rx) * 0.18;
        ry += (ty - ry) * 0.18;
        ring!.style.left = rx + "px";
        ring!.style.top = ry + "px";
        raf = requestAnimationFrame(follow);
      };
      raf = requestAnimationFrame(follow);
    }

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor-ring" ref={ringRef}></div>
      <div id="cursor-dot" ref={dotRef}></div>
    </>
  );
}
