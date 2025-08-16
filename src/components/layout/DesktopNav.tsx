"use client";


import { Link } from "next-view-transitions";
import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { navbarConfig } from "@/data/Navbar";

export default function DesktopNav() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="hidden sm:flex items-center space-x-5">
      <LayoutGroup>
        {navbarConfig.navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            className="relative px-2 py-1 text-md font-medium text-neutral-900 dark:text-neutral-100 transition-colors">
            {hover === idx && (
              <motion.span
                layoutId="hover-span"
                className="absolute inset-0 rounded-md bg-neutral-200 dark:bg-neutral-700"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        ))}
      </LayoutGroup>
    </div>
  );
}
