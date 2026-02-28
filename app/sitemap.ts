import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://webearish.com";
  const staticRoutes = ["/", "/about", "/shop", "/blog", "/resources", "/contact"].map(r => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r === "/" ? 1.0 : 0.8,
  }));
  const blogRoutes = blogPosts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticRoutes, ...blogRoutes];
}
