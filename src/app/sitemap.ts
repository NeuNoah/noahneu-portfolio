import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, alternates: { languages: { de: siteUrl, en: `${siteUrl}/en` } } },
    { url: `${siteUrl}/en`, lastModified: now, alternates: { languages: { de: siteUrl, en: `${siteUrl}/en` } } },
    {
      url: `${siteUrl}/projekte`,
      lastModified: now,
      alternates: { languages: { de: `${siteUrl}/projekte`, en: `${siteUrl}/en/projects` } },
    },
    {
      url: `${siteUrl}/en/projects`,
      lastModified: now,
      alternates: { languages: { de: `${siteUrl}/projekte`, en: `${siteUrl}/en/projects` } },
    },
    {
      url: `${siteUrl}/projekte/privacy-oriented-rust-browser`,
      lastModified: now,
      alternates: {
        languages: { de: `${siteUrl}/projekte/privacy-oriented-rust-browser`, en: `${siteUrl}/en/projects/privacy-oriented-rust-browser` },
      },
    },
  ];
}
