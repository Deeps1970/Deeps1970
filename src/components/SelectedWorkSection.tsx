import { Github, ExternalLink } from "lucide-react";
import copilotImg from "@/assets/projects/copilot.png";

const SelectedWorkSection = () => {
  return (
    <section id="selected-work">
      <div className="container max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-4">
          Selected Work
        </h2>
        <p className="text-muted-foreground mb-12">
          Highlighting my most impactful project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-border rounded-xl overflow-hidden bg-card">
          {/* Image */}
          <div className="md:col-span-7">
            <img
              src={copilotImg}
              alt="AI Life Copilot"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-5 p-8 flex flex-col justify-center gap-5">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-wider">
                Featured Project
              </span>
              <h3 className="text-2xl font-medium tracking-display text-foreground mt-2">
                AI Life Copilot
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              An AI-powered lifestyle intelligence platform that helps users manage
              health, productivity, and habits with intelligent insights and a
              conversational assistant.
            </p>

            <div className="space-y-2">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Key Features
              </p>
              <ul className="space-y-1.5">
                {[
                  "AI chatbot assistant",
                  "Lifestyle tracking",
                  "Productivity insights",
                  "Analytics dashboard",
                ].map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Python", "React", "OpenAI API", "LangChain"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded-md border border-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://ai-life-copilot-hf.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a
                href="https://github.com/Deeps1970/AI-Life-Copilot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary transition-colors text-foreground"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
