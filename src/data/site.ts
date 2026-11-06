/* Site-level copy and metadata. */

import type { NavItem } from "../types/content";
import { theme } from "../config/theme";

export const site = {
  lang: "en",
  title: "adcortes — UX Engineer, design systems & accessible frontend",
  description:
    "UX Engineer working across product thinking, design systems and accessible frontend.",
  ogImage: `/themes/${theme}/og-image.png`,
  /* Literal "&", like `title` above: Astro escapes attribute values itself. */
  ogImageAlt: "adcortes. UX Engineer — design systems & accessible frontend",
} as const;

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const contact = {
  label: "Contact",
  heading: "Let's talk about what you're building.",
  body: "Whether you're hiring, planning a product, or we've worked together before, I'd be glad to hear from you.",
  ctaLabel: "Get in touch",
} as const;

/*
 * "adcortes. © 2026" is not here: SiteFooter builds it in markup, because the
 * period is accent-coloured and aria-hidden. A string copy would only drift.
 */
export const footer = {
  accessibilityStatement: "Built to meet WCAG 2.2 AA. Found a barrier?",
  accessibilityLinkLabel: "Let me know",
  /* The attribution line's lead-in; the links after it are built in markup. */
  attribution: "Designed & built by",
} as const;

/*
 * This site's own source. `forks` is a static field on purpose: the footer is
 * rendered at build time, so a GitHub API call would either make the number
 * stale the moment it was fetched or add a runtime request for one word.
 * Update it by hand when it is worth saying.
 *
 * It is optional, and the footer renders the fork count only when it is set to
 * a positive number — so leaving it out, or letting it fall back to 0, simply
 * drops that part of the line and the rest stays correct.
 */
export const repo: { url: string; forks?: number } = {
  url: "https://github.com/adcortes/adcortes",
};

/*
 * The two social destinations. SiteFooter renders each icon link only when its
 * URL is present here, so a profile can be dropped without touching markup.
 *
 * The contact address is not in this file: it is assembled in src/lib/email.ts
 * so the literal string never reaches the HTML source.
 */
export const social: { linkedin?: string; github?: string } = {
  linkedin: "https://www.linkedin.com/in/adcortes/",
  github: "https://github.com/adcortes",
};
