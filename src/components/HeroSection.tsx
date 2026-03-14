import { Github, Linkedin, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16">
      <div className="container max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="md:col-span-7">
            <p className="text-sm font-mono text-muted-foreground mb-4">
              Hi, I'm Deepak —
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-display text-foreground mb-6 leading-tight">
              AI/ML &amp; <span className="text-accent">Full Stack</span> Developer.
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose mb-8 leading-relaxed">
              Building production-grade applications with a focus on machine learning
              integration and performant architectures. Passionate about turning complex
              problems into elegant, scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
              <a
                href="https://github.com/Deeps1970"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/thiagarajan-deepak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <img
              src={profileImg}
              alt="Deepak — AI/ML & Full Stack Developer"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
