# Design handoff

Approved design handoff for the **adcortes** portfolio. The Egg Theme is frozen: the documents below are the source of truth for every visual decision.

## Source-of-truth documents

| File                  | Covers                                                                              |
| --------------------- | ----------------------------------------------------------------------------------- |
| `visual-direction.md` | Character, colour and type usage, page order, responsive intent, background rules   |
| `design-system.md`    | Final tokens, typography scale, spacing, breakpoints, components, focus, motion     |
| `content.md`          | Approved copy, labels, link destinations and meta                                   |
| `assets.md`           | Asset inventory, per-asset implementation notes, wrapper CSS and placement formulas |
| `earlier-web-projects.md` | The agency & freelance archive: chosen layout (option 5b), copy and image alt text |
| `earth-theme/color-adjustments.md` | The Earth palette: Egg → Earth token map and its contrast table |

## Folders

- **`assets/`** — the approved implementation assets: `hero-mountains.svg`, `hero-landscape.svg`, `favicon.svg`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png`.
- **`earth-theme/`** — the Earth variant: `color-adjustments.md` and its own assets. Same layout, type and copy as Egg; only colour changes.
- **`screenshots/`** — desktop and tablet/mobile captures. Visual reference only; do not copy as production code.

The original prototype HTML boards (`previews/`) have been removed. They switched layouts in JavaScript and carried unapproved variants; the screenshots above and the shipped implementation supersede them. Where a document names a `.dc.html` board, read it as provenance for a design decision, not as a file in this folder.

## For implementation

Read `visual-direction.md`, `design-system.md`, `content.md` and `assets.md` before making a visual decision. Nothing in this folder is the application implementation — it is design reference documentation only, and none of its code or markup is meant to ship as-is.

The implementation has since diverged from the frozen handoff in three approved ways. Where the documents and the shipped page disagree on these points, the page is current:

- The "Selected collaborations" light band was replaced by the Earlier web projects archive — see `earlier-web-projects.md` (option 5b).
- The Earth theme was added on top of the frozen Egg palette — see `earth-theme/color-adjustments.md`.
- The hero uses a landscape illustration (`src/components/hero/Hero.astro`, served as WebP) instead of the inlined `hero-mountains.svg`. `visual-direction.md` §Mountain background rules and its implementation note 3 describe the earlier direction; `src/config/hero.ts` still carries a `text-only` mode for it.

Planned asset filenames in `assets.md` and `earlier-web-projects.md` (`ewp-*.webp`, `moon.svg`, `airline-booking-composite.png`) were not the names that shipped. Match those entries by what they describe, not by filename; `public/images/` is the inventory that ships. The alt text in `earlier-web-projects.md` is still current.

Every `[bracketed]` launch placeholder that `content.md` lists has been replaced with final copy in `src/data/`. `content.md` keeps the brackets because the theme is frozen; it is not a to-do list. Regenerate `og-image.png` if the headline copy changes.
