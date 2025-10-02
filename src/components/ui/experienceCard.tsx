import React from "react";
import Image from "next/image";
import { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          {experience.company.image && (
            <Image
              src={experience.company.image}
              alt={experience.company.name}
              width={60}
              height={60}
              className="rounded-md"
            />
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {experience.company.name}
            </p>
          </div>
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm text-right">
          <p>
            {experience.start} - {experience.end}
          </p>
          <p>{experience.location.name}</p>
        </div>
      </div>


      {/* Description */}
      <div className="text-gray-700 dark:text-gray-300 flex flex-col gap-1">
        {experience.description.map((line, idx) => (
          <p key={idx}>• {line}</p>
        ))}
      </div>

      {/* Links */}
      {/* <div className="mt-4 flex gap-4">
        {experience.company.url && (
          <a
            href={experience.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Company Website
          </a>
        )}
      </div> */}

    </div>
  );
}
