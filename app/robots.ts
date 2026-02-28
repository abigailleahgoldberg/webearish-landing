import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot","ClaudeBot","PerplexityBot","Gemini-Bot","Bingbot","Googlebot"], allow: "/" },
    ],
    sitemap: "https://webearish.com/sitemap.xml",
  };
}
