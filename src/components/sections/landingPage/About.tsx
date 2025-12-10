"use client";

import Name from "./Name";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="mt-20 mb-8">
      <div className="space-y-8">
        <Name />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-8">
            <div className="space-y-6 text-secondary leading-relaxed text-base md:text-md font-light tracking-wide">
              <p>
                I’m a{" "}
                <span className="highlight font-normal text-primary">
                  full-stack developer
                </span>{" "}
                who builds{" "}
                <span className="highlight font-normal text-primary">
                  web and mobile applications
                </span>
                . I work with{" "}
                <span className="highlight font-normal text-primary">
                  TypeScript, React, Next.js, Bun, PostgreSQL
                </span>{" "}
                and I’m actively exploring{" "}
                <span className="highlight font-normal text-primary">
                  GenAI, RAG, and AI Agents
                </span>{" "}
                to bring smarter features into my projects.
              </p>

              <p>
                I love creating{" "}
                <span className="highlight font-normal text-primary">clean</span>,{" "}
                <span className="highlight font-normal text-primary">smooth</span>, and{" "}
                <span className="highlight font-normal text-primary">interactive</span> experiences,
                solving problems until they make sense, and constantly pushing
                myself to learn and build better.
              </p>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
