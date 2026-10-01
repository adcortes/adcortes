/*
 * Site-level copy and metadata.
 * Source of truth: docs/references/design/handoff/content.md (§Header, §Footer, §Meta)
 */

import type { NavItem } from "../types/content";

export const site = {
  lang: "en",
  title: "adcortes — UX Engineer, design systems & accessible frontend",
  description:
    "UX Engineer working across product thinking, design systems and accessible frontend.",
  ogImage: "/og-image.png",
  ogImageAlt: "adcortes. UX Engineer — design systems &amp; accessible frontend",
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
} as const;

/*
 * The two social destinations. SiteFooter renders each icon link only when its
 * URL is present here, so a profile can be dropped without touching markup.
 *
 * The contact address is not in this file: it is assembled in src/lib/email.ts
 * so the literal string never reaches the HTML source (visual-direction.md §6).
 */
export const social: { linkedin?: string; github?: string } = {
  linkedin: "https://www.linkedin.com/in/adcortes/",
  github: "https://github.com/adcortes",
};
