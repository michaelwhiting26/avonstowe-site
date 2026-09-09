/**
 * W5 — generate lib/geoAttribution.ts from lib/commissions.ts via lib/locationMap.ts.
 *
 *   node scripts/build-geo-attribution.mjs
 *
 * Nothing here is hand-typed. lib/commissions.ts is the evidence and is never
 * modified; this reads it and aggregates. The script exits non-zero if a location
 * string has no mapping, or if the totals fail to reconcile, so the map cannot
 * quietly drift away from the record it claims to represent.
 */
import fs from "node:fs";
import path from "node:path";

const AREAS = ["disputes", "expert", "advisory"];
const AREA_LABELS = {
  disputes: "Claims & Disputes",
  expert: "Expert Witness",
  advisory: "Project Advisory",
};

function readCommissions() {
  const src = fs.readFileSync(path.join("lib", "commissions.ts"), "utf8");
  const out = {};
  for (const m of src.matchAll(/export const (\w+): Commission\[\] = (\[[\s\S]*?\n\];)/g)) {
    out[m[1]] = JSON.parse(m[2].replace(/;\s*$/, ""));
  }
  for (const area of AREAS) {
    if (!out[area]) {
      console.error(`FATAL: lib/commissions.ts has no "${area}" array.`);
      process.exit(1);
    }
  }
  return out;
}

/**
 * lib/locationMap.ts is TypeScript, so it is parsed rather than imported. The
 * shape is deliberately regular to make that safe, and every field is asserted
 * below so a malformed entry fails loudly instead of being skipped.
 */
function readLocationMap() {
  const src = fs.readFileSync(path.join("lib", "locationMap.ts"), "utf8");
  const body = src.slice(src.indexOf("export const locationMap"));
  const entries = [];
  for (const m of body.matchAll(/\{\s*source: "((?:[^"\\]|\\.)*)",([\s\S]*?)\},\n/g)) {
    const source = m[1];
    const rest = m[2];
    const field = (name) => rest.match(new RegExp(`${name}: "((?:[^"\\\\]|\\\\.)*)"`))?.[1];
    const type = field("type");
    if (type === "excluded") {
      entries.push({ source, type, reason: field("reason") });
    } else {
      entries.push({
        source,
        type,
        iso: field("iso"),
        m49: field("m49"),
        country: field("country"),
        render: /render: true/.test(rest),
      });
    }
  }
  return entries;
}

const commissions = readCommissions();
const mappings = readLocationMap();
const bySource = new Map(mappings.map((e) => [e.source, e]));

if (bySource.size !== mappings.length) {
  console.error("FATAL: lib/locationMap.ts contains duplicate source strings.");
  process.exit(1);
}

const totalRows = AREAS.reduce((n, a) => n + commissions[a].length, 0);

// --- Aggregate ------------------------------------------------------------
const countries = new Map();
const excluded = new Map();
const unmapped = new Set();

for (const area of AREAS) {
  for (const row of commissions[area]) {
    const mapping = bySource.get(row.location);
    if (!mapping) {
      unmapped.add(row.location);
      continue;
    }
    if (mapping.type === "excluded") {
      const e = excluded.get(mapping.source) ?? { source: mapping.source, reason: mapping.reason, count: 0 };
      e.count += 1;
      excluded.set(mapping.source, e);
      continue;
    }
    const c =
      countries.get(mapping.m49) ??
      {
        m49: mapping.m49,
        iso: mapping.iso,
        name: mapping.country,
        render: mapping.render,
        total: 0,
        byArea: { disputes: 0, expert: 0, advisory: 0 },
        forums: new Set(),
        roles: new Set(),
      };
    c.total += 1;
    c.byArea[area] += 1;
    if (row.forum) c.forums.add(row.forum);
    if (row.role) c.roles.add(row.role);
    countries.set(mapping.m49, c);
  }
}

if (unmapped.size) {
  console.error(
    `FATAL: ${unmapped.size} location string(s) in lib/commissions.ts have no entry in lib/locationMap.ts:\n` +
      [...unmapped].map((s) => `  - ${s}`).join("\n") +
      "\nAdd a country, merge or excluded mapping. Do not delete the commission.",
  );
  process.exit(1);
}

