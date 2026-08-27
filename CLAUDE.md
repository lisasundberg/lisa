# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
npm run check      # TypeScript type-check
npm run lint       # Prettier check + ESLint
npm run format     # Auto-format with Prettier
```

## Architecture

This is a **SvelteKit 2 / Svelte 5** personal portfolio site deployed to Netlify. It uses **Svelte 5 runes** syntax (`$props()`, `$state()`, `$derived()`, `$effect()`).

### Animation & 3D

- **GSAP** (with `ScrollTrigger`, `SplitText`) is the primary animation engine
- **Lenis** handles smooth scrolling; it's initialized in `+layout.svelte` and its scroll is forwarded to GSAP's ScrollTrigger ticker
- **Three.js** via **Threlte** and **Shader Park** power the background effects
- The custom Svelte action in `src/lib/actions/animate.ts` wraps GSAP timelines and ScrollTrigger for declarative use in components

### Routing & Layouts

- Standard SvelteKit file-based routing under `src/routes/`
- `+layout.svelte` (root) sets up Lenis, GSAP plugins, View Transitions API, and wraps everything in `<Nav>`, `<PageReveal>`, and `<Footer>`
- `+layout.ts` passes the current `pathname` as layout data so child routes can consume it

### Themes & Backgrounds

- Theme state lives in `src/lib/stores/theme.ts` (`currentTheme`, `INVERTED_CLASSNAME`)
- `src/lib/components/Background.svelte` switches between background variants based on the active theme
- Background variants are in `src/lib/components/Backgrounds/`: `Bokeh.svelte`, `Shader.svelte`, `Donuts.svelte`
- CSS themes are defined in `src/lib/styles/themes.css`

### State

- `src/lib/stores/app.ts` — global app state: `pageRevealFinished`, `headingHeight`
- `src/lib/stores/theme.ts` — theme state

### Page Reveals & Transitions

- `src/lib/reveals/PageReveal.svelte` — page load reveal animation
- `src/lib/reveals/PageTransition.svelte` — route-change transitions (uses View Transitions API)
- `src/lib/reveals/ScrollReveal.svelte` / `ImageScrollReveal.svelte` — scroll-triggered reveal animations

### Images

- Images under `src/lib/assets/` are imported with the `?enhanced` suffix to use `@sveltejs/enhanced-img` for responsive optimization
- Static assets (fonts, icons, favicons) live in `static/`

## Code Style

- **Tabs** for indentation, **single quotes**, no trailing commas, 100-char line width (Prettier)
- TypeScript strict mode enabled
