"use client";

import { experience as experienceData } from "@/data/experience";
import type { Experience as ExperienceType } from "@/data/experience";
import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen mt-20 px-4 py-10">
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight lg:text-5xl text-center font-[family-name:var(--font-instrument-serif)]"
        >
          My Experience
        </motion.h1>
        <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          A summary of my professional work history and technical roles.
        </p>
        <Separator className="my-10" />

        <div className="space-y-12 mb-20">
          {experienceData.map((exp, i) => (
            <ExperienceItem key={i} experience={exp} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}

const ExperienceItem = ({ experience, index }: { experience: ExperienceType; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative border-l-2 border-muted pl-8 md:pl-12"
    >
      {/* Dot marker for timeline */}
      <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border bg-card p-2">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                {experience.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-1">
                <span className="font-semibold text-foreground/80">{experience.company}</span>
                <span>•</span>
                <span>{experience.employmentType}</span>
                <span>•</span>
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
          <div className="text-sm font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
            {experience.startDate} — {experience.endDate}
          </div>
        </div>

        <ul className="space-y-3 pt-2">
          {experience.points.map((point, i) => (
            <li key={i} className="text-[15px] leading-relaxed text-muted-foreground flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/50" />
              {point}
            </li>
          ))}
        </ul>

        {experience.companyUrl && (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors mt-2"
          >
            Visit Website →
          </a>
        )}
      </div>
    </motion.div>
  );
};
