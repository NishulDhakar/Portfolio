"use client";

import { Briefcase, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HireMeButton() {
  return (
    <div className="fixed top-4 right-4 z-50 hidden md:block">
      <Link
        href="https://drive.google.com/file/d/1cgHicVE543FVpvgZwYiO4CsiDTxMPIG3/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Nishul Dhakar's Resume">
        <Button
          variant="outline"
          className="gap-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-black dark:text-white"
        >
          <Briefcase className="w-4 h-4 stroke-black dark:stroke-white" />
          <span>Hire Me</span>
          <ChevronDown className="w-3 h-3 stroke-black dark:stroke-white" />
        </Button>
      </Link>
    </div>
  );
}
