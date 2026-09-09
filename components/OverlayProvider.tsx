"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import LegalOverlays from "./LegalOverlays";

export type LegalType = "privacy" | "terms" | "cookies";

type OverlayContextValue = {
  openLegal: (type: LegalType) => void;
  closeLegal: (type: LegalType) => void;
};

const OverlayContext = createContext<OverlayContextValue | null>(null);

export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx) {
    throw new Error("useOverlay must be used within an OverlayProvider");
  }
  return ctx;
}

export default function OverlayProvider({ children }: { children: ReactNode }) {
  const [legal, setLegal] = useState<LegalType | null>(null);

  const openLegal = useCallback((type: LegalType) => setLegal(type), []);
  const closeLegal = useCallback(
    (type: LegalType) => setLegal((cur) => (cur === type ? null : cur)),
    [],
  );

  // Lock body scroll while any overlay is open, matching the original
  // document.body.style.overflow = 'hidden' behaviour.
  useEffect(() => {
    document.body.style.overflow = legal !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [legal]);

  // Escape closes any open overlay (both the original ESC listeners).
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLegal(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const value = useMemo(
    () => ({ openLegal, closeLegal }),
    [openLegal, closeLegal],
  );

  return (
    <OverlayContext.Provider value={value}>
      {children}
      <LegalOverlays active={legal} onClose={closeLegal} />
    </OverlayContext.Provider>
  );
}
