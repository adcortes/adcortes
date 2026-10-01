/*
 * Selected collaborations — the light band between Work and About.
 * Source of truth: docs/references/design/handoff/content.md (§Selected collaborations)
 *
 * Every name is an approved launch placeholder and is reproduced verbatim. See
 * handoff/README.md §"Content placeholders to replace before launch".
 *
 * TODO(launch): no logo file exists yet, so every entry renders its name as
 * visible placeholder text. Dropping a file into `public/images/logos/` and
 * adding `logo: { src: '/images/logos/<name>.svg', width, height }` swaps the
 * text for the image in the same slot — no layout or component change.
 */

import type { Collaboration } from '../types/content';

export const collaborationsSection = {
  heading: 'Selected collaborations',
} as const;

export const collaborations: Collaboration[] = [
  { name: '[Airline]' },
  { name: '[Airline]' },
  { name: '[Airline group]' },
  { name: '[Travel tech]' },
  { name: '[Agency]' },
  { name: '[Direct client]' },
];
