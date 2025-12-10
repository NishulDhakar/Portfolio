"use client";

import React, { useState } from "react";
import { bookmarksData } from "@/data/bookmarks";
import BookmarkCard from "@/components/sections/bookmarks/BookmarkCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";

export default function BookmarksPage() {
    const containerClassName = "mt-20 py-4";
    const gridClassName = "grid md:grid-cols-2 lg:grid-cols-2 gap-6 py-8";
    const titleClassName =
        "text-4xl font-bold tracking-tight lg:text-5xl text-center";

    const [filter, setFilter] = useState("All");

    const displayedBookmarks = bookmarksData.filter(
        (bookmark) => filter === "All" || bookmark.type === filter
    );

    const types = ["All", "Tool", "Design", "Article", "Video", "Other"];

    return (
        <Container className={containerClassName}>
            <div className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4 mt-6"
            >
                <h1
                    className={`${titleClassName} font-[family-name:var(--font-instrument-serif)] text-4xl font-bold tracking-wide leading-tight`}
                >
                    Bookmarks <span className="text-2xl text-muted-foreground font-sans">({bookmarksData.length})</span>
                </h1>
                <div className="text-muted-foreground mx-auto max-w-2xl text-lg">
                    A collection of useful tools, articles, and resources I&apos;ve found.
                </div>
            </motion.div>

            <Separator className="my-8" />

            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {types.map((t) => (
                    <Button
                        key={t}
                        variant={t === filter ? "default" : "outline"}
                        onClick={() => setFilter(t)}
                        size="sm"
                        className="rounded-full"
                    >
                        {t}
                    </Button>
                ))}
            </div>

            <motion.div
                layout
                className={gridClassName}
            >
                {displayedBookmarks.map((bookmark, index) => (
                    <motion.div
                        key={bookmark.url}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <BookmarkCard bookmark={bookmark} />
                    </motion.div>
                ))}
            </motion.div>
        </Container>
    );
}
