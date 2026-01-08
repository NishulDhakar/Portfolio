import Container from "@/components/common/Container";
import { Reveal } from "@/components/common/reveal";

import CertificatesSection from "@/components/sections/about/Certificate";
import Education from "@/components/sections/about/Education";
import Info from "@/components/sections/about/info";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import DetailedBio from "@/components/sections/landingPage/DetailedBio";

export const generateMetadata = (): Metadata => {
  const metadata = siteConfig.pageMetadata.about;
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${siteConfig.url}/about`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: metadata.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: "en_US",
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

export { viewport } from "@/lib/viewport";


export default function AboutPage() {
  return (
    <div className="pt-20 pb-20">
      {/* <Reveal>
        <DetailedBio />
      </Reveal> */}
      <Reveal>
        <Info />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <CertificatesSection />
      </Reveal>
    </div>
  );
}
