import { Wrench, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionGlow from "./SectionGlow";

type Tool = { name: string; slug?: string; icon?: LucideIcon };

const tools: Tool[] = [
  { name: "VS Code", slug: "visualstudiocode" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Git & GitHub", slug: "github" },
  { name: "XAMPP Control Panel", slug: "xampp" },
  { name: "MxDocs", icon: BookOpen },
  { name: "Tailwind CSS Docs", slug: "tailwindcss" },
];

const ToolsSection = () => {
  return (
    <section className="bg-muted relative overflow-hidden">
      <SectionGlow
        glows={[
          { x: "20%", y: "40%", color: "green", size: "18rem", animation: "float-slow-reverse" },
        ]}
      />
      <div className="container max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12 flex items-center gap-3">
          <Wrench size={24} className="text-accent" />
          Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-foreground bg-card border border-border rounded-lg hover:border-accent/40 transition-colors"
              >
                {tool.slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${tool.slug}`}
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
                {tool.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
