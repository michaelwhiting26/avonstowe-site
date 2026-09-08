# Avonstowe

The Avonstowe website (www.avonstowe.com). Next.js 15 (App Router) + TypeScript +
Tailwind CSS, statically exported.

The site is built around one principle:

> **Every claim on the site must be verifiable by a stranger in under sixty seconds.**

That principle drives several decisions that look like omissions and are not:
credentials are absent where none can be evidenced, contract forms are stated at the
level the record supports, no panel member appears without recorded consent, and
experience is described by sector and region rather than by matter.

## Stack

- **Next.js 15** (App Router), **static HTML export** (`output: "export"`)
- **TypeScript**, strict
- **Tailwind CSS v4**, tokens defined in `app/globals.css`
- Runtime dependencies: `next`, `react`, `react-dom`. Nothing else.
- **No** CMS, database, auth, server state, analytics, cookies, forms or
  third-party fonts. One client component (`SiteNav`) hydrates; the rest are
  React Server Components.

## Project structure

```
app/            routes: / what-we-do experience expert-support people contact
                privacy terms cookies, plus sitemap.ts, robots.ts, not-found.tsx
components/
  layout/       Header, Footer, SiteNav (the only client component)
  sections/     Hero, ServiceGrid, SectorStrip, LeadProfile, ContactCTA,
                PageHeader, LegalDocument
  people/       PersonCard, PersonCredentials
  seo/          JsonLd
content/        ALL business copy, typed. site / services / experience /
                people / expert-support / legal
lib/            consent.ts (consent gating), content-validation.ts (build gate),
                metadata.ts, structured-data.ts
scripts/        check-output.mjs (post-build checks against ./out)
```

**All business content lives in `content/*.ts`.** Do not put commercial copy in JSX
— it defeats the single source of truth that makes confidentiality and consent
review possible.

## The rules enforced by the build

`npm run build` fails, not warns, if any of these are violated.

### Consent (`content/people.ts`, `lib/consent.ts`)

1. A person renders only where `consent.status === "granted"`.
2. Only fields listed in `consent.scope` render. Granted consent for
   `["name", "credentials"]` does not authorise a bio, affiliation or photo.
3. `pending` / `declined` people are omitted entirely — no placeholder, no
   "coming soon", no anonymised card, no hidden metadata.
4. `granted` with an empty `evidenceRef` **fails the build**.
5. Affiliation must be independently verified per person, with a source and a
   date. An unverified affiliation is withheld even where consent covers it.

Pages must consume `getPublishablePanelMembers()` / `getPublishableMemberFields()`.
Never read `member.consent` in a page or component.

### Confidentiality (`content/experience.ts`)

Before publishing any experience statement, apply the test:

> Could a reasonably informed person in this market identify the specific matter
> from the information given?

If yes, do not publish it. Publishable: sector, broad project type, contract form,
role, broad region, claim type. Not publishable: project or party names, cities or
sites, seats, values, dates, or any **combination** that becomes identifying.

### Positioning

Party-side only. Nothing may advertise adjudicator, arbitrator, dispute board or
other neutral appointments. "Expert Appointments" means *party-appointed* experts.
The word "arbitration" is fine — it is the forum; marketing an appointment as a
neutral is not.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint
npm run build      # static export to ./out, then runs check-output.mjs
```

`scripts/check-output.mjs` scans the emitted HTML/JS for prohibited claims, leaked
matter data, tracking, forms, third-party fonts, duplicate titles and missing
canonicals. It runs automatically as part of `npm run build`.

## Deployment

The export in `./out` is a plain static site. It works on **Cloudflare Pages**,
**Vercel** or **GitHub Pages**.

- `public/CNAME` holds the custom domain (GitHub Pages).
- `public/.nojekyll` lets Pages serve the `/_next/` asset folder.
- `public/_redirects` maps legacy URLs (Cloudflare Pages only — GitHub Pages has
  no redirect support and will fall through to `app/not-found.tsx`).

A GitHub Actions workflow is at `.github/workflows/deploy.yml`.

## Outstanding before launch

See `HANDOVER.md`.
