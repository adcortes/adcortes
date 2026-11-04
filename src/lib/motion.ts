// Motion values for the GSAP hero variants.
export const motion = {
  ease: 'power3.out',
  hero: {
    clean: { y: 12, duration: 0.72, stagger: 0.14, start: 0.02 },
    valley: {
      layerY: 10,
      layerDuration: 0.76,
      layerStagger: 0.14,
      layerStart: 0.02,
      eyebrowStart: 0.08,
      eyebrowDuration: 0.55,
      textY: 12,
      textDuration: 0.72,
      textStagger: 0.14,
      textStart: 0.32,
      parallax: [2, 5],
      parallaxDuration: 0.9,
      windDegrees: [0.55, 0.8, 0.65, 1, 0.7, 0.85, 0.6, 1.1, 0.75, 0.9],
      windDuration: [4.8, 5.5, 6.2, 5.1, 6.8],
    },
  },
  pointerEase: 'power2.out',
  windEase: 'sine.inOut',
} as const;
