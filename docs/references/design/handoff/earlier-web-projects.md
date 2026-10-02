# Earlier web projects — handoff (option 5b)

Theme: Egg Theme, frozen. Reference: `Earlier Web Projects.dc.html`, section `#5b`.
Pattern: an archive table with inline disclosure. Each project is one row; clicking a row opens its details and image in place. Only one row is open at a time.

## Placement
- Sits between Selected work and About, in a full-bleed band with background `#393F4D`.
- Band padding: `88px 0 96px` on desktop. Use `clamp(56px, 7vw, 88px)` top and `clamp(64px, 8vw, 96px)` bottom.
- Content: `max-width: 1024px`, centred, with the page gutters `padding-inline: clamp(20px, 4vw, 56px)`.

## Structure (semantic)
```html
<section aria-labelledby="ewp-h" class="ewp">
  <div class="ewp-head">
    <div>
      <p class="eyebrow">Agency &amp; freelance</p>
      <h2 id="ewp-h">Earlier web projects</h2>
    </div>
    <p class="intro">A short selection of design and frontend projects from earlier in my career.</p>
  </div>

  <div class="ewp-cols" aria-hidden="true"><span>Project</span><span>Role</span><span>Year</span><span></span></div>

  <ul class="ewp-list" aria-label="Earlier web projects">
    <li>
      <h3>
        <button type="button" aria-expanded="true" aria-controls="ewp-0" id="ewp-btn-0">
          <span class="name">Natura Selection</span>
          <span class="role">Web design · Frontend development</span>
          <span class="year">2014</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
      </h3>
      <div id="ewp-0" role="region" aria-labelledby="ewp-btn-0" class="ewp-panel">
        <figure class="shot"><img src="…" alt="Natura Selection footwear category page" loading="lazy" width="1366" height="854"></figure>
        <div class="body">
          <p>…description…</p>
          <ul aria-label="Tags" class="tags"><li>Ecommerce</li>…</ul>
          <a href="…" class="link">Visit site <span aria-hidden="true">↗</span><span class="sr-only"> (opens Natura Selection)</span></a>
        </div>
      </div>
    </li>
    …
  </ul>
</section>
```
- Closed panels use `hidden`, not just `display: none` via a class, so they are removed from the accessibility tree and the tab order.
- The column header row is visual only (`aria-hidden`). Each row's role and year are read inside its button.

## Layout

| Element | Desktop (≥ 1024) | Tablet (640–1023) | Mobile (< 640) |
|---|---|---|---|
| Header | eyebrow/h2 left, intro right (max 420px), wrap gap `12px 48px` | same, wraps | stacked |
| Row grid | `4fr 4fr 120px 44px`, gap 24px | `1fr 1fr 96px 44px`, gap 20px | `1fr 44px`; role and year fold under the name as one muted line, "2014 · Web design · Frontend" |
| Column labels | shown | shown | hidden |
| Open panel | `320px 1fr`, gap 40px | `240px 1fr`, gap 28px | stacked: image (full width) then text |
| Panel padding | `6px 0 32px` | same | `4px 0 28px` |

The row is at least 60px tall, padded `14px 0`, with the whole row as the hit area.

## Typography

| Element | Spec |
|---|---|
| Eyebrow | 14/500 `#FEDA6A` |
| h2 | 22/600, −0.015em, `#D4D4DC` |
| Intro | 15/400, line-height 1.6, `#D4D4DC` |
| Column labels | 13/600 `#ADAEB8` |
| Project name (in h3 > button) | 17/600, line-height 1.35. `#D4D4DC` when closed, `#FEDA6A` when open |
| Role | 15/400 `#D4D4DC` |
| Year | 15/400 `#ADAEB8`, `font-variant-numeric: tabular-nums` |
| Description | 16/400, line-height 1.6, max 520px, `text-wrap: pretty` |
| Tags | 13/400 `#D4D4DC` |
| Visit site | 15/600 `#FEDA6A`, min-height 44px, hover `#D4D4DC` |

## Colour and surfaces (on `#393F4D`)

| Use | Value |
|---|---|
| Row dividers (top of each row, plus bottom of list) | `1px solid rgba(212,212,220,.18)` |
| Toggle icon | 28px circle, `inset 0 0 0 1px rgba(212,212,220,.3)`, glyph `+` / `−` in the name colour (draw it with CSS bars, not text, for crisp rendering) |
| Tag | padding `3px 8px`, radius 4, background `rgba(29,30,34,.35)`, `inset 0 0 0 1px rgba(212,212,220,.14)` |
| Image surface | `#30343F`, radius 6, `inset 0 0 0 1px rgba(212,212,220,.12)`, padding `5% 5% 0` |
| Image | `object-fit: cover; object-position: top` (Boekie: `center`), radius `3px 3px 0 0` |

