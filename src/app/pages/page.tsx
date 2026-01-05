import { createMetadata } from "@/lib/createMetadata";
import AllPagesDirectory from "./AllPagesDirectory";

export const metadata = createMetadata({
    title: "All Pages | Site Directory",
    description: "Complete directory of all pages in this portfolio. Browse through projects, blog posts, and more.",
});

export default function PagesPage() {
    return <AllPagesDirectory />;
}
