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
    </section>
  );
}
