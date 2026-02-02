"use client";

import { techSkills, type Category } from "@/data/Skills";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Target, Brain, Code2, Globe, Cloud, Database, FileCode } from "lucide-react";
import { SiApachespark } from "react-icons/si";

// Category metadata with icons
const categoryMetadata: Record<Category | "all", { icon: React.ElementType; label: string; emoji: string }> = {
  all: { icon: Target, label: "All Skills", emoji: "🎯" },
  language: { icon: FileCode, label: "Languages", emoji: "💻" },
  Web: { icon: Globe, label: "Web", emoji: "🌐" },
  database: { icon: Database, label: "Databases", emoji: "🗄️" },
  // mobile: { icon: Globe, label: "Mobile", emoji: "📱" },
  tools: { icon: SiApachespark, label: "Tools", emoji: "🧰" },
  Cloud: { icon: Cloud, label: "Cloud", emoji: "☁️" },
  "AI/ML": { icon: Brain, label: "AI/ML", emoji: "🤖" },
  data: { icon: Code2, label: "Data", emoji: "📊" },
};

import Container from "@/components/common/Container";

export default function TechSkills() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("language");

  // Get all skills or filter by category
  const activeSkills = activeCategory === "all"
    ? techSkills
    : techSkills.filter((s) => s.category === activeCategory);

  // Count skills per category
  const getCategoryCount = (category: Category | "all") => {
    if (category === "all") return techSkills.length;
    return techSkills.filter((s) => s.category === category).length;
  };

  const categories: (Category | "all")[] = ["all", "language", "Web", "database", "AI/ML", "data"];

  return (
    <section className="mt-2">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8 md:mb-10 font-[family-name:var(--font-instrument-serif)] text-xl sm:text-2xl font-semibold text-foreground"
        >
          Skills
        </motion.h2>

        {/* Category Filter Pills */}
        <div className="mb-6 sm:mb-8 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex flex-nowrap md:flex-wrap gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => {
              const isActive = activeCategory === category;
              const count = getCategoryCount(category);
              const CategoryIcon = categoryMetadata[category].icon;
              const label = categoryMetadata[category].label;

              return (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "group relative inline-flex items-center gap-1.5 sm:gap-2 overflow-hidden rounded-full border px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 shrink-0",
                    isActive
                      ? "border-foreground/30 bg-secondary/60 text-foreground"
                      : "border-border/50 bg-background text-muted-foreground hover:border-foreground/20 hover:bg-secondary/50 hover:text-foreground"
                  )}
                >
                  <CategoryIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-colors group-hover:text-foreground" />

                  <span className="whitespace-nowrap">{label}</span>

                  <span
                    className={cn(
                      "ml-0.5 sm:ml-1 rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold transition-colors",
                      isActive
                        ? "bg-foreground/10 text-foreground"
                        : "bg-muted text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {count}
                  </span>
                </motion.button>

              );
            })}
          </div>
        </div>

        {/* Skills Display */}
        <div className="min-h-[60px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group"
                  >
                    <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-foreground/20 hover:bg-secondary/50 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-default shadow-sm group-hover:shadow-md">
                      <skill.icon className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors", skill.color)} />
                      <span className="text-xs sm:text-sm font-mono text-foreground/90">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
