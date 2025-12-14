
import About from "@/components/sections/landingPage/About";
import { SoftButton } from "@/components/sections/landingPage/SoftButton";
import Container from "@/components/common/Container";

// import ContactForm from "@/components/landingPage/Contact";
// import ProjectsPage from "./projects/page";
// import { ParticlesDemo } from "@/components/common/Particlesbg";
// import { ShinyButton } from "@/components/ui/magicui/shiny-button";
// import Link from "next/link";
// import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import Github from "@/components/sections/landingPage/Github";

import Reachout from "@/components/sections/landingPage/Reachout";
// import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import Experience from "@/components/sections/landingPage/Experience";
import { socialLinks } from "@/data/socialLinks";
import TechSkills from "@/components/sections/landingPage/Skills";
// import TechSkills from "@/components/sections/landingPage/Skills";
// import { experience } from "@/data/experience";
// import TextHoverEffectDemo from "@/components/sections/landingPage/BottomText";

export default function HomePage() {
  return (
    <div>

      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-full md:pb-10">
          <Reveal>
            <About />
          </Reveal>

          <Reveal>
            <div className="md:flex lg:justify-between gap-4 mt-2">
              <SoftButton />
              <div className="flex p-2 md:mt-0 mt-8 lg:pr-8 items-center gap-6">
                {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

            </div>
          </Reveal>


          {/* <Reveal>
            {" "}
            <div className="mt-12 hidden justify-center md:flex">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600" />
            </div>
          </Reveal> */}

          <Reveal>

            <Experience />


          </Reveal>

                    
          <Reveal>
            {" "}
            <TechSkills />
          </Reveal>

          <Reveal>
            <Github />
          </Reveal>

          {/* <Reveal>
       <ProjectsPage />
          </Reveal> */}
          {/* <Reveal>
            <Link
              href="/projects"
              className="group flex items-center gap-2 font-bold transition-all hover:text-gray-300"
            >
              <Button variant={"outline"} className="ml-4 md:ml-8 md:w-2xl">
                More Projects
                <FaArrowRight className="transition-all duration-200 group-hover:hidden" />
                <FaArrowCircleRight className="hidden transition-all duration-200 group-hover:inline" />
              </Button>
            </Link>
          </Reveal> */}

          <Reachout />
        </Container>

      </div>
    </div>
  );
}
