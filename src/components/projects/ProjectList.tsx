import { ProjectPostPreview } from '@/types/project';
import ProjectCard from '../sections/Projects/ProjectCard';

interface ProjectListProps {
  projects: ProjectPostPreview[];
  className?: string;
}

export function ProjectList({ projects, className = '' }: ProjectListProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          href={`/projects/${project.slug}`}
          image={project.frontmatter.image}
          technologies={project.frontmatter.tags}
        />
      ))}
    </div>
  );
}
