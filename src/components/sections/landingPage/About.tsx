"use client";

import { socialLinks } from "@/data/socialLinks";
import Name from "./Name";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative mt-12 md:mt-20">
      <div className="max-w-3xl space-y-8">

        <Name />

        {/* About text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono leading-relaxed text-muted-foreground"
        >
          Hey, I’m <span className="text-foreground">Nishul Dhakar</span>. I build end-to-end products from idea to
          production. Working across frontend, backend, and <span className="text-foreground/90">AI systems</span>, I own
          the full lifecycle design build deploy iterate <span className="text-foreground/90">focused on shipping</span>
          real results.
          <br /><br />
          <span className="text-foreground/90">Tech stacks don’t scare me.</span> I learn whatever the project needs. I like <span className="text-foreground/90">modern tools, AI, </span>and figuring things out fast <span className="text-foreground/90"> basically a professional problem solver with a keyboard.</span>
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="space-y-3"
        >
          <p className="text-md font-mono font-bold text-foreground/90 ">
            Find me around the internet
          </p>

          <div className="flex items-center gap-5">
            {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
