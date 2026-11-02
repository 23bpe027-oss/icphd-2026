import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://icphd2026.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/themes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/registration`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/advisory-committee`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/organizing-committee`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
