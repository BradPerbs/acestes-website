import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site lives inside the Electron app's repo, which has its own lockfile.
  // Pin the root so Turbopack doesn't treat the parent repo as the workspace.
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  devIndicators: false,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
