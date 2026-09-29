# adcortes — Visual direction (Egg Theme)

This theme is frozen. Exact values are in `design-system.md`.

## Character
The site is dark, restrained, technical and mature. Hierarchy comes from spacing, type weight and measure, not from colour blocks or cards. The only atmosphere is a low, layered mountain range and a faint moon in the hero. The yellow accent is a signal for things you can act on or that are selected. It is never decoration.

## Colour usage
- **`#1D1E22`** is the only page background. The single exception is the narrow "Selected collaborations" band, which uses `#D4D4DC`.
- **`#D4D4DC`** is used for all headings and body copy.
- **`#ADAEB8`** is for metadata under 16px: the eyebrow, dt labels, tags, captions and the footer. Never use it for headings.
- **`#FEDA6A`** is for links, project category labels, the hero sub-line, the About numerals, the wordmark period, focus rings and the CTA. Use it only in short strings and only on dark grounds.
- **`#393F4D`** is for hairlines and layers only, never text on dark.
- **Ridge tones** are for the mountains only.

## Typography usage
- Use **Display** once per page, for the hero h1.
- Use **Section heading (22px)** for the label column of Work, About and Contact. It stays deliberately small.
- Use **Project title (24px)** for the three projects only.
- Use **Contact heading (fluid)** for the single closing statement.
- Use **About lead** for the one reflective paragraph.
- Use **Body 16/17** for summaries and intros, and **15** for metadata values and About items.
- Use **Small 14** for anything secondary or supporting.
- Use weight 600 for titles, 500 for UI and labels, and 400 for reading text. Nothing is heavier than 600.

## Page order
Header, then Hero (text only), Selected work, the Selected collaborations band, About, Contact and Footer. The order is the same at every size.

## Responsive intent
- **Mobile (390):** a single column. Each project is reduced to category, title, role, outcome and tags. Diagrams and summaries are hidden. The nav is three inline text links, with no pills and no menu.
- **Tablet (768):** section labels sit above content. Each project pairs its diagram with its text side by side, and web work is 3-up. About is 2 × 2. This uses the width without stretching mobile or squeezing desktop.
- **Desktop (1440):** the label column sits beside the content column.

## Mountain background rules
- There are four separate, filled, overlapping silhouettes grouped as distant, middle (back and front) and foreground. Each has its own peak profile. Never merge them into one path, and never repeat or mirror a profile.
- Contours are broad with slight irregularity. Never add strokes, wave shapes, textures, masks or filters inside the SVG.
- Depth comes only from tonal steps, lightest at the back: `#353A46`, `#2D3039`, `#25272E`, `#1F2025`.
- Placement: full-bleed (`100vw`) behind the hero, bottom-anchored, `preserveAspectRatio="xMidYMax slice"`, drawn 106% wide.
- Edge fades are applied in CSS on the wrapper, not in the SVG: the left edge fades to 55% opacity (full by 30% of the width) and the bottom 10% fades out.
- Keep the mountains low. The highest peak stays below the hero intro baseline on desktop. Text never sits on a tone lighter than `#353A46`.
- The background is decorative: `aria-hidden`, `pointer-events: none`, behind the text (`z-index: 0` against `1`).
- If motion is added later, only horizontal drift per layer is allowed. The foreground moves fastest. Motion is off by default and removed under reduced motion.

## Moon / disc rules
- There is one soft disc in the upper-left of the hero: `#D4D4DC` at 22% opacity, with a halo that fades from about 10% to 0.
- Size is `--moon: clamp(20px, 2.1vw, 30px)`. Position: top `clamp(20px, 2.5vw, 36px)`, left `calc(1% + 100px)`, relative to the content column.
- It is never accent-coloured, never animated and never repeated.

## Implementation notes for Claude Code
1. Build a static single page (Astro, Next static export or plain HTML). Use the landmarks `header`, `nav[aria-label="Primary"]`, `main#main` and `footer`. Headings run h1, then h2 per section, then h3 per project.
2. Load the tokens from `design-system.md` §12 as CSS custom properties. Use real media queries at 640px and 1024px; the prototype switches content in JS, which the build should not copy.
3. Inline `assets/hero-mountains.svg` and `assets/moon.svg` in the markup (not as `<img>`) so each `<g>` can be animated later and reduced-motion CSS applies.
4. Only the "terrain" background is approved. Ignore the prototype's `horizon` and `contours` modes.
5. Self-host Schibsted Grotesk as woff2 (400/500/600, latin subset) with `font-display: swap`, and preload 600.
6. Contact and the footer link are `mailto:` links. Assemble the address at runtime or encode it, and never print it on screen.
7. Keyboard order: skip link, wordmark, nav, hero link, project links, CTA, then footer. All targets are 44px or larger.
8. Replace every `[placeholder]` in `content.md` before launch.
9. Test with axe or Lighthouse (aim for 100 in accessibility), at 200% zoom, at 320px width and in forced-colors mode (the mountains may disappear, which is acceptable).
