import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path = "/en"): Metadata {
  const baseUrl = "https://www.mtysun.com";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        en: `/en${path === "/en" ? "" : path.replace(/^\/en/, "")}`,
        zh: `/zh${path === "/en" ? "" : path.replace(/^\/en/, "")}`
      }
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: "MTYSUN Auto Parts",
      type: "website"
    }
  };
}
