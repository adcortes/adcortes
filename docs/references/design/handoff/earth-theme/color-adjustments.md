# Earth Theme — color adjustments

Source design: `[v1] Earth Theme - desktop.dc.html`.
Earth Theme uses the same layout, type, spacing, components and copy as the current Egg Theme. **Only the colors change.** Use this file as a token swap.

## Palette

| Name | Hex | Use |
|---|---|---|
| Dusk | `#45425A` | Page background, text on lime buttons |
| Moss grey | `#575C55` | Earlier web projects band, mid mountain ridge |
| Olive | `#6C7D47` | Token diagram dot; base for the distant ridge |
| Lime | `#ACC12F` | Accent: eyebrows, links, CTA, numbering, logo dot, focus ring |
| Chalk | `#F6F6F2` | Primary text |

## Token map (Egg → Earth)

| Token | Egg | Earth | Notes |
|---|---|---|---|
| `--bg` | `#1D1E22` | `#45425A` | |
| `--band` | `#393F4D` | `#575C55` | Full-bleed Earlier web projects band |
| `--text` | `#D4D4DC` | `#F6F6F2` | |
| `--text-muted` | `#ADAEB8` | `#CFCDD8` | Derived: lighter Dusk. Captions, dt labels, meta |
| `--text-muted-on-band` | — | `#DADDD6` | Derived: lighter Moss grey. Table header and Agency column |
| `--accent` | `#FEDA6A` | `#ACC12F` | |
| `--accent-on-band` | `#FEDA6A` | `#D2E36B` | **New.** Lighter lime, used only on the band (see Contrast) |
| `--on-accent` | `#1D1E22` | `#45425A` | Text on lime fill (skip link, CTA hover) |
| `--line` | `#393F4D` | `#5C5972` | Hairlines and section dividers on the background |
| `--line-strong` | `#555C6C` | `#6E6B85` | Tag chips, figure frames |
| `--line-diagram` | `#555C6C` | `#7E7B94` | Bars and outlines inside the diagrams |
| `--line-on-band` | `rgba(212,212,220,.18)` | `rgba(246,246,242,.22)` | Table rows |
| `--figure-bg-on-band` | `#30343F` | `#4C504A` | Screenshot frame in the expanded row |

Derived colors are mixes inside the palette (Dusk or Moss grey, lightened). They aren't new hues.

## Contrast (WCAG 2.2 AA)

| Pair | Ratio | Result |
|---|---|---|
| Chalk on Dusk | ≈ 8.8:1 | ✅ |
| Muted `#CFCDD8` on Dusk | ≈ 6:1 | ✅ |
| Lime on Dusk | ≈ 4.8:1 | ✅ small text allowed |
| Dusk on Lime (CTA hover, skip link) | ≈ 4.8:1 | ✅ |
| Chalk on Moss grey | ≈ 5.8:1 | ✅ |
| **Lime on Moss grey** | ≈ 3.4:1 | ❌ for small text, so don't use it |
| Lime-on-band `#D2E36B` on Moss grey | ≈ 4.9:1 | ✅ |

**Rule:** on the `#575C55` band, every lime element (the "Agency & freelance" eyebrow, the open row's name and +/− icon, "Visit site", the hover color and the focus ring) uses `#D2E36B`, not `#ACC12F`.

## Hero mountains

There's no moon in this theme. The terrain ridges fade from olive (back) to the background (front):

| Layer (`hero-mountains.svg` id) | Egg | Earth |
|---|---|---|
| `ridge-distant` | `#353A46` | `#66744B` |
| `ridge-middle-back` | `#2D3039` | `#575C55` |
| `ridge-middle-front` | `#25272E` | `#4E4E58` |
| `ridge-foreground` | `#1F2025` | `#47445B` (≈ bg) |

Same mask as Egg: 55% → 100% opacity from left to right, and a soft fade at the bottom.

## Unchanged

Typography (Schibsted Grotesk), spacing, radii, breakpoints, motion and copy all stay the same.

## Assets in `assets/`

Recolored for Earth:
- `hero-mountains.svg`
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (Dusk tile, Chalk mark, Lime dot)
- `og-image.png` (1200×630, new headline and Earth palette)

Copied unchanged (theme-neutral):
- `airline-booking-composite.png`
- `ewp-natura`, `ewp-boekie`, `ewp-lilla`, `ewp-bruguer` (`.jpg` + `.webp`)

`moon.svg` and `hero-landscape.svg` aren't included because Earth doesn't use them.
