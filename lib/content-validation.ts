/**
 * Build-time content invariants.
 *
 * `assertContentValid()` is called at module scope in app/layout.tsx, so it runs
 * during `next build` for every page. An error throws and fails the build; warnings
 * are printed to the build log.
 *
 * This is deliberately a build-time gate rather than a lint rule or a checklist:
 * the conditions it guards (publishing a person without evidenced consent, shipping
 * a cookie policy that contradicts the code) are not things anyone should have to
 * remember to check.
 */

import { validatePeopleContent, type ValidationIssue } from "@/lib/consent";
import { services } from "@/content/services";
import { sectors } from "@/content/experience";
import { site } from "@/content/site";

/**
 * Terms that must never appear in public content.
 *
 * Neutral-appointment marketing is prohibited outright (the firm is positioned
 * party-side only), as are the removed credibility claims.
 *
 * NOTE ON "arbitration": the bare word is legitimate and expected — "international
 * arbitration" describes the forum Avonstowe works in. What is prohibited is
 * marketing an APPOINTMENT as a neutral. Hence the phrase-level patterns below
 * rather than a blanket keyword ban.
 */
const PROHIBITED_PATTERNS: { pattern: RegExp; why: string }[] = [
  { pattern: /partner[-\s]led/i, why: "Partner-Led Delivery positioning was removed." },
  { pattern: /no delegation/i, why: "The no-delegation claim was removed as unverifiable." },
  { pattern: /\bas (an? )?(adjudicator|arbitrator)\b/i, why: "Neutral appointments are not marketed." },
  { pattern: /\b(adjudicator|arbitrator) appointments?\b/i, why: "Neutral appointments are not marketed." },
  { pattern: /\baccept appointments? as\b/i, why: "Neutral appointments are not marketed." },
  { pattern: /\bDAAB?\b/, why: "Dispute board appointments are not marketed." },
  { pattern: /dispute (board|adjudication board)/i, why: "Dispute board appointments are not marketed." },
  { pattern: /geographic reach/i, why: "The Geographic Reach page was removed; use /experience." },
  { pattern: /\b(world-class|market-leading|industry-leading|best-in-class|unrivalled|premier)\b/i, why: "Unsubstantiated superlative." },
];

function scanForProhibited(label: string, text: string, issues: ValidationIssue[]): void {
  for (const { pattern, why } of PROHIBITED_PATTERNS) {
    if (pattern.test(text)) {
      issues.push({
        level: "error",
        where: label,
        message: `contains prohibited term matching ${pattern}. ${why}`,
      });
    }
  }
}

export function collectContentIssues(): ValidationIssue[] {
  const issues: ValidationIssue[] = [...validatePeopleContent()];

  for (const s of services) {
    scanForProhibited(`services: ${s.slug}`, `${s.title} ${s.summary} ${s.body} ${s.scope.join(" ")}`, issues);

    // Brief requires ~100–140 words of substantive copy per service line.
    const words = s.body.trim().split(/\s+/).length;
    if (words < 90 || words > 150) {
      issues.push({
        level: "warning",
        where: `services: ${s.slug}`,
        message: `body is ${words} words; target is roughly 100–140.`,
      });
    }
  }

  for (const sector of sectors) {
    scanForProhibited(
      `experience: ${sector.title}`,
      `${sector.title} ${sector.detail} ${sector.work} ${sector.regions}`,
      issues,
    );
  }

  scanForProhibited("site: positioning", `${site.positioning.headline} ${site.positioning.supporting}`, issues);

  if (!site.contact.email.includes("@")) {
    issues.push({ level: "error", where: "site: contact", message: "a contact email is required." });
  }

  return issues;
}

let hasRun = false;

export function assertContentValid(): void {
  // next build evaluates layout modules more than once; only report on the first.
  if (hasRun) return;
  hasRun = true;

  const issues = collectContentIssues();
  const errors = issues.filter((i) => i.level === "error");
  const warnings = issues.filter((i) => i.level === "warning");

  if (warnings.length > 0) {
    console.warn(`\n[content] ${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  ! ${w.where} — ${w.message}`);
    console.warn("");
  }

  if (errors.length > 0) {
    const detail = errors.map((e) => `  ✗ ${e.where} — ${e.message}`).join("\n");
    throw new Error(`Content validation failed with ${errors.length} error(s):\n${detail}\n`);
  }
}
