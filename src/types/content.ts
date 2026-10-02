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
  target?: "_blank" | "_self" | "_parent" | "_top";
}

/** Which diagram component stands in for a project's confidential screens. */
export type DiagramId = "emr" | "design-system";

/**
 * A project's visual. Both variants share the same <figure> slot, the same
 * responsive rules (shown from 640px up, design-system.md §7) and the same
 * caption treatment; only what sits above the caption differs.
 */
interface ProjectVisualBase {
  /** Visible <figcaption>. Shown from 640px up. */
  caption: string;
}

/**
 * A local Astro component, drawn in HTML and CSS. The drawing is decorative
 * (`aria-hidden`); the caption carries its meaning.
 */
export interface DiagramVisual extends ProjectVisualBase {
  kind: "diagram";
  /** A key from the closed set the renderer knows how to draw. */
  component: DiagramId;
}

/**
 * A local image asset. Unlike the diagrams it is meaningful content, so `alt`
 * is required and describes the image — it is never empty and never repeats the
 * caption.
 */
export interface ImageVisual extends ProjectVisualBase {
  kind: "image";
  /** Path to a local asset under `public/`, e.g. "/work/<name>.png". */
  src: string;
  alt: string;
  /** Intrinsic size, when known — it reserves the right space while loading. */
  width?: number;
  height?: number;
}

export type ProjectVisual = DiagramVisual | ImageVisual;

/**
 * Behaviours a project action button may perform.
 *
 * The page ships no client-side JavaScript, so no button behaviour exists yet
 * and this union is deliberately empty. That makes `ButtonAction` impossible to
 * construct, which is the point: a button can only appear once a real behaviour
 * is added here, never as an inert or disabled control. Replace `never` with the
 * behaviour keys when there is one.
 */
/** An action with a real destination. */
export interface LinkAction extends Link {
  kind: "link";
}

/** An action with a real behaviour. */
export interface ButtonAction {
  kind: "button";
  label: string;
  behaviour: never;
}

/**
 * The single optional action in a project's footer.
 *
 * There is no placeholder form: an action is either a link with a working
 * `href` or a button with a real behaviour, or it is absent and the footer
 * renders tags alone. The build must never emit `href="#"`, an invented URL or
 * a disabled button.
 */
export type ProjectAction = LinkAction | ButtonAction;

/** Selected work, groups 1 and 2 — a single project with metadata and a visual. */
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
  action?: ProjectAction;
  visual: ProjectVisual;
}

export interface WebWorkItem {
  name: string;
  description: string;
  /**
   * What I did on the piece, in the one-line form the Selected work projects
   * use for their own `role`. Optional and rendered only when present, so an
   * item without one keeps the name/description/attribution shape it has now.
   */
  role?: string;
  /** Optional, and never rendered empty: an absent list and `[]` both render nothing. */
  tags?: string[];
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
