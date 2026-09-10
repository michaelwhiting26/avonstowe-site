"use client";

import { useEffect, useState } from "react";
import { useOverlay } from "./OverlayProvider";

const STORAGE_KEY = "avonstowe_cookie_notice";

/*
 * This is a NOTICE, not a consent gate.
 *
 * The site sets essential cookies only — no analytics, no advertising, no
 * tracking (see the Cookie Policy overlay). There is therefore nothing to
 * consent to, and nothing to withdraw. The banner previously offered Accept and
 * Decline, which stored different strings and did nothing else: a choice with no
 * observable effect, which is worse than no choice at all.
 *
 * If a non-essential cookie is ever added, this component must become a real
 * consent gate — the script must not run until consent is given — and the
 * Cookie Policy must be updated in the same change.
 */

export default function CookieBanner() {
  const { openLegal } = useOverlay();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "seen");
    setVisible(false);
  }

  return (
    <div
      id="cookie-banner"
      className={visible ? "visible" : undefined}
      role="region"
      aria-label="Cookie notice"
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
        <button className="cookie-btn cookie-btn-accept" id="cookie-dismiss" onClick={dismiss}>
          Understood
        </button>
      </div>
    </div>
  );
}
