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
 * A project's visual. Diagram and image variants share the same <figure> slot,
 * responsive rules (shown from 640px up, design-system.md §7) and caption
 * treatment. A project may also have no visual.
 */
interface ProjectVisualBase {
  /** Visible <figcaption>. Shown from 640px up. */
  caption?: string;
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

export interface NoVisual {
  kind: "none";
}

export type ProjectVisual = DiagramVisual | ImageVisual | NoVisual;

/** An action with a real destination. */
export interface LinkAction extends Link {
  kind: "link";
}

/**
 * An action with a real behaviour.
 *
 * `behaviour: never` is a deliberate guard, not a placeholder type: no project
 * action currently needs a button, so there is no behaviour key to name, and
 * `never` makes `ButtonAction` impossible to construct. The renderer therefore
 * cannot be handed an inert or disabled control. Replace `never` with a union of
 * behaviour keys when a button earns its place.
 */
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

/** Selected work, groups 1 and 2 — a project with metadata and an optional visual. */
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

/**
 * An earlier project's screenshot, shown inside its disclosure panel.
 *
 * Distinct from `ImageVisual`: it carries no `caption` — the panel's own
 * description does that work — and its intrinsic size is required, because the
 * panel reserves the 16:10 box before the lazy image arrives.
 */
export interface WebWorkImage {
  /** Path to a local asset under `public/`, e.g. "/images/<name>.jpeg". */
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Which edge of the screenshot the 16:10 box keeps when it crops. Defaults to
   * the top crop every project but Boekie Boekie uses.
   */
  crop?: "top" | "center";
}

export interface WebWorkItem {
  name: string;
  description: string;
  /**
   * How the work was engaged, rendered in its own column. The column it sits in
   * has no label, so the two words carry the meaning on their own — which is
   * why this is a closed set and not free text. Optional and omitted rather
   * than guessed.
   */
  engagement?: "Agency" | "Freelance";
  /**
   * What I did on the piece, in the one-line form the Selected work projects
   * use for their own `role`. Optional and rendered only when present, so an
   * item without one keeps the name/description/attribution shape it has now.
   */
  role?: string;
  /** Optional, and never rendered empty: an absent list and `[]` both render nothing. */
  tags?: string[];
  /** Optional: an item without one shows the empty image surface instead. */
  image?: WebWorkImage;
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
  number: string;
  title: string;
  body?: string;
  bullets?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
