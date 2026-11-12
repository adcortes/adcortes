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
  status: "mock",
  description:
    "UX engineering and frontend architecture for two airline products at Newshore/FLYR: a white-label Internet Booking Engine and a Disruption Management tool, built on a shared Angular design system with accessibility as part of its foundation.",
  introduction: [
    "At Newshore/FLYR, I worked on two airline products: an Internet Booking Engine (IBE) that helped passengers book and manage their trips across different airlines, and Disruption Management, a tool that helped airline teams handle flight changes, cancellations, and passenger communications.",
    "My work connected design and frontend, from UI architecture and reusable components to interaction patterns and accessibility.",
  ],
  chapters: [
    {
      id: "booking-engine",
      number: "01/",
      heading: "Building a flexible booking engine",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The Internet Booking Engine (IBE) product is a white-label e-commerce platform for airlines, covering the direct booking journey from flight search and fare selection to ancillaries, passenger details, seat selection, payment, and confirmation.",
            "The platform supports dynamic booking flows, airline-specific configurations, and integration with different Passenger Service Systems (PSS). Optional passenger self-service features, such as Manage My Booking and Online Check-in, could be included depending on each airline's needs.",
          ],
        },
        {
          kind: "image",
          figure: {
            src: "/images/works/NS-IBE-white-label.jpg",
            alt: "The booking engine's flight-selection step on a laptop, tablet and phone. A row of dates with the lowest fare for each sits above the outbound and return flights, each listing departure and arrival times, duration, whether it is direct, and its price.",
            width: 1100,
            height: 800,
            caption: "IBE’s white-label interface, before airline customization.",
          },
        },
        { kind: "subheading", text: "One foundation, different airlines" },
        {
          kind: "prose",
          paragraphs: [
            "The frontend was organized around a design system and a library of shared Angular components, following Atomic Design principles.",
            "Reusable components ranged from smaller UI elements to more complex patterns shared across the booking flow. These formed the foundation for larger modules, such as Flight Search, Fare Selection, and Seat Map.",
            "Core functionality and interaction patterns could be reused across implementations, while brand themes, configuration options, and client-specific extensions allowed each airline to adapt the experience to its business model.",
            "This gave us flexibility at different levels, from applying a visual theme to creating a specific component variant or interaction without rebuilding the underlying functionality.",
          ],
        },
        {
          kind: "image",
          width: "reading",
          figure: {
            src: "/images/works/NS-IBE-mobile.jpg",
            alt: "The booking flow on mobile in three airlines: HK Express in purple, showing a Hong Kong to Kunming return in Hong Kong dollars; La Compagnie in navy, showing a New York to Paris departure with four fare columns in US dollars; and Paranair in red and blue, showing an Asunción round trip in Spanish and guaraníes.",
            width: 2000,
            height: 849,
            caption: "Booking experiences customized for three different airlines.",
          },
        },
        {
          kind: "prose",
          paragraphs: [
            "UX decisions were closely connected to product requirements. Different fare structures, ancillary offerings, and booking flows called for interfaces that could accommodate airline-specific business rules while remaining clear and consistent for passengers.",
            "Accessibility was part of the shared component foundation, including semantic HTML, keyboard interactions, focus management, accessible forms, and error handling. These patterns were also reviewed with design and QA, including screen reader testing.",
          ],
        },
      ],
    },
    {
      id: "disruption-management",
      number: "02/",
      heading: "Designing for disruption management",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "Disruption Management was developed to help airlines handle planned and unplanned flight disruptions, including schedule changes, cancellations, passenger communications, alternative travel options, and refunds.",
            "The platform integrated with airline reservation and flight operations systems, allowing operational teams to manage disruption scenarios, automate communications, and track passenger responses.",
            "Unlike the customer-facing booking engine, this product supported internal airline operations, where users needed to work with complex information and time-sensitive processes.",
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
            alt: "The Disruption Management interface on a laptop: a sidebar counting bookings, disruptions, workflows and communications, an open filter panel offering pending, launched and action-pending statuses, and a list of disrupted flights, each with its flight number, date, route and times beside the reason for the disruption and who is responsible for it.",
            width: 1000,
            height: 600,
            caption: "Disruption Management.",
          },
        },
        {
          kind: "prose",
          paragraphs: [
            "The interface was structured around operational workflows, with an emphasis on clear information hierarchy, consistent UI patterns, and predictable interactions.",
            "Built with Angular Material, and SCSS, the product brought different processes into a shared interface while supporting the requirements of airline disruption management.",
          ],
        },
      ],
    },
    {
      id: "design-code-people",
      number: "03/",
      heading: "Connecting design, code, and people",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "As the products and teams grew, keeping design and frontend aligned became increasingly important. We organized our work around a design system, shared components, and clearer workflows that could support different airline implementations.",
            "Over the years, we went from Photoshop and InVision to Sketch and eventually Figma. The tools changed, but the challenge remained much the same: keeping things organized and making collaboration easier. We also adapted our design handoff process to work with both our internal team and the design teams of our airline clients.",
            "Our design libraries and frontend components evolved together, supported by shared patterns, design tokens, and Storybook documentation covering component variants, interactions, and accessibility.",
            "We also introduced custom AI skills to support our development standards. They helped create and update Storybook stories and UX, UI, and accessibility documentation, as well as follow our CSS conventions, including BEM and responsive styling. Developers remained responsible for reviewing the generated work.",
            "These practices helped us keep a consistent foundation while allowing the products, client implementations, and teams to evolve.",
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
            "When I joined Newshore, there were no dedicated design or frontend teams. Most developers were full-stack, and my work was mainly focused on building interfaces.",
            "As we developed our own products and grew our teams, I gained a deeper understanding of how to build scalable, maintainable frontend systems that could support different products and business requirements.",
            "None of this happened in isolation. I worked with people who were open to new ideas and willing to learn and grow together.",
            "And I grew with them.",
          ],
        },
      ],
    },
  ],
};
