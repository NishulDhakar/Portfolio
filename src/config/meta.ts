export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const siteConfig = {
  name: "Nishul Dhakar",
  title: 'Nishul Dhakar',
  description: 'Sleek Portfolio Template by @NishulDhakar',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: "Nishul Dhakar",
    twitter: '@NishulDhakar',
    github: 'NishulDhakar',
    linkedin: 'NishulDhakar',
    email: 'NishulDhakar@gmail.com',
  },
  keywords: [
    'portfolio',
    'developer',
    'full-stack',
    'react',
    'nextjs',
    'typescript',
    'web development',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/blog': {
    title: 'Blog - Thoughts & Tutorials',
    description:
      'Read my thoughts, tutorials, and insights on engineering, programming, and web development.',
    keywords: [
      'blog',
      'tutorials',
      'programming',
      'web development',
      'technical writing',
    ],
    ogImage: '/meta/blog.png',
    twitterCard: 'summary_large_image',
  },


  };
