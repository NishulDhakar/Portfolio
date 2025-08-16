import { FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

type ButtonVariant = "outline" | "link" | "default" | "destructive" | "secondary" | "ghost";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  variant: ButtonVariant;
}

export const techSkills: Skill[] = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", variant: "outline" },
  { name: "CSS", icon: PiFileCssFill, color: "text-blue-500", variant: "outline" },
    {name : "Bootstrap", icon: RiTailwindCssFill, color: "text-cyan-600", variant: "outline"},
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500", variant: "secondary" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-600", variant: "secondary" },
  { name: "React", icon: FaReact, color: "text-cyan-500", variant: "outline" },
  { name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white", variant: "outline" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600", variant: "outline" },
  { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600", variant: "outline" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600", variant: "outline" },
  { name: "Express", icon: SiExpress, color: "text-gray-600", variant: "outline" },
    {name : "REST API", icon: FaNodeJs, color: "text-green-600", variant: "outline"},
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", variant: "outline" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700", variant: "outline" },
  { name: "Java", icon: FaJava, color: "text-orange-600", variant: "secondary" },


];
