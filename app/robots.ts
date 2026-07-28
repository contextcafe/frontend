import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/bakers/", "/advocates/"],
      },
    ],
    sitemap: "https://contextcafe.com/sitemap.xml",
  };
}
