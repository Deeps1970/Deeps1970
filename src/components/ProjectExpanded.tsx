import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectExpandedProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectExpanded = ({ project, onClose }: ProjectExpandedProps) => {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 z-50 md:max-w-4xl md:w-full md:-translate-x-1/2 md:-translate-y-1/2 bg-card rounded-xl border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Image — Left 60% */}
            <div className="md:w-3/5 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>

            {/* Details — Right 40% */}
            <div className="p-6 md:p-8 flex flex-col justify-center gap-4 md:w-2/5">
              <h3 className="text-2xl font-medium tracking-display text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded-md border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-3 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary transition-colors text-foreground"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectExpanded;
