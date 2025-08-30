import { FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaProjectDiagram,  FaReact } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import {  SiExpress,  SiGithubactions,  SiKubernetes, SiMongodb, SiMysql,  SiPostgresql,  SiRedux, SiSocketdotio } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";

type ButtonVariant = "outline" | "link" | "default" | "destructive" | "secondary" | "ghost";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  variant: ButtonVariant;
}

export const techSkills: Skill[] = [
// Frontend
{ name: "HTML", icon: FaHtml5, color: "text-orange-500", variant: "outline" },
{ name: "CSS", icon: PiFileCssFill, color: "text-blue-500", variant: "outline" },
{ name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600", variant: "outline" },
{ name: "JavaScript", icon: FaJs, color: "text-yellow-500", variant: "secondary" },
{ name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-600", variant: "secondary" },
{ name: "React", icon: FaReact, color: "text-cyan-500", variant: "outline" },
{ name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white", variant: "outline" },
{ name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600", variant: "outline" },
{ name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600", variant: "outline" },
{ name: "Redux", icon: SiRedux, color: "text-purple-700", variant: "outline" },

// Backend
{ name: "Node.js", icon: FaNodeJs, color: "text-green-600", variant: "outline" },
{ name: "Express", icon: SiExpress, color: "text-gray-600", variant: "outline" },
{name:"jQuery", icon: FaJs, color: "text-yellow-500", variant: "outline" },
{ name: "REST API", icon: FaProjectDiagram, color: "text-green-600", variant: "outline" },
// { name: "GraphQL", icon: SiGraphql, color: "text-pink-600", variant: "outline" },
{ name: "WebSockets", icon: SiSocketdotio, color: "text-gray-800", variant: "outline" },

// Databases
{ name: "MongoDB", icon: SiMongodb, color: "text-green-500", variant: "outline" },
{name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700", variant: "outline" },
{ name: "MySQL", icon: SiMysql, color: "text-blue-700", variant: "outline" },
// { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700", variant: "outline" },
// { name: "Redis", icon: SiRedis, color: "text-red-600", variant: "outline" },


// DevOps & Deployment
{ name: "Docker", icon: FaDocker, color: "text-cyan-600", variant: "outline" },
{ name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", variant: "outline" },
// { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", variant: "outline" },
{ name: "CI/CD", icon: SiGithubactions, color: "text-gray-800", variant: "outline" },

// Testing & Quality
// { name: "Jest", icon: SiJest, color: "text-red-500", variant: "outline" },
// { name: "Cypress", icon: SiCypress, color: "text-green-700", variant: "outline" },
// { name: "ESLint", icon: SiEslint, color: "text-indigo-600", variant: "outline" },
// { name: "Prettier", icon: SiPrettier, color: "text-pink-500", variant: "outline" },

// Tools & Version Control
{ name: "Git", icon: FaGitAlt, color: "text-red-600", variant: "outline" },
{ name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-white", variant: "outline" },

// Languages
{ name: "Java", icon: FaJava, color: "text-orange-600", variant: "secondary" },


];
