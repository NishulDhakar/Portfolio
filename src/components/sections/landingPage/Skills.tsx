import { Button } from "@/components/ui/button";
import { techSkills } from "@/data/Skills";

export default function TechSkills() {
  const grouped = techSkills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof techSkills>);

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-6 py-12">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Tech Stack.
      </div>

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, skills], i, arr) => (
          <div key={category}>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Button
                  key={index}
                  variant={skill.variant || "default"}
                  className="flex items-center gap-2">
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  {skill.name}
                </Button>
              ))}
            </div>
            {i < arr.length - 1 }
          </div>
        ))}
      </div>
    </section>
  );
}
