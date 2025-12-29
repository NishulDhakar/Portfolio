export type Bookmark = {
  title: string;
  description: string;
  url: string;
  type: "Article" | "Tool" | "Video" | "Design" | "Other";
  tags?: string[];
  date?: string;
};

export const bookmarksData: Bookmark[] = [
  // 🎨 Design Inspiration
  {
    title: "Awwwards",
    description: "Award-winning website inspiration.",
    url: "https://www.awwwards.com/",
    type: "Design",
    tags: ["Inspiration", "Web Design", "UX"],
  },
  {
    title: "Dribbble",
    description: "Design shots for UI, branding, and motion.",
    url: "https://dribbble.com/",
    type: "Design",
    tags: ["UI", "Design", "Visual"],
  },
  {
    title: "Refero",
    description: "Real product UI references from top SaaS apps.",
    url: "https://refero.design/",
    type: "Design",
    tags: ["Product UI", "SaaS"],
  },
  {
    title: "Minimal Gallery",
    description: "Minimalist website inspiration.",
    url: "https://minimal.gallery/",
    type: "Design",
    tags: ["Minimal", "Clean UI"],
  },

  // 🧩 Core UI Libraries
  {
    title: "shadcn/ui",
    description: "Accessible, composable React components.",
    url: "https://ui.shadcn.com/",
    type: "Tool",
    tags: ["React", "Tailwind", "Components"],
  },
  {
    title: "Headless UI",
    description: "Unstyled, accessible UI primitives by Tailwind Labs.",
    url: "https://headlessui.com/",
    type: "Tool",
    tags: ["Accessibility", "Headless", "React"],
  },

  // 🧱 Tailwind UI Libraries
  {
    title: "Tailwind UI",
    description: "Official premium Tailwind components.",
    url: "https://tailwindui.com",
    type: "Tool",
    tags: ["Tailwind", "Premium", "UI"],
  },
  {
    title: "Flowbite",
    description: "Tailwind component library with JS behaviors.",
    url: "https://flowbite.com",
    type: "Tool",
    tags: ["Tailwind", "Components"],
  },
  {
    title: "DaisyUI",
    description: "Themeable Tailwind components.",
    url: "https://daisyui.com",
    type: "Tool",
    tags: ["Tailwind", "Themes"],
  },
  {
    title: "Tailblocks",
    description: "Prebuilt Tailwind blocks for rapid prototyping.",
    url: "https://tailblocks.cc",
    type: "Tool",
    tags: ["Tailwind", "Blocks"],
  },
  {
    title: "Meraki UI",
    description: "Beautiful Tailwind CSS components.",
    url: "https://merakiui.com",
    type: "Tool",
    tags: ["Tailwind", "Minimal"],
  },
  {
    title: "TailGrids",
    description: "Tailwind components, sections, and templates.",
    url: "https://tailgrids.com",
    type: "Tool",
    tags: ["Tailwind", "Landing Pages"],
  },
  {
    title: "HyperUI",
    description: "Free Tailwind CSS components.",
    url: "https://hyperui.dev",
    type: "Tool",
    tags: ["Tailwind", "Components"],
  },
  {
    title: "CSS Snippets",
    description: "Beautiful Tailwind & CSS snippets.",
    url: "https://cssnippets.shefali.dev",
    type: "Tool",
    tags: ["Tailwind", "Snippets"],
  },
  {
    title: "Tailwind Toolbox",
    description: "Starter components and templates.",
    url: "https://tailwindtoolbox.com/starter-components",
    type: "Tool",
    tags: ["Tailwind", "Templates"],
  },
  {
    title: "Creative Tim",
    description: "Tailwind UI kits, dashboards, and components.",
    url: "https://creative-tim.com/twcomponents",
    type: "Tool",
    tags: ["Tailwind", "Dashboards"],
  },

  // 🚀 Next-Gen / Motion-First UI
  {
    title: "Magic UI",
    description: "Animated and interactive Tailwind components.",
    url: "https://magicui.design",
    type: "Tool",
    tags: ["Animation", "Tailwind"],
  },
  {
    title: "Aceternity UI",
    description: "High-quality animated UI components.",
    url: "https://ui.aceternity.com",
    type: "Tool",
    tags: ["Advanced UI", "Motion"],
  },
  {
    title: "Motion Primitives",
    description: "Motion-first UI primitives.",
    url: "https://motion-primitives.com",
    type: "Tool",
    tags: ["Framer Motion", "UI"],
  },
  {
    title: "Smooth UI",
    description: "Smooth animated Tailwind components.",
    url: "https://smoothui.dev",
    type: "Tool",
    tags: ["Animation", "Tailwind"],
  },

  // 🧪 Experimental / Indie UI
  {
    title: "PatternCraft",
    description: "Pattern-based UI components.",
    url: "https://patterncraft.fun",
    type: "Tool",
    tags: ["Patterns", "Tailwind"],
  },
  {
    title: "Cult UI",
    description: "Opinionated modern UI components.",
    url: "https://cult-ui.com",
    type: "Tool",
    tags: ["Modern UI"],
  },
  {
    title: "Tailark",
    description: "Landing page sections built with Tailwind.",
    url: "https://tailark.com",
    type: "Tool",
    tags: ["Landing Page", "Tailwind"],
  },
  {
    title: "Kokonut UI",
    description: "Production-ready Tailwind components.",
    url: "https://kokonutui.com",
    type: "Tool",
    tags: ["SaaS", "Tailwind"],
  },
  {
    title: "BundUI",
    description: "Modern UI blocks and components.",
    url: "https://bundui.io",
    type: "Tool",
    tags: ["Tailwind", "Blocks"],
  },
  {
    title: "PrismUI",
    description: "Clean, sharp Tailwind UI components.",
    url: "https://prismui.tech",
    type: "Tool",
    tags: ["Minimal", "Tailwind"],
  },

  // 🤖 AI / Builder Tools
  {
    title: "Builder.io",
    description: "AI-powered visual UI builder.",
    url: "https://www.builder.io/",
    type: "Tool",
    tags: ["AI", "No-Code", "UI"],
  },
  {
    title: "AI SDK",
    description: "Build AI-powered interfaces.",
    url: "https://ai-sdk.dev/",
    type: "Tool",
    tags: ["AI", "SDK", "Frontend"],
  },

  // 🌍 Community
  {
    title: "Showwcase",
    description: "Developer community to showcase projects.",
    url: "https://www.showwcase.com/",
    type: "Other",
    tags: ["Community", "Developers"],
  },
];
