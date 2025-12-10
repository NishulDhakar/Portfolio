// import { Book, Code, Designpen, Link as LinkIcon, Podcast, Video } from "lucide-react";

export type Bookmark = {
    title: string;
    description: string;
    url: string;
    type: "Article" | "Tool" | "Video" | "Design" | "Other";
    tags?: string[];
    date?: string;
};

export const bookmarksData: Bookmark[] = [
    {
        title: "Next.js Documentation",
        description: "The React Framework for the Web.",
        url: "https://nextjs.org/docs",
        type: "Tool",
        tags: ["Next.js", "React", "Docs"],
        date: "2024-01-01",
    },
    {
        title: "Tailwind CSS",
        description: "Rapidly build modern websites without ever leaving your HTML.",
        url: "https://tailwindcss.com/",
        type: "Design",
        tags: ["CSS", "Styling"],
        date: "2024-01-02",
    },
    {
        title: "Vercel",
        description: "Develop. Preview. Ship.",
        url: "https://vercel.com/",
        type: "Tool",
        tags: ["Deployment", "Hosting"],
        date: "2024-01-03",
    },
];
