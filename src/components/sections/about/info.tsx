import React from 'react'
import Container from '@/components/common/Container'
import { about } from '@/data/About'
import {
  MapPin,
  Code2,
  Briefcase,
  Brain,
  BookOpen
} from 'lucide-react'
import { Highlighter } from '@/components/magicui/highlighter'

const Info = () => {
  return (
    <Container className="py-2 md:py-12 mt-16">
      <div className="space-y-6 text-neutral-800 dark:text-neutral-300">
        <h2 className="text-3xl font-bold"> <Highlighter action="underline" color="#FF9800">
                                🧑‍💻 About Me.
                                </Highlighter></h2>

        <p className="text-lg leading-relaxed">{about.description}</p>

        <div className="hidden md:block space-y-4">
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
        </div>
      </div>
    </Container>
  )
}

export default Info
