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
    <div className="min-h-screen pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto"
          >
            <span className="text-3xl sm:text-4xl text-blue-500">🚀</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-instrument-serif)]">
            My Journey
          </h1>

          <div className="text-base sm:text-lg md:text-xl font-mono text-muted-foreground bg-secondary/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-dashed">
            <TypingAnimation duration={100} className="text-sm sm:text-base md:text-lg">
              {"// Documenting my path from curiosity to building real-world software... Under construction."}
            </TypingAnimation>
          </div>

          <div className="pt-4 sm:pt-6 md:pt-8">
            <Link href="/">
              <Button variant="outline" className="rounded-full gap-2 px-6 sm:px-8 text-sm sm:text-base">
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
