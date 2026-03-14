import SectionGlow from "./SectionGlow";

const skillGroups = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React"] },
  { title: "Backend & Database", skills: ["PHP", "MySQL", "Oracle DB", "Supabase", "phpMyAdmin"] },
  { title: "AI / Machine Learning", skills: ["Python", "Machine Learning", "Data Analysis", "NumPy", "Pandas", "Scikit-learn", "TensorFlow (basic)", "OpenAI API / LLM"] },
  { title: "Computer Science", skills: ["Data Structures & Algorithms"] },
  { title: "Version Control", skills: ["Git", "GitHub"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      <SectionGlow
        glows={[
          { x: "40%", y: "30%", color: "indigo", size: "24rem", animation: "float-slow" },
          { x: "60%", y: "70%", color: "green", size: "16rem", animation: "float-slow-reverse" },
        ]}
      />
      <div className="container max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm font-mono text-foreground bg-card border border-border rounded-md hover:border-accent/40 transition-colors">
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
