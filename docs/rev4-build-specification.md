# rev4 — Build Specification

**Branch:** `rev4` (from `rev3` @ `fabf2c0`, which is the rev0 lineage — *not* rev1/rev2)
**Worktree:** `~/avonstowe-rev4` · dev server `localhost:3010`
**Date:** 10 September 2026
**Objective:** take rev4 from a three-service site with a quantum headline to a single-discipline
forensic quantum practice whose credibility chain holds end to end.

---

## 0. The target

The competitor study (`docs/competitor-analysis/13_market_patterns.md`, section E) found that every
site which works follows the same five-link chain, and that failures are always failures of a
specific link:

```
claim  →  proof  →  person  →  reassurance  →  contact
```

| Link | rev4 today | Required |
|---|---|---|
| 1 Claim | **Done** — "Forensic quantum analysis for construction and engineering disputes" | — |
| 2 Proof | **Strong** — 276 commissions, 27 jurisdictions, a map. No competitor in the study publishes a matter record at all | Attribute it (WP0-A) |
| 3 Person | **Absent.** rev4 has no people section and no name anywhere | Build (WP5) |
| 4 Reassurance | **Partial** — entity details in the footer only. No stated method | Build (WP6) |
| 5 Contact | **Weak** — form and email, no telephone | Strengthen (WP7) |

Two contradictions must also go: the site currently carries **three different service taxonomies**
(hero eyebrow, practice-area tabs, service index), which is the loudest defect on the page.

### The finding that shapes the whole build

**Links 3 and 4 already exist, written, on the `rev2` branch.**

- `content/method.ts` — four method points, drawn from the firm's written drafting standard.
- `content/people.ts` — the lead profile with post-nominals, six credentials, a verified
  affiliation, a bio and a granted consent record.

This is a **port**, not an authoring job. Do not rewrite this content. Cherry-pick it, and build the
two presentational components rev4 needs to render it. Rewriting risks losing wording that was
deliberately negotiated against the evidence rules.

---

## 1. WP0 — Content decisions (BLOCKING)

These are not engineering decisions and must not be made in code. Every one is a public factual
claim.

### WP0-A — Whose record is the commission table? (blocks WP4)

The 276 rows carry these roles:

| Role | Rows | | Role | Rows |
|---|---|---|---|---|
| Adjudicator | 58 | | Assistant Delay Expert | 15 |
| Advisor | 39 | | Project Management | 13 |
| Party Representative | 33 | | Technical Expert | 11 |
| Commercial Management | 29 | | Delay Expert | 9 |
| Quantum Expert | 19 | | Engineer | 9 |
| Assistant Quantum Expert | 19 | | Assistant Expert | 3 |
| Planning Manager | 18 | | Arbitrator | 1 |

The site attributes none of it. A reader assumes it is the firm's — and, at this size, the owner's.
58 adjudicator appointments and 1 arbitrator appointment are checkable against public nomination
records and professional registers.

**Decide one of:**

- **(a) Publish the whole record with an attribution sentence.** Recommended. The role column is
  already self-describing; what is missing is one sentence saying whose record it is. Preserves the
  map's arithmetic (276 = 264 mapped + 12 non-jurisdictional) and the strongest link on the site.
- **(b) Filter to quantum and dispute rows.** Engineering consequence: `lib/geoAttribution.ts` and
  every figure derived from it must be regenerated from the filtered set, and the map's counts,
  the "27 jurisdictions" heading and the off-frame note all change. Budget for that, do not
  hand-edit the generated file.

### WP0-B — RICS Registered Expert Witness (blocks WP5)

Appears twice in the rev2 lead profile and twice on the CV. **Confirm the registration is current.**
If it is not, it comes out of both. This is the single most checkable claim in the pack and the
audience most likely to check it is the audience being pitched.

### WP0-C — Role title (blocks WP5)

Three documents, three titles:

| Source | Title |
|---|---|
| `Michael Whiting - CV 20260910.docx` | **Partner** |
| LinkedIn | **Principal** |
| `content/people.ts` (rev2) | **Founder** |

