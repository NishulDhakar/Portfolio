"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/Projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/magicui/particles";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import Container from "@/components/common/Container";

export default function ProjectsPageClient() {
    const containerClassName = "mt-8 sm:mt-10 md:mt-12 py-4 ";
    const gridClassName = "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 py-8 sm:py-10 md:py-12";
    const titleClassName =
        "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center";

    const [filter, setFilter] = useState("All");

    const displayedProjects = projectsData.filter(
        (project) => filter === "All" || project.type === filter
    );

    const types = ["All", "Frontend", "Fullstack", "System"];

    return (
        <div className={containerClassName}>



            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1
                    className={`${titleClassName} font-[family-name:var(--font-instrument-serif)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight`}
                >
                    Proof of Work{" "}
                    <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans">
                        ({projectsData.length})
                    </span>
                </h1>
                <div className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-center mt-2 px-4">
                    My projects and work across different technologies and domains.
                </div>
                <Separator className="my-6 sm:my-8" />
                <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-2 sm:gap-3 mb-6 pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {types.map((t) => (
                        <Button
                            key={t}
                            variant={t === filter ? "default" : "outline"}
                            onClick={() => setFilter(t)}
                            className="rounded-full shrink-0 text-xs sm:text-sm"
                        >
                            {t}
                        </Button>
                    ))}
                </div>
            </motion.div>

            <motion.div layout className={gridClassName}>
                {displayedProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
}
