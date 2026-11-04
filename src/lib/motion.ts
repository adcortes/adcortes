// Motion values for the GSAP hero variants.
export const motion = {
  ease: 'power3.out',
  hero: {
    clean: { y: 12, duration: 0.72, stagger: 0.14, start: 0.02 },
    valley: {
      distant: { start: 0, duration: 0.85, scale: 0.994, ease: 'power2.out' },
      middle: { start: 0.16, duration: 0.95, fade: 0.62, ease: 'power3.out' },
      forestBack: { start: 0.44, duration: 1.05, fade: 0.7, ease: 'sine.out' },
      forestMiddle: { start: 0.7, duration: 0.95, fade: 0.65, ease: 'power2.out' },
      forestFront: {
        start: 1.18,
        duration: 0.78,
        fade: 0.45,
        ease: 'power3.out',
        treeStart: 1.6,
        treeDuration: 0.35,
        treeStagger: 0.1,
      },
      text: {
        y: 10,
        eyebrow: { start: 0.08, duration: 0.5 },
        title: { start: 0.24, duration: 0.68 },
        subline: { start: 0.42, duration: 0.64 },
        intro: { start: 0.62, duration: 0.64 },
        action: { start: 0.82, duration: 0.56 },
      },
      parallax: [2, 5],
      parallaxDuration: 0.9,
      windDegrees: [0.55, 0.8, 0.65, 1, 0.7, 0.85, 0.6, 1.1, 0.75, 0.9],
      windDuration: [4.8, 5.5, 6.2, 5.1, 6.8],
    },
  },
  pointerEase: 'power2.out',
  windEase: 'sine.inOut',
} as const;
