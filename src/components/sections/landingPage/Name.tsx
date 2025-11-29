"use client";

import Image from "next/image";
import { useState } from "react";
import { ThemeToggleButton } from "@/components/Theam/ThemeSwitch";

export default function Name() {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8 mb-8">
      {/* Profile Image */}
      <div
        className="relative h-24 w-24 shrink-0 transition-transform duration-300 ease-in-out lg:h-28 lg:w-28"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src="/nishul3.jpg"
          alt="Nishul Dhakar"
          fill
          className="rounded-full object-cover shadow-sm ring-2 ring-gray-100 dark:ring-gray-800 transition-opacity duration-700 ease-in-out opacity-100"
        />
        <Image
          src="/nishul3.jpg"
          alt="Nishul Dhakar"
          fill
          className={`rounded-full object-cover shadow-sm ring-2 ring-gray-100 dark:ring-gray-800 absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${hover ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hey, Nishul here.
          </h1>
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>


        <div className="flex items-start gap-2 max-w-xl">
          <p className="text-base text-muted-foreground leading-relaxed">
            I build stuffs, break stuff, contribute to stuffs, and make it better.
          </p>
        </div>
      </div>
    </div>
  );
}
