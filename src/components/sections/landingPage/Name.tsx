"use client";

import Image from "next/image";
import { useState } from "react";
import { ThemeToggleButton } from "@/components/Theam/ThemeSwitch";
import { socialLinks } from "@/data/socialLinks";

export default function Name() {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8 mb-8 stick ">
      {/* Profile Image */}
<div
  className="relative h-24 w-24 lg:h-34 lg:w-34 shrink-0"
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
          
          {/* <ThemeToggleButton variant="circle" start="top-right" blur /> */}
        </div>


        <div className="flex items-start gap-2 max-w-xl">
          <p className="text-base text-muted-foreground leading-relaxed">
            • Software Engineer
          </p>
        </div>
          <div className="md:flex lg:justify-between gap-4">
              <div className="flex p-2 md:mt-0 mt-8 lg:pr-8 items-center gap-6">
                {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
      </div>
    </div>
  );
}
