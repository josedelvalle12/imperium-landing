import { useEffect } from 'react';
import Lenis from 'lenis';

/*
  Initialises Lenis smooth-scroll for the window scroll container.

  Why this hook exists:
  - Native scroll fires in large, frame-skipping chunks during fast wheel movement.
    Parallax elements jump rather than drift, making depth imperceptible.
  - Lenis intercepts wheel/touch events and re-emits the position via a damped
    interpolation (lerp), so window.scrollY advances in small, frame-rate-locked
    increments.  Framer Motion's useScroll reads window.scrollY on every 'scroll'
    event — because Lenis calls window.scrollTo() per RAF tick, those scroll events
    arrive at 60 fps and the parallax useTransform values update smoothly.

  Anchor-link handling:
  - scroll-behavior: smooth must NOT be on <html> when using Lenis (it causes
    the browser to double-smooth each window.scrollTo() call → jitter).
  - We replace it with a delegated click handler that routes all in-page anchor
    clicks through lenis.scrollTo(), keeping navigation smooth.
*/

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration:    2,
      easing:      (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    /* Anchor-link click delegation — replaces css scroll-behavior:smooth */
    function onAnchorClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { duration: 1.2 });
    }
    document.addEventListener('click', onAnchorClick);

    /* RAF loop — drives the interpolation every frame */
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
