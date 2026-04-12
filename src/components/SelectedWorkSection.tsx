import { useState, useCallback } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import copilotImg from "@/assets/projects/copilot.png";
import electiveNavigator from "@/assets/projects/electiveNavigator.png";
import SectionGlow from "./SectionGlow";

interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  features: string[];
  tech: string[];
  live: string;
  github: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "AI Life Copilot",
    description: "An AI-powered lifestyle intelligence platform that helps users manage health, productivity, and habits with intelligent insights and a conversational assistant.",
    image: copilotImg,
    features: ["AI chatbot assistant", "Lifestyle tracking", "Productivity insights", "Analytics dashboard"],
    tech: ["Python", "React", "OpenAI API", "LangChain"],
    live: "https://ai-life-copilot-hf.vercel.app/",
    github: "https://github.com/joshuahanielgts/Ai-life-copilot-HF26",
  },
  {
    title: "Smart Elective Selection",
    description: "An university level elective selection & management system for administration documentation and student elective enrollment system to reduce manual entry and retrieval of elective data",
    image: electiveNavigator,
    features: ["Admin Analytics Dashboard", "Data Management", "Electice Management", "Student Panel"],
    tech: ["React.js", "PostgreSQL", "TypeScript"],
    github: "https://github.com/Deeps1970/elective-navigator",
    live: "https://elective-navigator.vercel.app",
  }
];

const SelectedWorkSection = () => {
  const [index, setIndex] = useState(0);
  const project = featuredProjects[index];
  const hasMultiple = featuredProjects.length > 1;

  const prev = useCallback(() => setIndex((i) => (i === 0 ? featuredProjects.length - 1 : i - 1)), []);
  const next = useCallback(() => setIndex((i) => (i === featuredProjects.length - 1 ? 0 : i + 1)), []);

  return (
    <section id="selected-work" className="bg-muted relative overflow-hidden">
      <SectionGlow
        glows={[
          { x: "75%", y: "20%", color: "indigo", size: "24rem", animation: "float-slow-reverse" },
          { x: "10%", y: "70%", color: "green", size: "18rem", animation: "float-slow" },
        ]}
      />
      <div className="container max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-4">Selected Work</h2>
        <p className="text-muted-foreground mb-12">
          Highlighting my most impactful project{hasMultiple ? "s" : ""}.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-border rounded-xl overflow-hidden bg-card shadow-lg shadow-accent/5">
            <div className="md:col-span-7 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none z-10" />
              <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover" />
            </div>

            <div className="md:col-span-5 p-8 flex flex-col justify-center gap-5">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider">Featured Project</span>
                <h3 className="text-2xl font-medium tracking-display text-foreground mt-2">{project.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Key Features</p>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-md border border-border">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:brightness-110 transition-all">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors text-foreground">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>

          {hasMultiple && (
            <>
              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card border border-border shadow-sm hover:bg-muted transition-colors" aria-label="Previous project"><ChevronLeft size={20} /></button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card border border-border shadow-sm hover:bg-muted transition-colors" aria-label="Next project"><ChevronRight size={20} /></button>
              <div className="flex justify-center gap-2 mt-4">
                {featuredProjects.map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-accent" : "bg-border"}`} aria-label={`Go to project ${i + 1}`} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
