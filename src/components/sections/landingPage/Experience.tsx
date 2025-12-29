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
          className="mb-10 font-[family-name:var(--font-instrument-serif)] text-2xl font-semibold tracking-tight text-foreground"
        >
          Work History
        </motion.h2>

        <div className="space-y-3">
          {experience.map((item, index) => (
            <motion.div key={index}>
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 md:p-6 text-left"
              >

                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-black p-1">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-none">
                      {item.company}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        {item.title}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700 md:hidden" />
                      <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 md:hidden">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="hidden md:block text-sm font-medium text-zinc-400 dark:text-zinc-500 font-mono tracking-tighter">
                    {item.startDate} — {item.endDate}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
                    {expandedIndex === index ? <Minus size={16} /> : <Plus size={16} />}
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
                    <div className="border-t border-zinc-100 dark:border-white/5 px-6 pb-8 pt-6 md:px-[88px]">
                      <ul className="space-y-4">
                        {item.points.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                            className="flex gap-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400"
                          >
                            <div className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
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
