# Portfolio motion audit

This records the GSAP behavior found before the November 2026 motion refactor and
the resulting system. The approved design handoff remains the visual source of truth.

## Before the refactor

| Animation | Start and duration | Ease and overlap | Transform and opacity |
| --- | --- | --- | --- |
| Clean hero text | Five items at 0.04s, then every 0.15s; each 0.66s | `power3.out`; adjacent items overlap by 0.51s (77%) | `opacity: 0 → 1`, `y: 12 → 0` |
| Valley layers | Five layers at 0.02s, then every 0.14s; each 0.74s | `power3.out`; adjacent layers overlap by 0.60s (81%) | `opacity: 0 → 1`, `y: 10 → 0` |
| Valley text | Five items at 0.38s, then every 0.15s; each 0.66s | `power3.out`; adjacent items overlap by 0.51s (77%); text starts before layers finish | `opacity: 0 → 1`, `y: 12 → 0` |
| Valley pointer parallax | Pointer events on desktop/fine pointers; 0.9s response | `power2.out` | Inner ridge wrappers change `x` by at most 2px or 5px from center |
| Valley tree wind | Each tree delayed 0.17s per index; durations cycle through 4.8–6.8s | `sine.inOut`, yoyo and infinite repeat | SVG paths rotate between zero and about ±0.55–1.1 degrees |
| Work, About, Contact | Individual `onEnter` callbacks at `top bottom`; durations 0.52–0.70s | `power3.out`; group gaps 0.14–0.16s, capped at 0.32s, so adjacent entrances overlap about 70–80% | `opacity: 0 → 1`, `y: 12–18 → 0` |

ScrollTrigger had an explicit `start: 'top bottom'`, implicit default
`end: 'bottom top'`, and `once: true`. There were no pinned, scrubbed, or
reversing scroll animations. The end position did not control tween progress.

### Causes and conflicts

- The very short gaps relative to 0.52–0.74s durations made adjacent elements
  appear nearly simultaneous, especially the valley text and paired section columns.
- A scroll target was static until its `onEnter` callback called `gsap.set()`.
  If the browser had already painted the viewport-edge frame, it could visibly
  reset from fully visible to transparent. Delayed targets then stayed hidden
  until their turn. The earlier batched implementation also waited 0.12s before
  creating tweens; that was an additional visible-to-hidden snap.
- Hero `.from()` tweens relied on bundle execution timing. A
  `first-contentful-paint` check sometimes skipped the entrance entirely;
  when the module ran just before paint, the entrance ran. This made loading
  behavior inconsistent rather than providing a stable initial state.
- A repeated valley wind is intentional. The Clean and Valley entrances were
  guarded against media-query replay, and scroll targets had a WeakSet guard.
  No current ScrollTrigger was configured to reverse or replay on scroll back.
  A full page reload naturally creates a new animation session.
- The archive disclosure's CSS transforms and opacity transitions target its
  own icon and panel. They do not target the GSAP reveal elements. Valley `y`
  belongs to outer layer wrappers, pointer `x` to inner ridge wrappers, and
  wind rotation to SVG paths, so those transforms do not compete.
- The alternate Illustrated hero has CSS keyframes, including a deliberate
  infinite robot float. It is outside the GSAP and ScrollTrigger system.

## Refactored motion system

Shared values live in `src/lib/motion.ts`: `power3.out`, a 0.75s/20px base
reveal, 0.12s peer stagger, 45% overlap for major section stages, and
`top bottom` scroll entry. Smaller headings use 12–14px and 0.55–0.60s.
The larger content groups use 16–20px and 0.68–0.75s.

The Valley entrance has two linked phases. Layers start at 0.02s, stagger by
0.14s, and last 0.76s. The eyebrow starts at 0.08s for 0.55s; the title,
subline, intro and action begin at 0.32s, stagger by 0.14s, and each last
0.72s. Clean hero text starts at 0.02s, staggers by 0.14s, and lasts 0.72s.
Opacity and translation share each tween and end together at 1 and 0.

Scroll targets each get a GSAP timeline when they first cross the viewport
edge. A section label and its first content item are spaced by 55% of the
label's duration, producing about 45% overlap. Later peers use the 0.12s
stagger. A fast scroll that completely passes a target leaves it visible;
leaving an active trigger completes its timeline. ScrollTrigger has explicit
`start: 'top bottom'`, `end: 'bottom top'`, and `once: true`.

An inline head script primes only the existing GSAP hero entrance before
paint. If the bundle is slow or fails, an 800ms timeout removes the initial
opacity state. With JavaScript disabled or reduced motion requested, the page
is static and fully visible. Seen scroll elements do not replay when media
preferences change. Active timelines, triggers, pointer handlers and inline
transform/opacity values are cleaned up on teardown.

## Browser QA

Headless Chrome was exercised at 1440 × 900 and 390 × 844. Frame captures
covered initial load, intermediate hero and Work states, slow scrolling,
fast jumps, scrolling back, and reload at an About scroll position. In both
viewports, no visible target remained transparent after the entrances settled;
the restored scroll position was preserved. Reduced-motion and script-disabled
loads showed zero hidden visible targets. Chrome reported no runtime exceptions.
These captures are discrete frames, so they cannot prove the absence of every
brief frame-level stutter on all devices.
