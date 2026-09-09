/**
 * W1 — generate lib/worldPaths.ts: Web Mercator country geometry, projected once
 * at build time so the site ships no map library, makes no network request and
 * needs no API key.
 *
 * Run manually after changing the frame or the source data:
 *   node scripts/build-world-map.mjs
 *
 * Projection notes (the reason the numbers below are what they are):
 *
 * Google Maps uses Web Mercator. In true Web Mercator the whole world is a
 * square, so a 2000-wide frame covering 360 degrees of longitude has a scale of
 * k = 2000 / 2*PI = 318.3099, and y(lat) = k * ln(tan(PI/4 + lat/2)).
 *
 * The frame is clipped to latitude +80 to -60 rather than the +/-83 the
 * specification suggested. That is not a compromise on the projection - the
 * geometry is untouched true Mercator - it is a choice of window, and it is the
 * window that makes the numbers work: y(+80) - y(-60) = 1194.7, so the frame is
 * 2000 x 1195, almost exactly the 2000 x 1200 the specification asked for.
 * Clipping at +/-83 instead would need a 2000 x 1743 frame, an unusably tall
 * section, to show empty ocean and the Greenland ice sheet.
 *
 * Every jurisdiction in the commission record falls inside +80/-60 except
 * Antarctica, which lib/locationMap.ts already marks as counted-but-not-drawn.
 */
import fs from "node:fs";
import path from "node:path";
import { feature } from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const world110 = require("world-atlas/countries-110m.json");
const world50 = require("world-atlas/countries-50m.json");

const WIDTH = 2000;
const NORTH = 80;
const SOUTH = -60;
const PRECISION = 2;

// W3 mobile frame. A full world at 375px makes the UK about 4x6 pixels, so the
// narrow layout shows a tighter window over the band that actually carries the
// work: the UK, northern Europe, North Africa, the Levant, the Gulf and as far
// east as Nepal and Sri Lanka. Countries whose geometry falls entirely outside
// it are reported as a count beneath the map, never silently hidden.
const MOBILE_WEST = -25;
const MOBILE_EAST = 85;
const MOBILE_NORTH = 70;
const MOBILE_SOUTH = -5;

const k = WIDTH / (2 * Math.PI);
const mercatorY = (lat) => k * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 180 / 2));
const HEIGHT = Math.round((mercatorY(NORTH) - mercatorY(SOUTH)) * 100) / 100;

const projection = geoMercator()
  .scale(k)
  .translate([WIDTH / 2, mercatorY(NORTH)])
  .clipExtent([
    [0, 0],
    [WIDTH, HEIGHT],
  ]);

const pathFor = geoPath(projection);

const mercatorX = (lon) => WIDTH / 2 + (k * lon * Math.PI) / 180;
const frameY = (lat) => mercatorY(NORTH) - mercatorY(lat);
const mobileFrame = {
  x: Math.round(mercatorX(MOBILE_WEST) * 100) / 100,
  y: Math.round(frameY(MOBILE_NORTH) * 100) / 100,
  width: Math.round((mercatorX(MOBILE_EAST) - mercatorX(MOBILE_WEST)) * 100) / 100,
  height: Math.round((frameY(MOBILE_SOUTH) - frameY(MOBILE_NORTH)) * 100) / 100,
};

/** Read lib/locationMap.ts without importing TypeScript: the m49 codes that must exist. */
function requiredM49() {
  const src = fs.readFileSync(path.join("lib", "locationMap.ts"), "utf8");
  const required = new Map();
  for (const m of src.matchAll(/m49: "(\d+)", country: "([^"]+)", render: (true|false)/g)) {
    if (m[3] === "true") required.set(m[1], m[2]);
  }
  return required;
}

const featuresById = new Map();
for (const f of feature(world110, world110.objects.countries).features) {
  featuresById.set(String(f.id), f);
}

// Micro-states that carry commissions but have no polygon at 1:110m are pulled
// from the 1:50m layer. Only the ones actually needed, so the byte cost is a few
// hundred bytes rather than a seven-fold increase across the whole world.
const fine = new Map();
for (const f of feature(world50, world50.objects.countries).features) {
  fine.set(String(f.id), f);
}

