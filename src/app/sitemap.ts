import { MetadataRoute } from "next";

const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thepolyhistor.com";

  return [
    { url: `${baseUrl}/`, lastModified: BUILD_DATE, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/demo`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/heatmap`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/waitlist`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/eula`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.3 },
  ];
}
