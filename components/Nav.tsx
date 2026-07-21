"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { PillLink } from "@/components/ui/PillLink";
import { MobileMenu } from "@/components/MobileMenu";

const linkClass = "text-base hover:underline hover:underline-offset-4";

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // The nav is `position: sticky`; a zero-height sentinel just above it tells
  // us when it has become "stuck" (sentinel scrolled out of view).
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-0" />
      <header className="sticky top-3 z-50">
        <nav
          aria-label="Main"
          data-stuck={stuck}
          className={`flex items-center justify-between gap-4 rounded-pill border bg-limestone pl-7 pr-3 motion-safe:transition-all motion-safe:duration-300 ${
            stuck
              ? "border-obsidian/15 py-2 supports-[backdrop-filter]:bg-limestone/80 supports-[backdrop-filter]:backdrop-blur-md"
              : "border-obsidian/10 py-3"
          }`}
        >
          <a href="#top" className="display-type text-[26px]">
            {site.wordmark}
          </a>

          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden items-center gap-6 min-[820px]:flex">
              {site.nav.links.map((link) => (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
              {site.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {link.label}
                </a>
              ))}
              <PillLink href={site.nav.cta.href} className="px-6 py-2.5">
                {site.nav.cta.label}
              </PillLink>
            </div>

            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-pill text-obsidian min-[820px]:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M3 6h16M3 11h16M3 16h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusTo={hamburgerRef}
      />
    </>
  );
}
