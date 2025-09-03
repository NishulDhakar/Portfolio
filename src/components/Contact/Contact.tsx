"use client"

import React from "react"
import ContactForm from "./Contactform"
import { Separator } from "@/components/ui/separator"
import { socialLinks } from "@/data/socialLinks"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="w-full max-w-3xl space-y-10 text-center">
        {/* Page Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Contact
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Get in touch with me. I will get back to you as soon as possible.
          </p>
        </div>

        <Separator />

        {/* Form */}
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-6">
            {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
              <Tooltip key={name} delayDuration={6}>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
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
      </div>
    </section>
  )
}

export default Contact
