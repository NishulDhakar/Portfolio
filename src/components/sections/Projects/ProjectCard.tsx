"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight, HiCodeBracket } from "react-icons/hi2";
import { Github } from "lucide-react";

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
}

export default function ProjectCard({
  title,
  description,
  href,
  image,
  github,
  technologies,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const hoverIn = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const hoverOut = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      className="
        bg-white dark:bg-zinc-900/50
        backdrop-blur-xl
        rounded-2xl
        p-2
        border border-gray-200 dark:border-white/10
        shadow-sm
        hover:shadow-2xl dark:hover:shadow-primary/2
        hover:border-gray-300 dark:hover:border-white/10
        transition-all
        duration-500
        group
        flex flex-col
        h-full
      "
    >
      {/* Preview Image */}
      <div className="h-52 rounded-xl overflow-hidden relative border border-gray-100 dark:border-white/5 mb-6 bg-gray-50 dark:bg-zinc-950">
        <div className="relative w-full h-full">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="
                object-cover 
                transition-transform duration-700 
                group-hover:scale-105 
                opacity-90 dark:opacity-80 
                group-hover:opacity-100
              "
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-600">
              <HiCodeBracket size={48} />
            </div>
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 flex flex-col flex-1">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                text-[10px] font-bold uppercase tracking-wider 
                px-2 py-1
                bg-gray-50 dark:bg-zinc-800/50 
                text-gray-500 dark:text-zinc-400 
                rounded-md 
                border border-gray-100 dark:border-white/5
              "
            >
              {tech}
            </span>
          ))}

          {technologies && technologies.length > 3 && (
            <span className="text-[10px] font-bold text-gray-400 dark:text-zinc-500">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="
            font-heading text-xl font-bold 
            text-gray-900 dark:text-zinc-100 
            mb-2 truncate
            group-hover:text-blue-500 dark:group-hover:text-blue-400
            transition-colors
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-6">
          {description}
        </p>

        {/* Footer Links */}
        <div className="flex items-center justify-between mt-auto">
          {href && (
            <Link
              href={href}
              target="_blank"
              className="
                inline-flex items-center gap-2 
                text-sm font-semibold 
                text-gray-900 dark:text-zinc-100 
                hover:text-blue-600 dark:hover:text-blue-400 
                transition-colors group/link
              "
            >
              View Project Live
              <HiArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-10 w-10 items-center justify-center 
                rounded-xl 
                border border-black/10 dark:border-white/10 
                bg-white dark:bg-zinc-800 
                text-zinc-900 dark:text-white 
                transition-all hover:scale-105 active:scale-95
              "
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
