/*
 * The one switch for the hero variant — the same shape as src/config/theme.ts.
 *
 * "classic" is the approved hero of design-system.md §5: copy over the
 * four-ridge mountain background (components/hero/HeroBackground.astro).
 * "illustrated" is the variant under evaluation: the same copy beside a
 * built composition — skill peaks, summit, figure, robot.
 * "clean" is the same text without a background or illustration.
 *
 * Changing this value swaps the hero at build time in src/pages/index.astro.
 * All variants read their copy from src/data/hero.ts, so none can drift.
 */
export type HeroVariant = "classic" | "illustrated" | "clean";

export const heroVariant: HeroVariant = "clean";
