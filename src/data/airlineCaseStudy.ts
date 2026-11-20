import type { CaseStudy } from "../types/content";

/*
 * Chapter 03 has no image: one belongs there only if a real Figma or
 * design-system capture can be shared, and an invented interface must never
 * stand in for a Newshore product.
 */
export const airlineCaseStudy: CaseStudy = {
  slug: "airline-booking-disruption",
  category: "UX engineering · Frontend architecture · Design systems",
  title: "Airline booking & disruption products",
  /* No Period row: no verified employment dates exist anywhere in this project. */
  metadata: [
    { label: "Company", value: "Newshore / FLYR" },
    { label: "Role", value: "Frontend Developer / UX Engineer" },
    { label: "Focus", value: "UI architecture, design systems, accessibility" },
    { label: "Products", value: "Internet Booking Engine, Disruption Management" },
  ],
  status: "published",
  description:
    "UX engineering, frontend architecture, and design systems across airline booking and disruption management products at Newshore/FLYR.",
  introduction: [
    "At Newshore/FLYR, I worked on two airline products: an Internet Booking Engine (IBE) that helps passengers book and manage their trips across different airlines, and Disruption Management, a tool that helps airline teams handle flight changes, cancellations, and passenger communications.",
    "My work covered UX/UI design and frontend development, from defining interface patterns and building reusable components to working closely with product and design teams.",
  ],
  chapters: [
    {
      id: "booking-engine",
      number: "01/",
      heading: "Building a booking engine for different airlines",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The Internet Booking Engine (IBE) covers the booking journey, from flight search and fare selection to payment and confirmation. It also connects with different Passenger Service Systems (PSS) and supports optional features such as Manage Booking and Online Check-in.",
            "Each airline has its own brand, business rules, and sometimes different ways of handling the booking process. The challenge was to build a shared product without making every airline look or behave the same.",
          ],
        },
        {
          kind: "image",
          figure: {
            src: "/images/works/NS-IBE-white-label.jpg",
            alt: "Flight selection on desktop, tablet and mobile.",
            width: 1100,
            height: 800,
            caption: "IBE (white-label) flight selection across devices.",
          },
        },
        { kind: "subheading", text: "One foundation, different airlines" },
        {
          kind: "prose",
          paragraphs: [
            "We built the frontend with reusable Angular components, from basic UI elements to larger booking modules such as Flight Search, Fare Selection, and Seat Map.",
            "A shared design system helped us keep the core consistent, while themes, configuration options, and component extensions allowed airlines to adapt the interface to their needs.",
            "This approach allowed each airline to have its own visual identity without rebuilding the booking experience from scratch. It also helped us deliver consistent, accessible booking experiences more efficiently, while keeping the frontend easier to maintain.",
          ],
        },
        {
          kind: "image",
          width: "reading",
          figure: {
            src: "/images/works/NS-IBE-mobile.jpg",
            alt: "Mobile booking interfaces for HK Express, La Compagnie and Paranair, showing different branding and fare-selection layouts.",
            width: 2000,
            height: 849,
            caption: "Booking experiences customized for three different airlines.",
          },
        },
        {
          kind: "prose",
          paragraphs: [
            "Accessibility was part of our component development process, from semantic HTML and keyboard navigation to focus management and accessible forms. We reviewed interactions with design and QA, including screen reader testing.",
          ],
        },
      ],
    },
    {
      id: "disruption-management",
      number: "02/",
      heading: "Designing for airline operations",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "Disruption Management is an internal tool for airline teams handling flight changes, cancellations, passenger communications, alternative travel options, and refunds.",
            "Unlike the passenger-facing booking engine, this tool supports operational teams working with flight information, statuses, and time-sensitive tasks. Clear information hierarchy and predictable interactions are essential.",
          ],
        },
        {
          /*
           * A photograph of the product in use rather than a flat capture, and
           * only 1000px wide, so it stays on the reading column: at the full
           * media width it would be upscaled and its interface text would soften.
           */
          kind: "image",
          width: "reading",
          figure: {
            src: "/images/works/NS-Disruption.jpg",
            alt: "Disruption Management dashboard with disrupted flights and filters.",
            width: 1000,
            height: 600,
            caption:
              "Disruption Management — flight information, filters and operational workflows.",
          },
        },
        {
          kind: "prose",
          paragraphs: [
            "I worked on the UX/UI of new features, leading wireframing and helping define how information, navigation, and interactions should be organized before development.",
            "The frontend was built with Angular Material and SCSS, using shared patterns to keep interactions consistent across different parts of the application.",
          ],
        },
      ],
    },
    {
      id: "design-code-people",
      number: "03/",
      heading: "Keeping design and frontend connected",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "As both products evolved, so did the teams working on them. I took on frontend technical leadership while staying involved in design decisions and hands-on development.",
            "We worked closely with product and design teams, reviewing new features together before implementation. These discussions covered technical feasibility, accessibility, and whether new interactions fitted the patterns already established in the products.",
          ],
        },
        { kind: "subheading", text: "A shared language for design and code" },
        {
          kind: "prose",
          paragraphs: [
            "For the booking engine, we organized styles around shared design tokens. Brand colors and typography formed the foundations, while semantic tokens defined how those values were used across the interface.",
            "Storybook complemented this system by documenting component usage, variants, configuration options, and expected behavior, including accessibility and keyboard interactions.",
            "Together with regular design and frontend reviews, these practices helped us maintain a shared understanding of the components as the products evolved.",
          ],
        },
      ],
    },
    {
      id: "highlights",
      heading: "Design & Engineering Highlights",
      blocks: [
        {
          kind: "list",
          items: [
            "Shared Angular UI architecture and components across multiple airline implementations",
            "Multi-brand theming with foundation and semantic design tokens",
            "Accessible UI components, keyboard interactions, and screen reader testing",
            "Component documentation and usage guidelines in Storybook",
            "UX wireframing, frontend technical leadership, and cross-functional collaboration",
          ],
        },
      ],
    },
    {
      id: "looking-back",
      heading: "Looking back",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "When I joined Newshore, there were no dedicated design or frontend teams. Most developers were full-stack, and my work focused mainly on building interfaces.",
            "Over time, I helped establish the UI/UX foundations for both products and grow a team of frontend developers and designers.",
            "My role evolved alongside the products, from designing and building interfaces to making architectural decisions, supporting other developers, and working more closely with product and design.",
            "None of this happened in isolation. I worked with people who were open to new ideas and willing to learn and grow together.",
            "And I grew with them.",
          ],
        },
      ],
    },
  ],
};
