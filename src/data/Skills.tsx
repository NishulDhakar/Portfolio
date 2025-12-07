import {
  FaBootstrap,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaDocker,
} from "react-icons/fa";

import { FaDartLang, FaFlutter } from "react-icons/fa6";

import { PiFileCssFill } from "react-icons/pi";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { TbBrandFramerMotion } from "react-icons/tb";

import {
  SiExpress,
  SiGithubactions,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSocketdotio,
  SiPython,
  SiFastapi,
  SiOpenai,
  SiReact,
} from "react-icons/si";

import { BiLogoTypescript, BiLogoSpringBoot } from "react-icons/bi";

import { IoLogoFirebase } from "react-icons/io5";

import { GiArtificialHive } from "react-icons/gi";

import { BsFiletypeMdx } from "react-icons/bs";


type ButtonVariant =
  | "outline"
  | "link"
  | "default"
  | "destructive"
  | "secondary"
  | "ghost";

type Category =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "ai"
  | "mobile"
  | "devops"
  | "tools";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  variant: ButtonVariant;
  category: Category;
  size?: string;
}

export const techSkills: Skill[] = [
  // 💻 Languages
  { name: "Java", icon: FaJava, color: "text-orange-600", variant: "secondary", category: "language" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500", variant: "secondary", category: "language" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-600", variant: "secondary", category: "language" },
  { name: "Python", icon: SiPython, color: "text-blue-400", variant: "secondary", category: "language" },
  { name: "PHP", icon: FaPhp, color: "text-purple-600", variant: "secondary", category: "language" },
  { name: "Dart", icon: FaDartLang, color: "text-blue-600", variant: "secondary", category: "language" },

  // 🎨 Frontend / Web
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", variant: "ghost", category: "frontend" },
  { name: "CSS", icon: PiFileCssFill, color: "text-blue-500", variant: "ghost", category: "frontend" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600", variant: "ghost", category: "frontend" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-600", variant: "ghost", category: "frontend" },
  { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600", variant: "ghost", category: "frontend" },
  { name: "React", icon: FaReact, color: "text-cyan-500", variant: "ghost", category: "frontend" },
  { name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white", variant: "ghost", category: "frontend" },

  // 🛠 Backend
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600", variant: "ghost", category: "backend" },
  { name: "Express", icon: SiExpress, color: "text-gray-600", variant: "ghost", category: "backend" },
  { name: "Spring Boot", icon: BiLogoSpringBoot, color: "text-green-600", variant: "ghost", category: "backend" },
  { name: "FastAPI", icon: SiFastapi, color: "text-green-500", variant: "ghost", category: "backend" },
  { name: "WebSockets", icon: SiSocketdotio, color: "text-gray-800", variant: "ghost", category: "backend" },

  // 🗄 Databases
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", variant: "ghost", category: "database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700", variant: "ghost", category: "database" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700", variant: "ghost", category: "database" },

  // 🤖 AI
  { name: "OpenAI / Gemini API", icon: SiOpenai, color: "text-black dark:text-white", variant: "ghost", category: "ai" },

  // 📱 Mobile
  { name: "React Native", icon: SiReact, color: "text-cyan-500", variant: "ghost", category: "mobile" },
  { name: "Flutter", icon: FaFlutter, color: "text-blue-400", variant: "ghost", category: "mobile" },
  { name: "Firebase", icon: IoLogoFirebase, color: "text-yellow-500", variant: "ghost", category: "mobile" },

  // ⚙️ DevOps
  { name: "Docker", icon: FaDocker, color: "text-cyan-600", variant: "ghost", category: "devops" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", variant: "ghost", category: "devops" },
  { name: "CI/CD", icon: SiGithubactions, color: "text-gray-800", variant: "ghost", category: "devops" },

  // 🧰 Tools
  { name: "Git", icon: FaGitAlt, color: "text-red-600", variant: "ghost", category: "tools" },
  { name: "MDX", icon: BsFiletypeMdx, color: "text-gray-900 dark:text-white", variant: "ghost", category: "tools" },
  { name: "Inngest", icon: GiArtificialHive, color: "text-gray-900 dark:text-white", variant: "ghost", category: "tools" },
];
