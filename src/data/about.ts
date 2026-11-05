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
  lead: "Product work rarely follows a straight line. I enjoy connecting people, ideas and decisions, working through the details to make things clearer for users and the teams building them.",
} as const;

export const aboutItems: AboutItem[] = [
  {
    number: "01/",
    title: "Who I am",
    body: "I started out as a product designer in Rio de Janeiro. My interest in user experience, human-computer interaction and accessibility led me into frontend development, where I've been working between design and code ever since.",
  },
  {
    number: "02/",
    title: "What keeps me curious",
    body: "I like learning how things work, exploring new tools and finding better ways to build. Lately, that includes AI, accessibility and a growing interest in how nature can inspire the way we design — from digital products to our surroundings and the communities we live in.",
  },
  {
    number: "03/",
    title: "How I create value",
    body: "I help connect design decisions with the code behind them. From UX structure to design systems and components, I care about making things consistent, accessible and easier to maintain.",
  },
  {
    number: "04/",
    title: "My strengths",
    bullets: [
      "Working closely with people across design and engineering",
      "Caring about accessibility, code quality and details",
      "Taking responsibility, putting in the work and helping others do their best",
    ],
  },
];
