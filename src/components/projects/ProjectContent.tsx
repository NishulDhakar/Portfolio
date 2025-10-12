import { Separator } from '@/components/ui/separator';
import { ProjectFrontmatter } from '@/types/project';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Calender from '../svgs/Calender';
import { BlogComponents } from '../blog/BlogComponents';

interface ProjectContentProps {
  frontmatter: ProjectFrontmatter;
  content: string;
}

export function ProjectContent({ frontmatter, content }: ProjectContentProps) {
  const { title, description, image, tags = [] } = frontmatter;

  // const formattedDate = new Date(date).toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // });

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            {title}
          </h1>

          <p className="text-xl text-muted-foreground">{description}</p>
{/* 
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calender className="size-6" />
            <time dateTime={date}>{formattedDate}</time>
          </div> */}
        </div>

        <Separator />
      </header>

      {/* Content */}
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <MDXRemote source={content} components={BlogComponents} />
      </div>
    </article>
  );
}
