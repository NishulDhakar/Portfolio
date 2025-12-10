"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Bookmark } from "@/data/bookmarks";

interface BookmarkCardProps {
    bookmark: Bookmark;
}

export default function BookmarkCard({ bookmark }: BookmarkCardProps) {
    return (
        <Link href={bookmark.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-black/20 dark:hover:border-white/20 hover:-translate-y-1">
                <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {bookmark.title}
                        </CardTitle>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                    <CardDescription className="line-clamp-2 mt-2">
                        {bookmark.description}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0 mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {bookmark.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
