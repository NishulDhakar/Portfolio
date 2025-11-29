"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export default function ExperienceContent() {
  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-6 mt-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-[family-name:var(--font-instrument-serif)] text-2xl font-bold tracking-tight text-foreground"
        >
          Experience
        </motion.h2>

        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border md:left-0" />

          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot on the line */}
              <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-medium text-foreground">
                  {item.company}
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  {item.startDate} — {item.endDate}
                </span>
              </div>

              <div className="mt-1 text-base font-medium text-primary/80">
                {item.title}
              </div>

              <div className="mt-4 text-base text-muted-foreground leading-relaxed">
                <p className="whitespace-pre-line">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}