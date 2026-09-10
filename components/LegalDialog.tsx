"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Modal wrapper for the legal overlays.
 *
 * The overlays previously rendered as plain <div>s: no dialog semantics, no
 * initial focus, no containment and no restoration. Escape closed them, but a
 * keyboard user could tab straight out into the page behind, which is still
 * fully rendered underneath.
 *
 * Inactive overlays are `display: none`, so only the open one is reachable —
 * the trap below therefore only has to handle one dialog at a time.
 */
export default function LegalDialog({
  id,
  labelledBy,
  open,
  onClose,
  children,
}: {
  id: string;
  labelledBy: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const node = ref.current;
    if (!node) return;

    // Remember where focus came from so it can be handed back on close.
    restoreTo.current = document.activeElement as HTMLElement | null;

    // Initial focus goes to the dialog itself rather than the close button, so
    // a screen reader announces the dialog's name before its first control.
    node.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const items = Array.from(node!.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) {
        // Nothing to move to: keep focus on the dialog rather than letting it
        // escape to the page behind.
        e.preventDefault();
        node!.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === node)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    node.addEventListener("keydown", onKeyDown);
    return () => {
      node.removeEventListener("keydown", onKeyDown);
      // Restore focus only if it is still inside the dialog being closed;
      // if the user has clicked elsewhere, leave their choice alone.
      if (node.contains(document.activeElement)) {
        restoreTo.current?.focus?.();
      }
    };
  }, [open]);

  return (
    <div
      id={id}
      ref={ref}
      className={`legal-overlay${open ? " active" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      aria-hidden={open ? undefined : true}
      tabIndex={-1}
      data-lenis-prevent
      onClick={(e) => {
        // Clicking the backdrop (the overlay itself, not its content) closes.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {children}
    </div>
  );
}
