"use client";

import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function QuickInfo() {
  const socialLinks = {
    Resume: {
      href: "https://drive.google.com/file/d/1ytfjMyzGBfJT3P9m21NF0Xwgu9e871Bs/view?usp=sharing",
      icon: FaRegFilePdf,
    },
    Twitter: {
      href: "https://twitter.com/nishuldhakar",
      icon: BsTwitterX,
    },
    GitHub: {
      href: "https://github.com/nishuldhakar",
      icon: FiGithub,
    },
    LinkedIn: {
      href: "https://www.linkedin.com/in/nishuldhakar/",
      icon: FaLinkedinIn,
    },
    LeetCode: {
      href: "https://leetcode.com/nishuldhakar/",
      icon: SiLeetcode,
    },
  };

  return (
    <aside className="space-y-4">
      <div>
        <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
          Status
        </h3>
        <div className="space-y-2 text-sm text-secondary dark:text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Available for work
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Open to freelance
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
          Focus
        </h3>
        <ul className="space-y-1 text-sm text-secondary dark:text-gray-300 list-disc list-inside">
          <li>Full-Stack Development</li>
          <li>DSA & Problem Solving</li>
        </ul>
      </div>

      <div className="mt-8 flex gap-4">
        {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
          <Tooltip key={name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500">
                <Icon className="w-[20px] h-[20px] " />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </aside>
  );
}
