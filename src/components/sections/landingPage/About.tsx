"use client";

import Name from "./Name";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";

export default function About() {
  return (
    <section className="relative mt-8 sm:mt-12 md:mt-16">
      {/* Background Gradient Blob */}
      {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute top-10 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 mix-blend-screen pointer-events-none" /> */}

      <div className="space-y-6 sm:space-y-8">
        <Name />

        <motion.div>
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 text-foreground sm:space-y-6 leading-relaxed text-sm sm:text-base md:text-md font-light tracking-wide">
              <p>
                I build{" "}
                <span className="font-medium text-foreground dark:text-white relative inline-block">
                  clean, fast web systems
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></span>
                </span>{" "}
                with{" "}
                <span className="font-medium text-foreground dark:text-white relative inline-block">
                  Next.js, TypeScript, and Tailwind CSS
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></span>
                </span>
                .
              </p>

              <p>
                I'm currently exploring{" "}
                <span className="font-medium text-foreground dark:text-white">
                  Applied AI
                </span>{" "}
                including{" "}
                <span className="font-medium text-foreground dark:text-white">
                  GenAI, RAG systems, and AI agents
                </span>{" "}
                to create{" "}
                <span className="font-medium text-foreground dark:text-white">
                  intelligent, real-world products
                </span>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
