import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { BuildInPublic } from "@/components/sections/BuildInPublic";
import { HalftoneHero } from "@/components/sections/HalftoneHero";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { StatRow } from "@/components/sections/StatRow";
import { Studio } from "@/components/sections/Studio";
import { DottedDivider } from "@/components/ui/DottedDivider";

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6 sm:py-6">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-10 focus:rounded-pill focus:bg-obsidian focus:px-6 focus:py-3 focus:text-chalk"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <div className="flex flex-col gap-4 lg:gap-5">
          <HalftoneHero />
          <StatRow />
        </div>
        <div className="mt-20 sm:mt-28">
          <Products />
        </div>
        <div className="mt-20 sm:mt-28">
          <BuildInPublic />
        </div>
        <div className="my-20 sm:my-28">
          <DottedDivider />
        </div>
        <Studio />
      </main>
      <div className="mt-20 sm:mt-28">
        <Footer />
      </div>
    </div>
  );
}
