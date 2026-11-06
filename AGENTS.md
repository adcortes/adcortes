# Agent guidance

Canonical, tool-neutral guidance for coding agents working in this repository. See
[`README.md`](README.md) for what the project is, the stack and the commands.

## Architecture

A single-route Astro site with static output and no adapter.

- `src/pages/index.astro` — the one route. Sections are composed from `SectionShell.astro`.
- `src/data/*.ts` — all copy and metadata, typed by `src/types/content.ts`. Change content here,
  not in markup.
- `src/config/theme.ts` — the one switch between the `egg` and `earth` themes. It sets `data-theme`
  on `<html>` and selects the themed OG image.
- `src/layouts/CaseStudyLayout.astro` — intentionally outside `src/pages/`, so it generates no
  route. Leave it in place; its header comment explains how to publish one.
- `src/lib/email.ts` — assembles the contact address so the literal string never reaches the HTML.

## Styles

- `src/styles/tokens.css` — type, spacing, radii and layout, shared by both themes. The only place
  a non-colour literal belongs.
- `src/styles/themes/egg.css` and `themes/earth.css` — **colour tokens live here, one file per
  theme.** No colour literal belongs anywhere else, approved inlined artwork excepted. Everything
  else references a `var()`.
- `src/styles/base.css` — theme-agnostic base, reset, font-face and focus styles.
- Component-scoped CSS lives in the component's own `<style>` block.

## Design handoff

Inspect [`docs/references/design/handoff/`](docs/references/design/handoff/) before making any
visual or content decision. Its README lists the source-of-truth documents and the three places the
shipped page deliberately diverges from them.

`screenshots/` is **visual reference only** — never copy it as production code. The build uses real
media queries at 640px and 1024px and the documented tokens.

## Constraints

- Do not add a UI framework, CMS, animation library, or external service unless explicitly
  requested.
- Client-side JavaScript is allowed but must be progressive enhancement: the server-rendered page
  stays complete and readable without it, as the header, back-to-top, tooltip and archive-disclosure
  scripts already are.
- Preserve semantic HTML, keyboard access, visible focus, reduced-motion support, and real link
  destinations. **Never use `href="#"`** — a link with no known destination is modelled as optional
  and omitted. The same rule covers invented routes and inert or disabled controls.
- Target WCAG 2.2 AA.
- `site` stays unset in `astro.config.mjs` until a real origin exists; see the `TODO(deploy)` there.

## Comments

Comments cite the handoff document and section they implement (`design-system.md §9`). Keep those
citations accurate when changing the code they describe, and keep comments that record an
accessibility exception or a non-obvious decision.

## Before reporting completion

```bash
pnpm check
pnpm build
git diff --check
```

The build must produce `dist/index.html` and no other page.
