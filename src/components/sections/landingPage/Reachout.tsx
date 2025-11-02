import React from "react";
import { Button } from "@/components/ui/button";
// import { Highlighter } from "@/components/magicui/highlighter";
import { Reveal } from "@/components/common/reveal";

const Reachout = () => {
  return (
    <section className="mx-auto mt-12 max-w-4xl px-6">
      {/* Heading */}
      <Reveal>
      <div className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
  
          Reach Out.

      </div>

      {/* Description */}
      <div className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
        Most of the time, you&apos;ll catch me coding or playing chess online.
        I&apos;m also very active on X, so feel free to DM me there or get in
        touch via email if you have any questions.
      </div>
      </Reveal>

      <Reveal>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {/* <Link
          href="https://x.com/intent/follow?screen_name=nishuldhakar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={"outline"} className="flex items-center gap-2">
            Twitter
          </Button>
        </Link> */}

        <a
          href="https://wa.me/917697468483?text=Hello%20Nishul%2C%20I%20am%20interested%20in%20your%20work"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="flex items-center gap-2">
            Whatsapp
          </Button>
        </a>

        <a href="mailto:nishuldhakar123@gmail.com?subject=Interested%20in%20Hiring%20You">
          <Button variant="outline" className="flex items-center gap-2">
            Email
          </Button>
        </a>
      </div>
      </Reveal>
    </section>
  );
};

export default Reachout;