// Mappings that exist but match nothing would be dead weight and usually mean a
// typo against the commission data.
const usedSources = new Set();
for (const area of AREAS) for (const row of commissions[area]) usedSources.add(row.location);
const orphans = mappings.filter((m) => !usedSources.has(m.source));
if (orphans.length) {
  console.error(
    `FATAL: lib/locationMap.ts maps ${orphans.length} string(s) that appear in no commission: ` +
      orphans.map((o) => o.source).join(", "),
  );
  process.exit(1);
}

// --- Invariants -----------------------------------------------------------
for (const c of countries.values()) {
  const sum = c.byArea.disputes + c.byArea.expert + c.byArea.advisory;
  if (sum !== c.total) {
    console.error(`FATAL: ${c.name} total ${c.total} != ${sum} across practice areas.`);
    process.exit(1);
  }
}
const mappedTotal = [...countries.values()].reduce((n, c) => n + c.total, 0);
const excludedTotal = [...excluded.values()].reduce((n, e) => n + e.count, 0);
if (mappedTotal + excludedTotal !== totalRows) {
  console.error(
    `FATAL: reconciliation failed. mapped ${mappedTotal} + excluded ${excludedTotal} != ${totalRows} rows.`,
  );
  process.exit(1);
}

// --- Emit -----------------------------------------------------------------
const list = [...countries.values()]
  .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name))
  .map((c) => ({
    m49: c.m49,
    iso: c.iso,
    name: c.name,
    render: c.render,
    total: c.total,
    byArea: c.byArea,
    forums: [...c.forums].sort(),
    roles: [...c.roles].sort(),
  }));

const overall = {
  commissions: totalRows,
  jurisdictions: list.length,
  byArea: AREAS.reduce((acc, a) => ({ ...acc, [a]: commissions[a].length }), {}),
};

const out = `// AUTO-GENERATED.
// Do not edit manually.
// Generated by scripts/build-geo-attribution.mjs from lib/commissions.ts,
// reconciled through lib/locationMap.ts. Every figure below is a count of rows
// in the commission record — nothing is authored.

export type PracticeAreaKey = "disputes" | "expert" | "advisory";

export type CountryAttribution = {
  m49: string;
  iso: string;
  name: string;
  /** false where the jurisdiction is counted but deliberately not drawn. */
  render: boolean;
  total: number;
  byArea: Record<PracticeAreaKey, number>;
  forums: string[];
  roles: string[];
};

export const AREA_LABELS: Record<PracticeAreaKey, string> = ${JSON.stringify(AREA_LABELS, null, 2)};

export const OVERALL = ${JSON.stringify(overall, null, 2)};

/** Commissions whose recorded location is not a single jurisdiction. */
export const NON_JURISDICTIONAL: { source: string; reason: string; count: number }[] = ${JSON.stringify(
  [...excluded.values()].sort((a, b) => b.count - a.count),
  null,
  2,
)};

export const geoAttribution: CountryAttribution[] = ${JSON.stringify(list, null, 2)};

/** m49 codes drawn as active on the map. */
export const ACTIVE_M49: string[] = ${JSON.stringify(list.filter((c) => c.render).map((c) => c.m49))};
`;

fs.writeFileSync(path.join("lib", "geoAttribution.ts"), out);

console.log(`Wrote lib/geoAttribution.ts`);
console.log(`  ${totalRows} commissions = ${mappedTotal} mapped + ${excludedTotal} non-jurisdictional`);
console.log(`  ${list.length} jurisdictions, ${list.filter((c) => c.render).length} drawn`);
for (const e of [...excluded.values()].sort((a, b) => b.count - a.count)) {
  console.log(`  excluded: ${e.source} (${e.count}) — ${e.reason}`);
}
const notDrawn = list.filter((c) => !c.render);
for (const c of notDrawn) console.log(`  counted but not drawn: ${c.name} (${c.total})`);
