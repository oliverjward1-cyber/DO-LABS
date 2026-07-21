"use client";

import { useEffect } from "react";

/**
 * Drives the scroll-reveal: finds every `.reveal` element and flips its
 * `data-revealed` attribute the first time it enters the viewport (reveal
 * once — never re-hidden). Under reduced motion or without IntersectionObserver
 * it reveals everything immediately, and the `.reveal` hidden state is CSS-gated
 * on prefers-reduced-motion so those users never see a hidden frame.
 */
export function RevealController() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    if (els.length === 0) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
