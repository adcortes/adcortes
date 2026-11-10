# Portfolio maintenance

This repository also hosts the owner's GitHub profile README. Keep `README.md` as a personal profile; project notes belong here.

## Run and build

Use Node 24 (`.nvmrc`) and the pnpm version declared in `package.json`. Install with `pnpm install`, run locally with `pnpm dev`, and inspect the production build with `pnpm build` then `pnpm preview`. `pnpm check` runs Astro's type and template checks. The static build should contain `dist/index.html` as its only HTML page.

## Edit content and appearance

- `src/data/hero.ts`, `work.ts`, `about.ts`, and `site.ts` hold the visible copy, links, and site metadata. Related shapes are in `src/types/content.ts`. `src/pages/index.astro` sets the section order. Add a link only when its destination exists.
- `src/config/hero.ts` selects the text-only or landscape hero. `src/config/theme.ts` selects `earth` or `egg` for the whole build. Both palette files are loaded by `BaseLayout.astro`; its `data-theme` attribute activates one. Shared design tokens live in `src/styles/tokens.css`. Some fixed colors and component values are intentional; check both themes after visual changes.
- The contact address is assembled by `src/lib/email.ts`. Keep it out of content strings and rendered source.

## Maintain assets and SEO

- Place local portfolio images in `public/images/` and update the paths, alternative text, and intrinsic dimensions where they are referenced. The responsive hero sources are in `public/images/hero/` and selected by `Hero.astro`. Check visual crops and loading at mobile and desktop sizes. Decorative hero art has empty alt text; project screenshots need descriptive alt text.
- The self-hosted Schibsted Grotesk variable font is in `public/fonts/`. Follow `public/fonts/README.md` when replacing it, including its licence and glyph-coverage checks. `BaseLayout.astro` preloads the file; `src/styles/base.css` defines its font face.
- `src/data/site.ts` contains the title, description, and shared OG image path. `BaseLayout.astro` produces canonical and `og:url` URLs from the `site` value in `astro.config.mjs`, and an absolute `og:image` URL from `public/og-image.png`. Keep that origin aligned with the public deployment before publishing. Also review `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, and the separate `public/github-social-preview.png` when changing branding. The favicon is fixed across themes; changing the theme does not select a different OG image.
- `astro.config.mjs` enables Astro's CSP. Component scripts are processed by Astro so their hashes can appear in the generated policy. Check browser-console CSP errors after changing client scripts. `BaseLayout.astro` includes Vercel Analytics.

## Publish manually to Vercel

`vercel.json` sets `git.deploymentEnabled` to `false`, so Git pushes do not trigger Vercel deployments. The repository contains no deployment command or CI workflow. Use the existing Vercel project's manual deployment path, confirm whether the target is Preview or Production, and verify the deployed URL and metadata. The configured canonical origin is `https://adcortes.vercel.app`; update it only when the real public origin changes.

## Before publication

1. Run `pnpm check`, `pnpm build`, and `git diff --check`; confirm `dist/index.html` is the sole built HTML page.
2. Review the built page with JavaScript disabled and enabled. Check navigation, skip link, contact link, archive disclosures, keyboard order, visible focus, image alternatives, and reduced-motion behavior. For visual changes, build and inspect each theme by changing `src/config/theme.ts` locally.
3. Inspect narrow mobile, tablet, and desktop widths, especially hero art, project rows, and the archive. Check for horizontal overflow and readable text.
4. Inspect the production preview for image sharpness and dimensions, font loading, layout shifts, console or CSP errors, and avoidable large assets. Check canonical, description, Open Graph, favicon, and social-preview assets against the intended public URL.
5. After manual deployment, open the live page and repeat the key link, responsive, and metadata checks.

## Case studies

`src/data/work.ts` holds the short homepage summaries. Long-form studies are separate: `src/data/airlineCaseStudy.ts` holds the airline narrative, typed as `CaseStudy` in `src/types/content.ts` and rendered by `src/layouts/CaseStudyLayout.astro`.

A study is a header — back-link, category, H1, lead paragraphs, and a metadata list — followed by chapters. Each chapter is an `id`, an H2 `heading`, an optional `number`, and a list of editorial `blocks` rendered in order.

A `number` such as `"01/"` prints before the heading in the accent colour, the same treatment the About items use. It is decorative wayfinding and is hidden from assistive technology, so keep the heading meaningful on its own and omit the number from closing chapters that are not part of the sequence.

The block kinds are:

- `prose` — one or more paragraphs.
- `subheading` — an H3 for a sub-topic inside the chapter.
- `image` — one `CaseStudyFigure` (`src`, `alt`, intrinsic `width`/`height`, optional `caption`), rendered by `src/components/case-study/Figure.astro`.
- `comparison` — two or more figures side by side, each with its own label, under an optional shared caption, rendered by `src/components/case-study/Comparison.astro`; the images stack below 960px.
- `placeholder` — a reserved media slot, rendered by `src/components/case-study/MediaPlaceholder.astro` and **only while `status` is `mock`**. It holds the editorial rhythm for review before the real screenshots exist and is visibly labelled as a placeholder. A published study renders nothing for it, so a forgotten slot cannot reach the live page as an empty frame.
- `note` — a short observation about the figure above it.

Copy keeps a fixed reading measure. The three media blocks default to `width: "wide"`, which applies the `.media-wide` primitive in `src/styles/base.css`: the block runs out to the container's own content box so interface detail stays legible, while the paragraphs around it keep their measure. Pass `width: "reading"` for a screenshot that does not need the extra room. The width collapses to the reading column once the viewport is narrower than it, so wide media never causes sideways scrolling.

Chapters are deliberately not uniform, so a new study need not reuse the airline chapters or its image placement. Omit a block rather than stubbing it: a chapter with no `image` block renders with no media frame, and the page carries no placeholder or editorial TODO. The layout adds no client script. Add a `nextProject` link only once a second study is actually published.

Only use real material. Omit a metadata row rather than guessing it — the airline study has no Period row because no verified employment dates exist in this project. Place screenshots in `public/images/` and record their intrinsic dimensions; give each one alt text that describes information the caption does not repeat, and review it for disclosure before publishing.

Run `pnpm dev` and use the airline project's "Read case study" link in Selected work, or open `/preview/airline-booking-disruption` directly. The homepage action and `src/pages/preview/[slug].astro` route exist only in development; production builds emit neither a preview link nor preview HTML, and `status: "mock"` also keeps the preview out of search engines and analytics. To publish a study, add an explicit static route such as `src/pages/work/[slug].astro` with an approved slug, set `status` to `published`, and replace the development-only action with the published destination. Confirm the build output and metadata again before deployment.
