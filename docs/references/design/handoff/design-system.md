# adcortes — Design system (Egg Theme)

This theme is frozen: every value below is final. Source screens: `[v1] Egg Theme.dc.html` (desktop), `[v1] Egg Theme - desktop.dc.html` (the responsive build) and `[v1] Egg Theme - Tablet + Mobile.dc.html` (the 390 and 768 boards).

## 1. Colour palette

| Token | HEX | Use |
|---|---|---|
| `--ink-900` | `#1D1E22` | Page background; text on light surfaces |
| `--ink-700` | `#393F4D` | Borders, dividers, subtle layers; names on the light band |
| `--ink-500` | `#555C6C` | Decorative diagram strokes only, never text |
| `--paper-200` | `#D4D4DC` | Primary and secondary text; light band surface |
| `--paper-400` | `#ADAEB8` | Muted text (captions, labels, tags, eyebrow, footer) |
| `--accent` | `#FEDA6A` | Links, focus, selected states, small highlights |
| `--ridge-1` | `#353A46` | Mountains, distant layer |
| `--ridge-2` | `#2D3039` | Mountains, middle-back layer |
| `--ridge-3` | `#25272E` | Mountains, middle-front layer |
| `--ridge-4` | `#1F2025` | Mountains, foreground layer |

## 2. Semantic roles

| Role | Value |
|---|---|
| Page background | `#1D1E22` |
| Surface / layers | Hairlines and diagram frames use `#393F4D`; the collaborations band uses `#D4D4DC`; the hero uses the ridge tones |
| Primary text | `#D4D4DC` |
| Secondary text | `#D4D4DC` (body copy is set apart by size and weight, not colour) |
| Muted text | `#ADAEB8` |
| Accent | `#FEDA6A` |
| Link | Content links `#FEDA6A`; nav and footer inline links `#D4D4DC` |
| Hover | Accent links turn `#D4D4DC`. Light links turn `#FEDA6A`. The CTA fills with `#FEDA6A` and its text turns `#1D1E22` |
| Focus indicator | `2px solid #FEDA6A`. On the CTA and the skip link it is `#D4D4DC` |
| Borders | `1px solid #393F4D` |

## 3. Contrast and accessibility (WCAG 2.2)

| Pair | Ratio |
|---|---|
| `#D4D4DC` on `#1D1E22` | 11.3:1, AAA |
| `#ADAEB8` on `#1D1E22` | 7.6:1, AAA |
| `#FEDA6A` on `#1D1E22` | 12.3:1, AAA |
| `#1D1E22` on `#D4D4DC` | 11.3:1 |
| `#393F4D` on `#D4D4DC` | 7.1:1 |
| `#1D1E22` on `#FEDA6A` | 12.3:1 |
| `#D4D4DC` on `#353A46` (lightest ridge) | 7.7:1 |

Rules:
- Never set `#393F4D` or `#555C6C` as text on `#1D1E22`.
- Use `#FEDA6A` only for short strings on dark grounds. Never use it for paragraphs, and never on the light band.
- Links never rely on colour alone. Each carries an arrow glyph or sits in a nav landmark.
- The focus ring is always visible and always at least 3:1 against its surroundings.
- Every interactive target is at least 44 × 44px. The CTA is 48px tall.

## 4. Typography

