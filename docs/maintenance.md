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

## Future case studies

`src/data/work.ts` holds short homepage summaries. The unpublished airline prototype has a separate narrative in `src/data/airlineCaseStudy.ts`, typed in `src/types/content.ts` and rendered by `src/layouts/CaseStudyLayout.astro`. All prototype copy is fictional and each section marks the real input it needs.

Run `pnpm dev` and use the airline project's "Read case study" link in Selected work, or open `/preview/airline-booking-disruption` directly. The homepage action and `src/pages/preview/[slug].astro` route exist only in development; production builds emit neither a preview link nor preview HTML. Before publishing a real case study, replace and verify the mock material, review any media for disclosure, then add an explicit static route such as `src/pages/work/[slug].astro` with an approved slug. Replace the development action with the published destination only when that route exists. Confirm the build output and metadata again before deployment.
