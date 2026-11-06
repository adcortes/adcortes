/*
 * The one switch for the site's visual theme.
 * Each theme's values live in src/styles/themes/<name>.css.
 *
 * Changing this value re-skins the whole site at build time: colors (via
 * data-theme on <html>, read by src/styles/themes/*.css) and the themed
 * OG image under public/themes/<name>/, wired up in src/data/site.ts.
 * The favicon stays the same Earth palette mark for every theme.
 */
export type ThemeName = "egg" | "earth";

export const theme: ThemeName = "earth";
