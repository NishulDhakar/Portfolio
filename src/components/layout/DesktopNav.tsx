"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navbarConfig } from "@/data/Navbar";
import { ThemeToggleButton } from "../Theam/ThemeSwitch";


export default function DesktopNav() {
  const [hover, setHover] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex sticky top-0 z-50 items-center rounded-lg text-sm border border-neutral-200 dark:border-neutral-700 bg-background">
      <LayoutGroup>
        {navbarConfig.navItems.map((item, idx) => {
          const active =
            pathname === item.href ||
            (pathname.includes(item.href) && item.href !== "/");

          return (
            <Link
              key={idx}
              href={item.href}
              onMouseEnter={() => setHover(idx)}
              onMouseLeave={() => setHover(null)}
              className={cn(
                "relative px-4 py-2 text-md font-medium transition-colors cursor-pointer min-w-32 text-center",
                idx === 0 && "rounded-l-lg",
                idx === navbarConfig.navItems.length - 1 && "rounded-r-lg",
                active
                  ? "bg-secondary text-foreground"
                  : "text-neutral-900 dark:text-neutral-100"
              )}
              
            >
              {hover === idx && !active && (
                <motion.span
                  layoutId="hover-span"
                  className="absolute inset-0 rounded-md bg-neutral-200 dark:bg-neutral-700"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </LayoutGroup>
      <div className="pr-6">
<ThemeToggleButton variant="circle" start="top-right" blur />

      </div>
    </div>
  );
}
