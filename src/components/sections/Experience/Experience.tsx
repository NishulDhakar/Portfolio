
import ExperienceCard from "./ExperienceCard";
export default function ExperienceSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 mt-12 lg:px-6">
      <div className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

          Experience.
 
      </div>
      <ExperienceCard
        role="Software Developer"
        company="Averoft"
        type="Internship"
        duration="Aug 2025 – Present · 1 mo"
        description="Averoft is a global IT solutions and digital transformation company offering services in AI, cloud, big data, and custom software across multiple industries."
        // logos={[
        //   "/Experience/ishan.png",
        //   "/Experience/yt-growth.png",
        //   "/Experience/markitup.png",
        // ]}
      />
    </section>
  );
}
