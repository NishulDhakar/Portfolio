// import Link from "next/link";
// import { Folder, Lightbulb, FileText } from "lucide-react";

// export function SoftButton() {
//   const navItems = [
//     { name: "Work", icon: Folder, href: "/projects" },
//     // { name: "Bookmarks", icon: Lightbulb, href: "/bookmarks" },
//     // { name: "Notes", icon: FileText, href: "#" },
//   ];

//   return (
//     <div className="sticky top-0 z-50 w-full pointer-events-none mt-10 mb-10">
//       <div className="pointer-events-auto pt-6 pb-6 flex items-center gap-2 bg-neutral-100 dark:bg-black">
//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`
//               relative flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium transition-all duration-300
//               ${item.name === "Work"
//                 ? "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white shadow-sm"
//                 : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"}
//             `}
//           >
//             <item.icon size={16} />
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import { FaRegFolderOpen } from "react-icons/fa";

export function SoftButton() {
  return (
    <Link
      href="/projects"
      className="
        group relative inline-flex items-center gap-2
        rounded-full px-6 py-3
        text-sm font-medium
        border border-black/10 dark:border-white/25
        bg-white dark:bg-black
        text-black dark:text-white
        overflow-hidden
        transition-all duration-300 ease-out

        hover:border-black/30 dark:hover:border-white/40
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]
      "
    >
      {/* ✅ Inner Highlight Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/[0.04] to-transparent dark:from-white/[0.08]" />

      {/* ✅ Content */}
      <FaRegFolderOpen size={18} />
      <span>See The Things I&apos;ve Built</span>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />

      {/* ✅ Highlighted Border Beam (Light Mode) */}
      <div className="absolute inset-0 dark:hidden">
        <BorderBeam
          size={70}
          duration={3}
          delay={0}
          borderWidth={1.6}
          colorFrom="rgba(0,0,0,0.35)"
          colorTo="rgba(0,0,0,0)"
        />
      </div>

      {/* ✅ Highlighted Border Beam (Dark Mode) */}
      <div className="absolute inset-0 hidden dark:block">
        <BorderBeam
          size={70}
          duration={3}
          delay={0}
          borderWidth={1.6}
          colorFrom="rgba(255,255,255,0.45)"
          colorTo="rgba(255,255,255,0)"
        />
      </div>
    </Link>
  );
}