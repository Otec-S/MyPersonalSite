# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Sergey Grigorash. Single-page React app with i18n (RU/EN), responsive layout, and dual deployment (GitHub Pages + reg.ru).

**Production:** https://otec-s.github.io/MyPersonalSite/

## Stack

React 18 + TypeScript, Vite 5 (`@vitejs/plugin-react-swc`), CSS Modules + PostCSS/autoprefixer, i18next/react-i18next (locales `ru`/`en`), vite-plugin-svgr, ESLint 9 (flat config) + Prettier. No test suite exists in this repo.

## Commands

```bash
npm run dev           # Vite dev server
npm run build          # tsc -b && vite build && prerender → dist/ (base: /MyPersonalSite/)
npm run build:dist2    # tsc -b && VITE_BUILD_TARGET=root vite build && prerender → dist2/ (base: /)
npm run lint           # eslint .
npm run preview        # preview dist/
npm run preview:dist2  # preview dist2/
```

Run `npm run build` and `npm run lint` after non-trivial changes.

## Architecture

### Build pipeline has a prerender step

Both `build` and `build:dist2` run `scripts/prerender.mjs` after `vite build`. It spins up a local server over the built output, loads the page in Puppeteer, and snapshots the fully client-rendered DOM back into `index.html` — so crawlers/ATS parsers that don't execute JS still see real content. Real users still get the interactive app: `main.tsx` uses `createRoot`, which re-renders over this static markup once JS loads. Keep this in mind when changing anything that affects initial render (e.g. content that depends on async data won't be in the snapshot unless it resolves before the prerender script captures the page).

`vite.config.ts` also injects two build-time transforms unrelated to prerendering:
- `htmlMetaPlugin`: substitutes `__SITE_URL__`/`__OG_IMAGE__` placeholders in `index.html` and conditionally injects the Umami analytics script tag (only on the `dist2`/root build).
- `staticMetaPlugin`: substitutes the same `__SITE_URL__` placeholder in `public/robots.txt` and `public/sitemap.xml` post-build, since those are copied verbatim by Vite and don't go through `transformIndexHtml`.

### Two build targets, one codebase

`VITE_BUILD_TARGET=root` env var switches `base` (`/MyPersonalSite/` vs `/`), `outDir` (`dist` vs `dist2`), and the default `siteUrl` (GitHub Pages vs `sergeygrigorash.com`). Don't hardcode either base path or site URL — go through this mechanism.

### Import aliases (`vite.config.ts` + `tsconfig.app.json`)

- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@shared/*` → `src/shared/*` (currently unused — shared code actually lives in `src/components/shared/`)
- `@pages/*` → `src/pages/*` (unused — no pages directory; this is a single-page app)

Use aliases instead of relative `../../../` paths.

### Component structure

One component = one folder: `component-name.tsx` + `component-name.module.css`, functional `FC` components, default export at the end. Styles imported as `import styles from "./component-name.module.css"` and applied via `styles.className`. No Tailwind, no CSS-in-JS.

`src/components/shared/` holds cross-cutting code despite the "components" name: `constants.ts` (incl. `TOP_OFFSET`), `links.ts` (`SOCIAL_LINKS`, `RESUME_LINKS`), `hooks/useSectionVisibility.ts`.

### The 1000px breakpoint drives multiple independent behaviors

This is the one piece of cross-file logic worth knowing up front — several components each independently branch on `window.innerWidth < 1000` (no shared media-query hook):
- `gradient.tsx`: gradient follows the cursor at ≥1000px, fixed position below.
- `header.tsx`: clicking the name scrolls to `#about` only at ≥1000px; below that it links to `#`.
- `experience.tsx` / navigation: navigation is hidden below 1000px and sections grow sticky headers instead.

### Section-visibility / navigation coupling

`useSectionVisibility` (`src/components/shared/hooks/`) uses `IntersectionObserver` with `rootMargin: "-50% 0px -50% 0px"` (triggers at viewport center) to return per-section boolean visibility flags, which drive the active nav-item highlighting. `SmoothScroll` (renders `null`, side-effect only) globally intercepts clicks on `a[href^="#"]` and scrolls accounting for `TOP_OFFSET`.

### Certificates are auto-discovered, not registered

Drop an image into `src/assets/certificates/` (`.png`/`.jpg`/`.jpeg`/`.webp`) and it's picked up automatically via `import.meta.glob` in `certificates.data.ts` — no manual registration. Card titles are derived from the filename (`claude-101.webp` → "Claude 101"). PDFs are not supported. If the folder is empty, the certificates section and its nav entry disappear.

### i18n

All user-facing text goes through `useTranslation()` / keys in `public/locales/{lng}/translation.json`, grouped by section (`header`, `nav`, `about`, `experience`, `certificates`, ...). Fallback language is `en`; browser language is auto-detected. When adding text, update **both** `ru` and `en` files. `main.tsx` needs a `Suspense` wrapper for i18n loading. i18n config is `src/utils/i18n/i18n.js` (`.js`, not `.ts` — intentional inconsistency).

### Deployment (two independent GitHub Actions workflows, both trigger on push to `main`)

- **GitHub Pages** (`.github/workflows/deploy.yml`): `npm run build` → deploys `dist/`. `base` is `/MyPersonalSite/` — don't change without updating GitHub Pages settings.
- **reg.ru via FTP** (`.github/workflows/deploy-regru.yml`): `npm run build:dist2` → uploads `dist2/` over FTPS using `FTP_SERVER`/`FTP_USERNAME`/`FTP_PASSWORD` secrets.

## Conventions

- External links: `target="_blank"` + `rel="noreferrer noopener"` + descriptive `aria-label`.
- Interactive/semantic blocks get `aria-label`; sections carry `id`s matching nav hrefs (`#about`, `#experience`, `#certificates`).
- New SVG icons go in `src/assets/icons/` and must be re-exported from `src/assets/icons/index.ts`.
- Minimal diffs, follow existing patterns, no new libraries/abstractions without being asked, no unnecessary tests/helpers.
- Comments only for non-obvious logic.
