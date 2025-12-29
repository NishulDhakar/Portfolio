"use client";

import React from 'react';
import { about } from '@/data/About';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import { MapPin, Code2, Briefcase, Brain, BookOpen } from 'lucide-react';

const Info = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="w-full max-w-3xl space-y-12">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight lg:text-5xl font-[family-name:var(--font-instrument-serif)]"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {about.description}
            </motion.p>
          </div>

          <Separator />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground"
          >
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <MapPin className="w-5 h-5 mt-1 text-red-500/70" />
              <div>
                <strong className="text-foreground block mb-1">Lives in</strong>
                <span className="text-sm">Bhopal, India</span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <Code2 className="w-5 h-5 mt-1 text-blue-500/70" />
              <div>
                <strong className="text-foreground block mb-1">Main Stack</strong>
                <span className="text-sm">Next.js, TypeScript, Tailwind, Node.js, MongoDB</span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <Briefcase className="w-5 h-5 mt-1 text-green-500/70" />
              <div>
                <strong className="text-foreground block mb-1">Status</strong>
                <span className="text-sm">Open to new opportunities and interesting projects</span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <Brain className="w-5 h-5 mt-1 text-purple-500/70" />
              <div>
                <strong className="text-foreground block mb-1">Interests</strong>
                <span className="text-sm">AI Research, Web Performance, and Strategizing Chess</span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50 md:col-span-2">
              <BookOpen className="w-5 h-5 mt-1 text-orange-500/70" />
              <div>
                <strong className="text-foreground block mb-1">Currently Reading</strong>
                <span className="text-sm">Psychology of Money & Atomic Habits (re-reading)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Info;
