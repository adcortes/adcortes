/*
 * About — the lead paragraph and the four numbered items.
 * Source of truth: docs/references/design/handoff/content.md (§About)
 *
 * Items 01–03 carry prose; item 04 carries the three approved strengths as
 * bullets. That split is modelled in `AboutItem` (body vs bullets).
 */

import type { AboutItem } from "../types/content";

export const about = {
  heading: "About",
  lead: "Product work is rarely a straight line. It moves between people, constraints, sketches and code. I enjoy bringing those parts together until an interface feels clear to the people who use it and practical for the teams who build it.",
} as const;

export const aboutItems: AboutItem[] = [
  {
    number: "01/",
    title: "Who I am",
    body: "A UX Engineer who started as a product designer in Rio de Janeiro and learned to build what I designed.",
  },
  {
    number: "02/",
    title: "What keeps me curious",
    body: "Small, well-made tools that change someone's working day — and using AI to learn faster while building them.",
  },
  {
    number: "03/",
    title: "How I create value",
    body: "I turn decisions into systems: UX architecture, tokens and components that let design and engineering move together.",
  },
  {
    number: "04/",
    title: "My strengths",
    bullets: [
      "Translating between stakeholders, design and engineering",
      "Accessible frontend",
      "Systems that grow with a team",
    ],
  },
];
