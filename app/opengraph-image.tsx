import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Node runtime so the co-located woff files can be read at generation time.
export const runtime = "nodejs";

export const alt = site.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Caldera palette — kept local so this route has no dependency on globals.css.
const EMBER = "#fc5000";
const PUMICE = "#f7f0e1";
const OBSIDIAN = "#23212c";
const CHALK = "#ffffff";

export default async function OpengraphImage() {
  const fontDir = join(process.cwd(), "app/_og/fonts");
  const [anton, dmSans] = await Promise.all([
    readFile(join(fontDir, "Anton-400.woff")),
    readFile(join(fontDir, "DMSans-500.woff")),
  ]);

  const topLine = `${site.footer.meta[0].label} · ${site.footer.meta[1].label}`;
  const urlLabel = site.meta.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: PUMICE,
          padding: 80,
        }}
      >
        {/* Brand mark + eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              width: 96,
              height: 96,
              borderRadius: 24,
              backgroundColor: EMBER,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                backgroundColor: CHALK,
              }}
            />
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                backgroundColor: CHALK,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "DM Sans",
              fontSize: 28,
              color: OBSIDIAN,
            }}
          >
            {topLine}
          </div>
        </div>

        {/* Wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Anton",
              fontSize: 156,
              lineHeight: 0.94,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: OBSIDIAN,
            }}
          >
            {site.wordmark}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "DM Sans",
              fontSize: 42,
              color: OBSIDIAN,
            }}
          >
            {site.hero.headline}.
          </div>
        </div>

        {/* Footline */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: EMBER,
              color: CHALK,
              borderRadius: 999,
              padding: "16px 32px",
              fontFamily: "DM Sans",
              fontSize: 28,
            }}
          >
            {urlLabel}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "DM Sans",
              fontSize: 28,
              color: OBSIDIAN,
            }}
          >
            {site.nav.cta.href.replace("mailto:", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton, weight: 400, style: "normal" },
        { name: "DM Sans", data: dmSans, weight: 500, style: "normal" },
      ],
    },
  );
}
