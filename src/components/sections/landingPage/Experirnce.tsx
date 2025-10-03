import Container from '@/components/common/Container';
import ExperienceCard from '@/components/ui/experienceCard';
import { experiencesConfig } from '@/config/experience.config';
import { type Experience } from '@/types';
import React from 'react';


export default function ExperienceSection() {
  return (
    <Container className="mt-20">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Experience.
      </div>

      <div className="mt-4 gap-8">
        {experiencesConfig.slice(0, 2).map((experience: Experience) => (
          <ExperienceCard key={experience.company.name} experience={experience} />
        ))}
      </div>

      {/* <div className="mt-8 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div> */}
    </Container>
  );
}
