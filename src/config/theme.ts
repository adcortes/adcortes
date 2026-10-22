/*
 * The one switch for the site's visual theme.
 * Source of truth for each theme's values: src/styles/themes/<name>.css and
 * docs/references/design/handoff/ (design-system.md for Egg, earth-theme/
 * color-adjustments.md for Earth).
 *
 * Changing this value re-skins the whole site at build time: colors (via
 * data-theme on <html>, read by src/styles/themes/*.css) and the themed
 * static assets under public/themes/<name>/ (favicon, apple-touch-icon,
 * og-image), wired up in BaseLayout.astro and src/data/site.ts.
 */
export type ThemeName = "egg" | "earth";

export const theme: ThemeName = "earth";