const required = requiredM49();
const ANTARCTICA = "010";

const rows = [];
const supplemented = [];
for (const [id, f] of featuresById) {
  if (id === ANTARCTICA) continue; // outside the frame; see locationMap.ts
  rows.push([id, f]);
}
for (const [id, name] of required) {
  if (featuresById.has(id)) continue;
  const f = fine.get(id);
  if (!f) {
    console.error(
      `FATAL: ${name} (m49 ${id}) carries commissions but has no geometry in either the 1:110m or 1:50m layer.`,
    );
    process.exit(1);
  }
  rows.push([id, f]);
  supplemented.push(`${name} (${id})`);
}

const round = (d) =>
  d.replace(/-?\d+\.?\d*/g, (n) => String(Math.round(Number(n) * 10 ** PRECISION) / 10 ** PRECISION));

const paths = [];
for (const [id, f] of rows) {
  const d = pathFor(f);
  if (!d) continue; // entirely outside the clip extent
  const [cx, cy] = pathFor.centroid(f);
  if (!Number.isFinite(cx) || !Number.isFinite(cy)) continue;
  // Projected bounding box, so "is this country visible in the mobile frame?"
  // is answered by geometry rather than by eye.
  const [[bx0, by0], [bx1, by1]] = pathFor.bounds(f);
  paths.push({
    m49: id,
    name: f.properties?.name ?? id,
    d: round(d),
    cx: Math.round(cx * 10) / 10,
    cy: Math.round(cy * 10) / 10,
    bbox: [bx0, by0, bx1, by1].map((n) => Math.round(n * 10) / 10),
  });
}
paths.sort((a, b) => a.name.localeCompare(b.name));

const missing = [...required.keys()].filter((id) => !paths.some((p) => p.m49 === id));
if (missing.length) {
  console.error(`FATAL: no rendered geometry for required m49 codes: ${missing.join(", ")}`);
  process.exit(1);
}

const out = `// AUTO-GENERATED.
// Do not edit manually.
// Generated by scripts/build-world-map.mjs from Natural Earth via world-atlas
// (1:110m, supplemented from 1:50m for micro-states carrying commissions).
// Natural Earth is public domain.
//
// Projection: Web Mercator, frame ${WIDTH} x ${HEIGHT}, latitude +${NORTH} to ${SOUTH}.

export type CountryPath = {
  /** Numeric ISO 3166-1 code — the identifier the source geometry carries. */
  m49: string;
  name: string;
  /** SVG path data in the ${WIDTH} x ${HEIGHT} projected frame. */
  d: string;
  /** Projected centroid, used to anchor touch targets. */
  cx: number;
  cy: number;
  /** Projected bounds [x0, y0, x1, y1], used to test visibility in a frame. */
  bbox: [number, number, number, number];
};

/** Rectangle of the projected frame shown on narrow viewports. */
export type MapFrame = { x: number; y: number; width: number; height: number };

export const MAP_WIDTH = ${WIDTH};
export const MAP_HEIGHT = ${HEIGHT};

/** Longitude ${MOBILE_WEST} to ${MOBILE_EAST}, latitude ${MOBILE_NORTH} to ${MOBILE_SOUTH}. */
export const MOBILE_FRAME: MapFrame = ${JSON.stringify(mobileFrame)};

export const worldPaths: CountryPath[] = ${JSON.stringify(paths, null, 2)};
`;

fs.writeFileSync(path.join("lib", "worldPaths.ts"), out);

const bytes = Buffer.byteLength(paths.map((p) => p.d).join(""), "utf8");
const gz = require("node:zlib").gzipSync(Buffer.from(paths.map((p) => p.d).join(""))).length;
console.log(`Wrote lib/worldPaths.ts — ${paths.length} countries, frame ${WIDTH}x${HEIGHT}`);
if (supplemented.length) console.log(`Supplemented from 1:50m: ${supplemented.join(", ")}`);
console.log(`Path data: ${(bytes / 1024).toFixed(1)} KB raw, ${(gz / 1024).toFixed(1)} KB gzipped`);
