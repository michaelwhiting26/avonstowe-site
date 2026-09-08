#!/usr/bin/env node
/**
 * Post-build output checks.
 *
 * Runs against the EMITTED HTML/JS in ./out rather than against source, because
 * that is what the public actually receives. Source-level greps miss content that
 * arrives via a JSON payload, a comment, or a bundled string.
 *
 * Exits non-zero on any failure, so `npm run build` fails.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const OUT = "out";

/* -------------------------------------------------------------------------- */

const FORBIDDEN = [
  // --- Removed credibility claims -----------------------------------------
  { re: /partner[-\s]led/i, why: "Partner-Led Delivery positioning was removed (§4.2)." },
  { re: /no delegation/i, why: "The no-delegation claim was removed as unverifiable (§4.1)." },

  // --- Neutral appointments (§4.3) ----------------------------------------
  // The bare word "arbitration" is legitimate — it is the forum the firm works in.
  // These target the marketing of NEUTRAL APPOINTMENTS specifically.
  { re: /\bas an? (adjudicator|arbitrator)\b/i, why: "Neutral appointment marketing." },
  { re: /\b(adjudicator|arbitrator)s? appointments?\b/i, why: "Neutral appointment marketing." },
  { re: /\baccepts? appointments? as\b/i, why: "Neutral appointment marketing." },
  { re: /\bDAAB\b/, why: "Dispute board appointments are not marketed." },
  { re: /\bDAB\b/, why: "Dispute board appointments are not marketed." },
  { re: /dispute (adjudication )?board/i, why: "Dispute board appointments are not marketed." },
  { re: /tribunal[- ]appointed/i, why: "Neutral appointment marketing." },

  // --- Removed page (§4.4) -------------------------------------------------
  { re: /geographic reach/i, why: "The Geographic Reach page was removed; use /experience." },

  // --- Confidential matter identifiers (§4.5, §11) -------------------------
  // Distinctive strings from the removed commission table. Their presence means
  // confidential matter data has leaked back into the public build.
  { re: /world cup/i, why: "Identifies a specific confidential matter." },
  { re: /bahrain bay/i, why: "Identifies a specific confidential matter." },
  { re: /forumClass/, why: "Commission table data structure leaked into the build." },
  { re: /Party Representative/i, why: "Commission table data leaked into the build." },
  { re: /Assistant Quantum Expert/i, why: "Commission table data leaked into the build." },

  // --- Tracking / analytics (§22) ------------------------------------------
  { re: /googletagmanager|google-analytics|gtag\(/i, why: "No Google Analytics or GTM." },
  { re: /connect\.facebook\.net|fbq\(/i, why: "No Meta Pixel." },
  { re: /static\.hotjar\.com|hj\(/i, why: "No Hotjar." },
  // Storage APIs are checked in CODE only. The cookie policy legitimately uses the
  // words "localStorage" and "sessionStorage" in prose to say we do not use them —
  // scanning rendered HTML for these would flag the policy for being accurate.
  { re: /document\.cookie/i, why: "The site must set no cookies.", scope: "code" },
  { re: /localStorage|sessionStorage/i, why: "The site must use no client-side storage.", scope: "code" },

  // --- Forms (§21) ---------------------------------------------------------
  { re: /formsubmit\.co/i, why: "The enquiry form and its backend were removed." },
  { re: /<form[\s>]/i, why: "The site must contain no forms." },

  // --- Third-party fonts (§26) ---------------------------------------------
  { re: /fonts\.googleapis\.com|fonts\.gstatic\.com/i, why: "No third-party font hosts." },

  // --- Unsubstantiated superlatives (§1) -----------------------------------
  {
    re: /\b(world-class|market-leading|industry-leading|best-in-class|unrivalled|globally recognised)\b/i,
    why: "Unsubstantiated superlative.",
  },
];

/** Files that must exist in the export. */
const REQUIRED = [
  "index.html",
  "what-we-do/index.html",
  "experience/index.html",
  "expert-support/index.html",
  "people/index.html",
  "contact/index.html",
  "privacy/index.html",
  "terms/index.html",
  "cookies/index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "CNAME",
];

/* -------------------------------------------------------------------------- */

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

let failures = 0;
const fail = (msg) => {
  console.error(`  ✗ ${msg}`);
  failures++;
};

console.log("\n[check-output] scanning ./out\n");

// 1. Required files present.
for (const rel of REQUIRED) {
  try {
    statSync(join(OUT, rel));
  } catch {
    fail(`missing expected output file: ${rel}`);
  }
}

// 2. Forbidden content.
const files = walk(OUT).filter((f) => [".html", ".js", ".txt", ".xml", ".json", ".css"].includes(extname(f)));
const isCode = (f) => [".js", ".css"].includes(extname(f));

for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const { re, why, scope } of FORBIDDEN) {
    if (scope === "code" && !isCode(file)) continue;
    const m = text.match(re);
    if (m) fail(`${file}: matched ${re} ("${m[0]}") — ${why}`);
  }
}

// Inline <script> blocks in HTML still need the code-scoped checks applied.
for (const file of files.filter((f) => extname(f) === ".html")) {
  const text = readFileSync(file, "utf8");
  const scripts = [...text.matchAll(/<script(?![^>]*application\/ld\+json)[^>]*>(.*?)<\/script>/gs)]
    .map((m) => m[1])
    // Next serialises page CONTENT into self.__next_f flight-payload scripts. That
    // is rendered text, not executable storage usage — the cookie policy's own
    // wording lands here. Executable inline scripts are what this check is for.
    .filter((s) => !s.includes("self.__next_f"))
    .join("\n");
  for (const { re, why, scope } of FORBIDDEN) {
    if (scope !== "code") continue;
    const m = scripts.match(re);
    if (m) fail(`${file} (inline script): matched ${re} ("${m[0]}") — ${why}`);
  }
}

// 3. Every page must carry a unique title and a canonical link.
// The 404 page legitimately inherits the site default title, so it is excluded
// from the uniqueness check but still checked for the rest.
const htmlPages = files.filter((f) => f.endsWith(".html") && !/(^|[/\\])404([/\\]|\.)/.test(f));
const titles = new Map();
for (const file of htmlPages) {
  const text = readFileSync(file, "utf8");

  const title = text.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!title) fail(`${file}: no <title>`);
  else if (titles.has(title)) fail(`${file}: duplicate <title> "${title}" (also ${titles.get(title)})`);
  else titles.set(title, file);

  if (!/rel="canonical"/.test(text)) fail(`${file}: no canonical link`);
  if (!/<meta name="description"/.test(text)) fail(`${file}: no meta description`);
  if (!/<h1[\s>]/.test(text)) fail(`${file}: no <h1>`);
}

// 4. Structured data must be present and valid JSON.
const home = readFileSync(join(OUT, "index.html"), "utf8");
const ld = home.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
if (!ld) {
  fail("index.html: no JSON-LD block");
} else {
  try {
    const parsed = JSON.parse(ld.replace(/\\u003c/g, "<"));
    const types = (parsed["@graph"] ?? []).map((n) => n["@type"]);
    if (!types.includes("ProfessionalService")) fail("JSON-LD: missing ProfessionalService");
    if (!types.includes("Person")) fail("JSON-LD: missing Person");
  } catch (e) {
    fail(`JSON-LD: invalid JSON (${e.message})`);
  }
}

/* -------------------------------------------------------------------------- */

if (failures > 0) {
  console.error(`\n[check-output] FAILED with ${failures} problem(s).\n`);
  process.exit(1);
}

console.log(`[check-output] OK — ${files.length} files scanned, ${htmlPages.length} pages verified.\n`);
