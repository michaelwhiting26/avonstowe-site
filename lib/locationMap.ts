/**
 * W0 — location reconciliation. The single source of truth that turns the free-text
 * `location` field in lib/commissions.ts into a jurisdiction that can be drawn.
 *
 * Every distinct location string in the commission record MUST appear here exactly
 * once. scripts/build-geo-attribution.mjs fails the build if it meets a string that
 * is missing, so a new commission cannot silently vanish from the map.
 *
 * `m49` is the numeric ISO 3166-1 code, because that is the identifier the
 * Natural Earth / world-atlas geometry actually carries. `iso` is the alpha-2 code,
 * used for readable keys in the derived attribution data. Both are stated
 * explicitly rather than derived, so every join is auditable.
 */

export type LocationMapping =
  | {
      /** The exact string as it appears in lib/commissions.ts. */
      source: string;
      /** Resolves to its own jurisdiction. */
      type: "country";
      iso: string;
      m49: string;
      country: string;
      /** false where the jurisdiction is counted but deliberately not drawn. */
      render: boolean;
      note?: string;
    }
  | {
      source: string;
      /** Resolves to another jurisdiction and is counted against it. */
      type: "merge";
      iso: string;
      m49: string;
      country: string;
      render: boolean;
      note: string;
    }
  | {
      source: string;
      /** Not a single jurisdiction; counted separately, never drawn. */
      type: "excluded";
      reason: string;
    };

export const locationMap: LocationMapping[] = [
  // --- Resolve directly to one jurisdiction -------------------------------
  { source: "United Kingdom", type: "country", iso: "GB", m49: "826", country: "United Kingdom", render: true },
  { source: "UAE", type: "country", iso: "AE", m49: "784", country: "United Arab Emirates", render: true },
  { source: "Qatar", type: "country", iso: "QA", m49: "634", country: "Qatar", render: true },
  { source: "Saudi Arabia", type: "country", iso: "SA", m49: "682", country: "Saudi Arabia", render: true },
  { source: "Morocco", type: "country", iso: "MA", m49: "504", country: "Morocco", render: true },
  { source: "Oman", type: "country", iso: "OM", m49: "512", country: "Oman", render: true },
  { source: "Denmark", type: "country", iso: "DK", m49: "208", country: "Denmark", render: true },
  { source: "Kazakhstan", type: "country", iso: "KZ", m49: "398", country: "Kazakhstan", render: true },
  { source: "Sri Lanka", type: "country", iso: "LK", m49: "144", country: "Sri Lanka", render: true },
  { source: "South Africa", type: "country", iso: "ZA", m49: "710", country: "South Africa", render: true },
  { source: "Australia", type: "country", iso: "AU", m49: "036", country: "Australia", render: true },
  { source: "Bahamas", type: "country", iso: "BS", m49: "044", country: "The Bahamas", render: true },
  { source: "Germany", type: "country", iso: "DE", m49: "276", country: "Germany", render: true },
  { source: "Nepal", type: "country", iso: "NP", m49: "524", country: "Nepal", render: true },
  { source: "Egypt", type: "country", iso: "EG", m49: "818", country: "Egypt", render: true },
  { source: "Canada", type: "country", iso: "CA", m49: "124", country: "Canada", render: true },
  { source: "Russia", type: "country", iso: "RU", m49: "643", country: "Russia", render: true },
  { source: "Nigeria", type: "country", iso: "NG", m49: "566", country: "Nigeria", render: true },
  { source: "Poland", type: "country", iso: "PL", m49: "616", country: "Poland", render: true },
  { source: "Israel", type: "country", iso: "IL", m49: "376", country: "Israel", render: true },
  { source: "Finland", type: "country", iso: "FI", m49: "246", country: "Finland", render: true },
  { source: "Iraq", type: "country", iso: "IQ", m49: "368", country: "Iraq", render: true },
  { source: "Turkey", type: "country", iso: "TR", m49: "792", country: "Turkey", render: true },
  { source: "Sweden", type: "country", iso: "SE", m49: "752", country: "Sweden", render: true },

  // Present in the 1:110m base layer only as a micro-state; geometry is taken
  // from the 1:50m layer by the build script so the jurisdiction can be drawn.
  { source: "Bahrain", type: "country", iso: "BH", m49: "048", country: "Bahrain", render: true,
    note: "No polygon at 1:110m. Geometry sourced from the 1:50m layer." },
  { source: "Barbados", type: "country", iso: "BB", m49: "052", country: "Barbados", render: true,
    note: "No polygon at 1:110m. Geometry sourced from the 1:50m layer." },

  // --- Merges -------------------------------------------------------------
  { source: "Doha", type: "merge", iso: "QA", m49: "634", country: "Qatar", render: true,
    note: "Doha is a city, not a jurisdiction. Counted against Qatar." },
  { source: "Sark", type: "merge", iso: "GG", m49: "831", country: "Guernsey", render: true,
    note: "Sark is a Channel Island within the Bailiwick of Guernsey — a Crown Dependency, not part of the United Kingdom, so it is not merged into GB. Geometry sourced from the 1:50m layer." },

  // --- Counted but deliberately not drawn ---------------------------------
  { source: "Antarctica", type: "country", iso: "AQ", m49: "010", country: "Antarctica", render: false,
    note: "Outside the map's latitude frame (-60 to +80). Reported in the off-map count, never silently dropped." },

  // --- Not a single jurisdiction ------------------------------------------
  { source: "Worldwide", type: "excluded", reason: "Global scope; no single jurisdiction." },
  { source: "GCC", type: "excluded", reason: "Multi-state region, not a jurisdiction." },
  { source: "Caribbean", type: "excluded", reason: "Multi-state region, not a jurisdiction." },
  { source: "North Sea", type: "excluded", reason: "Maritime area; no land jurisdiction." },
  { source: "Unknown", type: "excluded", reason: "Location not recorded in the commission data." },
];
