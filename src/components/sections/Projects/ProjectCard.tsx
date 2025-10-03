"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/crazxy-ui/card";
// import { SparklesText } from "@/components/ui/magicui/sparkles-text";
// import { GlowingEffect } from "../../ui/glowing-effect";
import { techSkills } from "@/data/Skills";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { MdArrowOutward } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

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
  viewDetails?: {
    type: "Details";
    href: string;
  };
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
  type,
  viewDetails,
}: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Reveal>
      <Card
        variant="inner"
        className={cn(
          "border-muted bg-background flex w-full rounded-xl border shadow-sm transition-all hover:shadow-md",
          className,
        )}
      >
        {/* <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        /> */}

        <div className="grid">
          {image && (
            <Image
              src={image}
              width={400}        
              height={150}       
              alt="project preview"
              className="mr-4 mb-6 h-36 w-full overflow-hidden rounded-md object-cover md:mb-1"
            />
          )}

          <div className="flex p-4 gap-2 flex-1 flex-col justify-between md:mt-">
            <div className="flex items-center justify-between font-bold">
              {/* <SparklesText className="text-lg font-semibold"> */}
                {title}
              {/* </SparklesText> */}
              {status && (
                <span
                  className={cn(
                    "rounded-md px-2 py-0.5 text-xs font-medium text-white",
                    statusColors[status],
                  )}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              )}
            </div>

            {type && (
              <span className="mb-2 hidden rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800 dark:bg-purple-800 dark:text-purple-100">
                {type}
              </span>
            )}

            <p className="text-muted-foreground mt-1 text-sm">{description}</p>

            <div className="mt-4 flex flex-wrap gap-1">
              {technologies?.map((tech) => {
                const skill = techSkills.find(
                  (s) => s.name.toLowerCase() === tech.toLowerCase(),
                );
                if (!skill) return null;

                const Icon = skill.icon;
                return (
                  <div
                    key={tech}
                    className={cn(
                      "flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px]",
                      skill.color,
                      "bg-muted",
                    )}
                  >
                    <Icon className="h-3 w-3" />
                    {skill.name}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between">
              <div className="mt-4">
                {viewDetails && (
                  <a
                    href={viewDetails.href}
                    rel="noopener noreferrer"
                    onMouseOver={() => setIsHovering(true)}
                    onMouseOut={() => setIsHovering(false)}
                  >
                    <span className="text-secondary text-sm flex items-center gap-2 hover:text-primary hover:underline">
                      View Details{" "}
                      {isHovering ? (
                        <MdArrowOutward size={16} />
                      ) : (
                        <IoArrowForwardOutline size={16} />
                      )}{" "}
                    </span>
                  </a>
                )}
              </div>

              <div className="bottom-0 flex justify-end gap-4">
                <div className="pt-4">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-500 hover:underline"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="pt-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-500 hover:underline"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
