import { ProjectPost } from '@/types/project';
import { ProjectFrontmatter, ProjectPostPreview } from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const projectDirectory = path.join(process.cwd(), 'src/data/projects');

/**
 * Get all project files from the projects directory
 */
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get project by slug with full content
 */
export function getProjectBySlug(slug: string): ProjectPost | null {
  try {
    const fullPath = path.join(projectDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Validate frontmatter
    const frontmatter = data as ProjectFrontmatter;
    if (!frontmatter.title || !frontmatter.description) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }

    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

/**
 * Get all projects (for listing)
 */
export function getAllProjects(): ProjectPostPreview[] {
  const slugs = getProjectSlugs();

  const projects = slugs
    .map((slug) => {
      const project = getProjectBySlug(slug);
      if (!project) return null;

      return {
        slug: project.slug,
        frontmatter: project.frontmatter,
      };
    })
    .filter((p): p is ProjectPostPreview => p !== null)

  return projects;
}

/**
 * Get all published projects
 */
export function getPublishedProjects(): ProjectPostPreview[] {
  const allProjects = getAllProjects();
  return allProjects.filter((p) => p.frontmatter.isPublished);
}

/**
 * Get projects by tag
 */
export function getProjectsByTag(tag: string): ProjectPostPreview[] {
  const publishedProjects = getPublishedProjects();
  return publishedProjects.filter((p) =>
    p.frontmatter.tags.some(
      (t) => t.toLowerCase() === tag.toLowerCase(),
    ),
  );
}

/**
 * Get all unique tags from published projects
 */
export function getAllProjectTags(): string[] {
  const publishedProjects = getPublishedProjects();
  const tagsSet = new Set<string>();

  publishedProjects.forEach((p) => {
    p.frontmatter.tags.forEach((tag) => {
      tagsSet.add(tag.toLowerCase());
    });
  });

  return Array.from(tagsSet).sort();
}

/**
 * Get related projects based on shared tags
 */
export function getRelatedProjects(slug: string, limit = 3) {
    const allProjects = getPublishedProjects();
    const currentProject = allProjects.find(p => p.slug === slug);
  
    if (!currentProject) return [];
  
    const currentTags = (currentProject.frontmatter.tags || []).map(tag =>
      tag.toLowerCase()
    );
  
    if (currentTags.length === 0) return [];
  
    const related = allProjects
      .filter(p => p.slug !== slug)
      .filter(p =>
        (p.frontmatter.tags || []).some(tag =>
          currentTags.includes(tag.toLowerCase())
        )
      )
      .slice(0, limit);
  
    return related;
  }
  
