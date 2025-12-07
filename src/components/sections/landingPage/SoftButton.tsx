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
        overflow-hidden rounded-full 
        px-7 py-3
        text-sm font-medium text-white
        backdrop-blur-xl

        bg-[radial-gradient(120%_120%_at_50%_120%,rgba(255,255,255,0.25),rgba(255,255,255,0.05),rgba(0,0,0,0.2))]
        border border-white/15

        shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.25)]
        transition-all duration-300 ease-out

        hover:scale-[1.04]
        hover:border-white/30
        hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.35)]
      "
    >
      {/* ✅ Soft inner glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.35),transparent_60%)] opacity-70" />

      {/* ✅ Bottom spotlight */}
      <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 h-[140%] w-[140%] rounded-full bg-white/10 blur-2xl opacity-40" />

      {/* ✅ Text + Icon */}
      <span className="relative z-10 flex items-center gap-2 dark:text-white text-black">
        <FaRegFolderOpen size={20}/>
        See The Things I&apos;ve Built
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>

      {/* ✅ Shine sweep */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shimmer_1.4s_linear_infinite]" />

      {/* ✅ Border Beam Glow */}
       <BorderBeam size={70} duration={3} delay={0} borderWidth={1.5} colorFrom="rgba(255, 255, 255, 0.5)" colorTo="rgba(255, 255, 255, 0)" />
    </Link>
  );
}
