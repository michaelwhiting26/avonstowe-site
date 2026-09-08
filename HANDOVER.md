# Avonstowe website — rev 1 engineering handover

Branch: `rebuild-rev1`. The previous live site is untouched on `main` (tag `rev0-live`).

---

## A. Changes made

### Architecture

Rebuilt from a single-page app with modal overlays into a nine-route static site.

| Before | After |
| --- | --- |
| One page (`/`) + JS-driven overlays for legal pages | Nine real routes, each independently addressable and indexable |
| 1,391-line hand-written CSS | Tailwind CSS v4, tokens in `app/globals.css` |
| `lenis`, `motion` (smooth scroll, animation) | Removed. Runtime deps are `next`, `react`, `react-dom` only |
| Google Fonts via `next/font` (Cormorant + Inter) | System font stacks. No webfont downloaded at all |
| 9 client components (cursor, scroll progress, overlays, counters) | 1 client component (`SiteNav`); everything else is a Server Component |
| Business copy embedded in JSX | All copy in typed `content/*.ts` |

### Routes

`/` · `/what-we-do` · `/experience` · `/expert-support` · `/people` · `/contact` ·
`/privacy` · `/terms` · `/cookies`, plus `sitemap.xml`, `robots.txt` and a styled 404.

### Content restructuring

- **Positioning** replaced with the mandated hero: *"Forensic quantum and delay
  analysis for international construction and engineering disputes"* / *"FIDIC,
  process plant and energy. Middle East, Asia-Pacific and the UK."*
- **`/experience`** replaces both the public commission tables and the Geographic
  Reach page. Five sectors, three contract-form entries, five regions, ten claim
  types — all derived from the 276-row commission record, aggregated to a level
  that cannot identify a matter.
- **`/expert-support`** built as a first-class service page with its own navigation
  slot: proposition, audience, the independence boundary, three workstream groups,
  assignment model (60–120 days framed as illustrative), and engagement basis.
  No day rate.
- **Service lines** rewritten to 100–140 words each, party-side only.

### Consent system

Typed consent model in `content/people.ts`, enforced centrally in `lib/consent.ts`:

- Renders only where `status === "granted"`, and only fields in `consent.scope`.
- `pending` / `declined` people never reach the HTML — no placeholder of any kind.
- `granted` + empty `evidenceRef` **fails the build**. *Verified: a deliberate
  violation was introduced during development and the build failed with the
  expected error, then the violation was removed.*
- Affiliation carries separate `verified` / `sourceRef` / `verifiedDateISO` fields.
  An unverified affiliation is withheld **even where consent covers it** — consent
  governs permission, verification governs accuracy, and both must hold.
- Pages call `getPublishablePanelMembers()` / `getPublishableLead()`. No page
  implements its own consent logic.

### Privacy / analytics

No analytics, no tag manager, no pixels, no cookies, **no client-side storage at
all**. The only storage in the old site was the cookie banner remembering its own
dismissal — circular, so removing the banner made the site genuinely storage-free.
`/cookies` now describes that accurately rather than reciting a template.

### Structured data

JSON-LD `@graph` with `ProfessionalService` and `Person` cross-referenced by `@id`.
Built from consent-filtered fields, so an unconsented field cannot leak via schema.
Deliberately omits `aggregateRating`, `review`, `award`, `priceRange` and
`foundingDate` — none is evidenced.

### Performance

Static export, one hydrating component, no webfonts, no third-party requests,
explicit image dimensions.

---

## B. Deleted material

| Removed | Reason |
| --- | --- |
| "Every instruction is led and executed by senior experts — no delegation" | Names no expert; unverifiable; contradicts the analyst model (§4.1) |
| "Partner-Led Delivery" | Not independently meaningful or verifiable (§4.2) |
| All adjudicator / arbitrator / neutral marketing | Party-side positioning (§4.3). 58 adjudicator and 1 arbitrator commissions removed from public content |
| Geographic Reach page/section | Folded into `/experience` (§4.4) |
| `lib/commissions.ts` — 276 named matters | Confidential. Included identifying entries such as World Cup infrastructure and named bay developments (§4.5) |
| `CommissionTable`, `CommissionCards`, `CommissionsOverlay` | Rendered the above |
| Cookie banner + its localStorage key | No non-essential storage remains (§4.6) |
| Enquiry form + FormSubmit backend + honeypot | Third-party processing risk for privileged material (§21) |
| `CustomCursor`, `ScrollProgress`, `BackToTop`, `CountUp`, `SmoothScroll`, `MagneticButton`, `Motion` | Decorative; contrary to the restrained direction (§25) |
| `lenis`, `motion` packages | No longer used |
| `next/font` Google Fonts | Third-party font loading (§26) |

Nothing confidential was retained in comments, hidden UI, source maps or JSON
payloads — `scripts/check-output.mjs` scans the built output for it on every build.

**Nothing was deleted destructively.** The commission data remains in git history
on `main` and on tag `rev0-live`.

---

## C. Verification required before launch

These are factual items I could not verify and would not invent.

**Resolved on 15 August 2026** from the subject's own CV of record (July 2026):

- [x] ~~Supply Michael's credentials.~~ Added: RICS Registered Expert Witness,
      BSc (Hons) Quantity Surveying (LSBU), LLB (Hons) University of London (in
      progress), Forensic Quantum Analysis and Forensic Schedule Analysis (College
      of Contract Management, in progress), member of the Society of Construction
      Law. Post-nominal `BSc (Hons)` added. HNC and BTEC deliberately omitted — the
      BSc supersedes them and listing all three reads as padding.
