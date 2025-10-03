import TechSkills from "@/components/sections/landingPage/Skills";
import About from "@/components/sections/landingPage/About";
import Container from "@/components/common/Container";

// import ContactForm from "@/components/landingPage/Contact";
import ProjectsPage from "./(pages)/projects/page";
// import { ParticlesDemo } from "@/components/common/Particlesbg";
// import { ShinyButton } from "@/components/ui/magicui/shiny-button";
import Link from "next/link";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import Github from "@/components/sections/landingPage/Github";

import Reachout from "@/components/sections/landingPage/Reachout";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import Experience from "@/components/sections/landingPage/Experirnce";
// import { experience } from "@/data/experience";
// import TextHoverEffectDemo from "@/components/sections/landingPage/BottomText";

export default function HomePage() {
  return (
    <div>
    
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-full p-4 md:pt-20 md:pb-10">
          <Reveal>
            <About />
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

          <Github />

          <Reveal>
                    <h2 className="text-2xl ml-10 font-bold"> 
                          Projects.
                        </h2>
            <ProjectsPage
              showFilter={false}
              limit={2}
              containerClassName="mx-auto px-8 max-w-4xl "
              gridClassName="grid md:grid-cols-2 gap-8 py-12"
              titleClassName="text-2xl font-semibold text-gray-900 dark:text-white"
            />{" "}
          </Reveal>
          <Reveal>
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
          </Reveal>
          <Reachout />
        </Container>

      </div>
    </div>
  );
}
