import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure the OG/Twitter image routes bundle the woff files they read.
  outputFileTracingIncludes: {
    "/opengraph-image": ["./app/_og/fonts/**"],
    "/twitter-image": ["./app/_og/fonts/**"],
  },
};

export default nextConfig;
