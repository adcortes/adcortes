/*
 * Site-level copy and metadata.
 * Source of truth: docs/references/design/handoff/content.md (§Header, §Footer, §Meta)
 */

import type { NavItem } from '../types/content';

export const site = {
  lang: 'en',
  title: 'adcortes — UX Engineer, design systems & accessible frontend',
  description:
    'UX Engineer working across product thinking, design systems and accessible frontend.',
  ogImage: '/og-image.png',
  ogImageAlt: 'adcortes. — Clear paths from idea to interface.',
} as const;

export const nav: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const footer = {
  copyright: 'adcortes. © 2026',
  accessibilityStatement: 'Built to meet WCAG 2.2 AA. Found a barrier?',
  accessibilityLinkLabel: 'Let me know',
} as const;

/*
 * TODO(launch): supply the real profile URLs.
 *
 * Per the approved plan, a link with no destination is omitted rather than
 * stubbed with `href="#"`. SiteFooter renders each icon link only when its URL
 * is present, so the footer is correct — just smaller — until these are filled.
 */
export const social: { linkedin?: string; github?: string } = {};
