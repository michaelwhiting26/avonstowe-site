"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import GeographyPanel from "./GeographyPanel";
import { AREA_LABELS, type CountryAttribution, type PracticeAreaKey } from "@/lib/geoAttribution";
import type { MapFrame } from "@/lib/worldPaths";

/**
 * The interactive layer over the static map.
 *
 * The client boundary is deliberately narrow. The 177 country outlines are
 * server-rendered once into a <defs> block by <GeographyMap /> and referenced
 * here with <use>; this component receives no path geometry at all. Shipping the
 * 27 active outlines to the client so a selected country could be re-filled was
 * measured at 15.7 KB gzipped — twice the whole budget for this feature — so
 * selection is shown with a marker ring at the country's centroid instead.
 *
 * Three input modes, all reaching the same attribution:
 *
 *   Mouse    hover a country's hit area. A 150ms grace period on leaving stops
 *            the panel flickering as the pointer crosses borders.
 *   Touch    tap to pin. There is no hover on a phone, and hit areas at the
 *            scale of Bahrain or Qatar are far below any usable touch target, so
 *            the jurisdiction list below is the real touch control — it is a
 *            plain list of buttons at full row height, not a 4px country.
 *   Keyboard tab through the list in commission order (United Kingdom first),
 *            Enter or Space to pin, Escape to clear.
 *
 * SPEC DEVIATION — the specification proposed focusable SVG <path> elements.
 * tabindex on SVG children is inconsistently exposed across browsers and screen
 * readers, and a country path cannot carry a usable focus ring or an accessible
 * name reliably. The list delivers every stated requirement (keyboard reachable,
 * name announced, totals available, visible focus, Enter/Space, Escape, ordered
 * by commission count) with standard button semantics, and doubles as the touch
 * control. The map hit areas remain for the mouse.
 */

export type ActiveCountry = {
  m49: string;
  cx: number;
  cy: number;
  /** [x, y, width, height] pointer target, derived in <GeographyMap />. */
  hit: [number, number, number, number];
};

type Props = {
  symbolId: string;
  mapWidth: number;
  mapHeight: number;
  mobileFrame: MapFrame;
  geometry: ActiveCountry[];
  attribution: CountryAttribution[];
  title: string;
};

const LEAVE_GRACE_MS = 150;

const AREAS: PracticeAreaKey[] = ["disputes", "expert", "advisory"];

/**
 * The button's accessible name carries the whole summary, so a screen reader
 * user gets the figures on focus. The panel is therefore not a live region —
 * announcing it on every hover would talk over everything else on the page.
 */
function describe(c: CountryAttribution) {
  const areas = AREAS.filter((a) => c.byArea[a] > 0)
    .map((a) => `${AREA_LABELS[a]} ${c.byArea[a]}`)
    .join(", ");
  return `${c.name}: ${c.total} ${c.total === 1 ? "commission" : "commissions"}. ${areas}.`;
}

export default function GeographyExplorer({
  symbolId,
  mapWidth,
  mapHeight,
  mobileFrame,
  geometry,
  attribution,
  title,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [pinned, setPinned] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const byM49 = new Map(attribution.map((c) => [c.m49, c]));
  const country = selected ? (byM49.get(selected) ?? null) : null;

  const clearTimer = () => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  };

  const preview = useCallback((m49: string) => {
    clearTimer();
    setSelected((current) => (current === m49 ? current : m49));
  }, []);

  const release = useCallback(() => {
    if (pinned) return;
    clearTimer();
    leaveTimer.current = setTimeout(() => setSelected(null), LEAVE_GRACE_MS);
  }, [pinned]);

  const pin = useCallback((m49: string) => {
    clearTimer();
    setSelected(m49);
    setPinned(true);
  }, []);

  const clear = useCallback(() => {
    clearTimer();
    setSelected(null);
    setPinned(false);
  }, []);

  useEffect(() => () => clearTimer(), []);

  // Escape clears a pinned selection wherever focus sits inside the section;
  // a click outside the section clears it too.
  useEffect(() => {
    if (!pinned) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clear();
        rootRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) clear();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [pinned, clear]);

  /** Hit areas and the selection marker, drawn into whichever frame is visible. */
  const overlay = (scale: number) => (
    <g className="geo-overlay">
      {geometry.map((c) => (
        <rect
          key={c.m49}
          className="geo-hit"
          x={c.hit[0]}
          y={c.hit[1]}
          width={c.hit[2]}
          height={c.hit[3]}
          onMouseEnter={() => preview(c.m49)}
          onMouseLeave={release}
          onClick={() => pin(c.m49)}
        />
      ))}
      {geometry
        .filter((c) => c.m49 === selected)
        .map((c) => (
          <circle
            key={`marker-${c.m49}`}
            className="geo-marker"
            cx={c.cx}
            cy={c.cy}
            r={14 / scale}
            aria-hidden="true"
          />
        ))}
    </g>
  );

  const frame = (variant: "wide" | "narrow") => {
    const isWide = variant === "wide";
    const viewBox = isWide
      ? `0 0 ${mapWidth} ${mapHeight}`
      : `${mobileFrame.x} ${mobileFrame.y} ${mobileFrame.width} ${mobileFrame.height}`;
    // Marker radius is given in viewBox units, so it must be divided by how much
    // the frame magnifies the map or it grows with the crop.
    const scale = isWide ? 1 : mapWidth / mobileFrame.width;
    return (
      <div className={`geo-map-frame geo-map-frame-${variant}`}>
        <svg
          className="geo-map-svg"
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          onMouseLeave={release}
        >
          <title>{title}</title>
          <use href={`#${symbolId}`} />
          {overlay(scale)}
        </svg>
      </div>
    );
  };

  return (
    <div className="geo-map-layout" ref={rootRef} tabIndex={-1}>
      <div className="geo-map-frames">
        {frame("wide")}
        {frame("narrow")}
      </div>

      <div className="geo-map-aside">
        <GeographyPanel country={country} />

        <ul className="geo-list">
          {attribution.map((c) => (
            <li key={c.m49}>
              <button
                type="button"
                className={`geo-list-btn${c.m49 === selected ? " is-selected" : ""}`}
                aria-label={describe(c)}
                aria-pressed={c.m49 === selected && pinned}
                onFocus={() => preview(c.m49)}
                onBlur={release}
                onMouseEnter={() => preview(c.m49)}
                onMouseLeave={release}
                onClick={() => (pinned && selected === c.m49 ? clear() : pin(c.m49))}
              >
                <span className="geo-list-name">{c.name}</span>
                <span className="geo-list-count">{c.total}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
