import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local public assets; extend this when loading external domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assu.ca",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Ensure cheerio is only bundled on server side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    return config;
  },
};

export default nextConfig;
