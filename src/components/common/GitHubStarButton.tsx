"use client";

import { useEffect, useState } from "react";
import { Github, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface GitHubStarButtonProps {
    className?: string;
}

export default function GitHubStarButton({ className }: GitHubStarButtonProps) {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/NishulDhakar/Portfolio")
            .then((res) => res.json())
            .then((data) => setStars(data.stargazers_count))
            .catch((err) => console.error("Error fetching GitHub stars:", err));
    }, []);

    return (
        <a
            href="https://github.com/NishulDhakar/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-medium text-black backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-lg dark:border-white/10 dark:bg-black/20 dark:text-white dark:hover:bg-black/40",
                className
            )}
        >
            <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Github </span>
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            {
                stars !== null && (
                    <span className="ml-1 flex items-center gap-1 rounded-full bg-black/5 px-2 py-0.5 text-xs font-semibold backdrop-blur-sm dark:bg-white/10">
                        {stars}
                    </span>
                )
            }
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </a >
    );
}
