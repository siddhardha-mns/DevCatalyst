# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

- Install deps
  - npm install
- Dev server
  - npm run dev  (Vite; opens http://localhost:5173)
- Production build
  - npm run build
- Preview production build
  - npm run preview
- Lint
  - npm run lint  (eslint over . with js,jsx extensions)
- Type check
  - npx tsc -p tsconfig.json --noEmit
- Format (Prettier configured in package.json)
  - npx prettier --check .
  - npx prettier --write .
- Tests
  - Not configured (no test script present)

## Codebase overview (big picture)

- Tooling/runtime
  - Vite + React 18 + TypeScript; TailwindCSS for styling; Framer Motion for animations.
  - Vite alias '@' → ./src (vite.config.js); used across imports (e.g., '@/components/...').
- Routing
  - Single BrowserRouter in src/App.jsx defines top-level routes: '/', '/about', '/workshops', '/gallery', '/contact', '/components'.
  - Each page component (e.g., src/pages/Home.jsx) is responsible for wrapping its content in the shared Layout.
- Global layout and cross-cutting UI
  - src/components/common/Layout.jsx composes the app chrome:
    - Background: src/components/ui/stars-canvas.tsx (animated canvas starfield) rendered fixed and behind content.
    - Navigation: src/components/common/Navigation.jsx (glassmorphism navbar with active-state effects).
- UX affordances: ScrollProgress and ScrollToTop from src/components/ui/scroll-progress.tsx.
- Floating components card: hidden on /components; otherwise appears after a delay (can be snoozed).
- Background overlays: cursor spotlight disabled on /components to avoid demo flicker.
- Page transitions via Framer Motion.
- UI component library (reusable primitives)
  - Lives under src/components/ui/ and provides animated/styled primitives used by pages:
    - animated-hero.tsx (GradientText, text animations), gradient-button.tsx and cta-button.tsx (button variants with gradients/glow), modal.tsx, scroll-progress.tsx, stars-canvas.tsx (supports withinContainer for demos), container-scroll-animation.tsx.
  - Utilities via src/lib/utils.ts (e.g., cn class combiner) support these components.
- Hooks and effects
  - src/hooks/useScrollEffects.ts exposes:
    - useSmoothScroll (anchors), useScrollProgress (percent scrolled), useScrollDirection, useMousePosition.
  - Layout wires these in globally (smooth scroll; progress bar).
- Styling system
  - Tailwind configured in tailwind.config.js with class-based dark mode; index.css defines CSS variables and layered utilities (notably gradient-button custom properties and effects).
- TypeScript
  - tsconfig.json uses bundler module resolution, strict mode, noEmit, and path alias '@/*'. The codebase mixes .jsx and .tsx files; Vite handles both.

## Important notes from README

- Quick start: clone, npm install, npm run dev, then open http://localhost:5173.
- Build for production: npm run build; optional local preview with npm run preview.
- The project is a component-rich, animation-forward React app showcasing pages: Home, About, Workshops, Gallery, Components, Contact.

## Quirks and gotchas

- Lint coverage: npm run lint targets js, jsx, ts, tsx; run `npm run typecheck` for TS type errors.
- Layout usage: Pages explicitly wrap their content in Layout; there is no nested route layout in App.jsx.
- Asset paths: The navbar/logo and loading screens use /devcatalyst-logo.svg from public/.

## Pointers to key files

- Routing: src/App.jsx
- Global layout: src/components/common/Layout.jsx
- Navbar: src/components/common/Navigation.jsx
- Background: src/components/ui/stars-canvas.tsx
- Hooks: src/hooks/useScrollEffects.ts
- Vite alias: vite.config.js