**Family (headings and body):** `'Schibsted Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
**Weights:** 400, 500, 600. **Rendering:** `-webkit-font-smoothing: antialiased`.

| Style | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Display (h1) | `clamp(34px, 4.3vw, 58px)` | 600 | 1.08 | -0.025em |
| Hero sub-line | `clamp(18px, 1.5vw, 21px)` | 500 | 1.4 | -0.01em |
| Contact heading (h2) | `clamp(28px, 3vw, 40px)` | 600 | 1.15 | -0.02em |
| Section heading (h2) | 22px | 600 | 1.3 | -0.015em |
| Project title (h3) | 24px | 600 | 1.2 | -0.015em |
| About item title (h3) | 17px | 600 | 1.4 | 0 |
| About lead | `clamp(19px, 1.7vw, 23px)` | 400 | 1.55 | 0 |
| Body large (hero intro) | 17px | 400 | 1.65 | 0 |
| Body | 16px | 400 | 1.65 | 0 |
| Body small (dd, About copy) | 15px | 400 | 1.55 | 0 |
| Navigation | 15px | 500 | 44px row | 0 |
| Wordmark | 20px header, 16px footer | 500 | 1 | -0.03em |
| Project category | 14px, accent | 500 | 1.4 | 0 |
| Project metadata label (dt) | 14px, muted | 600 | 1.4 | 0 |
| Project metadata value (dd) | 15px | 400 | 1.55 | 0 |
| Small text (tags, captions, footer) | 14px, muted | 400 | 1.4 | 0 |

### Responsive values (px)

| Style | Mobile 390 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Display | 34 | 34 | 58 |
| Hero sub-line | 18 | 18 | 21 |
| Contact heading | 28 | 28 | 40 |
| About lead | 19 | 19 | 23 |
| Everything else | fixed | fixed | fixed |

Measures: h1 17ch, About lead 44ch, contact body 52ch, hero intro 460px. Apply `text-wrap: balance` to h1 and h3, and `text-wrap: pretty` to paragraphs. Use sentence case throughout, with no uppercase eyebrows.

### Wordmark
"adcortes." is live text in the site font. It has no custom letterforms, so no SVG is supplied.
```html
<a href="/" class="wordmark" aria-label="adcortes, home">adcortes<span aria-hidden="true">.</span></a>
```
`.wordmark { font: 500 20px/1 var(--font); letter-spacing: -0.03em; color: var(--paper-200); }`
`.wordmark span { color: var(--accent); }`
The footer uses 16px. The monochrome version is simply the period in `currentColor`.

## 5. Spacing scale (px)
`4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 56 · 64 · 80 · 104`
- 6–10: inside a text group
- 16–28: between groups within a block
- 32–56: between columns and blocks
- 56–104: between sections, fluid via `clamp(56px, 7vw, 104px)`

| Area | Value |
|---|---|
| Hero padding | top `clamp(72px, 11vw, 108px)`, bottom `clamp(72px, 9vw, 136px)` |
| Contact bottom | `clamp(72px, 9vw, 128px)` |
| Header height | `clamp(64px, 11vw, 88px)` |

## 6. Container and gutters
- Container: `max-width: 1240px; margin-inline: auto`
- Gutter: `padding-inline: clamp(20px, 4vw, 56px)`, which works out to 20px at 390, about 31px at 768 and 56px at 1440
- Section grid: a label column (`flex: 1 1 200px; max-width: 280px`) and a content column (`flex: 3.4 1 620px`), wrapped
- The collaborations band bleeds to full width; its inner content is capped at 1128px

## 7. Breakpoints

| Name | Range | Changes |
|---|---|---|
| Mobile | `< 640px` | Single column. Project diagrams and summaries are hidden. Role and outcome stack. The web-work and About grids drop to 1 column. |
| Tablet | `640–1023px` | Section labels sit above content. The project diagram sits beside its text. Metadata is 2-up, web work 3-up and About 2 × 2. |
| Desktop | `≥ 1024px` | The label column sits beside content. |

## 8. Radii
- 2px: text-link focus ring
- 4px: diagram chips
- 6px: skip link, icon buttons, diagram panels
- 8px: CTA
- 10px: diagram frame

## 9. Components

| Component | Spec |
|---|---|
| Nav link | 15px/500 `#D4D4DC`, 44px row, gap `clamp(20px, 3vw, 40px)`. Hover `#FEDA6A`. No pills and no hamburger. |
| Content link | 15px/600 `#FEDA6A`, no underline, trailing `↗`/`↓` (`aria-hidden`), 44px target. Hover `#D4D4DC`. The hero link adds a 1px bottom border in the current colour. |
| Footer inline link | Inherits 14px, `#D4D4DC`, underlined. |
| Primary button | Min height 48px, padding `0 22px`, radius 8px, `1px solid #FEDA6A` border, `#FEDA6A` text at 16px/600, trailing `→`. Hover: `#FEDA6A` fill with `#1D1E22` text. This is the only button on the page. |
| Tags | Plain text list, 14px `#ADAEB8`, gap `6px 16px`. No borders, fills or pills. |
| Metadata `<dl>` | Grid `repeat(auto-fit, minmax(180px, 1fr))`, gap `16px 28px`, 1px `#393F4D` top rule, 18px padding above. |
| Divider | 1px `#393F4D`. It is the only structural line; there are no cards. |
| Icon button | 44 × 44, radius 6, `#ADAEB8`, hover `#FEDA6A`, icon 20px in `currentColor`. |
| Skip link | Off-screen until focused. On focus: top-left, `#FEDA6A` background, `#1D1E22` text at 15px/600, radius 6. |

## 10. Focus-visible
```css
:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; border-radius: 2px; }
.footer a:focus-visible { outline-offset: 2px; }
.icon-btn:focus-visible { outline-offset: 0; }
.cta:focus-visible, .skip:focus-visible { outline-color: var(--paper-200); outline-offset: 3px; }
```
Use `:focus-visible`, never plain `:focus`, and never set `outline: none`.

## 11. Reduced motion
- The page is static by default, and no content depends on motion.
- The optional ridge drift is off by default. Each layer moves `translateX(0 → -120px)`, alternating, over 240s (distant), 190s (middle-back), 150s (middle-front) and 110s (foreground).
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .hero-bg * { animation: none !important; transition: none !important; transform: none !important; }
}
```

## 12. CSS tokens
```css
:root {
  --ink-900:#1D1E22; --ink-700:#393F4D; --ink-500:#555C6C;
  --paper-200:#D4D4DC; --paper-400:#ADAEB8; --accent:#FEDA6A;
  --ridge-1:#353A46; --ridge-2:#2D3039; --ridge-3:#25272E; --ridge-4:#1F2025;
  --font:'Schibsted Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --container:1240px; --gutter:clamp(20px,4vw,56px);
  --section-y:clamp(56px,7vw,104px);
  --fs-display:clamp(34px,4.3vw,58px); --fs-sub:clamp(18px,1.5vw,21px);
  --fs-contact:clamp(28px,3vw,40px); --fs-lead:clamp(19px,1.7vw,23px);
}
```
