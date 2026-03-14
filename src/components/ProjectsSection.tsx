import { useState } from "react";
import { projects, categories, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectExpanded from "./ProjectExpanded";

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects">
      <div className="container max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-16">
          Projects
        </h2>

        {categories.map((cat) => {
          const items = projects.filter((p) => p.category === cat.key);
          if (items.length === 0) return null;

          return (
            <div key={cat.key} className="mb-16 last:mb-0">
              <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-border" />
                {cat.label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelected(project)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ProjectExpanded project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsSection;
