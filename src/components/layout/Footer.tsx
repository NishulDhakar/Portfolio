"use client";

export default function Footer() {
  return (
    <footer className="mb-8 sm:mb-10 md:mb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 text-xs text-secondary opacity-70">
          {/* Left */}
          <div>
            Designed & Developed by{" "}
            <span className="text-primary">Nishul</span>
            <br />
            © {new Date().getFullYear()} All rights reserved.
          </div>

          {/* Right */}
          <div className="sm:text-right">
            {/* Visitors{" "}
            <span className="text-primary">#736</span> */}
            <br className="hidden sm:block" />
            Bhopal, India ·{" "}
            {new Date().toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
