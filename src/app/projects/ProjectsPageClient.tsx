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
    const containerClassName = "mt-12 py-4";
    const gridClassName = "grid md:grid-cols-2 lg:grid-cols-2 gap-8 py-12";
    const titleClassName =
        "text-4xl font-bold tracking-tight lg:text-5xl text-center";

    const [filter, setFilter] = useState("All");

    const displayedProjects = projectsData.filter(
        (project) => filter === "All" || project.type === filter
    );

    const types = ["All", "Frontend", "Fullstack", "Fin-Fullstack", "System"];

    return (
        <div className={containerClassName}>
            <Container>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    staticity={50}
                    color="#ffffff"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1
                        className={`${titleClassName} font-[family-name:var(--font-instrument-serif)] text-4xl lg:text-5xl font-bold tracking-wide leading-tight`}
                    >
                        Proof of Work{" "}
                        <span className="text-2xl text-muted-foreground font-sans">
                            ({projectsData.length})
                        </span>
                    </h1>
                    <div className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-center mt-2">
                        My projects and work across different technologies and domains.
                    </div>
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
            </Container>
        </div>
    );
}
