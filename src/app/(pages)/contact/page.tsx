import Contact from '@/components/sections/Contact/Contact'
import { Particles } from '@/components/ui/magicui/particles'
import React from 'react'

export { viewport } from "@/lib/viewport";


const page = () => {
  return (
    <div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        staticity={50}
        color="#ffffff"
      />
      <Contact />

    </div>
  )
}

export default page
