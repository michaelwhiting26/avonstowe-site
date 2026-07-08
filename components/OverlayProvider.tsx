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
import type { ServiceKey } from "@/lib/commissions";
import CommissionsOverlay from "./CommissionsOverlay";
import LegalOverlays from "./LegalOverlays";

export type LegalType = "privacy" | "terms" | "cookies";

type OverlayContextValue = {
  openCommissions: (section: ServiceKey) => void;
  closeCommissions: () => void;
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
  const [commissions, setCommissions] = useState<ServiceKey | null>(null);
  const [legal, setLegal] = useState<LegalType | null>(null);

  const openCommissions = useCallback((section: ServiceKey) => setCommissions(section), []);
  const closeCommissions = useCallback(() => setCommissions(null), []);
  const openLegal = useCallback((type: LegalType) => setLegal(type), []);
  const closeLegal = useCallback(
    (type: LegalType) => setLegal((cur) => (cur === type ? null : cur)),
    [],
  );

  // Lock body scroll while any overlay is open, matching the original
  // document.body.style.overflow = 'hidden' behaviour.
  useEffect(() => {
    const anyOpen = commissions !== null || legal !== null;
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [commissions, legal]);

  // Escape closes any open overlay (both the original ESC listeners).
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setCommissions(null);
        setLegal(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const value = useMemo(
    () => ({ openCommissions, closeCommissions, openLegal, closeLegal }),
    [openCommissions, closeCommissions, openLegal, closeLegal],
  );

  return (
    <OverlayContext.Provider value={value}>
      {children}
      <CommissionsOverlay section={commissions} onClose={closeCommissions} />
      <LegalOverlays active={legal} onClose={closeLegal} />
    </OverlayContext.Provider>
  );
}
