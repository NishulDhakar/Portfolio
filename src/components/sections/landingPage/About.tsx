"use client";

import Name from "./Name";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";

export default function About() {
  return (
    <section className="mt-16">
      <div className="space-y-8">
        <Name />

        <motion.div>
          <div className="space-y-8">
            <div className="space-y-6 text-secondary leading-relaxed text-base md:text-md font-light tracking-wide">
              <p>
                I build{" "}
                {/* <span className="highlight font-normal text-primary">
                  full-stack developer
                </span>{" "} */}
                <span className="highlight font-normal text-primary">
                  clean, fast web systems
                </span>{" "}
                with{" "}
                <span className="highlight font-normal text-primary">
                  TypeScript, React, and Next.js
                </span>
                .
              </p>

              <p>
                I’m currently exploring{" "}
                <span className="highlight font-normal text-primary">
                  Applied AI
                </span>{" "}
                including{" "}
                <span className="highlight font-normal text-primary">
                  GenAI, RAG systems, and AI agents
                </span>{" "}
                to turn ideas into{" "}
                <span className="highlight font-normal text-primary">
                  intelligent, real-world products
                </span>
                .
              </p>

              <p>
                I’m obsessed with{" "}
                <span className="highlight font-normal text-primary">
                  clarity
                </span>
                ,{" "}
                <span className="highlight font-normal text-primary">
                  correctness
                </span>
                , and{" "}
                <span className="highlight font-normal text-primary">
                  shipping things that actually work
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
