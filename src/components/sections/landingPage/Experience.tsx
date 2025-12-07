"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceContent() {
  return (
    <section className="mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 font-[family-name:var(--font-instrument-serif)] text-2xl font-semibold tracking-tight text-foreground"
      >
        Experience
      </motion.h2>

      <div className="relative space-y-10">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="relative pl-10"
          >
            {/* ✅ Company Logo as Minimal Dot */}
            <div className="absolute left-0 top-1.5">
              <Image
                src="/averoft.jpeg"
                alt={`${item.company} logo`}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex pl-3 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-medium text-foreground">
                {item.company}
              </h3>
              <span className="text-xs text-muted-foreground font-mono">
                {item.startDate} — {item.endDate}
              </span>
            </div>

            <div className="mt-1 pl-3 text-sm font-medium text-foreground/80">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
