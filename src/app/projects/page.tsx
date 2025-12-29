import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import ProjectsPageClient from "@/app/projects/ProjectsPageClient";

export const generateMetadata = (): Metadata => {
  const metadata = siteConfig.pageMetadata.projects;
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${siteConfig.url}/projects`,
      siteName: siteConfig.name,
      images: [
        {
          url: metadata.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage || siteConfig.ogImage],
      creator: siteConfig.author.twitter,
    },
  };
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
