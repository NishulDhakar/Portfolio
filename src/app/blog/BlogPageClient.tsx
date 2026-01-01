'use client';

import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/common/Container';
// import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
// import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { BlogPostPreview } from '@/types/blog';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPageClientProps {
  initialPosts: BlogPostPreview[];
  initialTags: string[];
}

const getBlogPostsByTagClient = (
  posts: BlogPostPreview[],
  tag: string,
): BlogPostPreview[] => {
  return posts.filter((post) =>
    post.frontmatter.tags.some(
      (postTag) => postTag.toLowerCase() === tag.toLowerCase(),
    ),
  );
};

export function BlogPageClient({
  initialPosts,

}: BlogPageClientProps) {
  const searchParams = useSearchParams();



  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  // Get tag from URL params on mount
  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setSelectedTag(tagParam);
      const filtered = getBlogPostsByTagClient(initialPosts, tagParam);
      setFilteredPosts(filtered);
    } else {
      setSelectedTag(null);
      setFilteredPosts(initialPosts);
    }
  }, [searchParams, initialPosts]);

  return (
    <Container className="py-8 sm:py-12 md:py-16 mt-8 sm:mt-10 md:mt-14">
      <div className="space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 text-center">
          <h1
            className={`font-[family-name:var(--font-instrument-serif)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide leading-tight`}
          >
            Blogs
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground px-4">
            Thoughts, tutorials, and insights on engineering, and programming.
          </p>
        </div>

        <Separator />

        {/* Blog Posts */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {selectedTag ? `Posts tagged "${selectedTag}"` : 'Latest Posts'}
              {filteredPosts.length > 0 && (
                <span className="ml-2 text-xs sm:text-sm font-normal text-muted-foreground">
                  ({filteredPosts.length}{' '}
                  {filteredPosts.length === 1 ? 'post' : 'posts'})
                </span>
              )}
            </h2>
          </div>

          <BlogList posts={filteredPosts} />
        </div>
      </div>
    </Container>
  );
}