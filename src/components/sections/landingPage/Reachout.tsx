"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail } from "lucide-react";
import { useTheme } from "next-themes";

import Container from "@/components/common/Container";

const Reachout = () => {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const email = "nishuldhakar123@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="reachout" className="mt-24 mb-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 sm:mb-10 md:mb-4 font-[family-name:var(--font-instrument-serif)] text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Reach Out
          </h2>

          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            {/* Text & Email */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-sm font-mono  sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Most of the time, you&apos;ll catch me coding or playing chess online.
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href={`mailto:${email}`}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border/50 bg-background px-5 sm:px-6 py-2 sm:py-2.5 transition-all hover:border-foreground/20 hover:bg-secondary/50"
                >
                  <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Send email
                  </span>
                </a>

                <button
                  onClick={handleCopy}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border/50 bg-background px-5 sm:px-6 py-2 sm:py-2.5 transition-all hover:border-foreground/20 hover:bg-secondary/50"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  )}
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    {copied ? "Copied!" : "Copy email"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reachout;
