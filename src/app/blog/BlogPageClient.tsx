'use client';

import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/common/Container';
// import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
// import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { BlogPostPreview } from '@/types/blog';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

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
    <div className="mt-8 sm:mt-10 md:mt-12 py-4">
        {/* Header */}
           <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1
                    className={`font-[family-name:var(--font-instrument-serif)] flex justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight`}
                >
                    Blogs
                </h1>
                <div className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-center mt-2 px-4">
                  Thoughts, tutorials, and insights on engineering, and programming.
                </div>
                <Separator className="my-6 sm:my-8" />
         

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
           </motion.div>
      </div>
  );
}