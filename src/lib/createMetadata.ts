import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = siteConfig.icons,
}: {
  title?: any;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  const titleString = typeof title === "object" ? (title.default || siteConfig.name) : title;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    openGraph: {
      title: titleString,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titleString,
      description,
      images: [image ?? siteConfig.ogImage],
    },
    icons,
  };
}
