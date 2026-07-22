import { execSync } from "node:child_process";
import { site } from "@/content/site";

/**
 * Real commit count, resolved at build time (this runs in the StatRow server
 * component during static prerender). On a full clone — local dev, or any CI
 * that fetches full history — it's the live `git rev-list --count HEAD`. On a
 * shallow checkout (e.g. Vercel's default clone) git can't see the whole
 * history, so we fall back to the number committed in content/site.ts.
 */
export function commitsShipped(): string {
  const fallback =
    site.stats.find((s) => s.motif === "commits")?.num ?? "0";
  try {
    const shallow = execSync("git rev-parse --is-shallow-repository", {
      encoding: "utf8",
    }).trim();
    if (shallow !== "false") return fallback;
    const count = execSync("git rev-list --count HEAD", {
      encoding: "utf8",
    }).trim();
    return /^\d+$/.test(count) ? count : fallback;
  } catch {
    return fallback;
  }
}
