import type { NextConfig } from "next";

const PDF_TOOL_APP_URL =
  process.env.PDF_TOOL_APP_URL || "http://localhost:3000";

const nextConfig: NextConfig = {
  /* Enable image optimization */
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /* Expose separate @contextcafe/tools/pdf-workspace micro-app under /tools/pdf route on runtime */
  async rewrites() {
    return [
      {
        source: "/tools/pdf",
        destination: `${PDF_TOOL_APP_URL}/tools/pdf`,
      },
      {
        source: "/tools/pdf/:path*",
        destination: `${PDF_TOOL_APP_URL}/tools/pdf/:path*`,
      },
    ];
  },
};

export default nextConfig;
