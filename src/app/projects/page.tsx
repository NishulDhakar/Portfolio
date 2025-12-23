"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import { projectsData } from "@/data/Projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/magicui/particles";

export default function ProjectsPage() {
  const containerClassName = "mx-auto px-6 lg:px-12 max-w-7xl mt-20 py-4";
  const gridClassName = "grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12";
  const titleClassName =
    "text-4xl font-bold tracking-tight lg:text-5xl text-center";

  const [filter, setFilter] = useState("All");

  const displayedProjects = projectsData.filter(
    (project) => filter === "All" || project.type === filter
  );

const types = ["All", "Frontend", "Fullstack", "Fin-Fullstack", "System"];


  return (
    <div className={containerClassName}>
         <Particles
                      className="absolute inset-0 z-0"
                      quantity={100}
                      staticity={50}
                      color="#ffffff"
                  />
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 mt-6"
      >
        <h1
          className={`${titleClassName} font-[family-name:var(--font-instrument-serif)] text-7xl font-bold tracking-wide leading-tight`}
        >
          Proof of Work <span className="text-2xl text-muted-foreground font-sans">({projectsData.length})</span>
        </h1>
        <div className="text-muted-foreground mx-auto max-w-2xl text-lg">
          My projects and work across different technologies and domains.
        </div>
      </motion.div>

      <Separator className="my-8" />

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {types.map((t) => (
          <Button
            key={t}
            variant={t === filter ? "default" : "outline"}
            onClick={() => setFilter(t)}
            className="rounded-full"
          >
            {t}
          </Button>
        ))}
      </div>

      <motion.div
        layout
        className={gridClassName}
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
