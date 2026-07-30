"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The hero headline "explodes" toward the page edges on scroll: a rAF scroll
 * handler writes scroll progress (0→1 over the first ~60vh) into --hero-p,
 * and CSS maps that to scale + fade. Transform/opacity only, so no layout
 * shift; frozen entirely under reduced motion.
 */
export function HeroHeadline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const p = Math.min(window.scrollY / (window.innerHeight * 0.6), 1);
      el.style.setProperty("--hero-p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="hero-headline display-type mt-7 max-w-[13ch] text-[clamp(3.25rem,10vw,9rem)]"
    >
      {children}
    </h1>
  );
}
