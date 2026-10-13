import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Cloudflare Pages (output goes to /out)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
