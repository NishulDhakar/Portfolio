// "use client";

// import { cn } from "@/lib/utils";
// import { Card } from "@/components/ui/crazxy-ui/card";
// import { techSkills } from "@/data/Skills";
// import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
// import { Reveal } from "@/components/common/reveal";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Separator } from "@/components/ui/separator";

// export interface ProjectCardProps {
//   title: string;
//   description: string;
//   href: string;
//   github?: string;
//   status?: "running" | "building" | "abandoned";
//   className?: string;
//   image?: string;
//   technologies?: string[];
//   type?: string;
//   viewDetails?: {
//     type: "Details";
//     href: string;
//   };
// }

// const statusConfig: Record<
//   string,
//   { color: string; label: string; dotColor: string; shadowColor: string }
// > = {
//   running: {
//     color: "text-emerald-500 dark:text-emerald-400",
//     label: "Live",
//     dotColor: "bg-emerald-500 dark:bg-emerald-400",
//     shadowColor: "shadow-emerald-500/50",
//   },
//   building: {
//     color: "text-amber-500 dark:text-amber-400",
//     label: "Building",
//     dotColor: "bg-amber-500 dark:bg-amber-400",
//     shadowColor: "shadow-amber-500/50",
//   },
//   abandoned: {
//     color: "text-red-500 dark:text-red-400",
//     label: "Stopped",
//     dotColor: "bg-red-500 dark:bg-red-400",
//     shadowColor: "shadow-red-500/50",
//   },
// };

// export default function ProjectCard({
//   title,
//   description,
//   href,
//   github,
//   className,
//   image,
//   status = "running",
//   technologies,
// }: ProjectCardProps) {
//   const currentStatus = statusConfig[status];

//   return (
//     <Reveal>
//       <Card
//         className={cn(
//           "group relative flex h-[350px] md:h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-zinc-50 dark:border-white/10 dark:bg-zinc-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5",
//           className
//         )}
//       >
//         {/* Top Section: Visual Preview (Now as Background) */}
//         <div className="absolute inset-0 z-0 overflow-hidden bg-[#f8fafc] dark:bg-zinc-950/50 flex items-center justify-center">
//           {image ? (
//             <Image
//               src={image}
//               alt={title}
//               fill
//               className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[8px] opacity-90 group-hover:opacity-40"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 group-hover:blur-[4px] transition-all duration-700">
//               <span className="text-zinc-400 font-medium text-xs">No Preview</span>
//             </div>
//           )}

//           {/* Status Badge */}
//           {status && (
//             <div className="absolute right-4 top-4 md:right-6 md:top-6 flex items-center gap-2 rounded-full bg-white/80 dark:bg-black/40 px-3 py-1.5 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm">
//               <span
//                 className={cn(
//                   "h-1.5 w-1.5 md:h-2 w-2 rounded-full",
//                   currentStatus.dotColor,
//                   "animate-pulse"
//                 )}
//               />
//               <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
//                 {currentStatus.label}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Bottom Section: Content (Expands on hover) */}
//         <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col bg-white dark:bg-zinc-900 px-5 md:px-6 py-5 md:py-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-[280px] md:group-hover:h-[270px] h-[80px] md:h-[100px] border-t border-black/5 dark:border-white/5">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-xl font-[family-name:var(--font-instrument-serif)] bold md:text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 truncate pr-2">
//               {title}
              
//             </h3>
                    
//             {github && (
//               <motion.a
//                 href={github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
//                 title="Source Code"
//               >
//                 <Github size={20} />
//               </motion.a>
//             )}
//             {href && (
//               <motion.a
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
//                 title="View Project"
//               >
//                 <ExternalLink size={20} />
//               </motion.a>
//             )}
//           </div>

//           {/* Expanded Content */}
//           <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 overflow-hidden flex flex-col h-full">
//             <p className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3">
//               {description}
//             </p>

//             <div className="mt-6 space-y-6">
//               <div className="flex flex-wrap gap-2">
//                 {technologies?.slice(0, 4).map((tech) => {
//                   const skill = techSkills.find(
//                     (s) => s.name.toLowerCase() === tech.toLowerCase()
//                   );
//                   const Icon = skill?.icon;
//                   return (
//                     <div
//                       key={tech}
//                       className="flex items-center gap-1.5 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-2.5 py-1 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400"
//                     >
//                       {Icon && <Icon className={cn("h-2 w-2", skill?.color)} />}
//                       {skill ? skill.name : tech}
//                     </div>
//                   );
//                 })}
//               </div>

