import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export (output goes to /out), served by Cloudflare: see wrangler.jsonc
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
