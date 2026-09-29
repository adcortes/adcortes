# Fonts

## Schibsted Grotesk

- **File:** `schibsted-grotesk-latin-variable.woff2` (46,864 bytes)
- **Licence:** SIL Open Font License 1.1 — https://openfontlicense.org
- **Designer:** Schibsted / Rasmus Michaëlis, distributed via Google Fonts
- **Source:** https://fonts.gstatic.com/s/schibstedgrotesk/v7/Jqz55SSPQuCQF3t8uOwiUL-taUTtap9GayojdSFO.woff2
- **Resolved from:** `https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600&display=swap`
- **Downloaded:** 2026-09-29

### Why one file instead of three

The handoff (`assets.md`) calls for woff2 at 400, 500 and 600. Google Fonts serves Schibsted Grotesk
as a **variable** font: the `css2` API returns the *same* latin woff2 URL for all three weights, with
the weight axis selected at render time. Self-hosting the single variable file therefore delivers all
three required weights in 46 KB and one preload, instead of three files and three requests.

This is the latin subset only (`U+0000-00FF` plus common punctuation and the arrow glyphs `U+2191`,
`U+2193` used by the link affordances). The latin-ext subset is deliberately not shipped — no copy in
`content.md` needs it.

### Updating

Re-run the `css2` request above with a modern browser User-Agent, take the URL from the `@font-face`
block whose `unicode-range` starts `U+0000-00FF`, and replace the file. Check the `v7` version segment
— a bump means the upstream font changed and the rendering should be re-reviewed against the
screenshots in `docs/references/design/handoff/screenshots/`.
