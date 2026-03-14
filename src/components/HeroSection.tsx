import { Github, Linkedin, ArrowDown, MapPin } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const LINKEDIN = "https://www.linkedin.com/in/deepak1970/";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16">
      <div className="container max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="md:col-span-7">
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
              Front-end developer with hands-on MERN-stack internship experience and strong
              proficiency in HTML, CSS, Tailwind CSS, JavaScript, and Git. Experienced in
              building responsive applications and learning modern AI and full stack technologies.
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
                href={LINKEDIN}
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
              alt="Deepak B T — AI/ML & Full Stack Developer"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-border shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
