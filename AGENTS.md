# Agent guidance

Canonical, tool-neutral guidance for this Astro 7 portfolio. Use Node 24 and pnpm.
`README.md` is the owner's GitHub profile README; keep project maintenance notes in `docs/`.

## Architecture and content

- Astro builds static HTML without an adapter. `src/pages/index.astro` is the only published route; keep the server-rendered page usable without JavaScript.
- Edit portfolio copy and metadata in `src/data/*.ts`, with related types in `src/types/content.ts`. The hero display mode is in `src/config/hero.ts`.
- `src/layouts/CaseStudyLayout.astro` is unpublished because it is outside `src/pages/`. Review routes and content types before adding case studies; see `docs/maintenance.md`.
- `src/lib/email.ts` assembles contact links. Preserve its source-obfuscation convention.
- Do not add a UI framework, CMS, animation library, or external service unless requested.

## Visual system

- `src/config/theme.ts` selects `earth` or `egg` at build time through `data-theme` on `<html>`. Shared type, spacing, and layout tokens are in `src/styles/tokens.css`; theme palettes are in `src/styles/themes/`.
- Prefer semantic color tokens. Existing exceptions include fixed colors in `tokens.css`, a translucent color in `ProjectEntry.astro`, and inline artwork. Do not assume every value is theme-specific or every non-color literal is a token.
- Keep component styles with their Astro components. Check responsive behavior at the actual breakpoints used by the affected component, including 640px, 960px, and 1024px where relevant.

## Accessibility and scripts

- Preserve semantic landmarks, meaningful image alternatives, keyboard access, visible focus, and reduced-motion behavior. Aim for WCAG 2.2 AA.
- Use real destinations. Omit unavailable links or actions; never add `href="#"`, invented routes, or placeholder controls.
- Client scripts must progressively enhance the complete HTML. Astro's CSP is enabled in `astro.config.mjs`; keep component scripts processed by Astro rather than using `is:inline`, so the generated policy covers them.

## Publishing and verification

- `astro.config.mjs` sets the canonical origin to `https://adcortes.vercel.app`. `BaseLayout.astro` generates canonical and Open Graph URLs from it; the shared OG image is `public/og-image.png`.
- `vercel.json` disables Git-triggered deployments. See `docs/maintenance.md` for the manual publishing checklist.
- Before reporting completion, run `pnpm check`, `pnpm build`, and `git diff --check`. Confirm the build has `dist/index.html` and no other HTML page.

Keep comments that explain accessibility exceptions, layout constraints, or non-obvious decisions accurate. Avoid comments that repeat the code.
