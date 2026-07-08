"use client";

import { useEffect, useState } from "react";
import { useOverlay } from "./OverlayProvider";

const STORAGE_KEY = "avonstowe_cookie_consent";

export default function CookieBanner() {
  const { openLegal } = useOverlay();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss(value: string) {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  return (
    <div
      id="cookie-banner"
      className={visible ? "visible" : undefined}
      role="region"
      aria-label="Cookie consent"
    >
      <p>
        This website uses essential cookies only. See our{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openLegal("cookies");
          }}
        >
          Cookie Policy
        </a>{" "}
        for details.
      </p>
      <div className="cookie-actions">
        <button
          className="cookie-btn cookie-btn-accept"
          id="cookie-accept"
          onClick={() => dismiss("accepted")}
        >
          Accept
        </button>
        <button
          className="cookie-btn cookie-btn-decline"
          id="cookie-decline"
          onClick={() => dismiss("declined")}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
