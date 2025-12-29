"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggleButton } from "../Theam/ThemeSwitch";

export default function MinimalHeader() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Capabilities", href: "/what-can-i-do" },
    // { name: "Blog", href: "/blog" },
    // { name: "Bookmarks", href: "/bookmarks" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-100 dark:bg-black">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Left links */}
          <div className="flex gap-6 text-sm text-secondary">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-opacity hover:opacity-100 ${isActive
                    ? "text-primary underline underline-offset-4"
                    : "opacity-60"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right side (theme / empty for now) */}
          <div className="opacity-60 text-sm">
            <ThemeToggleButton variant="circle" start="top-right" blur />
          </div>
        </nav>
      </div>
    </header>
  );
}
