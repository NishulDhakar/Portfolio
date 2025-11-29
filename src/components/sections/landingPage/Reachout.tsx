"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";


const Reachout = () => {
  const [copied, setCopied] = useState(false);
  const email = "nishuldhakar123@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-6 mt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 font-[family-name:var(--font-instrument-serif)] text-2xl font-bold tracking-tight text-foreground">
            Reach Out
          </h2>

          <div className="flex flex-col gap-12">
            {/* Text & Email */}
            <div className="space-y-8">
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                Most of the time, you&apos;ll catch me coding or playing chess online.
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${email}`}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/50 bg-background px-6 py-2.5 transition-all hover:border-foreground/20 hover:bg-secondary/50"
                >
                  <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Send email
                  </span>
                </a>

                <button
                  onClick={handleCopy}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/50 bg-background px-6 py-2.5 transition-all hover:border-foreground/20 hover:bg-secondary/50"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  )}
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    {copied ? "Copied!" : "Copy email"}
                  </span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-xs font-medium text-muted-foreground/50 uppercase tracking-widest">
                Socials
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(socialLinks).map(([name, link]) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl border border-border/40 bg-card/30 hover:bg-secondary/50 hover:border-foreground/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                          {name}
                        </span>
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reachout;
