/*
 * The one switch for the site's visual theme.
 * Each theme's values live in src/styles/themes/<name>.css.
 *
 * Changing this value selects colors via data-theme on <html>, read by
 * src/styles/themes/*.css. The OG image and favicon stay the same in both themes.
 */
export type ThemeName = "egg" | "earth";

export const theme: ThemeName = "earth";
