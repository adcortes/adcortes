# adcortes

Personal portfolio of adcortes — a static, accessible, single-page site.

## Stack

- **Astro** — static output, no adapter, zero client JavaScript
- **TypeScript** — strict
- **Plain CSS** — design tokens in `src/styles/tokens.css`, no framework or preprocessor
- **Schibsted Grotesk** — self-hosted woff2, see [`public/fonts/README.md`](public/fonts/README.md)

## Commands

```bash
npm install       # once
npm run dev       # local dev server
npm run check     # TypeScript + Astro diagnostics
npm run build     # static build to dist/
npm run preview   # serve the build
```

## Design handoff

The approved visual handoff lives in [`docs/references/design/handoff/`](docs/references/design/handoff/)
and is the source of truth for every visual and content decision. Read it before changing anything
that is visible on the page.

## Deployment

The site will deploy to **Cloudflare Pages**. No domain is registered yet, so `site` is unset in
`astro.config.mjs` and there is no canonical URL or absolute `og:image` — a `TODO(deploy)` there
names the three tags to add once the origin exists.

## Accessibility

Target is WCAG 2.2 AA, with the AAA contrast pairs documented in the handoff's design system.
