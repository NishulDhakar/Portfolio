"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/ui/magicui/typing-animation";
import Container from "@/components/common/Container";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JourneyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto"
          >
            <span className="text-4xl text-blue-500">🚀</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-instrument-serif)]">
            My Journey
          </h1>

          <div className="text-xl font-mono text-muted-foreground bg-secondary/30 p-8 rounded-3xl border border-dashed">
            <TypingAnimation duration={100} className="text-lg">
              {"// Documenting my path from curiosity to building real-world software... Under construction."}
            </TypingAnimation>
          </div>

          <div className="pt-8">
            <Link href="/">
              <Button variant="outline" className="rounded-full gap-2 px-8">
                <ArrowLeft className="w-4 h-4" />
                Return to Port
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
