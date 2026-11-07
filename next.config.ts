import type { NextConfig } from "next";

// Fully static: the page has no client components, so the built HTML ships
// without the Next.js runtime (see scripts/strip-runtime.mjs).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
