import React from 'react'
import { about } from '@/data/About'
// import {
//   MapPin,
//   Code2,
//   Briefcase,
//   Brain,
//   BookOpen
// } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const Info = () => {
  return (
    <section className=" flex items-center justify-center px-4 sm:px-6 py-16 mt-14">
      <div className="w-full max-w-3xl space-y-10 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            About
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {about.description}
          </p>
        </div>

        <Separator />

{/*   
        <div className="hidden md:block space-y-4 text-muted-foreground">
          <div className="flex items-start gap-3 flex-wrap">
            <MapPin className="w-5 h-5 mt-0.5 text-yellow-500" />
            <span><strong>Lives in:</strong> Bhopal, India</span>
          </div>

          <div className="flex items-start gap-3 flex-wrap">
            <Code2 className="w-5 h-5 mt-0.5" />
            <span className="max-w-xl">
              Primarily work with Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.
            </span>
          </div>

          <div className="flex items-start gap-3 flex-wrap">
            <Briefcase className="w-5 h-5 mt-0.5" />
            <span className="max-w-xl">
              Open to new opportunities and freelancing. Any support is appreciated.
            </span>
          </div>

          <div className="flex items-start gap-3 flex-wrap">
            <Brain className="w-5 h-5 mt-0.5" />
            <span>Strong interests in Chess</span>
          </div>

          <div className="flex items-start gap-3 flex-wrap">
            <BookOpen className="w-5 h-5 mt-0.5" />
            <span>
              Love reading books on psychology, behavioral science, and human nature
            </span>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Info
