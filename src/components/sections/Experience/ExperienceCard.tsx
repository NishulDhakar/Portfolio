"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface ExperienceCardProps {
  role: string;
  company: string;
  type: string;
  duration: string;
  description: string;
//   logos: string[];
}

export default function ExperienceCard({
  role,
  company,
  type,
  duration,
  description,
//   logos,
}: ExperienceCardProps) {
  return (
    <div className="">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <Image src="/averoft.jpeg" alt="logo" width={32} height={32} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{role}</h3>

<p className="text-sm text-gray-500">
  <Link
    href="https://www.averoft.com/" 
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-blue-500 hover:underline"
  >
    {company}
  </Link>{" "}
  · <span className="text-gray-500">{type}</span>
</p>
          <p className=" text-gray-400 flex items-center gap-1 mt-1">
            <Calendar className="h-4 w-4" />
            {duration}
          </p>
        </div>
      </div>
        <div className="text-secondary space-y-4 leading-relaxed">{description}</div>
      {/* <div className="flex gap-2 mt-4">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="relative w-20 h-14 rounded-md overflow-hidden border">
            <Image src={logo} alt="logo" fill className="object-cover" />
          </div>
        ))}
      </div> */}
    </div>
  );
}
