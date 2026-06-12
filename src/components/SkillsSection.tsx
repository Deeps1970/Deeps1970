import SectionGlow from "./SectionGlow";
import { Brain, BarChart3, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillItem = { name: string; slug?: string; color?: string; icon?: LucideIcon };

const skillGroups: { title: string; skills: SkillItem[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "JavaScript", slug: "javascript" },
      { name: "React", slug: "react" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "PHP", slug: "php" },
      { name: "MySQL", slug: "mysql" },
      { name: "Oracle DB", slug: "oracle" },
      { name: "Supabase", slug: "supabase" },
      { name: "phpMyAdmin", slug: "phpmyadmin" },
    ],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "Python", slug: "python" },
      { name: "Machine Learning", icon: Brain },
      { name: "Data Analysis", icon: BarChart3 },
      { name: "NumPy", slug: "numpy" },
      { name: "Pandas", slug: "pandas" },
      { name: "Scikit-learn", slug: "scikitlearn" },
      { name: "TensorFlow (basic)", slug: "tensorflow" },
      { name: "OpenAI API / LLM", slug: "openai", color: "white" },
    ],
  },
  {
    title: "Computer Science",
    skills: [{ name: "Data Structures & Algorithms", icon: Network }],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
    ],
  },
];

const SkillBadge = ({ skill }: { skill: SkillItem }) => {
  const Icon = skill.icon;
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-mono text-foreground bg-card border border-border rounded-md hover:border-accent/40 transition-colors">
      {skill.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}${skill.color ? `/${skill.color}` : ""}`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-4 w-4"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : Icon ? (
        <Icon size={16} className="text-accent" aria-hidden="true" />
      ) : null}
      {skill.name}
    </span>
  );
};

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
                  <SkillBadge key={skill.name} skill={skill} />
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
