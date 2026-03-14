import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-xl border border-border bg-card text-left focus:outline-none focus:ring-2 focus:ring-accent transition-shadow hover:shadow-lg hover:shadow-accent/5"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 right-0 bg-card/90 backdrop-blur-sm border-t border-l border-border px-4 py-2 rounded-tl-lg">
        <span className="text-sm font-medium text-foreground">{project.title}</span>
      </div>
    </motion.button>
  );
};

export default ProjectCard;
