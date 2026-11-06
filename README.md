# adcortes

Personal portfolio of **Adriana Cortes** — UX Engineer working between product, design and
frontend. A static, accessible, single-page site.

The page is one route: hero, selected work, an earlier-web-projects archive, about, contact and
footer. Content lives in typed data modules under [`src/data/`](src/data/), so copy changes never
require touching markup.

## Stack

- **[Astro](https://astro.build)** — static output, no adapter
- **TypeScript** — strict
- **Plain CSS** — no framework or preprocessor. Shared tokens in
  [`src/styles/tokens.css`](src/styles/tokens.css); colour tokens per theme in
  [`src/styles/themes/`](src/styles/themes/), selected by `data-theme` on `<html>`
- **Schibsted Grotesk** — self-hosted woff2, see [`public/fonts/README.md`](public/fonts/README.md)

Small, progressively-enhanced scripts handle the sticky header, back-to-top button, tooltips and the
earlier-web-projects disclosure. Every one of them is optional: the server-rendered page is complete
and readable with JavaScript disabled.

## Requirements

Node 24 (see [`.nvmrc`](.nvmrc)) and [pnpm](https://pnpm.io).

## Commands

```bash
pnpm install       # once
pnpm dev           # local dev server
pnpm check         # TypeScript + Astro diagnostics
pnpm build         # static build to dist/
pnpm preview       # serve the build
```

## Themes

Two approved colour themes ship: **Egg** and **Earth**. The active one is the single value in
[`src/config/theme.ts`](src/config/theme.ts); changing it re-skins the site at build time, including
the themed Open Graph image under `public/themes/`.

## Design handoff

[`docs/references/design/handoff/`](docs/references/design/handoff/) holds the approved visual
handoff and is the source of truth for every visual and content decision.

## Accessibility

Target is WCAG 2.2 AA, with the AAA contrast pairs documented in the handoff's design system.
Semantic HTML, keyboard access, visible focus and reduced-motion support are requirements, not
options.

## Deployment

The site builds to static files in `dist/`; Vercel is the deployment target. No domain is
registered yet, so `site` is unset in [`astro.config.mjs`](astro.config.mjs) and the canonical
link, `og:url` and absolute `og:image` are deliberately omitted rather than guessed — a
`TODO(deploy)` there explains the one change needed once the origin exists.

## Links

- GitHub — https://github.com/adcortes
- LinkedIn — https://www.linkedin.com/in/adcortes/