Contrast on `#393F4D`:

| Text | Ratio |
|---|---|
| `#D4D4DC` | 7.3:1 |
| `#ADAEB8` | 4.8:1 |
| `#FEDA6A` | 8.0:1 |

## Image
- Ratio 16:10, 320px wide on desktop. The exports are in `handoff/assets/ewp-*.webp` and `.jpg`, at 640 × 400 (2×).
- The image is a top crop of the original screenshot, never scaled out of proportion.
- Set `loading="lazy"` and explicit width/height to avoid layout shift.
- A project without an image shows the surface with the centred text "Screenshot coming soon" (14px `#ADAEB8`), or drop the figure entirely and let the text use the full width.

| File | Source | Crop |
|---|---|---|
| `ewp-natura.webp` | natura-1.png | top |
| `ewp-boekie.webp` | boekie-boekie.png | centre |
| `ewp-lilla.webp` | Lilla-0.png | top |
| `ewp-bruguer.webp` | bruguer-vibrations-1.png | top |
| `ewp-salvat.webp` | — | pending |

## Interaction
- **Default:** the first row is open on load. Alternatively all rows can start closed; pick one and keep it.
- **Click, Enter or Space on a row:** opens that row and closes the one already open. Activating the open row closes it.
- **Focus:** each row button is a tab stop, followed by the "Visit site" link inside an open panel. Focus is not moved when a row opens.
- **Hover:** the name and icon turn `#FEDA6A` and the cursor is a pointer. Nothing else moves.
- **Focus-visible:** `2px solid #FEDA6A`, offset 4px, radius 2px, on the button.
- **Deep link (optional):** `#ewp-natura` opens that row on load.
- **No JS:** render every panel open (progressive enhancement), and let JS collapse them on hydrate.

## Motion
- Open/close: animate `grid-template-rows: 0fr → 1fr` and opacity, 200ms `cubic-bezier(.2,.7,.2,1)`. The icon `+` rotates to `−` over 150ms.
- `@media (prefers-reduced-motion: reduce)`: no height or opacity transition; the panel opens instantly.

## Content

| Project | Role | Year | Tags | Link |
|---|---|---|---|---|
| Natura Selection | Web design · Frontend development | 2014 | Ecommerce, UI design, Frontend | yes |
| Boekie Boekie | Creative design · Frontend development | 2014 | Creative coding, Animation, Interactive storytelling | yes |
| L'illa Diagonal | Web design · Frontend development | 2013–14 | WordPress, PHP, Responsive web | yes |
| Editorial Salvat — Collection websites | Visual design · Frontend development | [year] | Design system, Frontend | — |
| Bruguer — Colores del Mundo | Visual design · Frontend development | 2014 | Interactive design, CSS animation, Product content | — |

Descriptions:
- **Natura Selection:** An ecommerce website designed to make a broad product catalogue clear, approachable and easy to browse.
- **Boekie Boekie:** A playful, non-linear digital experience for a Dutch children's art and literature magazine, using animation and interaction to encourage exploration.
- **L'illa Diagonal:** A digital presence for L'illa Diagonal, a shopping centre in Barcelona, combining web design and frontend development.
- **Editorial Salvat:** A reusable website template for editorial collections, designed to support a consistent structure while giving each series its own visual character.
- **Bruguer:** An interactive product experience for Bruguer's Vibrations paint range, bringing colour inspiration, product details and technical documentation together.

To confirm before launch:
- The years (taken from the wireframe) and the Salvat year.
- The "Visit site" URLs.
- Whether the sites are still live; if one isn't, drop its link rather than linking to an archive.

## Acceptance checks
- [ ] Each row is reachable and operable with Tab, Enter and Space, and screen readers announce "expanded" / "collapsed".
- [ ] Only one panel is open at a time, and closed panels are not focusable.
- [ ] Text passes AA contrast on `#393F4D`, and every target is 44px or larger.
- [ ] Opening a row causes no layout shift above it, and images have explicit dimensions.
- [ ] Reduced motion opens panels instantly.
- [ ] Below 640px, role and year fold under the name with no horizontal scroll.
