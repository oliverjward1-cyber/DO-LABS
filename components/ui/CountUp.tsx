"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a purely-numeric stat up from 0 to its target over ~1s (ease-out)
 * the first time it scrolls into view. The final displayed text is the exact
 * `value` string from content/site.ts. Reduced motion / no IntersectionObserver
 * renders the final value immediately with no count.
 */
export function CountUp({ value }: { value: string }) {
  const target = Number.parseInt(value, 10);
  const ref = useRef<HTMLSpanElement>(null);
  // Start at the final value so SSR and no-JS render the real number.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || Number.isNaN(target) || !("IntersectionObserver" in window)) {
      return; // leave the exact final value in place
    }

    let raf = 0;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const io = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        obs.disconnect();

        // Count 0 → target. The first frame renders 0 (off-screen, thanks to
        // the bottom rootMargin) so there is no visible final→0 flip.
        const duration = 1000;
        let start: number | null = null;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          if (p < 1) {
            setDisplay(String(Math.round(easeOut(p) * target)));
            raf = requestAnimationFrame(step);
          } else {
            setDisplay(value); // land exactly on the content value
          }
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0, rootMargin: "0px 0px 15% 0px" },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, value]);

  return (
    <span ref={ref} aria-label={value}>
      {display}
    </span>
  );
}
