"use client";

import { about } from "@/data/About";
import QuickInfo from "./QuickInfo";
import Name from "./Name";
import Link from "next/link";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import { Highlighter } from "@/components/magicui/highlighter";

export default function About() {
  return (
    <section className=" mt-12 flex items-center transition-colors duration-300">
      <div className="lg:px- mx-auto w-full max-w-4xl px-6">
        <Name />
        <div className="grid gap-14 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="text-primary text-2xl font-semibold">        
                About.
              </div>
            <div className="text-secondary space-y-4 leading-relaxed">
              <p>{about.description}</p>
              <Link
                href="/about"
                className="group flex items-center gap-2 font-bold transition-all hover:text-gray-300">
                  <Highlighter action="underline" color="#D1D5DB">
                      More about me.
              </Highlighter>
      
                <FaArrowRight className="transition-all duration-200 group-hover:hidden" />
                <FaArrowCircleRight className="hidden transition-all duration-200 group-hover:inline" />
              </Link>
            </div>
          </div>
          <QuickInfo />
        </div>
      </div>
    </section>
  );
}
