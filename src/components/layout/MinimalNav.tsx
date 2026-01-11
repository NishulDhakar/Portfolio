"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggleButton } from "../Theam/ThemeSwitch";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MinimalHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    // { name: "Capabilities", href: "/what-can-i-do" },
    // { name: "Blog", href: "/blog" },
    // { name: "Bookmarks", href: "/bookmarks" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-transparent">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-4 md:gap-6 text-sm text-secondary">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Theme Toggle */}
          <div className="opacity-60 text-sm">
            <ThemeToggleButton variant="circle" start="top-right" blur />
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 dark:border-white/10 pt-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-base transition-opacity hover:opacity-100 ${isActive
                    ? "text-primary underline underline-offset-4"
                    : "text-secondary opacity-60"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
