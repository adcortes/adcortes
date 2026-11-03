/*
 * Hero copy and the illustrated variant's peak geometry.
 * Copy: docs/references/design/handoff/content.md §Hero.
 *
 * Both hero variants (src/config/hero.ts) read `hero` from here, so the
 * eyebrow, headline, intro and jump link exist once. Only `subline` differs
 * between them, which is why it is a pair rather than a single string.
 */

export const hero = {
  eyebrow: "UX Engineer — design systems & accessible frontend",
  title: "From idea to interface.",
  subline: {
    /** §4 — the one accent string in the approved hero. */
    classic: "Clear interfaces, built in code.",
    /** The illustrated variant names the three areas the peaks chart. */
    illustrated: "Product. Design. Frontend.",
  },
  intro:
    "I work between product, design and frontend. I help teams turn decisions into accessible interfaces, with attention to the details that make them work.",
  jumpLabel: "View selected work",
  jumpHref: "#work",
} as const;

/**
 * One labelled peak in the illustrated hero's skill chart.
 *
 * `x` and `height` are percentages of the composition box, ported from
 * public/themes/earth/hero-skill-peaks.svg (viewBox 0 -24 612 584, bars
 * standing on y=560) so the drawn design is preserved exactly. They are not
 * data: the chart is a picture of the areas I work in, not a measurement.
 */
export interface SkillPeak {
  label: string;
  /** Centre of the bar, % from the box's left edge. */
  x: number;
  /** Bar length, % of the box height, measured up from its floor. */
  height: number;
  /** "end" right-aligns the label so the longest one stays inside the box. */
  align: "center" | "end";
  /** The one filled marker — the peak of the range. */
  crest?: true;
}

export const skillPeaks: SkillPeak[] = [
  { label: "PROTOTYPE", x: 19.739, height: 49.863, align: "end" },
  { label: "A11Y", x: 27.108, height: 65.205, align: "center" },
  { label: "UX/UI", x: 34.477, height: 78.63, align: "center" },
  { label: "CSS", x: 41.863, height: 84.76, align: "center" },
  { label: "HIKING", x: 54.755, height: 93.014, align: "center", crest: true },
  { label: "HTML", x: 67.663, height: 90.325, align: "center" },
  { label: "AI", x: 78.725, height: 82.466, align: "center" },
];

/**
 * The unlabelled bars between the peaks, as [x%, height%] pairs — the same
 * SVG, same conversion. Decorative: they carry no name and are hidden from
 * assistive technology.
 */
export const skillRidge: ReadonlyArray<readonly [number, number]> = [
  [1.307, 9.589], [4.069, 16.781], [6.83, 23.973], [9.608, 30.531],
  [12.369, 35.805], [15.131, 41.079], [17.892, 46.353], [23.431, 57.534],
  [28.954, 68.562], [31.716, 73.596], [37.255, 80.925], [40.016, 83.236],
  [45.539, 87.414], [48.301, 89.092], [51.078, 90.771], [56.601, 92.688],
  [59.363, 92.209], [62.124, 91.729], [64.902, 91.25], [70.425, 89.178],
  [73.186, 88.031], [75.948, 86.062], [81.487, 78.87], [84.248, 75.514],
  [87.01, 72.277], [89.771, 69.041], [92.549, 64.435],
];
