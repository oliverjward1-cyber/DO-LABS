import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { HeroHeadline } from "@/components/sections/HeroHeadline";
import { PillLink } from "@/components/ui/PillLink";
import { TagPill } from "@/components/ui/TagPill";

export function Hero() {
  return (
    <section className="flex flex-col items-center px-4 py-16 text-center sm:py-24">
      <TagPill>{site.hero.eyebrow}</TagPill>
      <HeroHeadline>{site.hero.headline}</HeroHeadline>
      <p className="reveal mt-7 max-w-[46ch] text-lg leading-relaxed sm:text-xl">
        {site.hero.subline}
      </p>
      <div
        className="reveal mt-9 flex flex-wrap items-center justify-center gap-4"
        style={{ "--reveal-delay": "80ms" } as CSSProperties}
      >
        <PillLink href={site.hero.primaryCta.href}>
          {site.hero.primaryCta.label}
        </PillLink>
        <PillLink href={site.hero.secondaryCta.href} variant="ghost">
          {site.hero.secondaryCta.label}
        </PillLink>
      </div>
      <a
        href={site.hero.status.href}
        className="reveal mt-8 inline-flex items-center gap-2.5 rounded-pill border border-obsidian/15 px-4 py-2 text-sm text-obsidian motion-safe:transition-colors hover:border-obsidian/40"
        style={{ "--reveal-delay": "160ms" } as CSSProperties}
      >
        <span aria-hidden className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-pill bg-ember opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-pill bg-ember" />
        </span>
        {site.hero.status.label}
      </a>
    </section>
  );
}
