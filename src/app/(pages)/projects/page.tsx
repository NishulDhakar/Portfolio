"use client";

import React, { useState } from "react";
import Container from "@/components/common/Container";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import { projectsData } from "@/data/Projects";
import { Button } from "@/components/ui/button";


interface ProjectsPageProps {
  containerClassName?: string;
  gridClassName?: string;
  titleClassName?: string;
  limit?: number;
  showFilter?: boolean; 
}

export default function ProjectsPage({
  containerClassName = "mx-auto px-6 lg:px-12 max-w-3xl mt-20 py-4",
  gridClassName = "grid md:grid-cols-2 gap-8 py-12",
  titleClassName = "text-2xl font-semibold text-gray-900 dark:text-white mb-10",
  limit,
  showFilter = true, 
}: ProjectsPageProps) {
  const [filter, setFilter] = useState("All");

  const displayedProjects = (limit
    ? projectsData.slice(0, limit)
    : projectsData
  ).filter((project) => filter === "All" || project.type === filter);

  const types = ["All", "Serious Projects",  "Fun Projects"];

  return (
    <Container className={containerClassName}>
      <h1 className={titleClassName}>

    My Projects

  </h1>

      {showFilter && (
        <div className="flex flex-wrap gap-3 mb-6">
          {types.map((t) => (
            <Button
              key={t}
              variant={t === filter ? "default" : "outline"}
              onClick={() => setFilter(t)}
            >
              {t}
            </Button>
          ))}
        </div>
      )}
     
      <div className={gridClassName}>
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Container>
  );
}
