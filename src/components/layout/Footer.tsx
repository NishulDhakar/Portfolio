"use client";

export default function Footer() {
  return (
    <footer className="mb-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between text-xs text-secondary opacity-70">
          {/* Left */}
          <div>
            Designed & Developed by{" "}
            <span className="text-primary">Nishul</span>
            <br />
            © {new Date().getFullYear()} All rights reserved.
          </div>

          {/* Right */}
          <div className="text-right">
            {/* Visitors{" "}
            <span className="text-primary">#736</span> */}
            <br />
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
