import { Highlighter } from "@/components/magicui/highlighter";
import { Button } from "../../ui/button";

import { techSkills } from "@/data/Skills";

export default function TechSkills() {
  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-6 py-12">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        <Highlighter action="underline" color="#FF9800">
                            Tech Stack.
                      </Highlighter>

      </div>
      <div className="flex flex-wrap gap-3">
        {techSkills.map((skill, index) => (
          <Button
            key={index}
            variant={skill.variant || "default"}
            className="flex items-center gap-2">
            <skill.icon className={`w-4 h-4 ${skill.color}`} />
            {skill.name}
          </Button>
        ))}
      </div>
    </section>
  );
}
