import { techSkills } from "@/data/Skills";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function TechSkills() {
  const grouped = techSkills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof techSkills>);

  return (
    <section className="max-w-4xl mx-auto px-6 px-8 mb-16 lg:px-6">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Tech Stack.
      </div>

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category}>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <Tooltip key={skill.name} delayDuration={50}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center justify-center space-y-2 cursor-default">
                      <skill.icon
                        className={`${skill.size ?? "w-8 h-8"} ${skill.color}`}
                      />
                    </div>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
