"use client";

import Image from "next/image";
import { useState } from "react";
import { ThemeToggleButton } from "@/components/Theam/ThemeSwitch";

export default function Name() {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8 mb-8 stick ">
      {/* Profile Image */}
<div
  className="relative h-24 w-24 lg:h-28 lg:w-28 shrink-0"
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  {/* INSTAGRAM RING */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-500 via-neutral-500 to-neutral-500 p-[3px] animate-spin-slow">
    <div className="h-full w-full rounded-full bg-white dark:bg-black p-[2px]">
      <div className="relative h-full w-full rounded-full overflow-hidden">
        <Image
          src="/image1.png"
          alt="Nishul Dhakar"
          fill
          className={`object-cover transition-opacity duration-700 ${
            hover ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src="/nishul4.jpg"
          alt="Nishul Dhakar"
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-700 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  </div>
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
