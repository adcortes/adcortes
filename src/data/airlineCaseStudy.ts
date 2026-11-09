import type { CaseStudy } from "../types/content";

/** Fictional editorial scaffold. Replace every example with reviewed project material. */
export const airlineCaseStudy: CaseStudy = {
  slug: "airline-booking-disruption",
  category: "Frontend development, UX engineering & design systems",
  title: "Airline booking & disruption products",
  introduction:
    "A draft story about making complex travel journeys easier to understand, maintain, and adapt across products. All scenarios and decisions below are fictional examples for layout review.",
  status: "mock",
  metadata: [
    { label: "Project", value: "Airline product family (mock)" },
    { label: "Scope", value: "Booking and disruption journeys (mock)" },
    { label: "Role", value: "To be confirmed" },
    { label: "Period", value: "To be confirmed" },
  ],
  sections: [
    {
      id: "overview",
      heading: "Project overview",
      paragraphs: [
        "In this fictional example, booking and disruption are treated as connected parts of one travel experience. A traveller should be able to understand the next action without learning a different interface at each stage.",
      ],
      inputNeeded:
        "Your project framing, the products involved, and the scope you can share publicly.",
    },
    {
      id: "context",
      heading: "Context and constraints",
      paragraphs: [
        "The sample scenario imagines several airline brands using related flows while keeping different content and visual identities. Disruption messages also need to explain an urgent situation in plain language.",
        "These are possible design constraints, not claims about the actual products. The final story should name only constraints you can verify and disclose.",
      ],
      bullets: [
        "Example: keep a multi-step booking journey understandable when choices change.",
        "Example: make a changed itinerary and its next action clear across devices.",
        "Example: allow shared interface patterns to accommodate brand differences.",
      ],
      inputNeeded:
        "The real audience, business context, product boundaries, and important constraints.",
    },
    {
      id: "role",
      heading: "My role and collaboration",
      paragraphs: [
        "This draft reserves space for a precise account of ownership: what I designed, built, reviewed, or led, and where decisions were shared with product, design, and engineering partners.",
      ],
      inputNeeded:
        "Your responsibilities, collaborators, decision rights, and how your role changed over time.",
    },
    {
      id: "ux-architecture",
      heading: "UX architecture",
      paragraphs: [
        "A useful case study could trace one representative journey from a traveller's question to the interface response. In this fictional example, the journey starts with a changed flight and ends with a clearly explained choice.",
        "The diagram space below shows where a reviewed flow, anonymised wireframe, or screen sequence could make that reasoning visible.",
      ],
      media: {
        kind: "placeholder",
        label: "Journey diagram placeholder",
        caption:
          "Mock media slot. Replace with a reviewed flow or anonymised diagram and a caption explaining the decision it illustrates.",
      },
      inputNeeded:
        "One real journey, its competing options, and the reasoning behind the chosen structure.",
    },
    {
      id: "system",
      heading: "Design-system foundations",
      paragraphs: [
        "The fictional system starts with shared states and content patterns, then adds brand-level expression. A final version should show which parts were genuinely reusable and where product needs called for variation.",
      ],
      inputNeeded:
        "Actual tokens, components, accessibility decisions, examples of reuse, and any limits of the system.",
    },
    {
      id: "implementation",
      heading: "Frontend implementation",
      paragraphs: [
        "This section is a place for a concrete implementation decision, such as how a shared component handled a difficult state or how the interface remained usable during incomplete data. The example is deliberately technology-neutral until the real architecture is confirmed.",
      ],
      inputNeeded:
        "Your stack, architecture, one meaningful trade-off, and what you implemented personally.",
    },
    {
      id: "outcomes",
      heading: "Outcomes and lessons",
      paragraphs: [
        "The final section should distinguish observed results from team feedback and personal reflection. It can also explain what changed in the work as the product and team evolved.",
        "No performance, conversion, accessibility, or business result is claimed in this draft.",
      ],
      inputNeeded:
        "Approved outcomes or qualitative evidence, the source of each claim, and what you would do differently.",
    },
  ],
  topics: ["UX architecture", "Design systems", "Frontend", "Accessibility"],
};