Pick one and apply it everywhere. "Partner" implies other partners.

### WP0-D — Telephone (blocks WP7)

6 of 11 competitors publish a direct number; the study records that for a firm this size a phone
number is a liveness signal and its absence "reads as a shell". Provide a number, or accept the
finding and decide not to.

---

## 2. Work packages

### WP1 — Remove the contradictions

**Delete `components/ServiceIndex.tsx`, `lib/serviceIndex.ts` and the `.service-index-*` /
`.service-line-*` CSS.** The 43-service, three-column index advertises three businesses. Committed
on `rev3` and recoverable — do not preserve it behind a flag.

**Collapse the practice-area tabs.** `components/ServicesSection.tsx` renders three tabs over three
commission lists. Keep the commission tables — they are the proof link — and drop the tabbed
taxonomy. One list, one heading. `lib/practiceAreas.ts` and `components/CommissionsOverlay.tsx`
depend on `ServiceKey`; keep the key as a data field (the tables can still label a row's practice
area) but remove it as a navigation device.

**Hero eyebrow.** Currently reinstated to the old three-service line, which contradicts the headline
directly above it. Either delete it, or replace with `United Kingdom · Gulf · North Africa`.
Recommended: delete. Nothing else on the page needs it.

**Buttons and nav.** `Discuss Your Matter` → `Discuss a matter`; `What We Do` → `The analysis`.
Nav `WHAT WE DO · GEOGRAPHIC REACH · ENQUIRE` → `THE ANALYSIS · REACH · ENQUIRE`, with anchor ids
updated in `components/Nav.tsx` and on each section.

### WP2 — "One discipline" section (new, short)

Sits directly under the hero. Three short paragraphs: what the analysis is, what it is not, and the
introduction line for delay and technical practitioners. Copy is written and approved — take it
verbatim from `docs/site-copy-forensic-quantum.md`. No new component pattern: reuse the existing
section shell and `<Reveal>`.

### WP3 — "What the analysis covers"

Six headings, one line each: valuation of variations and change; prolongation and time-related cost;
disruption and lost productivity; final accounts and cross-charges; financial and consequential
loss; testing and rebuttal. Copy already written.

Data lives in a new `lib/analysisScope.ts` — a flat typed array, not a nested taxonomy. **Six items
maximum.** The reason rev3 failed was that 43 animated items in a section designed for three both
buried the message and made the reveal (0.08s stagger × 18 items = 2.3s per column) slower than a
reader scrolls.

### WP4 — Proof

Existing `GeographySection` + `GeographyMap` + commission tables, retitled and sequenced together as
one proof block. Add the attribution sentence from **WP0-A**. No structural change to the map; it was
built and verified this week and its generators reconcile.

### WP5 — Person — THE MISSING LINK

Port the lead profile from `rev2:content/people.ts` into `lib/person.ts` on this branch.

**Render:** name, post-nominals, role, the six credentials as a dated chain, and the bio. Blackmore
Nestor's dated qualification chain is the pattern worth copying — it lets the reader compute
seniority instead of being told it.

**Consent machinery — a proportionate call.** rev2 enforces consent centrally through
`lib/consent.ts` and `lib/content-validation.ts`, neither of which exists on this lineage. rev4
publishes exactly one person, who is the owner of the site and the author of the consent record, so
porting the full framework to guard a single self-authored entry is over-engineering.

**Therefore:** port the profile as plain typed data, and put this rule at the top of `lib/person.ts`
in terms that cannot be missed —

> Adding any second person to this file requires porting `lib/consent.ts` and
> `lib/content-validation.ts` from rev2 first. Nobody but the site's owner appears here without a
> recorded, evidenced consent, and that guard must be mechanical, not remembered.

Do not publish the affiliation note or the CV-of-record commentary from the rev2 file; those are
maintainer comments, not site copy.

### WP6 — Reassurance — THE DIFFERENTIATOR

Port `rev2:content/method.ts` verbatim to `lib/method.ts` and render the four points.

