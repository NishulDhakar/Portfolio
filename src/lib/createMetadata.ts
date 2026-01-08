import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = siteConfig.icons,
  keywords,
  noindex = false,
  path = "",
}: {
  title?: any;
  description?: string;
  image?: string;
  icons?: string;
  keywords?: string[];
  noindex?: boolean;
  path?: string;
} = {}): Metadata {
  const titleString = typeof title === "object" ? (title.default || siteConfig.name) : title;
  const canonicalUrl = `${siteConfig.url}${path}`;

  // Combine keywords with site-wide keywords
  const allKeywords = [
    ...(keywords || []),
    ...siteConfig.keywords
  ];

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: allKeywords,
    authors: [
      {
        name: siteConfig.author.name,
        url: siteConfig.url,
      }
    ],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: titleString,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: titleString,
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
      creator: siteConfig.author.twitter,
      site: siteConfig.author.twitter,
    },
    icons,
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}
