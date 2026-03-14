import { Wrench } from "lucide-react";
import SectionGlow from "./SectionGlow";

const tools = ["VS Code", "Node.js", "Git & GitHub", "XAMPP Control Panel", "MxDocs", "Tailwind CSS Docs"];

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
          {tools.map((tool) => (
            <span key={tool} className="px-4 py-2 text-sm font-mono text-foreground bg-card border border-border rounded-lg hover:border-accent/40 transition-colors">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
