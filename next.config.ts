import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Allow unoptimized images during development for placeholders
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
