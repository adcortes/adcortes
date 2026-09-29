# Agent guidance

Canonical, tool-neutral guidance for coding agents working in this repository.

## Design handoff

Inspect [`docs/references/design/handoff/`](docs/references/design/handoff/) before making any visual
or content decision. It is the source of truth.

- `assets/` — approved implementation reference material.
- `previews/` and `screenshots/` — **visual reference only.** Never copy them as production code. The
  previews switch layouts in JavaScript and carry unapproved variants; the build uses real media
  queries and the documented tokens instead.

## Constraints

- Do not add a UI framework, CMS, animation library, or external service unless explicitly requested.
- Use CSS tokens. No colour literals outside `src/styles/tokens.css`, except approved inlined artwork.
- Preserve semantic HTML, keyboard access, visible focus, reduced-motion support, and real link
  destinations. **Never use `href="#"`** — a link with no known destination is modelled as optional
  and omitted.

## Before reporting completion

```bash
npm run check
npm run build
git diff --check
```

## Skills

Do not create custom repository skills unless a repeated workflow has been explicitly identified.
