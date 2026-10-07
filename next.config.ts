import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site lives inside the Electron app's repo, which has its own lockfile.
  // Pin the root so Turbopack doesn't treat the parent repo as the workspace.
  turbopack: { root: process.cwd() },
  // Plain static files in out/, served by Cloudflare Pages.
  output: "export",
  poweredByHeader: false,
  devIndicators: false,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
