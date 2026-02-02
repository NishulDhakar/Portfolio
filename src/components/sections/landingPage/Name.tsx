"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { socialLinks } from "@/data/socialLinks";

export default function Name() {
  const { resolvedTheme } = useTheme();

  const avatarSrc =
    resolvedTheme === "dark"
      ? "/about/nishul-dark.jpg"
      : "/about/nishul.jpg";

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
        <p className="font-[family-name:var(--font-instrument-serif)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
          Hey, Nishul here.
        </p>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Full Stack Developer
        </p>

        <div className="flex mt-2 items-center gap-4 sm:gap-6">
          {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-foreground dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
