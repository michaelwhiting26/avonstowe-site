/**
 * The regions the map covers.
 *
 * This is a COVERAGE map, not an evidence map — the same thing Hanscomb
 * Intercontinental publishes. It states where Avonstowe works, at region level.
 * It does not claim a matter in every country shown, and no reader of a coverage
 * map reads it that way. The per-matter evidence lives in Selected Matters,
 * which names the forum, jurisdiction and heads in issue for each one.
 *
 * ==========================================================================
 * TO OPEN A NEW REGION: set `published: true`. That is the whole change.
 * ==========================================================================
 * Each region carries its own geographic bounds, so the map never needs a
 * separate window adjusting alongside it. The bounds exist because Natural Earth
 * ships overseas territories inside their parent country's polygon — French
 * Guiana travels with France, Svalbard with Norway — and without them, filling
 * Europe paints brass onto South America and the Arctic.
 */
export type Region = {
  name: string;
  /** Whole continents, as assigned in lib/worldPaths.ts. */
  continents?: string[];
  /** Named countries, for regions that are not continents. */
  countries?: string[];
  /** [west, south, east, north] in degrees. Subpaths outside this are dropped. */
  bounds: [number, number, number, number];
  published: boolean;
};

export const REGIONS: Region[] = [
  {
    name: "United Kingdom and Europe",
    continents: ["Europe"],
    bounds: [-32, 34, 45, 72],
    published: true,
  },
  {
    name: "Africa",
    continents: ["Africa"],
    bounds: [-26, -36, 52, 38],
    published: true,
  },
  {
    name: "Middle East",
    countries: [
      "Bahrain",
      "Iraq",
      "Israel",
      "Jordan",
      "Kuwait",
      "Lebanon",
      "Oman",
      "Palestine",
      "Qatar",
      "Saudi Arabia",
      "Syria",
      "Turkey",
      "United Arab Emirates",
      "Yemen",
    ],
    bounds: [24, 11, 64, 43],
    published: true,
  },
  {
    // Opens with CCR, and behind them Plus 3 in Malaysia, Hong Kong and
    // Singapore, and Quantum Global Solutions.
    name: "Asia",
    continents: ["Asia"],
    bounds: [25, -12, 150, 56],
    published: false,
  },
  {
    name: "Asia-Pacific",
    continents: ["Oceania"],
    bounds: [110, -48, 180, -8],
    published: false,
  },
  {
    name: "North America",
    continents: ["North America"],
    bounds: [-170, 7, -52, 72],
    published: false,
  },
];

/**
 * Russia sits in the Europe group but spans to the Pacific. Filling it would put
 * a landmass wider than the rest of Europe inside a claim about Europe, the
 * Middle East and Africa. Excluded until Asia opens, at which point revisit.
 */
export const EXCLUDED_FROM_MAP = ["Russia"] as const;

/**
 * Where the practice is based. Marked on the map with a single point — the only
 * thing on it that is a place rather than a region.
 */
export const HEADQUARTERS = {
  m49: "784",
  country: "United Arab Emirates",
  label: "Headquarters",
} as const;
