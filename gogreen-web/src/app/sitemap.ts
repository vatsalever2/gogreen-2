import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  const top = [
    "",
    "/services",
    "/services/solar-epc",
    "/services/battery-storage",
    "/services/decommissioning",
    "/services/removal-reinstallation",
    "/services/roofing",
    "/services/additional",
    "/about",
    "/why-gogreen",
    "/areas",
    "/contact",
    "/get-assessment",
    "/blog",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const states = site.states.map((s) => ({
    url: `${base}/areas/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: s.priority ? 0.8 : 0.6,
  }));

  const blog = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...top, ...states, ...blog];
}
