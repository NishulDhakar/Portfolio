import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SoftButtonProps = {
  href: string;
  label: ReactNode; 
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

export function SoftButton({
  href,
  label,
  leftIcon,
  rightIcon,
  className,
}: SoftButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        `
        group relative inline-flex items-center gap-2
        rounded-full px-6 py-3
        text-sm font-medium
        border border-black/10 dark:border-white/25
        bg-white dark:bg-black
        text-black dark:text-white
        overflow-hidden
        transition-all duration-300 ease-out

        hover:border-black/30 dark:hover:border-white/40
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]
        `,
        className
      )}
    >
      {/* Inner soft glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/[0.04] to-transparent dark:from-white/[0.08]" />

      {/* Content */}
      {leftIcon && <span className="relative z-10">{leftIcon}</span>}
      <span className="relative z-10">{label}</span>
      {rightIcon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {rightIcon}
        </span>
      )}

      {/* Border Beam (light mode only) */}
      {/* <div className="absolute inset-0 dark:hidden">
        <BorderBeam
          size={70}
          duration={3}
          delay={0}
          borderWidth={1.6}
          colorFrom="rgba(0,0,0,0.35)"
          colorTo="rgba(0,0,0,0)"
        />
      </div> */}
    </Link>
  );
}
