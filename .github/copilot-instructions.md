# MyPersonalSite - Copilot Instructions

## Project Overview
Personal portfolio website built with React, TypeScript, and Vite. Features responsive design with custom interactive elements (cursor-following gradient, section-aware navigation) and i18n support (Russian/English).

## Architecture & Key Patterns

### Component Organization
- **Flat component structure**: Each component in its own folder with `.tsx` + `.module.css` co-located
- **No pages directory**: Single-page app structure with sections rendered in `Main` component
- **Shared utilities**: `src/components/shared/` contains hooks and constants (despite being named "components")

### Styling Conventions
- **CSS Modules exclusively**: Every component has a `.module.css` file imported as `styles`
- **CSS custom properties**: Global colors in `:root` (e.g., `--color-gradient`)
- **Responsive breakpoint**: `1000px` is the critical breakpoint - many features change behavior here
  - Example: Gradient follows cursor at >=1000px, fixed position below
  - Navigation visibility, sticky section headers, and scroll behavior all depend on this breakpoint

### Path Aliases (vite.config.ts)
```typescript
"@components" → "src/components"
"@assets" → "src/assets"
"@shared" → "src/components/shared"
"@pages" → "src/pages" (unused currently)
```

### Internationalization (i18next)
- **Translation files**: `public/locales/{lang}/translation.json` (en, ru)
- **Setup**: Configured in `src/utils/i18n/i18n.js` with Backend, LanguageDetector plugins
- **Usage**: `const { t, i18n } = useTranslation()` → Access as `t("header.my-name")`
- **Language switcher**: Implemented in Header component with `i18n.changeLanguage(lng)`

### Custom Hooks Pattern
- **useSectionVisibility** (`src/components/shared/hooks/`): IntersectionObserver-based hook
  - Returns object with boolean flags: `{ about: boolean, experience: boolean }`
  - Uses `rootMargin: "-50% 0px -50% 0px"` to trigger at viewport center
  - Powers navigation active state tracking

### Utility Components
- **SmoothScroll**: Side-effect component (returns `null`) that adds smooth scroll behavior to anchor links
  - Uses `TOP_OFFSET` constant from `@shared/constants` for scroll positioning
- **Gradient**: Renders fixed overlay div with dynamic radial gradient following cursor

## Development Workflow

### Essential Commands
```bash
npm run dev      # Vite dev server (default port 5173)
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

### Build Configuration
- **Base path**: `MyPersonalSite/` (configured for GitHub Pages deployment at `/MyPersonalSite/`)
- **TypeScript**: Uses project references (`tsconfig.json` → `tsconfig.app.json` + `tsconfig.node.json`)
- **React SWC**: Fast refresh enabled via `@vitejs/plugin-react-swc`
- **SVG handling**: `vite-plugin-svgr` allows importing SVGs as React components

### SVG Icons Pattern
- Store SVGs in `src/assets/icons/`
- Export from `index.ts` barrel file: `export { ReactComponent as ArrowLink } from './arrow.svg'`
- Import and use as components: `import { ArrowLink } from "@assets/icons"`

## Component Patterns to Follow

### Typical Component Structure
```typescript
import { FC, ReactElement } from "react";
import styles from "./component.module.css";

interface Props {
  // Explicit prop types
}

const Component: FC<Props> = ({ prop }): ReactElement => {
  return <div className={styles.wrapper}>...</div>;
};

export default Component;
```

### Responsive Behavior Pattern
```typescript
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      // Mobile behavior
    } else {
      // Desktop behavior
    }
  };
  
  handleResize(); // Run on mount
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

### Navigation/Section Pattern
- Sections use `id` attributes matching navigation hrefs (`#about`, `#experience`)
- Navigation items highlight based on `useSectionVisibility` hook state
- Smooth scroll handled by `SmoothScroll` component globally

## Code Quality Standards
- **Simplicity first**: Write code as simple and straightforward as possible - avoid over-engineering
- **Prettier**: Configured (check `.prettierrc` or defaults)
- **ESLint**: TypeScript ESLint + React Hooks rules + React Refresh
- **Accessibility**: Use `aria-label` attributes (e.g., `<nav aria-label="In-page jump links">`)

## Common Gotchas
- Main entry requires Suspense wrapper for i18n: `<Suspense fallback="...is loading">`
- Vite config uses CommonJS for PostCSS (`postcss.config.js`) but ESM for main config
- i18n config is `.js` (not `.ts`) in `src/utils/i18n/`
- Docker setup exists but deployment is via GitHub Pages (see README)
