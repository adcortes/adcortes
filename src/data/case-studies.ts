/** Case study copy is kept separate from the reusable page template. */
export interface CaseStudySection {
  heading: string;
  paragraphs?: string[];
  steps?: string[];
  quote?: string;
  figure?: 'emr';
  figureCaption?: string;
  findings?: string[];
}

export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  introduction: string;
  metadata: { label: string; value: string }[];
  sections: CaseStudySection[];
  tags: string[];
}

/** Draft copy follows the supplied EMR reference and awaits real project details. */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'emr',
    category: 'Product · Case study',
    title: 'A lightweight EMR for small clinics',
    introduction:
      "Small practices don't need a hospital system. They need scheduling that follows their rules, records they can trust, and a screen that doesn't get in the way during a consultation.",
    metadata: [
      { label: 'Role', value: 'Product, UX engineering, full-stack' },
      { label: 'Timeline', value: '2025 — ongoing' },
      { label: 'Stack', value: 'Next.js, TypeScript, Supabase' },
      { label: 'Reading time', value: '4 min' },
    ],
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'A short paragraph about the clinic: who works there, how they managed patients before, and what made them look for something new. Two or three sentences are enough.',
          'One more paragraph on the constraints: small budget, no IT team, sensitive data, and staff who switch between the front desk and the consulting room all day.',
        ],
      },
      {
        heading: 'The problem',
        paragraphs: [
          'Describe the main pain in plain words. For example: appointments overlapped because every professional had different rules, and nobody trusted the patient list because it lived in three places.',
        ],
        quote: 'A quote from someone at the clinic, or the one sentence that sums up the problem.',
      },
      {
        heading: 'Process',
        paragraphs: ['How you approached it, step by step. Lists help when the text is short:'],
        steps: [
          'Shadowed the front desk for a week and mapped the scheduling rules.',
          'Defined roles and permissions before drawing any screen.',
          'Prototyped the records list and consultation form in code, then tested with staff.',
        ],
        figure: 'emr',
        figureCaption: 'Records list and consultation form. All patient data is synthetic.',
      },
      {
        heading: 'Key findings',
        findings: [
          "A finding in one sentence — something you didn't expect.",
          'A second finding that changed a design decision.',
          'A third about accessibility, data or the team.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'What changed for the clinic. A number helps if you have one (fewer double bookings, time saved at check-in), but a clear before-and-after sentence works too.',
        ],
      },
      {
        heading: 'What I learned',
        paragraphs: [
          "One honest paragraph: what you'd do differently and what you'll take to the next project.",
        ],
      },
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Accessibility'],
  },
];
