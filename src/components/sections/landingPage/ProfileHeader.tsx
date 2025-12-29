"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { ThemeToggleButton } from "@/components/Theam/ThemeSwitch";

export default function ProfileHeader() {
    return (
        <div className="relative w-full">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
                <div className="flex gap-6">
                    <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</Link>
                    <Link href="/projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</Link>
                    <Link href="/blog" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Blog</Link>
                </div>
                <ThemeToggleButton variant="circle" blur />
            </nav>

            {/* Cover Image Area */}
            <div className="relative h-48 w-full bg-zinc-900 dark:bg-zinc-900 overflow-hidden rounded-b-[2rem]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[12rem] font-bold text-zinc-800/10 select-none">改善</span>
                </div>
            </div>

            {/* Profile Info Area */}
            <div className="px-6 md:px-12 -mt-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end gap-6">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800 overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/image1.png"
                            alt="Nishul Dhakar"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Name and Tags */}
                    <div className="flex-1 pb-2">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                                Nishul Dhakar
                            </h1>
                            <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500/10" />
                        </div>

                        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm mb-4">
                            Full Stack • Engineer • Developer • Builder
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="mailto:nishuldhakar@gmail.com" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <Mail size={18} />
                            </a>
                            <a href="https://github.com/NishulDhakar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com/in/nishuldhakar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://twitter.com/nishuldhakar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-400 transition-colors border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
