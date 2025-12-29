"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube, Settings, BadgeDollarSign, Plus } from "lucide-react";
import Link from "next/link";

interface HelpCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    className?: string;
    delay?: number;
}

const HelpCard = ({ title, description, icon, link, className, delay = 0 }: HelpCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`group relative flex flex-col p-8 rounded-3xl bg-[#FDFBF7] dark:bg-neutral-950/50 border border-neutral-200/50 dark:border-neutral-800/50 hover:shadow-2xl hover:shadow-neutral-200/40 dark:hover:shadow-black/40 transition-all duration-300 ${className}`}
        >
            <div className="mb-6 p-4 w-fit rounded-2xl bg-white dark:bg-neutral-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 font-light text-lg">
                {description}
            </p>
            <Link
                href={link}
                className="mt-auto flex items-center gap-2 text-base font-medium text-neutral-900 dark:text-neutral-100 hover:gap-3 transition-all underline-offset-4 hover:underline"
            >
                Get started <ArrowRight size={18} />
            </Link>
        </motion.div>
    );
};

export default function HowCanIHelp() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Column 1 */}
                    <div className="space-y-8 md:space-y-12">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="pb-8 md:pb-12"
                        >
                            <h2 className="text-6xl md:text-8xl font-serif leading-[1.05] text-neutral-900 dark:text-neutral-100">
                                How Can <br />
                                I <span className="relative inline-block">
                                    Help
                                    <motion.svg
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                                        className="absolute -inset-x-4 -inset-y-2 w-[calc(100%+32px)] h-[calc(100%+16px)] text-cyan-400 dark:text-cyan-500 opacity-60 pointer-events-none"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                    >
                                        <motion.path
                                            d="M5,50 C5,10 95,10 95,50 C95,90 5,90 5,50"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </motion.svg>
                                </span> You?
                            </h2>
                        </motion.div>

                        {/* Grow a YouTube Channel */}
                        <HelpCard
                            title="Grow a YouTube Channel"
                            description="Learn how to start and grow a life-changing YouTube channel based on my years of experience."
                            icon={<Youtube className="w-8 h-8 text-red-500" strokeWidth={1.5} />}
                            link="/youtube"
                            delay={0.2}
                        />
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-8 md:space-y-12 md:mt-24">
                        {/* Be More Productive */}
                        <HelpCard
                            title="Be More Productive"
                            description="Learn how to manage your time and achieve your goals, while enjoying the journey along the way."
                            icon={<Settings className="w-8 h-8 text-yellow-500" strokeWidth={1.5} />}
                            link="/productivity"
                            delay={0.3}
                        />

                        {/* Build an Online Business */}
                        <HelpCard
                            title="Build an Online Business"
                            description="Learn how to start and grow your online business for fun, fulfilment and financial freedom."
                            icon={<BadgeDollarSign className="w-8 h-8 text-blue-500" strokeWidth={1.5} />}
                            link="/business"
                            delay={0.5}
                        />

                        {/* And More Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="p-12 md:p-16 rounded-3xl bg-neutral-100/50 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-800 flex flex-col justify-center items-center text-center space-y-6 group hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all duration-300"
                        >
                            <h3 className="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-neutral-100 group-hover:scale-105 transition-transform duration-300">
                                ... and more!
                            </h3>
                            <Link
                                href="/explore"
                                className="flex items-center gap-2 text-lg font-medium hover:gap-3 transition-all underline underline-offset-8 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-primary"
                            >
                                Explore all content <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
