"use client";

import { techSkills } from "@/data/Skills";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TechSkills() {
  const categories = Array.from(new Set(techSkills.map((s) => s.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeSkills = techSkills.filter((s) => s.category === activeCategory);

  return (
    <section className="mt-24 mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 font-[family-name:var(--font-instrument-serif)] text-2xl font-semibold tracking-tight text-foreground"
      >
        Tech I Use
      </motion.h2>

      <div className="flex flex-col md:flex-row rounded-2xl border border-border/60 overflow-hidden ">
        
        {/* ✅ Category Rail — Ultra Minimal */}
        <div className="flex md:flex-col md:w-44 border-b md:border-b-0 md:border-r border-border/60 bg-muted/10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-5 py-3 text-sm text-left transition-all capitalize",
                activeCategory === category
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/80"
              )}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 top-0 h-full w-[2px] bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Skills Grid — Editorial Calm */}
        <div className="flex-1 px-8 py-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-8 gap-x-6"
            >
              {activeSkills.map((skill) => (
                <Tooltip key={skill.name} delayDuration={50}>
                  <TooltipTrigger asChild>
                    <div className="group flex flex-col items-center gap-2 cursor-default">
                      <skill.icon
                        className={cn(
                          "w-7 h-7 transition-transform duration-200 group-hover:scale-105",
                          skill.color
                        )}
                      />
                      <span className="text-[11px] tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
