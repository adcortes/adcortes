# Fonts

## Schibsted Grotesk

- **File:** `schibsted-grotesk-latin-variable.woff2` (46,864 bytes)
- **Copyright:** Copyright 2023 The Schibsted-Grotesk Project Authors
  (https://github.com/schibsted/schibsted-grotesk)
- **Licence:** SIL Open Font License 1.1 — full text in [`OFL.txt`](OFL.txt)
- **Designers:** Bakken & Bæck, Henrik Kongsvoll — for Schibsted, distributed via Google Fonts
- **Source:** https://fonts.gstatic.com/s/schibstedgrotesk/v7/Jqz55SSPQuCQF3t8uOwiUL-taUTtap9GayojdSFO.woff2
- **Resolved from:** `https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600&display=swap`
- **Downloaded:** 2026-09-29

### Why one file instead of three

The approved design called for woff2 at 400, 500 and 600. Google Fonts serves Schibsted Grotesk
as a **variable** font with a `wght` axis from 400 to 900. The `css2` API returns the *same* latin
woff2 URL for the requested weights, with the weight axis selected at render time. Self-hosting the
single variable file therefore also makes 700 and 900 available in 46 KB and one preload.

This is the latin subset only (`U+0000-00FF` plus common punctuation and the arrow glyphs `U+2191`,
`U+2193` used by the link affordances). The latin-ext subset is deliberately not shipped — no copy on
the page needs it.

### Updating

Re-run the `css2` request above with a modern browser User-Agent, take the URL from the `@font-face`
block whose `unicode-range` starts `U+0000-00FF`, and replace the file. Check the `v7` version segment
— a bump means the upstream font changed and the rendering should be re-reviewed before shipping.
Replace `OFL.txt` too if upstream's copyright line has changed.
