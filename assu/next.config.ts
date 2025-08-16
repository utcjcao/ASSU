import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local public assets; extend this when loading external domains
    remotePatterns: [],
  },
};

export default nextConfig;
