"use client";

import React from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ContactForm from "./Contactform";
import { BorderBeam } from "../ui/magicui/border-beam";
import { AuroraText } from "../ui/magicui/aurora-text";
import { socialLinks } from "@/data/socialLinks";

const Contact = () => {
  return (
    <section className="min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="relative w-full  max-w-6xl">
        <div className="relative z-10 border border-gray-700 rounded-2xl p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Get in <AuroraText>Touch</AuroraText>
            </h2>
            <p className=" hidden sm:block text-gray-400 mb-2 text-sm sm:text-base">
              If you have any inquiries, feel free to reach out.
            </p>
            <p className="hidden sm:block text-blue-400 mb-6 break-words text-sm sm:text-base">
              <Link href="mailto:nishuldhakar@gmail.com">
                nishuldhakar123@gmail.com
              </Link>
            </p>
            <h3 className="hidden sm:block text-base sm:text-lg font-semibold mb-3">
              Follow me
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
                <Tooltip key={name} delayDuration={6}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500"
                    >
                      <Icon className="w-6 h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className="w-full">
            <ContactForm />
          </div>

          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-red-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={400}
            borderWidth={2}
            className="from-transparent via-blue-500 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
