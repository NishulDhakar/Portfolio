export interface ProjectFrontmatter {
    title: string;
    description: string;
    image: string;
    tags: string[];
    isPublished: boolean;
  }
  
  export interface ProjectPost {
    slug: string;
    frontmatter: ProjectFrontmatter;
    content: string;
  }
  
  export interface ProjectPostPreview {
    slug: string;
    frontmatter: ProjectFrontmatter;
  }
  