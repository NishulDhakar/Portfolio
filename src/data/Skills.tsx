import { FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import {  SiExpress,  SiGithubactions,  SiKubernetes, SiMongodb, SiMysql,  SiPostgresql, SiSocketdotio } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { FaDartLang } from "react-icons/fa6";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoSpringBoot } from "react-icons/bi";

type ButtonVariant = "outline" | "link" | "default" | "destructive" | "secondary" | "ghost";

type Category = "language" | "web" | "mobile" | "database" | "devops" | "tools";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  variant: ButtonVariant;
  category: Category;
}


export const techSkills: Skill[] = [

    // 💻 Languages
  { name: "Java", icon: FaJava, color: "text-orange-600", variant: "secondary", category: "language" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500", variant: "secondary", category: "language" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-600", variant: "secondary", category: "language" },
  { name: "Php", icon: FaPhp, color: "text-purple-600", variant: "secondary", category: "language" },
  { name: "Dart", icon: FaDartLang, color: "text-blue-600", variant: "secondary", category: "language" },



  // 🌐 Web
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", variant: "outline", category: "web" },
  { name: "CSS", icon: PiFileCssFill, color: "text-blue-500", variant: "outline", category: "web" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600", variant: "outline", category: "web" },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600", variant: "outline", category: "web" },
    { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600", variant: "outline", category: "web" },

  { name: "React", icon: FaReact, color: "text-cyan-500", variant: "outline", category: "web" },
  { name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white", variant: "outline", category: "web" },



  { name: "Node.js", icon: FaNodeJs, color: "text-green-600", variant: "outline", category: "web" },
  { name: "Express", icon: SiExpress, color: "text-gray-600", variant: "outline", category: "web" },
  {name : "Spring Boot", icon: BiLogoSpringBoot, color: "text-green-600", variant: "outline", category: "web"},
  { name: "WebSockets", icon: SiSocketdotio, color: "text-gray-800", variant: "outline", category: "web" },


  // 📱 Mobile
  { name: "Flutter", icon: FaFlutter, color: "text-blue-400", variant: "outline", category: "mobile" },
  { name: "Firebase", icon: IoLogoFirebase, color: "text-yellow-500", variant: "outline", category: "mobile" },

  // 🗄️ Database
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", variant: "outline", category: "database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700", variant: "outline", category: "database" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700", variant: "outline", category: "database" },

  // 🛠️ DevOps
  { name: "Docker", icon: FaDocker, color: "text-cyan-600", variant: "outline", category: "devops" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", variant: "outline", category: "devops" },
  { name: "CI/CD", icon: SiGithubactions, color: "text-gray-800", variant: "outline", category: "devops" },

  // 🧰 Tools & Version Control
  { name: "Git", icon: FaGitAlt, color: "text-red-600", variant: "outline", category: "tools" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-white", variant: "outline", category: "tools" },

];

