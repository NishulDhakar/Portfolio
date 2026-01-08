import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import BookmarksPageClient from "@/app/bookmarks/BookmarksPageClient";

export const metadata: Metadata = {
    title: "Bookmarks - Nishul Dhakar",
    description: "A collection of useful tools, articles, and resources I've found.",
    openGraph: {
        title: "Bookmarks - Nishul Dhakar",
        description: "A collection of useful tools, articles, and resources I've found.",
        url: `${siteConfig.url}/bookmarks`,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Bookmarks",
            },
        ],
        type: "website",
    },
};

export { viewport } from "@/lib/viewport";


export default function BookmarksPage() {
    return <BookmarksPageClient />;
}
