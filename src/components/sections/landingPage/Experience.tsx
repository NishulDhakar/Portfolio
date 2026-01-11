"use client";

import { experience } from "@/data/experience";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Container from "@/components/common/Container";

export default function ExperienceContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8 md:mb-10 font-[family-name:var(--font-instrument-serif)] text-xl sm:text-2xl font-semibold tracking-tight text-foreground"
        >
          Work History
        </motion.h2>

        <div className="space-y-2 sm:space-y-3">
          {experience.map((item, index) => (
            <motion.div key={index}>
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="group/item flex w-full items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-white/5 transition-colors rounded-xl"
              >

                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  {/* Logo */}
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-black p-1">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-50 leading-tight truncate">
                      {item.company}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1 md:gap-2">
                      <span className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 truncate">
                        {item.title}
                      </span>
                      <span className="hidden sm:block h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                      <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 dark:text-zinc-500 truncate">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-6 shrink-0 ml-2">
                  <span className="hidden md:block text-sm font-medium text-zinc-400 dark:text-zinc-500 font-mono tracking-tighter">
                    {item.startDate} — {item.endDate}
                  </span>
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
                    {expandedIndex === index ? <Minus size={14} className="sm:w-4 sm:h-4" /> : <Plus size={14} className="sm:w-4 sm:h-4" />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0, ease: "circOut" }}
                  >
                    <div className="border-t border-zinc-100 dark:border-white/5 px-4 sm:px-6 pb-6 sm:pb-8 pt-4 sm:pt-6 md:px-[88px]">
                      <ul className="space-y-3 sm:space-y-4">
                        {item.points.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                            className="flex gap-3 sm:gap-4 text-xs sm:text-sm md:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400"
                          >
                            <div className="mt-1.5 sm:mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
