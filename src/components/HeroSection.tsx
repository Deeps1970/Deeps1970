import { Github, Linkedin, ArrowDown, MapPin } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import { motion } from "framer-motion";

const LINKEDIN = "https://www.linkedin.com/in/deepak1970/";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Layered radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.1),transparent_40%)]" />

      {/* Floating blurred blobs */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-accent/[0.07] blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 rounded-full bg-[hsl(142_71%_45%/0.06)] blur-3xl animate-float-slow-reverse pointer-events-none" />
      <div className="absolute top-[60%] left-[50%] w-48 h-48 rounded-full bg-accent/[0.05] blur-2xl animate-float-slow-reverse pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-mono text-muted-foreground mb-4">
              Hi, I'm
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-display text-foreground mb-3 leading-tight">
              Deepak B T
            </h1>
            <p className="text-xl md:text-2xl text-accent font-medium mb-3">
              AI/ML &amp; Full Stack Developer
            </p>
            <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
              <MapPin size={14} />
              Chennai, Tamil Nadu, India
            </p>
            <p className="text-base text-muted-foreground max-w-prose mb-8 leading-relaxed">
              AI/ML and Full Stack developer with hands-on experience building intelligent
              web applications and scalable full stack systems. Skilled in modern frontend
              technologies, backend development, and integrating AI capabilities into real-world
              products. Passionate about creating impactful software that combines data,
              intelligence, and user-centric design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:brightness-110 transition-all text-sm font-medium shadow-lg shadow-accent/20"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
              <a
                href="https://github.com/Deeps1970"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 border border-border rounded-lg hover:bg-card hover:border-accent/30 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 border border-border rounded-lg hover:bg-card hover:border-accent/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Image with gradient halo */}
          <motion.div
            className="md:col-span-5 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl blur-3xl bg-[radial-gradient(circle,hsl(239_84%_67%/0.2),hsl(142_71%_45%/0.1),transparent)]" />
              <img
                src={profileImg}
                alt="Deepak B T — AI/ML & Full Stack Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-border"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