**0 of 11 competitors publish a working method.** This is the only differentiator in the study
available to Avonstowe truthfully and immediately, and it is the section that answers "why should I
trust this" — the link rev1 was judged to fail on.

Add beneath it, from the existing footer data: legal entity, licence number, registration number,
jurisdiction. Full statutory disclosure appears on 2 of 11 sites.

### WP7 — Contact

Standfirst and enquiry-field placeholder are already updated. Remaining:

- Telephone per **WP0-D**, rendered as a `tel:` link.
- **Downloadable CV.** 1 of 11 competitors offers one (Blackmore Nestor) and the study rates it as
  removing a step for an instructing solicitor. Serve `Michael Whiting - CV 20260910.docx` — or a
  PDF export of it — from `public/`. It must be the current file, not an older revision.

### WP8 — Coherence sweep

Metadata, footer tagline and nav must all state the same proposition. Title and description were
changed on 10 September; verify nothing else still carries "Expert Appointments" or
"Project Advisory". Grep the built output, not the source.

---

## 3. Page order when complete

```
1  Hero                         claim
2  One discipline
3  What the analysis covers
4  Selected commissions + map    proof
5  Michael Whiting               person
6  How the work is done          reassurance
7  Enquiries                     contact
```

---

## 4. Acceptance criteria

1. Exactly **one** service taxonomy appears anywhere on the page.
2. A named individual with credentials renders above the fold of section 5.
3. The method section renders four points.
4. Every commission figure still traces to `lib/commissions.ts`; that file is **unmodified**.
5. The generators still reconcile: `npm run build:geo` exits 0 and reports totals that sum.
6. `npx tsc --noEmit` clean; `npx next lint` clean; `npx next build` completes and exports.
7. No new runtime dependency. Client JS for the page does not grow by more than 2 kB.
8. Renders correctly at 375, 768, 1440 and 2560 px.
9. Page weight reduces against rev3. rev3 measured 4,017 DOM nodes; deleting the service index
   should remove roughly 300. Measure, do not assume.
10. **The five-second test.** A reader who has never seen the site can complete, from the first
    screen and one scroll: *"This firm is ______ for ______ because ______."* Target:
    *a forensic quantum practice · for appointed experts and legal teams in construction disputes ·
    because it names the person, shows 276 matters in 27 jurisdictions, and states how the work is
    done.*

---

## 5. Files

**New:** `lib/analysisScope.ts`, `lib/person.ts`, `lib/method.ts`, `components/DisciplineSection.tsx`,
`components/AnalysisScope.tsx`, `components/PersonSection.tsx`, `components/MethodSection.tsx`,
`public/` CV file.

**Modified:** `app/page.tsx`, `app/globals.css`, `components/Hero.tsx`, `components/Nav.tsx`,
`components/ServicesSection.tsx`, `components/GeographySection.tsx`, `components/ContactSection.tsx`,
`components/Footer.tsx`.

**Deleted:** `components/ServiceIndex.tsx`, `lib/serviceIndex.ts`.

**Never modified:** `lib/commissions.ts`. It is evidence. Transform around it.

---

## 6. Out of scope

Insights or article pages; a panel or any second person; pan, zoom or markers on the map; sector
landing pages; a service directory; analytics or tracking of any kind; any claim of an appointment
not held.

---

## 7. Risks

1. **WP0 is the gate.** Building sections 5 and 6 before the RICS position and the role title are
   settled means building the person link on facts that may change.
2. **Direction has changed twice in one day.** rev3 (built 10 September) is being substantially
   deleted by rev4 (specified 10 September). Everything is committed and recoverable, but confirm
   the single-discipline decision is settled before WP1 deletes the service index.
3. **The proof link is also the exposure.** Publishing 276 commissions is the strongest thing on the
   site and the only place a competitor could find a claim to challenge. WP0-A is what decides
   which of those two it is.
4. **The map is heavy.** 177 outlines plus the interaction layer already make this the largest page
   on the site. Every section added after WP3 should be measured, not assumed to be free.
