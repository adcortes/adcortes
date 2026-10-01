/*
 * Selected work — the three approved groups.
 * Source of truth: docs/references/design/handoff/content.md (§Selected work)
 *
 * Every `[bracketed]` string below is an approved launch placeholder and is
 * reproduced verbatim. See handoff/README.md §"Content placeholders to replace
 * before launch" for the full list.
 */

import type { ProjectEntry, WebWorkGroup } from "../types/content";

export const workSection = {
  heading: "Selected work",
  /** Shown at every size. */
  intro: "Three projects.",
  /*
   * The second sentence only makes sense where the diagrams are rendered, so it
   * is hidden below 640px together with them (design-system.md §7). It is one
   * sentence of a single approved string, so it stays in the same <p>.
   */
  introFromTablet: "Diagrams stand in for confidential screens.",
} as const;

/*
 * Groups 1 and 2. Both visuals are the approved HTML/CSS diagrams, which stand
 * in for confidential screens: the drawing is decorative and its meaning lives
 * in `caption`. A project may instead carry an image visual
 * (`{ kind: 'image', src, alt, … }`); no project uses one today.
 *
 * TODO(launch): project 1's approved "Repository ↗" link has no known
 * destination yet. Per the repository constraint it is omitted rather than
 * stubbed — add `action: { kind: 'link', label: 'Repository', href: '…' }` once
 * the URL exists, and the footer switches to its tags-and-action layout.
 */
export const projects: ProjectEntry[] = [
  {
    id: "emr",
    category: "Product",
    title: "A lightweight medical record for a neurology practice",
    summary:
      "A small neurology practice in Brazil needed [one line on what wasn't working in its records workflow]. I'm building its EMR together with the doctor who uses it every day.",
    role: "End to end, from discovery and scope to frontend, backend and accessibility.",
    outcome:
      "A records tool shaped around one doctor's daily workflow, built with AI as a learning partner.",
    tags: ["Healthcare", "Accessibility", "Full stack"],
    visual: {
      kind: "diagram",
      component: "emr",
      caption: "Records list and consultation form. All patient data is synthetic.",
    },
  },
  {
    id: "airline",
    category: "Product & design systems",
    title: "Airline booking & disruption products",
    summary:
      "Booking and disruption-management products for several airlines, where [one line on the need]. I joined as the only design and frontend person.",
    role: "UX architecture, styles and design system evolution. Later technical lead for Avianca web at FLYR, still coding.",
    outcome: "The area grew from one person to 26+ frontend developers and 4 designers.",
    tags: ["Design systems", "UX architecture", "Technical leadership"],
    visual: {
      kind: "diagram",
      component: "design-system",
      caption: "One token and component layer shared across several airlines.",
    },
  },
];

/*
 * Group 3 is text-based and has no diagram.
 *
 * TODO(launch): item 1's approved "Visit site ↗" link has no known destination
 * yet and is omitted for the same reason as above.
 */
export const webWork: WebWorkGroup = {
  category: "Agency & freelance",
  title: "Selected web work",
  intro:
    "Information architecture, wireframes, design, frontend and HTML email for direct clients.",
  items: [
    {
      name: "[Project name]",
      description: "IA, wireframes and frontend for [client].",
      attribution: "[Agency].",
    },
    {
      name: "[Project name]",
      description: "Design and frontend for [client].",
      attribution: "Freelance.",
    },
    {
      name: "[Project name]",
      description: "HTML email system for [client].",
      attribution: "Freelance.",
    },
  ],
};