//               {href && (
//                 <Link
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0081ff] px-3 py-2 text-xs font-bold text-white transition-all hover:bg-[#0066cc] hover:active:scale-95"
//                 >
//                   Visit Website
//                   <ArrowUpRight size={18} />
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Backdrop overlay */}
//         <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/5 dark:group-hover:bg-black/10" />
//       </Card>
//     </Reveal>
//   );
// }


"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/crazxy-ui/card";
import { techSkills } from "@/data/Skills";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

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
  { color: string; label: string; dotColor: string; shadowColor: string }
> = {
  running: {
    color: "text-emerald-500 dark:text-emerald-400",
    label: "Live",
    dotColor: "bg-emerald-500 dark:bg-emerald-400",
    shadowColor: "shadow-emerald-500/50",
  },
  building: {
    color: "text-amber-500 dark:text-amber-400",
    label: "Building",
    dotColor: "bg-amber-500 dark:bg-amber-400",
    shadowColor: "shadow-amber-500/50",
  },
  abandoned: {
    color: "text-red-500 dark:text-red-400",
    label: "Stopped",
    dotColor: "bg-red-500 dark:bg-red-400",
    shadowColor: "shadow-red-500/50",
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
          "group relative flex h-full flex-col overflow-hidden rounded-[1rem] border border-black/5 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl transition-all duration-500 hover:border-black/10 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5",
          className
        )}
      >
        {/* Image Section */}
        {image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-black/40">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:opacity-0" />

            {/* Quick Actions (Always visible on mobile, hover on desktop) */}
            {/* <div className="absolute right-4 top-4 z-10 flex flex-col gap-2 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:opacity-0">
              {href && (
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 dark:bg-black/80 text-black dark:text-white shadow-lg backdrop-blur-md transition-all"
                  title="Live Demo"
                >
                  <ExternalLink size={16} />
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 dark:bg-black/80 text-black dark:text-white shadow-lg backdrop-blur-md transition-all"
                  title="Source Code"
                >
                  <Github size={16} />
                </motion.a>
              )}
            </div> */}

            {/* Status Badge */}
            {status && (
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-white backdrop-blur-md">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    currentStatus.dotColor,
                    "animate-pulse shadow-[0_0_8px]",
                    currentStatus.shadowColor
                  )}
                />
                {currentStatus.label}
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="flex flex-1 flex-col px-6 mt-6 ">
          <div className="mb-3 flex justify-between gap-4">
            <div className="flex gap-2">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-primary">
              {title}
            </h3>
            </div>
           <div className=" hidden md:flex gap-2"> 
                      {href && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/5 dark:border-white/10 text-zinc-400 transition-colors hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white"
              >
                <ExternalLink size={18} />
              </Link>
            )}

            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/5 dark:border-white/10 text-zinc-400 transition-colors hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white"
              >
                <Github size={18} />
              </Link>
            )}
                        {viewDetails && (
              <Link
                href={viewDetails.href}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/5 dark:border-white/10 text-zinc-400 transition-colors hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white"
              >
                <ArrowUpRight size={18} />
              </Link>
            )}
            </div>
          </div>
       <Separator className="my-" />
          <p className="mb-6 mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>

          <div className="mt-auto space-y-6">
            <div className="flex flex-wrap gap-2">
              {technologies?.slice(0, 5).map((tech) => {
                const skill = techSkills.find(
                  (s) => s.name.toLowerCase() === tech.toLowerCase()
                );

                const Icon = skill?.icon;
                const skillColor = skill?.color;

                return (
                  <div
                    key={tech}
                          className="flex items-center gap-1.5 rounded-full border border-black/[0.03] dark:border-white/[0.03] bg-black/[0.02] dark:bg-white/[0.02] px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 transition-all hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:text-zinc-900 dark:hover:text-white"
                  >
                  
                    {Icon && (
                      <Icon className={cn("h-5 w-5 opacity-70", skillColor)} />
                    )}
                    {skill ? skill.name : tech}
                  </div>
                );
              })}
              {technologies && technologies.length > 5 && (
                <div className="flex items-center justify-center rounded-full border border-black/[0.03] dark:border-white/[0.03] bg-black/[0.02] dark:bg-white/[0.02] px-3 py-1 text-xs font-medium text-zinc-400">
                  +{technologies.length - 5}
                </div>
              )}
            </div>

            {/* Card Footer Actions - Visible on mobile/tablet, subtle on desktop */}
            <div className="flex items-center gap-3 pt-2 md:hidden">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-900 py-2.5 text-sm font-semibold text-white transition-all active:scale-95 dark:bg-white dark:text-zinc-900"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-zinc-900 transition-all active:scale-95 dark:border-white/10 dark:bg-zinc-800 dark:text-white"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}