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

const statusColors: Record<string, string> = {
  running: "bg-emerald-500",
  building: "bg-amber-500",
  abandoned: "bg-red-500",
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
  return (
    <Reveal>
      <Card
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/50 transition-all duration-300 hover:border-border hover:shadow-lg dark:bg-zinc-900/30",
          className
        )}
      >
        {/* Image Section */}
        {image && (
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Actions */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              {viewDetails && (
                <Link
                  href={viewDetails.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 active:scale-95"
                  title="View Details"
                >
                  <ArrowUpRight size={20} />
                </Link>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 active:scale-95"
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 active:scale-95"
                  title="Source Code"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg tracking-tight text-foreground">
              {title}
            </h3>
            {status && (
              <div className="flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground backdrop-blur-sm">
                <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", statusColors[status])} />
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </div>
            )}
          </div>

          <p className="mb-6 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {technologies?.slice(0, 4).map((tech) => {
                const skill = techSkills.find(
                  (s) => s.name.toLowerCase() === tech.toLowerCase()
                );
                if (!skill) return null;

                const Icon = skill.icon;
                return (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 rounded-md border border-border/50 bg-secondary/30 px-2 py-1 text-[10px] font-medium text-secondary-foreground transition-colors hover:bg-secondary/50"
                  >
                    <Icon className={cn("h-3 w-3", skill.color)} />
                    {skill.name}
                  </div>
                );
              })}
              {technologies && technologies.length > 4 && (
                <div className="flex items-center justify-center rounded-md border border-border/50 bg-secondary/30 px-2 py-1 text-[10px] font-medium text-muted-foreground">
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
