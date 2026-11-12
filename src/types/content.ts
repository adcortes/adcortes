/* Content types for the page's copy and metadata. */

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

/**
 * Which local drawing a project shows.
 *
 * This type is the vocabulary and `ProjectEntry.astro` holds the registry that
 * maps each key to a component. The registry is checked against this type, so
 * adding a key here without drawing it — or drawing something this type does
 * not name — fails the build rather than rendering nothing.
 *
 * `airline-stub` and `airline-fares` are two treatments of the same project.
 * Both are kept deliberately: the entry in `work.ts` selects one, and swapping
 * the key is the whole cost of changing its mind.
 */
export type ArtworkId = "airline-stub" | "airline-fares";

/**
 * A project's visual. There are exactly two kinds of picture — an `artwork`
 * drawn here in HTML and CSS, or an `image` file — and they share the same
 * <figure> slot, responsive rules (shown from 640px up) and caption treatment.
 *
 * A project with no picture is the third outcome, and it is modelled the way
 * this file models every other absence — `action?`, `image?`, `link?`: the
 * property is simply omitted. There is no `{ kind: 'none' }` member, because a
 * missing picture is not a kind of picture, and a sentinel would be one more
 * thing every reader of the union has to learn and every renderer has to skip.
 */
interface ProjectVisualBase {
  /** Visible <figcaption>. Shown from 640px up. */
  caption?: string;
}

/**
 * A local Astro component, drawn in HTML and CSS — the frame and its artwork
 * both come from the component, never from the <figure> slot. The drawing is
 * decorative (`aria-hidden`); the caption carries its meaning.
 */
export interface ArtworkVisual extends ProjectVisualBase {
  kind: "artwork";
  /** A key from the closed set the renderer knows how to draw. */
  id: ArtworkId;
}

/**
 * An image file — SVG, PNG or JPEG — under `public/`. Unlike an artwork it is
 * meaningful content, so `alt` is required and describes the image: it is never
 * empty and never repeats the caption.
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

export type ProjectVisual = ArtworkVisual | ImageVisual;

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
  /** Hidden below 640px. */
  summary: string;
  role: string;
  outcome: string;
  tags: string[];
  action?: ProjectAction;
  /** Omitted when the project has no picture; never a placeholder. */
  visual?: ProjectVisual;
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

/** Selected work, group 3 — a 3-up list of smaller pieces, no artwork. */
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

/** Long-form case studies are separate from homepage ProjectEntry summaries. */

/**
 * Which close-up crop a comparison figure is shown through.
 *
 * A closed set, like `ArtworkId`: the crop geometry lives in static CSS in
 * `Comparison.astro`, because Astro's CSP emits hashed styles with no
 * `'unsafe-inline'`, so a per-figure `style` attribute would be blocked on a
 * published page. The source file is never altered and the crop is reversible
 * — drop the key and the full screenshot renders.
 */
export type CaseStudyCropId = "flyadeal-fares";

/**
 * A screenshot or diagram inside a chapter. Unlike the homepage artwork it is
 * meaningful content, so `alt` is required and describes the image rather than
 * repeating the caption. Intrinsic size is required: it reserves the right box
 * before the lazy image arrives.
 */
export interface CaseStudyFigure {
  /** Path to a local asset under `public/`, e.g. "/images/work/<name>.png". */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Visible <figcaption>. Optional — an image may stand on its alt text alone. */
  caption?: string;
  /**
   * Show only part of the screenshot, scaled up. `alt` must then describe what
   * the crop shows, not the whole file. Comparison figures only.
   */
  crop?: CaseStudyCropId;
}

/**
 * How wide a media block runs. Reading-width media sits on the text column;
 * `wide` lets a screenshot break out of it so interface detail stays legible,
 * without widening the paragraphs. Both collapse to the same width on mobile.
 */
export type MediaWidth = "reading" | "wide";

/** Body copy. One or more paragraphs rendered in reading order. */
export interface ProseBlock {
  kind: "prose";
  paragraphs: string[];
}

/** An H3 inside a chapter, for a sub-topic within its H2. */
export interface SubheadingBlock {
  kind: "subheading";
  text: string;
}

/** A single figure, placed next to the copy it illustrates. */
export interface ImageBlock {
  kind: "image";
  figure: CaseStudyFigure;
  /** Defaults to `wide`. */
  width?: MediaWidth;
}

/**
 * Two or more figures shown side by side — the same flow or component across
 * different products. Each figure keeps its own alt text; the shared caption
 * explains what the comparison shows.
 */
export interface ComparisonBlock {
  kind: "comparison";
  figures: CaseStudyFigure[];
  caption?: string;
  /** Defaults to `wide`. */
  width?: MediaWidth;
}

/**
 * A figure set beside its explanation rather than under it: the text holds a
 * narrow column, the screenshot a wider one next to it. Use it when a single
 * image illustrates a point the surrounding narrative is making, instead of
 * interrupting the column the way a full-width figure does. The two columns
 * stack, text first, once there is no room for both.
 */
export interface ImageTextBlock {
  kind: "image-text";
  /** Paragraphs in the column beside the figure. */
  text: string[];
  figure: CaseStudyFigure;
}

/**
 * A reserved media slot, rendered only while the study's `status` is `mock`.
 *
 * It exists so the editorial layout can be reviewed before the real
 * screenshots arrive, and it is visibly labelled as a placeholder rather than
 * dressed up as product UI. A published study renders nothing for it, so a
 * forgotten slot can never reach the live page as an empty frame.
 */
export interface PlaceholderBlock {
  kind: "placeholder";
  /** Which asset this slot is reserved for, e.g. "Image 01 — booking experience". */
  label: string;
  /** What the real screenshot will show, and why it belongs here. */
  note: string;
  /** Box shape while empty: one landscape frame, or a side-by-side pair. */
  shape?: "landscape" | "pair";
  /** Defaults to `wide`. */
  width?: MediaWidth;
}

/**
 * A short observation about the figure above it. Rendered as an aside, so it
 * reads as commentary rather than as part of the narrative.
 */
export interface NoteBlock {
  kind: "note";
  text: string;
}

/**
 * A chapter's content, in editorial order. Chapters are deliberately not
 * uniform: each one carries only the blocks its story needs, and a chapter with
 * no image block renders without any empty media frame.
 */
export type CaseStudyBlock =
  | ProseBlock
  | SubheadingBlock
  | ImageBlock
  | ImageTextBlock
  | ComparisonBlock
  | PlaceholderBlock
  | NoteBlock;

export interface CaseStudyChapter {
  /** Anchor target, also used to associate the section with its heading. */
  id: string;
  /**
   * Optional sequence marker shown before the heading, in the accent colour —
   * the same `01/` treatment the About items use. It is decorative wayfinding
   * and is hidden from assistive technology, so the heading has to read
   * correctly without it. A closing chapter can simply omit it.
   */
  number?: string;
  heading: string;
  blocks: CaseStudyBlock[];
}

export interface CaseStudy {
  slug: string;
  /** Accent label above the H1. */
  category: string;
  title: string;
  /** Lead paragraphs. The first also becomes the page description. */
  introduction: string[];
  /** `mock` keeps the page out of search engines and analytics. */
  status: "mock" | "published";
  /** Project facts. Omit a row rather than guessing its value. */
  metadata: { label: string; value: string }[];
  chapters: CaseStudyChapter[];
  /** Rendered beside the closing back-link, only when another study is published. */
  nextProject?: Link;
}
