import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { Kicker } from "@/components/ui/Kicker";
import { TagPill } from "@/components/ui/TagPill";

const cardBase =
  "group flex h-full flex-col items-start rounded-card border border-obsidian/10 bg-limestone p-8 sm:p-10 motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1";

const ghostPill =
  "mt-auto inline-flex items-center justify-center rounded-pill border-[1.5px] border-obsidian px-7 py-3.5 text-base";

export function Products() {
  return (
    <section id="products" className="scroll-mt-6">
      <div className="reveal">
        <Kicker>{site.products.kicker}</Kicker>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {site.products.items.map((product, i) => {
          const links = product.link.href !== "#";
          const inner = (
            <>
              <TagPill className="motion-safe:transition-colors group-hover:bg-ember group-hover:text-chalk">
                {product.tag}
              </TagPill>
              <h3 className="display-type mt-6 text-[clamp(2rem,3.5vw,3rem)]">
                {product.name}
              </h3>
              <p className="mb-8 mt-4 max-w-[46ch] text-base leading-relaxed sm:text-lg">
                {product.description}
              </p>
              <span
                className={
                  links
                    ? `${ghostPill} motion-safe:transition-colors group-hover:bg-obsidian group-hover:text-chalk`
                    : ghostPill
                }
              >
                {product.link.label}
                {links ? " →" : ""}
              </span>
            </>
          );

          return (
            <div
              key={product.name}
              className="reveal"
              style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
            >
              {links ? (
                <a
                  href={product.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${product.name} — ${product.link.label}`}
                  className={`${cardBase} cursor-pointer`}
                >
                  {inner}
                </a>
              ) : (
                <div className={cardBase}>{inner}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
