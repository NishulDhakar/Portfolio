"use client";

import Link from "next/link";
import {
  FileText,
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  BarChart3,
  Bookmark,
  Rocket,
  MapPin,
  Cpu,
} from "lucide-react";
import { useState } from "react";

interface PageItem {
  title: string;
  path: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const pages: PageItem[] = [
  { title: "Home", path: "/", description: "Portfolio overview", icon: <Home />, category: "Main" },
  { title: "About", path: "/about", description: "Who I am & what I do", icon: <User />, category: "Main" },
  { title: "What Can I Do", path: "/what-can-i-do", description: "Skills & capabilities", icon: <Rocket />, category: "Main" },
  { title: "Projects", path: "/projects", description: "Selected proof of work", icon: <Briefcase />, category: "Portfolio" },
  { title: "Experience", path: "/experience", description: "Work & learning journey", icon: <MapPin />, category: "Portfolio" },
  { title: "Journey", path: "/journey", description: "Timeline of growth", icon: <MapPin />, category: "Portfolio" },
  { title: "Blog", path: "/blog", description: "Articles & notes", icon: <BookOpen />, category: "Content" },
  { title: "Bookmarks", path: "/bookmarks", description: "Curated resources", icon: <Bookmark />, category: "Content" },
  { title: "Contact", path: "/contact", description: "Get in touch", icon: <Mail />, category: "Main" },
  { title: "Analytics", path: "/analytics", description: "Visitor insights", icon: <BarChart3 />, category: "Tools" },
  { title: "PlacementReady", path: "/placementready", description: "Placement prep platform", icon: <Cpu />, category: "Projects" },
  { title: "PlanYourMeal", path: "/planyourmeal", description: "Meal planning app", icon: <Cpu />, category: "Projects" },
];

export default function AllPagesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(pages.map(p => p.category))];
  const filteredPages =
    selectedCategory === "All"
      ? pages
      : pages.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">All Pages</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Complete directory of this portfolio
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <FileText className="h-4 w-4" />
            {pages.length} pages
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm transition
                ${selectedCategory === cat
                  ? "bg-foreground text-background"
                  : "border text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPages.map(page => (
            <Link
              key={page.path}
              href={page.path}
              className="group rounded-xl border bg-background p-5 transition hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg border p-2 text-muted-foreground group-hover:text-foreground">
                  {page.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-medium">{page.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {page.description}
                  </p>
                  <code className="mt-3 inline-block text-xs text-muted-foreground">
                    {page.path}
                  </code>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center text-xs text-muted-foreground">
          All pages are live and accessible
        </div>
      </div>
    </div>
  );
}
