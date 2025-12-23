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
  mobile: { icon: Globe, label: "Mobile", emoji: "📱" },
  tools: { icon: SiApachespark, label: "Tools", emoji: "🧰" },
  Cloud: { icon: Cloud, label: "Cloud", emoji: "☁️" },
};

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

  const categories: (Category | "all")[] = ["all", "language", "Web", "database", "mobile", "tools", "Cloud"];

  return (
    <section className="mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 font-[family-name:var(--font-instrument-serif)] text-2xl font-semibold tracking-tight text-foreground"
      >
        Skills
      </motion.h2>

      {/* Category Filter Pills */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
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
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
    isActive
      ? "border-foreground/30 bg-secondary/60 text-foreground"
      : "border-border/50 bg-background text-muted-foreground hover:border-foreground/20 hover:bg-secondary/50 hover:text-foreground"
  )}
>
  <CategoryIcon className="h-4 w-4 transition-colors group-hover:text-foreground" />

  <span>{label}</span>

  <span
    className={cn(
      "ml-1 rounded-full px-2 py-0.5 text-xs font-semibold transition-colors",
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
      <div className="min-h-[180px]">
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
            <div className="flex flex-wrap gap-3">
              {activeSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group"
                >
                  <div className="px-4 py-2 rounded-lg bg-background border border-border hover:border-foreground/20 transition-all duration-200 flex items-center gap-2 cursor-default shadow-sm">
                    <skill.icon className={cn("w-4 h-4 transition-colors", skill.color)} />
                    <span className="text-sm font-mono text-foreground/90">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Count Text */}
            {/* <p className="text-center text-sm text-muted-foreground">
              Showing {activeSkills.length} skill{activeSkills.length !== 1 ? "s" : ""} in{" "}
              <span className="font-semibold text-foreground">
                {categoryMetadata[activeCategory].label}
              </span>
            </p> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
