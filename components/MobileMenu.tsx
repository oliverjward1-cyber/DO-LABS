"use client";

import { useEffect, useRef, type RefObject } from "react";
import { site } from "@/content/site";
import { PillLink } from "@/components/ui/PillLink";

const itemClass =
  "rounded-pill px-3 py-3 text-2xl hover:bg-obsidian/5 motion-safe:transition-colors";

/**
 * Mobile nav overlay: limestone panel + backdrop. Closes on link tap, Escape,
 * and backdrop tap; traps focus while open and returns focus to the trigger on
 * close. Kept mounted (hidden with pointer-events/inert/opacity) so open/close
 * can animate; the animation is motion-safe only.
 */
export function MobileMenu({
  open,
  onClose,
  returnFocusTo,
}: {
  open: boolean;
  onClose: () => void;
  returnFocusTo: RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const trigger = returnFocusTo.current;

    const focusables = () =>
      panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          )
        : [];

    focusables()[0]?.focus();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [open, onClose, returnFocusTo]);

  return (
    <div
      className={`fixed inset-0 z-[60] min-[820px]:hidden ${
        open ? "" : "pointer-events-none"
      }`}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <div
        aria-hidden
        onClick={onClose}
        className={`absolute inset-0 bg-obsidian/40 motion-safe:transition-opacity motion-safe:duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-x-4 top-4 rounded-card border border-obsidian/10 bg-limestone p-6 motion-safe:transition-all motion-safe:duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="display-type text-[26px]">{site.wordmark}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-pill text-obsidian"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M5 5l12 12M17 5L5 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
          {site.nav.links.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose} className={itemClass}>
              {link.label}
            </a>
          ))}
          {site.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className={itemClass}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <PillLink
          href={site.nav.cta.href}
          onClick={onClose}
          className="mt-6 w-full"
        >
          {site.nav.cta.label}
        </PillLink>
      </div>
    </div>
  );
}
