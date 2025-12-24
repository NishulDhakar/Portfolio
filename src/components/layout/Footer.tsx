'use client';

import Container from "../common/Container";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  return (
    <footer className="w-full mb-10">
      <Container className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center space-y-6">

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                aria-label={name}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Separator */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Nishul Dhakar
          </p>

        </div>
      </Container>
    </footer>
  );
}
