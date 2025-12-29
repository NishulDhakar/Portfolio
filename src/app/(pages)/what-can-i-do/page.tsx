"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Layout,
    Smartphone,
    Sparkles,
    Database,
    Server,
    Palette,
    ArrowRight,
    ChevronRight,
    Code2,
    Cpu,
    Globe,
    Layers,
    Zap,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { ShineBorder } from "@/components/ui/magicui/shine-border";
import { Particles } from "@/components/ui/magicui/particles";
import { HyperText } from "@/components/ui/hyper-text";
import { AuroraText } from "@/components/ui/magicui/aurora-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const capabilities = [
    {
        title: "Full-Stack Web Development",
        description: "I build responsive, high-performance web applications using modern frameworks like Next.js and React. From landing pages to complex SaaS platforms, I ensure seamless user experiences.",
        icon: Globe,
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        color: "#3b82f6", // blue-500
    },
    {
        title: "Mobile App Development",
        description: "Creating beautiful, native-feeling cross-platform mobile applications using Flutter and Dart. I focus on smooth animations and robust functionality.",
        icon: Smartphone,
        tags: ["Flutter", "Dart", "Firebase"],
        color: "#a855f7", // purple-500
    },
    {
        title: "AI & GenAI Integration",
        description: "Bringing the power of Large Language Models to your applications. I integrate Gemini, OpenAI, and other AI services to create smart, automated features.",
        icon: Sparkles,
        tags: ["GenAI", "OpenAI", "Gemini API", "Inngest"],
        color: "#eab308", // yellow-500
    },
    {
        title: "FinTech & Trading Systems",
        description:
            "Building finance-focused systems such as paper trading platforms, market data pipelines, and analytics dashboards. I focus on clean data flow, explainable logic, and scalable architecture for financial applications.",
        icon: Layers,
        tags: [
            "FinTech",
            "Paper Trading",
            "Market Data",
            "Trading Logic",
            "Financial APIs"
        ],
        color: "#0ea5e9", // sky-500
    },

    {
        title: "Backend & API Systems",
        description: "Designing scalable backend architectures and RESTful APIs. I work with Node.js, Express, Laravel, and FastAPI to power data-driven applications.",
        icon: Cpu,
        tags: ["Node.js", "Express", "Laravel", "FastAPI"],
        color: "#22c55e", // green-500
    },
    {
        title: "Database Solutions",
        description: "Expertise in managing and optimizing both SQL and NoSQL databases, ensuring data integrity and fast access speeds.",
        icon: Database,
        tags: ["MongoDB", "PostgreSQL", "MySQL"],
        color: "#ef4444", // red-500
    },
    {
        title: "UI/UX Craftsmanship",
        description: "Turning designs into interactive reality with Framer Motion and modern CSS. I care about the small details that make a big difference.",
        icon: Palette,
        tags: ["Framer Motion", "Tailwind CSS", "Modern UI"],
        color: "#6366f1", // indigo-500
    }
];

import Container from "@/components/common/Container";

export default function CapabilitiesPage() {
    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden font-[family-name:var(--font-geist-sans)]">
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                staticity={50}
                color="#ffffff"
            />

            <Container className="relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-500 border-blue-500/20">
                            Capabilities
                        </Badge> */}


                        {/* Top Navigation Actions */}
                        {/* <div className="relative z-10 hidden md:flex flex-wrap justify-between items-center gap-4">
  <Link href="/">
    <Button
      variant="ghost"
      className="group flex items-center gap-2 rounded-full"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      Back to Home
    </Button>
  </Link>

  <Link href="/projects">
    <Button
      variant="outline"
      className="group flex items-center gap-2 rounded-full"
    >
      See What I’ve Built
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  </Link>
</div> */}
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-[family-name:var(--font-instrument-serif)]">
                            What I Can Do
                        </h1>

                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            I combine technical expertise with creative problem-solving to build
                            exceptional digital experiences. Here&apos;s a look at my core strengths.
                        </p>
                    </motion.div>
                </div>
                <Separator className="my-4 mb-20" />
                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative flex h-full min-h-[340px] w-full flex-col overflow-hidden rounded-3xl border bg-card p-8 md:shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                {/* <ShineBorder
                                    shineColor={[cap.color, "#ffffff"]}
                                    className="rounded-3xl"
                                /> */}

                                <div className="relative z-10 flex flex-col h-full space-y-5">


                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-instrument-serif)]">
                                        <HyperText duration={500} animateOnHover={false}>{cap.title}</HyperText>
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                                        {cap.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                        {cap.tags.map(tag => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="text-[10px] uppercase tracking-wider font-bold"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-24 text-center p-12 rounded-3xl border bg-card/50 backdrop-blur-sm relative overflow-hidden group"
                >


                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-instrument-serif)]">
                        Have a project in mind?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                        Let&apos;s build something amazing together. I&apos;m currently available for freelance work and full-time opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/#reachout">
                            <Button size="lg" className="rounded-full px-12 py-4 h-auto text-lg group gap-4">
                                Get in Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" size="lg" className="rounded-full px-12 py-4 h-auto text-lg group gap-2">
                                View My Work
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </div >
    );
}
