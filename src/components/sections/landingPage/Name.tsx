"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeToggleButton } from "@/components/Theam/ThemeSwitch";

export default function Name() {
  const { resolvedTheme } = useTheme();

  const avatarSrc =
    resolvedTheme === "dark"
      ? "/About/nishul-dark.jpg"
      : "/About/nishul.jpg";

  return (
    <div className="flex flex-col items-start gap-4 sm:gap-6 lg:flex-row lg:items-center lg:gap-8 mb-6 sm:mb-8">

      {/* Profile Image */}
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 shrink-0">
        <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-800 p-[2px]">
          <div className="h-full w-full rounded-full bg-white dark:bg-black p-[2px]">
            <div className="relative h-full w-full rounded-full overflow-hidden">
              <Image
                key={avatarSrc}
                src={avatarSrc}
                alt="Nishul Dhakar"
                fill
                priority
                sizes="128px"
                className="object-cover transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full">
        <p className="font-[family-name:var(--font-instrument-serif)] mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
          Nishul Dhakar
        </p>

        <span className="text-sm font-mono sm:text-sm text-muted-foreground leading-relaxed">
          Engineer • Developer • Builder
        </span>
      </div>

      <div>
        <div className="opacity-60 top-0 right-0 text-sm">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </div>
  );
}
