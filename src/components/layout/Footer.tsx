'use client';

import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="dark:bg-background w-full bg-neutral-100 dark:dark:bg-black overflow-hidden mb-10">
      <Container className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center space-y-6">

          <div className="flex justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent" />
          </div>

          <div>
            <p className="text-sm text-gray-900 dark:text-gray-300">
              © {new Date().getFullYear()} Developed with{' '}
              <span className="text-red-500 animate-pulse">❤️</span> by Nishul
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}
