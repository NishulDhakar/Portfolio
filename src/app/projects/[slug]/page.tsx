import Container from '@/components/common/Container';
import ArrowLeft from '@/components/svgs/ArrowLeft';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/meta';
import {
  getProjectBySlug,
  getProjectSlugs,
  getRelatedProjects,
} from '@/lib/project';
import { ProjectContent } from '@/components/projects/ProjectContent';
import { ProjectList } from '@/components/projects/ProjectList';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths
export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project || !project.frontmatter.isPublished) {
    return { title: 'Project Not Found' };
  }

  const { title, description, image } = project.frontmatter;
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

// Page
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project || !project.frontmatter.isPublished) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(slug, 3);

  return (
    <Container className="py-16 mt-14">
      <div className="space-y-12">
        {/* Back Button */}
        <div>
          <Button variant="ghost" asChild className="group">
            <Link href="/projects" className="flex items-center space-x-2">
              <ArrowLeft className="size-4" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        {/* Project Content */}
        <ProjectContent
          frontmatter={project.frontmatter}
          content={project.content}
        />

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <Separator />
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Related Projects</h2>
              <ProjectList projects={relatedProjects} />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
