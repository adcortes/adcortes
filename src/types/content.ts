/*
 * Content types — Egg Theme
 * Source of truth: docs/references/design/handoff/content.md
 */

/**
 * A link with a real destination.
 *
 * There is no placeholder form. Every optional `Link` in this file is either
 * present with a working `href`, or absent and not rendered at all — the build
 * must never emit `href="#"`.
 */
export interface Link {
  label: string;
  href: string;
}

/** Which diagram component stands in for a project's confidential screens. */
export type DiagramId = 'emr' | 'design-system';

export interface Diagram {
  /** Decorative markup, aria-hidden; the meaning lives in the caption. */
  component: DiagramId;
  /** Visible <figcaption>. Shown from 640px up. */
  caption: string;
}

/** Selected work, groups 1 and 2 — a single project with metadata and a diagram. */
export interface ProjectEntry {
  id: string;
  /** Accent label above the title. */
  category: string;
  title: string;
  /** Hidden below 640px, per design-system.md §7. */
  summary: string;
  role: string;
  outcome: string;
  tags: string[];
  link?: Link;
  diagram: Diagram;
}

export interface WebWorkItem {
  name: string;
  description: string;
  /** "[Agency]." or "Freelance." */
  attribution: string;
  link?: Link;
}

/** Selected work, group 3 — a 3-up list of smaller pieces, no diagram. */
export interface WebWorkGroup {
  category: string;
  title: string;
  intro: string;
  items: WebWorkItem[];
}

export interface AboutItem {
  /** Accent numeral, e.g. "01". */
  number: string;
  title: string;
  /** Items 01–03 carry prose; item 04 carries bullets instead. */
  body?: string;
  bullets?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
