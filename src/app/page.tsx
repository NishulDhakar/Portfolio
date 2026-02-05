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
import DiagonalPattern from "@/components/common/DiagonalPattern";
import Container from "@/components/common/Container";
import FeaturedProjects from "@/components/sections/landingPage/FeaturedProjects";

export const metadata = createMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export { viewport } from "@/lib/viewport";


export default function HomePage() {
  return (
    <Container>
      <div className="min-h-screen transition-colors duration-300 relative">
        <div className="relative mx-auto max-w-4xl">

          {/* Intro Section */}
          <Reveal delay={0.1}>
            <About />
          </Reveal>

          <Reveal delay={0.2}>
            <Separator className="my-6 sm:my-8" />
          </Reveal>


          {/* Experience Section */}
          <Reveal delay={0.3}>
            <Experience />
          </Reveal>

          <Reveal delay={0.4}>
            <Separator className="my-6 sm:my-8" />
          </Reveal>

          {/* Skills Section */}
          <Reveal delay={0.5}>
            <TechSkills />
          </Reveal>

          <Reveal delay={0.6}>
            <Separator className="my-6 sm:my-8" />
          </Reveal>

          {/* Featured Projects */}
          <Reveal delay={0.65}>
            <FeaturedProjects />
          </Reveal>

          <Reveal delay={0.7}>
            <Separator className="my-6 sm:my-8" />
          </Reveal>

          {/* Github Contributions */}
          <Reveal delay={0.75}>
            <Github />
          </Reveal>

          

          {/* Contact / Reachout */}
          <Reveal delay={0.8}>
            <Reachout />
          </Reveal>

        </div>
      </div>
    </Container>
  );
}
