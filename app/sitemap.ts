// app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://techsecure.vercel.app";
  const routes = ["", "/about", "/services", "/products", "/gallery", "/testimonials", "/contact"];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: "weekly", priority: r === "" ? 1 : 0.8 }));
}