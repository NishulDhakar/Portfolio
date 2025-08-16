"use client";

import { useEffect, useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const res = await fetch("https://api.github.com/repos/Nishuldhakar/Portfolio");
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    }

    fetchStars();
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 hidden md:block">
      <Link
        href="https://github.com/NishulDhakar/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Star NishulDhakar/Portfolio on GitHub">
        <Button
          variant="outline"
          className="gap-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-black dark:text-white">
          <Star className="w-4 h-4 stroke-black dark:stroke-white" />
          <span>Star</span>
          <span className="px-2 py-0.5 text-xs bg-gray-200 dark:bg-[#2f2f2f] rounded-full font-medium text-black dark:text-white">
            {stars !== null ? stars : "..."}
          </span>
          <ChevronDown className="w-3 h-3 stroke-black dark:stroke-white" />
        </Button>
      </Link>
    </div>
  );
}
