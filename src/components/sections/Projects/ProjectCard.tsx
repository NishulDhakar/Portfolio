"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/crazxy-ui/card"
import { SparklesText } from "@/components/ui/magicui/sparkles-text";
import { GlowingEffect } from "../../ui/glowing-effect";
import { techSkills } from "@/data/Skills";
import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { Reveal } from "@/components/common/reveal";

export interface ProjectCardProps {
  title?: React.ReactNode;
  description: string;
  href: string;
  github?: string;
  status?: "running" | "building" | "abandoned";
  className?: string;
  image?: string;
  technologies?: string[];
  type?: string;
}

const statusColors: Record<string, string> = {
  running: "bg-green-600",
  building: "bg-yellow-500",
  abandoned: "bg-gray-500",
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
  type
}: ProjectCardProps) {
  return (
    <Reveal>
    <Card
      variant="corners"
      className={cn(
        "w-full flex rounded-xl shadow-sm hover:shadow-md transition-all border border-muted bg-background",
        className
      )}>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />


      <div className="grid ">
      {image && (
        <img
          src={image}
          alt="project preview"
          className="w-full h-36 mb-6 md:mb-1 overflow-hidden object-cover rounded-md mr-4"
        />
      )}


      <div className="flex flex-col justify-between md:mt-6 flex-1">

        <div className="flex items-center justify-between">
          <SparklesText className="text-lg font-semibold">{title}</SparklesText>
          {status && (
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-md text-white font-medium",
                statusColors[status]
              )}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          )}
        </div>

          {type && (
    <span className="hidden mb-2 px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100">
      {type}
    </span>
  )}


        <p className="text-sm text-muted-foreground mt-1">{description}</p>

<div className="flex flex-wrap gap-1 mt-4">
  {technologies?.map((tech) => {
    const skill = techSkills.find(
      (s) => s.name.toLowerCase() === tech.toLowerCase()
    );
    if (!skill) return null;

    const Icon = skill.icon;
    return (
      <div
        key={tech}
        className={cn(
          "flex items-center gap-1 px-1.5 py-0.5 text-[10px] rounded border",
          skill.color,
          "bg-muted"
        )}
      >
        <Icon className="w-3 h-3" />
        {skill.name}
      </div>
    );
  })}
</div>

<div className="flex bottom-0 justify-end gap-4">
        <div className="pt-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-blue-500 hover:underline">
            
                   <ExternalLink size={20}/>
          </a>
        </div>

        <div className="pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-blue-500 hover:underline">
            <Github size={20} />
          </a>
        </div>
       </div>

      </div>
      </div>
    </Card>
    </Reveal>
  );
}
