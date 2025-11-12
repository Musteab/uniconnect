import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://uniconnect.example.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/universities",
    "/success-stories",
    "/gallery",
    "/contact",
  ];
  return routes.map((r) => ({ url: base + r, lastModified: new Date() }));
}
