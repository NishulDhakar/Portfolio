import About from "@/components/sections/landingPage/About";
import Github from "@/components/sections/landingPage/Github";
import Reachout from "@/components/sections/landingPage/Reachout";
import { Reveal } from "@/components/common/reveal";
import Experience from "@/components/sections/landingPage/Experience";
import TechSkills from "@/components/sections/landingPage/Skills";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/createMetadata";
import { siteConfig } from "@/config/site";
import HireMeButton from "@/components/sections/landingPage/Hireme";

export const metadata = createMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export { viewport } from "@/lib/viewport";


export default function HomePage() {
  return (
    <div className="flex flex-col gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* Intro Section */}
      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Separator className="my-6 sm:my-8" />
      </Reveal>


      {/* Experience Section */}
      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Separator className="my-6 sm:my-8" />
      </Reveal>

      {/* Skills Section */}
      <Reveal>
        <TechSkills />
      </Reveal>

      <Reveal>
        <Separator className="my-6 sm:my-8" />
      </Reveal>

      {/* Github Contributions */}
      <Reveal>
        <Github />
      </Reveal>

      {/* Contact / Reachout */}
      <Reachout />

    </div>
  );
}
