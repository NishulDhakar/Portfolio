"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

export default function DetailedBio() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#FDFBF7] dark:bg-neutral-950 rounded-[3rem] my-12 mx-4 md:mx-0">
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-neutral-200/40 dark:bg-neutral-800/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -right-24 w-64 h-64 bg-neutral-200/30 dark:bg-neutral-800/10 rounded-full blur-3xl text-neutral-400 opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 dark:text-neutral-100 leading-tight">
                                Hey, I’m <br />
                                <span className="relative inline-block">
                                    Nishul Dhakar
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="absolute -bottom-2 left-0 h-1.5 bg-cyan-400 dark:bg-cyan-500 rounded-full opacity-60"
                                    />
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-light">
                            <p>
                                Since 2019, I've been documenting my journey as a full-stack developer and AI researcher,
                                sharing the tools, strategies, and systems that help me build high-performance web applications
                                and intelligent agents.
                            </p>
                            <p>
                                I'm passionate about the intersection of software engineering and Artificial Intelligence.
                                My focus is on creating developer tools and applications that leverage LLMs, RAG systems,
                                and autonomous agents to solve real-world problems.
                            </p>
                            <p>
                                What started as a curiosity in coding has grown into a mission to build transparent,
                                correct, and efficient systems. I believe in shipping things that actually work and
                                sharing the process along the way to help others in the tech community.
                            </p>
                            <p>
                                If you've followed my work or used any of my open-source projects—thank you.
                                It means a lot. I'm excited to continue building and sharing useful stuff online, for free, forever. 😊
                            </p>
                        </div>

                        {/* <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-lg font-medium text-neutral-900 dark:text-neutral-100 group border-b border-neutral-300 dark:border-neutral-700 pb-1 hover:border-primary transition-all"
                        >
                            Read my full story <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link> */}
                    </motion.div>

                    {/* Right Visual Collage */}
                    <div className="relative h-[500px] md:h-[600px] w-full">
                        {/* SVG Connecting Lines */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-0"
                            viewBox="0 0 400 500"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                d="M100 150 Q150 100 200 150 T300 150"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeDasharray="4 4"
                                className="text-neutral-300 dark:text-neutral-700"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                            />
                            <motion.path
                                d="M320 250 Q350 350 250 400"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeDasharray="4 4"
                                className="text-neutral-300 dark:text-neutral-700"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                            <motion.path
                                d="M80 350 Q20 300 50 200"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeDasharray="4 4"
                                className="text-neutral-300 dark:text-neutral-700"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 1 }}
                            />
                        </svg>

                        {/* Images */}
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="absolute top-10 right-10 w-[240px] md:w-[320px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-neutral-900 z-20 hover:scale-105 transition-transform duration-500"
                        >
                            <Image
                                src="/nishul1.jpg"
                                alt="Nishul Dhakar profile"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Secondary Image 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: -50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="absolute bottom-10 left-10 w-[160px] md:w-[220px] aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white dark:border-neutral-900 z-30 hover:scale-110 transition-transform duration-500"
                        >
                            <Image
                                src="/nishul2.jpg"
                                alt="Nishul Dhakar speaking"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Secondary Image 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: -50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="absolute top-1/2 -left-4 w-[120px] md:w-[150px] aspect-square rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-neutral-900 z-40 hover:scale-110 transition-transform duration-500"
                        >
                            <Image
                                src="/nishul3.jpg"
                                alt="Nishul Dhakar learning"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Decorative Icon */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-20 right-4 p-4 rounded-2xl bg-cyan-400 dark:bg-cyan-600 text-white shadow-lg z-50 pointer-events-none"
                        >
                            <Play fill="currentColor" size={24} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
