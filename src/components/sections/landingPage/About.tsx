"use client";

import Name from "./Name";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";

export default function About() {
  return (
    <section className="relative mt-8 sm:mt-12 md:mt-16">
      <div className="space-y-6 sm:space-y-8">
        <Name />

        <motion.div>
<p className="font-sans">
          I build <span className="font-bold text-foreground dark:text-white">end-to-end products</span> from idea to production.
          Working across <span className="font-bold text-foreground dark:text-white">frontend</span>,{" "}
          <span className="font-bold text-foreground dark:text-white">backend</span>, and{" "}
          <span className="font-bold text-foreground dark:text-white">AI systems</span>,{" "}
          I take ownership of the <span className="font-bold text-foreground dark:text-white">entire lifecycle </span> 
          design, build, deploy, and iterate focused on{" "}
          <span className="font-bold text-foreground dark:text-white">shipping real results</span>.
        </p>

        </motion.div>
      </div>
    </section>
  );
}
