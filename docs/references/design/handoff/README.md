# Design handoff

Approved design handoff for the **adcortes** portfolio. The Egg Theme is frozen: the documents below are the source of truth for every visual decision.

## Source-of-truth documents

| File                  | Covers                                                                              |
| --------------------- | ----------------------------------------------------------------------------------- |
| `visual-direction.md` | Character, colour and type usage, page order, responsive intent, background rules   |
| `design-system.md`    | Final tokens, typography scale, spacing, breakpoints, components, focus, motion     |
| `content.md`          | Approved copy, labels, link destinations and meta                                   |
| `assets.md`           | Asset inventory, per-asset implementation notes, wrapper CSS and placement formulas |

## Folders

- **`assets/`** — the approved implementation assets: `hero-mountains.svg`, `hero-landscape.svg`, `favicon.svg`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png`.
- **`previews/`** — prototype HTML boards. Visual reference only; do not copy as production code.
- **`screenshots/`** — desktop and tablet/mobile captures. Visual reference only; do not copy as production code.

The previews switch layouts in JavaScript and carry unapproved variants. The implementation must use real media queries and the documented tokens instead.

## For implementation

Any future Astro + TypeScript build must read `visual-direction.md`, `design-system.md`, `content.md` and `assets.md` before making a visual decision. Nothing in this folder is the application implementation — it is design reference documentation only, and none of its code or markup is meant to ship as-is.

## Content placeholders to replace before launch

Every `[bracketed]` string in `content.md`:

- Project 1 (EMR) summary: `[one line on what wasn't working in its records workflow]`
- Project 2 (airline) summary: `[one line on the need]`
- Selected web work, items 1–3: each `[Project name]`, `[client]` and `[Agency]`
- Selected collaborations band: `[Airline]` × 2, `[Airline group]`, `[Travel tech]`, `[Agency]`, `[Direct client]`

Regenerate `og-image.png` if the headline copy changes.
