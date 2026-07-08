# Avonstowe

The Avonstowe website (www.avonstowe.com), migrated from a single hand-written
`index.html` to a **Next.js (App Router) + TypeScript** application. Content,
wording, structure, layout and behaviour are preserved exactly; only the
implementation changed.

## Stack

- **Next.js 15** (App Router) with **static HTML export** (`output: "export"`)
- **TypeScript**
- Original CSS preserved verbatim in `app/globals.css` (custom, animation-heavy;
  intentionally **not** converted to Tailwind to guarantee identical rendering)
- No backend. The enquiry form posts directly to FormSubmit, exactly as before.

## Project structure

```
app/            layout (metadata, fonts, global CSS) + the single page
components/      Nav, Hero, IntroBand, ServicesSection, CommissionTable/Cards,
                CommissionsOverlay, GeographySection, ContactSection, Footer,
                LegalOverlays, CookieBanner, BackToTop, ScrollProgress,
                CustomCursor, OverlayProvider (shared overlay state)
lib/            commissions.ts (276 commissions, extracted from the original
                tables) + practiceAreas.ts (tab/panel copy)
public/         favicon.ico, logo PNG, CNAME, .nojekyll
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produces the static site in ./out
npm run lint
```

## Deployment (GitHub Pages)

The original site was served by GitHub Pages from `main` (root `index.html` +
`CNAME`). Because Pages cannot serve raw Next.js source, deployment now builds
the static export first. A ready-to-use workflow is included at
`.github/workflows/deploy.yml`.

To go live:

1. Repository **Settings → Pages → Source: "GitHub Actions"**.
2. Merge this branch into `main`. The workflow builds `./out` and publishes it.

`public/.nojekyll` is required so Pages serves the `/_next/` asset folder, and
`public/CNAME` keeps the `www.avonstowe.com` custom domain.
