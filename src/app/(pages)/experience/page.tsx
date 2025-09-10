import { experiencesConfig } from "@/config/experience.config";
import type { Experience as ExperienceType } from "@/types";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata(): Promise<Metadata> {
  const description = `Hey, I'm ${
    siteConfig.creator.name
  }. I've worked with a variety of companies and have experience in different roles. I've also made a few projects on my own. Here's a list of my work experience.
    ${experiencesConfig
      .map((exp) => `${exp.title} at ${exp.company.name}`)
      .join(", ")}
    `;
  const keywords = [
    ...siteConfig.keywords,
    "Experience",
    ...experiencesConfig.map((exp) => exp.company.name),
  ];
  const title = `Experience | ${siteConfig.creator.name} | ${siteConfig.name}`;
  const og = `${siteConfig.siteUrl}/experience-og.png`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/experience`,
      siteName: siteConfig.name,
      images: [
        {
          url: og,
          width: 1800,
          height: 1000,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.creator.url,
      title,
      description,
      images: {
        url: og,
        width: 1800,
        height: 1000,
        alt: title,
      },
    },
  };
}

export default function ExperienceSection() {
  return (
    <div className="min-h-screen mt-20 px-4 py-10">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-center">
          Experience
        </h1>
        {/* <p className="text-muted-foreground text-center mt-2 max-w-2xl mx-auto">
          A snapshot of my professional journey, roles, and contributions.
        </p> */}
        <Separator className="my-8" />

        <div className="space-y-10">
          {experiencesConfig.map((exp, i) => (
            <Experience key={i} experience={exp} />
          ))}
        </div>
      </Container>
    </div>
  );
}

const Experience = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div className="relative border-l-2 border-muted pl-6">
      {/* Dot marker for timeline */}
      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary"></div>

      <div className="space-y-2">
        {/* Role & Company */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            {experience.title}
          </h2>
          <p className="text-xs text-muted-foreground">
            {experience.start} – {experience.end}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <a
            href={experience.company.url}
            target="_blank"
            className="hover:underline font-medium"
          >
            {experience.company.name}
          </a>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            {experience.employmentType}
          </span>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            {experience.location.name}
          </span>
        </div>

        {/* Description */}
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
