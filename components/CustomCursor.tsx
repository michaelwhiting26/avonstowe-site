"use client";

import { useEffect, useRef } from "react";

// Custom cursor dot that follows the pointer on fine-pointer (desktop) devices.
//
// Faithful note: the original site's cursor script also referenced a
// `#cursor-ring` element and hover-state logic, but that element was never
// present in the DOM, so on the live site the ring animation threw immediately
// and only the dot-follow behaviour ran. We reproduce that exact visible
// behaviour here (dot follows the cursor; no ring, no hover scaling).
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = dotRef.current;
    if (!dot) return;

    function onMouseMove(e: MouseEvent) {
      dot!.style.left = e.clientX + "px";
      dot!.style.top = e.clientY + "px";
    }
    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <div id="cursor-dot" ref={dotRef}></div>;
}
