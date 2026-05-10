import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enable image optimization */
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
