const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend & Database",
    skills: ["PHP", "MySQL", "Oracle DB", "phpMyAdmin"],
  },
  {
    title: "Computer Science",
    skills: ["Data Structures & Algorithms"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="container max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono text-foreground bg-secondary border border-border rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
