"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/crazxy-ui/card";
import { techSkills } from "@/data/Skills";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  github?: string;
  status?: "running" | "building" | "abandoned";
  className?: string;
  image?: string;
  technologies?: string[];
  type?: string;
  viewDetails?: {
    type: "Details";
    href: string;
  };
}

const statusConfig: Record<
  string,
  { color: string; label: string; dotColor: string }
> = {
  running: {
    color: "text-emerald-400",
    label: "Live",
    dotColor: "bg-emerald-400",
  },
  building: {
    color: "text-amber-400",
    label: "Building",
    dotColor: "bg-amber-400",
  },
  abandoned: {
    color: "text-red-400",
    label: "Stopped",
    dotColor: "bg-red-400",
  },
};

export default function ProjectCard({
  title,
  description,
  href,
  github,
  className,
  image,
  status = "running",
  technologies,
  viewDetails,
}: ProjectCardProps) {
  const currentStatus = statusConfig[status];

  return (
    <Reveal>
      <Card
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5",
          className
        )}
      >
        {/* Image Section */}
        {image && (
          <div className="relative aspect-video w-full overflow-hidden bg-black/40">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

            {/* Overlay Actions */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {viewDetails && (
                <Link
                  href={viewDetails.href}
                  className="flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-zinc-200 group-hover:translate-y-0"
                  title="View Details"
                >
                  <ArrowUpRight size={20} className="stroke-[2.5]" />
                </Link>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-white text-black shadow-lg delay-75 transition-all duration-300 hover:scale-110 hover:bg-zinc-200 group-hover:translate-y-0"
                  title="Live Demo"
                >
                  <ExternalLink size={20} className="stroke-[2.5]" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-black/90 text-white shadow-lg delay-150 transition-all duration-300 hover:scale-110 hover:bg-black group-hover:translate-y-0"
                  title="Source Code"
                >
                  <Github size={20} />
                </a>
              )}
            </div>

            {/* Status Badge */}
            {status && (
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full shadow-[0_0_8px]",
                    currentStatus.dotColor,
                    `shadow-${currentStatus.dotColor.replace("bg-", "")}`
                  )}
                />
                {currentStatus.label}
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-primary">
              {title}
            </h3>
          </div>

          <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {technologies?.slice(0, 4).map((tech) => {
                const skill = techSkills.find(
                  (s) => s.name.toLowerCase() === tech.toLowerCase()
                );

                // Fallback if skill not found
                const Icon = skill?.icon;
                const skillColor = skill?.color;

                return (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 rounded-full border border-white/5 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  >
                    {Icon && (
                      <Icon className={cn("h-3.5 w-3.5", skillColor)} />
                    )}
                    {skill ? skill.name : tech}
                  </div>
                );
              })}
              {technologies && technologies.length > 4 && (
                <div className="flex items-center justify-center rounded-full border border-white/5 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white">
                  +{technologies.length - 4}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
