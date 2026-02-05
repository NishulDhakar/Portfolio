"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import { projectsData } from "@/data/Projects";
import { Button } from "@/components/ui/button";

export default function FeaturedProjects() {
    const featured = projectsData.slice(0, 4);

    return (
        <section className="space-y-6 sm:space-y-8">
            <div className="flex items-center justify-between">
                   <motion.h2
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                          className="mb-4 sm:mb-6 md:mb-4 font-[family-name:var(--font-instrument-serif)] text-xl sm:text-2xl font-semibold tracking-tight text-foreground"
                        >
                          Featured Projects
                        </motion.h2>
                {/* <Link
                    href="/projects"
                    className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    View All
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {featured.map((project) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center pt-4">
                <Button asChild variant="outline" className="group">
                    <Link href="/projects">
                        View More Projects
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
