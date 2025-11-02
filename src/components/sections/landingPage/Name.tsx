"use client";

import Image from "next/image";
import { PointerHighlight } from "../../ui/pointer-highlight";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { socialLinks } from "@/data/socialLinks";

export default function Name() {
  return (
    <>
      <div className="mb-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/nishul.jpg"
            alt="Nishul Dhakar"
            width={120}
            height={120}
            className="rounded-2xl shadow-sm ring-1 ring-gray-100 dark:ring-gray-800"
          />
          <span className="border-primary absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 bg-green-500" />
        </div>
        <div className="flex-1">
   <h1 className="mb-4 font-[family-name:var(--font-instrument-serif)] text-4xl font-bold tracking-wide leading-tighthire md:text-5xl lg:text-5xl">
  Nishul Dhakar
</h1>

          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="relative z-10">Software Developer</span>
          </PointerHighlight>

          <p className="text-secondary mt-2 text-sm">Bhopal, India</p>

              <div className="mt-4 flex gap-4">
        {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
          <Tooltip key={name} delayDuration={6} >
            <TooltipTrigger asChild>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500">
                <Icon className="w-[20px] h-[20px] " />
              </Link>
            </TooltipTrigger>
            <TooltipContent >
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
        </div>
      </div>
    </>
  );
}
