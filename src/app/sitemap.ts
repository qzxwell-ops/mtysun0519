import type { MetadataRoute } from "next";
import { news, products } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mtysun.com";
  const staticPages = ["/en", "/en/products", "/en/news", "/en/about", "/en/contact", "/zh"];
  const productPages = products.map((product) => `/en/products/${product.id}`);
  const newsPages = news.map((item) => `/en/news/${item.id}`);

  return [...staticPages, ...productPages, ...newsPages].map((url) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency: url.includes("/news") ? "weekly" : "monthly",
    priority: url === "/en" ? 1 : 0.7
  }));
}
