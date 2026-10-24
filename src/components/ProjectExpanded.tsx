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
          <motion.div
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-card rounded-xl border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="md:w-3/5 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center gap-4 md:w-2/5">
                <h3 className="text-2xl font-medium tracking-display text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-md border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:brightness-110 transition-all"
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
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectExpanded;