- [x] ~~Confirm JCT and PFI.~~ Both evidenced and added, along with NEC4.
- [x] ~~Confirm FIDIC experience.~~ Evidenced at family level. Still published
      **unqualified** — no Book, no edition — because the source evidences FIDIC
      generally and nothing more specific. Do not tighten this without documents.
- [x] ~~Davies Kelly affiliation is stale.~~ It is **not** stale — it is current as
      at July 2026. The earlier note to the contrary has been corrected in
      `content/people.ts`. See the new conflict item below.

**Still open:**

- [ ] **Approve a headshot.** Set `photoPath` and add `"photo"` to `consent.scope`.
      The hero and profile card already handle the image; it simply does not render
      while absent. **This is now the only gap in the lead profile.**
- [ ] **Resolve the competing-engagement question.** The CV of record shows a
      current consultancy engagement with another disputes firm (2022–present).
      Avonstowe marketing expert support to other appointed experts may engage
      outside-work, restraint or client-solicitation terms in that arrangement.
      That firm's name is deliberately **not** published on this site. This is a
      commercial and legal question, not a build one, but it gates go-to-market.
- [ ] **Confirm the job title.** "Founder" reflects the role as principal of
      Avonstowe. Minor.
- [ ] **Confirm the UAE legal entity.** "Avonstowe FZ LLC" is carried over from the
      old privacy notice and footer, unverified against a licence or registry extract.
- [ ] **Confirm a public telephone number**, or confirm email-only contact is intended.
      No number appears anywhere in the source material, so none was published.
- [ ] **Confirm software/tooling.** Excel, Power BI, P6, Asta and document-review
      platforms were all omitted — none is evidenced, including in the CV of record.
      Populate `expertSupport.software` and the section renders itself.
- [ ] **Confirm the data protection regime.** The notice cites UK GDPR / DPA 2018,
      inherited from the old site, while the entity is a Dubai free-zone company.
      UAE PDPL may also apply.
- [ ] **Confirm governing law for the website terms** (currently England and Wales,
      inherited).
- [ ] **Per panel member**, before adding anyone: written consent, date, exact scope,
      and a reference to where the consent record is held — plus independent
      verification of their current affiliation. Any "Davies Kelly" affiliation in
      historic CV material is treated as stale and must not be relied on.

---

## D. Build results

Everything below was actually run on this branch.

| Check | Command | Result |
| --- | --- | --- |
| Typecheck | `npx tsc --noEmit` | **Pass**, 0 errors (strict) |
| Lint | `npx next lint` | **Pass**, 0 warnings, 0 errors |
| Production build | `npm run build` | **Pass**, 16 routes, static export |
| Output checks | `scripts/check-output.mjs` | **Pass**, 50 files scanned, 9 pages verified |
| Consent build gate | deliberate violation | **Fails the build as designed**, then restored |
| Console | all 9 pages | No errors, no warnings, no hydration mismatches |

**Content warnings (intentional, non-blocking):** two — lead professional has no
credentials, and no approved photograph. Both are the launch items in section C.

### Layout / accessibility QA

Measured in-browser across **375 / 768 / 1024 / 1440**, all nine pages:

- Horizontal overflow: **none** on any page at any width.
- Named lead professional fully above the fold on all four widths — including
  375×667, where it sits at 510–558px. *This failed first time (byline landed at
  705px, below the fold); fixed by promoting the byline above the CTAs on mobile
  via flex ordering, which holds even when the headline reflows.*
- Contrast: **all text passes WCAG AA** (4.5:1 body, 3:1 large).
- Exactly one `<h1>` per page, no heading-level jumps, landmarks present, every
  link has an accessible name, all images have `alt`.

### Performance

| Metric | Value |
| --- | --- |
| First Load JS | 102 kB shared; 111 kB home, 102–106 kB elsewhere |
| HTML (gzipped) | ~7 kB |
| CSS (gzipped) | ~4 kB |
| External requests | **0** — no fonts, scripts, pixels or CDNs |
| CLS | **0** across all pages measured |
| domInteractive / load | ~56–63 ms / ~250–310 ms (localhost) |

**Not measured: Lighthouse scores and LCP.** Lighthouse is not installed in this
environment, and paint-timing entries were not retrievable through the automation
context, so I have no genuine figures and have not estimated any. The structural
prerequisites for the §29 targets are in place (no webfonts, no third-party
scripts, no client fetching, explicit image dimensions, near-zero JS), but the
scores themselves need a real Lighthouse run against a deployed URL.

---

## E. How to undo all of this

The live site is untouched. To go back exactly as it was:

```bash
cd ~/avonstowe-site
git checkout main          # rev 1 disappears; the old site returns
```

- `main` sits at `24bd31a`, tagged **`rev0-live`** — byte-for-byte what was deployed.
- Your in-progress jurisdiction-map work is preserved on branch `wip/jurisdiction-map`.
- To delete rev 1 entirely: `git branch -D rebuild-rev1`.
- To publish rev 1 instead: merge `rebuild-rev1` into `main`, then re-enable GitHub
  Pages (Settings → Pages → Source: GitHub Actions) and re-enable the deploy workflow.

Note that GitHub Pages is currently **disabled** and the deploy workflow is
`disabled_manually`, so neither branch deploys until you turn them back on.
