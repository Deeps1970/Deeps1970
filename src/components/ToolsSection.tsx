import { Wrench } from "lucide-react";

const tools = [
  "VS Code",
  "Node.js",
  "Git & GitHub",
  "XAMPP Control Panel",
  "MxDocs",
  "Tailwind CSS Docs",
];

const ToolsSection = () => {
  return (
    <section className="bg-secondary">
      <div className="container max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12 flex items-center gap-3">
          <Wrench size={24} className="text-accent" />
          Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 text-sm font-mono text-foreground bg-card border border-border rounded-lg"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
