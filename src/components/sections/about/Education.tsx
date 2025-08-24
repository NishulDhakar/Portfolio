import React from 'react'
import Image from 'next/image'
import Container from '@/components/common/Container'


const educationData = [
  {
    logo: '/About/tit.png',
    institute: 'Technocrats Institute of Technology',
    degree: 'B.Tech in Computer Science and Artificial Intelligence',
    year: '2022 - 2026',
  },
  {
    logo: '/About/school.jpeg',
    institute: 'Sarvodaya Public School',
    degree: 'Higher Secondary',
    year: '2018 - 2020',
  },
]

const Education = () => {
  return (
    <Container className="mb-20">
      <h2 className="text-2xl font-bold mb-8"> 
                                      🎓 Education
                                      </h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={edu.logo}
                alt={`${edu.institute} logo`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{edu.institute}</h3>
                <p className="text-sm text-neutral-500">{edu.degree}</p>
              </div>
            </div>
            <div className="text-sm text-neutral-500 sm:text-right">{edu.year}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Education
