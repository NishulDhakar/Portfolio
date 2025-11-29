import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SoftButton() {
    return (
        <Link
            href="/projects"
            className="
        group relative inline-flex items-center gap-2 
        overflow-hidden rounded-full 
        bg-white/10 px-6 py-2.5 
        text-sm font-medium text-foreground 
        backdrop-blur-md 
        border border-white/20
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
        transition-all duration-300 ease-out
        hover:scale-105 hover:bg-white/20 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        hover:border-white/30
        dark:bg-black/10 dark:border-white/10 dark:hover:bg-white/10
      "
        >
            <span className="relative z-10 flex items-center gap-2">
                See The Things I&apos;ve Built
                <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            </span>

            {/* Shine effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </Link>
    );
}
