"use client";

import { useEffect, useRef } from "react";

// Custom cursor: a brass dot inside a ring, on fine-pointer (desktop) devices.
// Both are pinned exactly to the pointer; over interactive elements the dot
// grows and the ring widens. The site's CSS styles #cursor-dot, #cursor-ring
// and their `.hovering` states, and centres each on its coordinates with a
// translate(-50%, -50%).
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Park both offscreen until the pointer first moves, otherwise they render
    // in the top-left corner on load.
    for (const el of [dot, ring]) {
      el.style.left = "-100px";
      el.style.top = "-100px";
    }

    function onMove(e: MouseEvent) {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      dot!.style.left = x;
      dot!.style.top = y;
      ring!.style.left = x;
      ring!.style.top = y;
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

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div id="cursor-ring" ref={ringRef}></div>
      <div id="cursor-dot" ref={dotRef}></div>
    </>
  );
}
