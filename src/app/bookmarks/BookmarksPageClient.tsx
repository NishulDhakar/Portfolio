"use client";

import React, { useState } from "react";
import { bookmarksData } from "@/data/bookmarks";
import BookmarkCard from "@/components/sections/bookmarks/BookmarkCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";

export default function BookmarksPageClient() {
    const containerClassName = "mt-12 py-4";
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
          <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5 }}
                       >
                <h1
                    className={`${titleClassName} font-[family-name:var(--font-instrument-serif)] text-4xl font-bold tracking-wide leading-tight`}
                >
                    Bookmarks <span className="text-2xl text-muted-foreground font-sans">({bookmarksData.length})</span>
                </h1>
                              <div className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-center mt-2">
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
                                            key={bookmark.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="group"
                                        >
                        <BookmarkCard bookmark={bookmark} />
                    </motion.div>
                ))}
            </motion.div>
        </Container>
    );
}
