import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { Kicker } from "@/components/ui/Kicker";
import { TagPill } from "@/components/ui/TagPill";

export function Studio() {
  return (
    <section id="studio" className="scroll-mt-6">
      <div className="reveal">
        <Kicker>{site.studio.kicker}</Kicker>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:gap-5">
        {site.studio.founders.map((founder, i) => (
          <article
            key={founder.name}
            style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
            className="reveal flex flex-col items-start rounded-card border border-obsidian/10 bg-limestone p-8 sm:p-10"
          >
            <TagPill>{founder.role}</TagPill>
            <h3 className="display-type mt-6 text-[clamp(2rem,3.5vw,3rem)]">
              {founder.name}
            </h3>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed sm:text-lg">
              {founder.bio}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
