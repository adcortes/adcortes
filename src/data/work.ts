/* Selected work — the three groups rendered in the Work section. */

import type { ProjectEntry, WebWorkGroup } from "../types/content";
import { airlineCaseStudy } from "./airlineCaseStudy";

export const workSection = {
  heading: "Selected work",
  /** Shown at every size. */
  intro: "Product, design systems and frontend.",
} as const;

/*
 * Groups 1 and 2. A project may carry an HTML/CSS artwork
 * (`{ kind: 'artwork', id, … }`) or an image file
 * (`{ kind: 'image', src, alt, … }`). A project with no picture omits `visual`
 * entirely, the same way it omits an `action` it does not have. Artwork stands
 * in for confidential screens: the drawing is decorative and its meaning lives
 * in `caption`.
 *
 * Actions are optional and appear only when their destination exists.
 */
export const projects: ProjectEntry[] = [
  {
    id: "airline",
    category: "Product & design systems",
    title: "Airline booking & disruption products",
    summary:
      "A white-label booking platform adapted by multiple airlines, and an operational tool for handling flight disruptions. I joined as designer and frontend developer, building the UX architecture, UI foundations and component system as the products and team grew.",
    role: "UX architecture, styles and design-system evolution. Later, technical lead for distributed frontend teams and airline web delivery, while remaining hands-on in the codebase.",
    outcome:
      "Grew into a team of 10+ frontend developers and four designers, supporting multiple airline products.",
    tags: [
      "UX architecture",
      "Design systems",
      "Atomic Design",
      "Angular",
      "Storybook",
      "SCSS",
      "Accessibility",
      "AI-assisted workflows",
      "Technical leadership",
      "Figma",
    ],
    action: import.meta.env.DEV
      ? { label: "Read case study", href: `/preview/${airlineCaseStudy.slug}` }
      : undefined,
    /*
     * Two artworks are drawn for this project and one ships. Swap the `id` to
     * switch: "airline-stub" is the perforated boarding pass, "airline-fares"
     * the fare selector seen straight on. Both are kept deliberately.
     */
    visual: {
      kind: "artwork",
      id: "airline-stub",
    },
  },
  {
    id: "emr",
    category: "Product",
    title: "A lightweight EMR for small clinics",
    summary:
      "A role-based web application for managing patients, appointments and clinical workflows in a small practice — designed around clear scheduling rules, reliable data and accessible UI.",
    role: "Product definition, UX engineering and full-stack development.",
    outcome:
      "A focused, accessible foundation for day-to-day clinic operations, designed around real scheduling and clinical workflows.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Accessibility"],
  },
  {
    id: "airline",
    category: "HTML Email",
    title: "Reusable airline email templates",
    summary:
      "A white-label email system for disruption communications and booking flows, designed to adapt to each airline’s brand while remaining reliable across major email clients and devices.",
    role: "Email design, responsive HTML implementation and accessibility.",
    outcome:
      "A reusable template foundation applied to multiple airline brands, tested across Gmail, Outlook, Apple Mail and mobile/desktop email environments.",
    tags: ["Email design", "Responsive HTML", "Accessibility", "Design systems"],
  },
];

/*
 * Group 3 is text-based and has no artwork. Every active item carries a `link`
 * to a live site; `link` stays optional so an item whose site is gone can ship
 * without one rather than against an invented URL. The two commented-out items
 * below are kept in place rather than deleted: the copy is approved and only
 * their inclusion is on hold.
 */
export const webWork: WebWorkGroup = {
  category: "Agency & freelance",
  title: "Earlier web projects",
  intro: "A short selection of design and frontend projects from earlier in my career.",
  items: [
    {
      name: "Natura Selection",
      engagement: "Agency",
      description:
        "An ecommerce website designed to make a broad product catalogue clear, approachable and easy to browse.",
      role: "Web design · Frontend development",
      tags: ["Ecommerce", "UI design", "Frontend"],
      image: {
        src: "/images/natura-selection.jpeg",
        alt: "The Natura Selection footwear category page, a grid of product photographs above their names and prices.",
        width: 1024,
        height: 637,
      },
      link: {
        label: "Visit site",
        href: "https://naturaselection.com/",
        target: "_blank",
      },
    },
    {
      name: "Boekie Boekie",
      engagement: "Agency",
      description:
        "A playful, non-linear digital experience for a Dutch children’s art and literature magazine, using animation and interaction to encourage exploration.",
      role: "Creative design · Frontend development",
      tags: ["Creative coding", "Animation", "Interactive storytelling"],
      image: {
        src: "/images/boekie-boekie.jpeg",
        alt: "An illustrated Boekie Boekie wonder-room scene, with drawn objects scattered across the page as entry points.",
        width: 1024,
        height: 637,
        /* The composition is centred, so this one keeps the middle. */
        crop: "center",
      },
      link: {
        label: "Visit site",
        href: "https://boekie-boekie.nl/Wonderkamers/BoekieBoekie-bouwt.html",
        target: "_blank",
      },
    },
    {
      name: "L'illa Diagonal",
      engagement: "Agency",
      description:
        "A digital presence for L’illa Diagonal, a shopping centre in Barcelona, combining web design and frontend development.",
      role: "Web design · Frontend development",
      tags: ["WordPress", "PHP", "Responsive web"],
      image: {
        src: "/images/lilla-diagonal.jpeg",
        alt: "The L’illa Diagonal homepage, with a full-width promotional image above the shopping centre’s listings.",
        width: 1024,
        height: 637,
      },
      link: {
        label: "Visit site",
        href: "https://lilla.com/",
        target: "_blank",
      },
    },
    // {
    //   name: "Editorial Salvat — Collection websites",
    //   engagement: "Agency",
    //   description:
    //     "A reusable website template for editorial collections, designed to support a consistent structure while giving each series its own visual character.",
    //   role: "Visual design · Frontend development",
    //   tags: ["Design system", "Frontend"],
    // },
    // {
    //   name: "Bruguer — Colores del Mundo",
    //   engagement: "Agency",
    //   description:
    //     "An interactive product experience for Bruguer’s Vibrations paint range, bringing colour inspiration, product details and technical documentation together.",
    //   role: "Visual design · Frontend development",
    //   tags: ["Interactive design", "CSS animation", "Product content"],
    //   image: {
    //     src: "/images/bruguer-vibrations.jpeg",
    //     alt: "A Bruguer Vibrations colour page, pairing a painted interior photograph with the range’s colour swatches.",
    //     width: 1024,
    //     height: 637,
    //   },
    // },
  ],
};
