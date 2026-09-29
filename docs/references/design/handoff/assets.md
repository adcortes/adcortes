# adcortes — Asset inventory (Egg Theme)

All files are in `handoff/assets/`: `hero-mountains.svg`, `moon.svg`, `hero-landscape.svg`, `favicon.svg`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` and `og-image.png`. The SVGs contain no raster images, masks, filters or embedded fonts.

| Filename | Format | Size / viewBox | Purpose | Decorative or meaningful | Animatable | Implementation |
|---|---|---|---|---|---|---|
| `hero-mountains.svg` | SVG | `0 0 1600 700` | Hero mountains: 4 filled silhouettes in 3 groups | Decorative (`aria-hidden`) | Yes, per `<g>` | Inline SVG, full-bleed wrapper, `xMidYMax slice`, width 106%, CSS edge-fade mask on the wrapper |
| `moon.svg` | SVG | `0 0 240 240` | Moon disc with its halo | Decorative (`aria-hidden`) | Technically yes, but by rule it stays static | Inline SVG, absolutely positioned (formula below) |
| `hero-landscape.svg` | SVG | `0 0 1600 700` | Moon and mountains in one file, for reference, OG artwork and design tools | Decorative | Yes, per `<g>` | Not used on the page; source for the OG image |
| Wordmark "adcortes." | Live HTML text | — | Home link and brand | Meaningful (`aria-label="adcortes, home"`) | No | HTML text; treatment in `design-system.md` §4. No SVG, because there are no custom letterforms |
| `favicon.svg` | SVG | `0 0 64 64` | Browser tab (modern browsers) | Meaningful (brand) | No | `<link rel="icon" href="/favicon.svg" type="image/svg+xml">` |
| `favicon.ico` | ICO (PNG-in-ICO) | 16, 32, 48 | Legacy tab and bookmark fallback | Meaningful (brand) | No | `<link rel="icon" href="/favicon.ico" sizes="48x48">`, served from the site root |
| `favicon-32.png` | PNG | 32 × 32 | Optional PNG fallback and manifest icon | Meaningful (brand) | No | Optional; the `.ico` already contains this size |
| `apple-touch-icon.png` | PNG, opaque | 180 × 180 | iOS home screen | Meaningful (brand) | No | `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`. Square and full-bleed, because iOS applies its own rounding |
| `og-image.png` | PNG | 1200 × 630 | Social share card | Meaningful | No | `og:image`, `twitter:card=summary_large_image`, `og:image:alt="adcortes. — Clear paths from idea to interface."` |
| Project diagram (EMR) | HTML/CSS | about 560 × 220, fluid | Stands in for confidential screens | Decorative (`aria-hidden`); meaning is in `<figcaption>` | No | Rebuild in HTML/CSS from the prototype. Tablet and desktop only |
| Project diagram (Airline DS) | HTML/CSS | about 560 × 220, fluid | Tokens, Components, Products ladder | Decorative; meaning is in `<figcaption>` | No | As above |
| LinkedIn and GitHub icons | Inline SVG | `0 0 24 24`, shown at 20px | Footer social links | Meaningful through the link's `aria-label` | No | `fill="currentColor"` inside a 44 × 44 link, replacing the "in"/"gh" placeholders |
| Schibsted Grotesk | woff2 | 400, 500, 600, latin | All text | — | — | Self-host with `font-display: swap`; preload 600 |

## Compact mark "ad." (icons only)
- It is a subset of the wordmark, not a separate logo. The site header always uses the text wordmark "adcortes.".
- Letters are Schibsted Grotesk 600 with -0.03em tracking, converted to outlines. At icon sizes 600 is the optical equivalent of the 500 wordmark.
- `ad` is `#D4D4DC`, the period is `#FEDA6A` and the background is `#1D1E22`.
- In `favicon.svg` the mark is 62% of the canvas width, centred optically on its bounding box, with a 12/64 corner radius. `favicon.svg` uses two paths, one for "ad" and one for the period.
- Mark width by size: 58% on the Apple icon, 80% at 16px, 70% at 32px and 66% at 48px, so it stays legible when small.

## og-image.png composition
- 1200 × 630, background `#1D1E22`.
- Wordmark "adcortes." in Schibsted Grotesk 500 at 30px, baseline at (72, 96).
- Moon: disc r 14 at (208, 150), 22% `#D4D4DC`, halo r 98.
- Headline "Clear paths from idea / to interface." in 600 at 66px, line height 1.08, -0.025em, `#D4D4DC`, first baseline at y 262.
- Mountains: the same four paths as `hero-mountains.svg` at 0.85 scale, bottom-anchored and centred. They use the site's edge fades (left edge at 55%, bottom 10%). The highest peak is about 50px below the headline.
- All text is converted to outlines, so it doesn't depend on fonts at render time. Regenerate the image if the copy changes.

## hero-mountains.svg structure
```
svg  viewBox="0 0 1600 700"  preserveAspectRatio="xMidYMax slice"
├─ g#mountains-distant
│   └─ path#ridge-distant       fill #353A46   baseline y≈515
├─ g#mountains-middle
│   ├─ path#ridge-middle-back   fill #2D3039   baseline y≈570
│   └─ path#ridge-middle-front  fill #25272E   baseline y≈623
└─ g#mountains-foreground
    └─ path#ridge-foreground    fill #1F2025   baseline y≈675
```
- Paths span x from -200 to 1800, which leaves 200 units of overscan on each side. That covers a later drift of up to ±120px without exposing an edge.
- Each path closes at y=760, below the viewBox, so the bottom never shows a gap.
- Suggested drift, if it is ever enabled: animate each `g` separately with `translateX(0 → -120px)`, alternating, over 240s, 190s (applied to both middle paths, or split per path if you prefer), 150s and 110s, with `ease-in-out`. Disable it under `prefers-reduced-motion`.

## Wrapper CSS for the mountains
```css
.hero { position: relative; isolation: isolate; }
.hero-bg { position: absolute; inset: 0 auto 0 50%; width: 100vw; transform: translateX(-50%);
  overflow: hidden; pointer-events: none; z-index: 0;
  mask-image: linear-gradient(to right, rgb(0 0 0 / .55), #000 30%),
              linear-gradient(to bottom, #000 90%, transparent);
  mask-composite: intersect; -webkit-mask-composite: source-in; }
.hero-bg > svg { position: absolute; inset: 0 auto auto 0; width: 106%; height: 100%; }
```

## Moon placement
The disc is 15 of 240 units in radius, so the SVG box is 8 × the disc size.
```css
.moon { position: absolute; z-index: 0; pointer-events: none;
  width: calc(var(--moon) * 8); aspect-ratio: 1;
  top:  calc(clamp(20px, 2.5vw, 36px) - var(--moon) * 3.5);
  left: calc(1% + 100px - var(--moon) * 3.5); }
```

## Not required
- A personal photo (excluded).
- Raster backgrounds or textures.
- Client logos. The collaborations band uses text.
