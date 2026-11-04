import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from './motion';

gsap.registerPlugin(ScrollTrigger);

type RevealSettings = { y: number; duration: number };
type Group = 'work' | 'about' | 'contact';
type Stage = 'label' | 'content';

export function initScrollReveals(): () => void {
  // Retain this across media-query changes so a reveal cannot play a second time.
  const seen = new WeakSet<HTMLElement>();
  const media = gsap.matchMedia();

  media.add('(prefers-reduced-motion: no-preference)', () => {
    const active = new Map<HTMLElement, gsap.core.Timeline>();
    const scheduled = new Map<Group, { at: number; duration: number; stage: Stage }>();

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      active.forEach((tween, element) => {
        if (element.contains(target)) tween.progress(1);
      });
    };
    document.addEventListener('focusin', onFocusIn);

    const reveal = (element: HTMLElement, settings: RevealSettings, group: Group, stage: Stage) => {
      seen.add(element);
      // A large jump can cross a trigger without leaving its element on screen.
      if (element.getBoundingClientRect().bottom <= 0 || element.contains(document.activeElement)) return;

      const now = performance.now() / 1000;
      const previous = scheduled.get(group);
      const gap = previous?.stage === 'label'
        ? previous.duration * (1 - motion.reveal.overlap)
        : motion.reveal.stagger;
      const delay = previous ? Math.min(0.5, Math.max(0, previous.at + gap - now)) : 0;
      scheduled.set(group, { at: now + delay, duration: settings.duration, stage });

      // Set both starting values in the same frame as onEnter. Nothing is
      // pre-hidden in CSS or while ScrollTrigger waits for a batch callback.
      try {
        gsap.set(element, { opacity: 0, y: settings.y });
        const timeline = gsap.timeline({
          delay,
          onComplete: () => {
            gsap.set(element, { clearProps: 'opacity,transform' });
            active.delete(element);
          },
        }).to(element, {
          opacity: 1,
          y: 0,
          duration: settings.duration,
          ease: motion.ease,
        }, 0);
        active.set(element, timeline);
      } catch (error) {
        element.style.removeProperty('opacity');
        element.style.removeProperty('transform');
        throw error;
      }
    };

    const add = (selector: string, settings: RevealSettings, group: Group, stage: Stage) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        if (seen.has(element)) return;
        const bounds = element.getBoundingClientRect();
        if (bounds.top < window.innerHeight || bounds.bottom <= 0) {
          seen.add(element); // Initial viewport and restored scroll: leave visible.
          return;
        }
        ScrollTrigger.create({
          trigger: element,
          start: motion.reveal.start,
          end: 'bottom top',
          once: true,
          onEnter: () => reveal(element, settings, group, stage),
          onLeave: () => active.get(element)?.progress(1),
          onLeaveBack: () => active.get(element)?.progress(1),
        });
      });
    };

    add('#work > .section__label', motion.scroll.workLabel, 'work', 'label');
    add('#work .project', motion.scroll.project, 'work', 'content');
    add('#about > .section__label', motion.scroll.aboutLabel, 'about', 'label');
    add('#about .about__lead, #about .about__items', motion.scroll.aboutContent, 'about', 'content');
    add('#contact > .section__label', motion.scroll.contactLabel, 'contact', 'label');
    add('#contact > .section__content', motion.scroll.contactContent, 'contact', 'content');

    return () => {
      document.removeEventListener('focusin', onFocusIn);
      active.forEach((timeline, element) => {
        timeline.kill();
        gsap.set(element, { clearProps: 'opacity,transform' });
      });
      active.clear();
    };
  });

  return () => media.revert();
}
