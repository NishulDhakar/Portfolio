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
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category}>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  {/* Icon */}
                  <skill.icon className={`${skill.size ?? "w-8 h-8"} ${skill.color}`} />

                  {/* Label
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span> */}
                </div>
              ))}
            </div>
            {/* {i < arr.length - 1 && <hr className="my-6 border-gray-300 dark:border-gray-700" />} */}
          </div>
        ))}
      </div>
    </section>
  );
}
