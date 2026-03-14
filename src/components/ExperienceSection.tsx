import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionGlow from "./SectionGlow";

const internships = [
  {
    role: "Web Development Intern",
    company: "ApexPlanet Software Pvt Ltd",
    location: "Remote",
    period: "July 2025 – Sept 2025",
    description: "Worked on real-world web development tasks and built responsive, interactive websites using modern frontend technologies.",
  },
  {
    role: "Web Development Intern",
    company: "Learnflu EdTech",
    location: "Remote",
    period: "Sept 2024 – Jan 2025",
    description: "Gained hands-on experience in MERN stack web development and contributed to collaborative team projects.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-muted relative overflow-hidden">
      <SectionGlow
        glows={[
          { x: "15%", y: "20%", color: "green", size: "20rem", animation: "float-slow" },
          { x: "85%", y: "50%", color: "indigo", size: "16rem", animation: "float-slow-reverse" },
        ]}
      />
      <div className="container max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12">Internship Experience</h2>
        <div className="space-y-6">
          {internships.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 md:p-8 transition-shadow hover:shadow-lg hover:shadow-accent/5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <Briefcase size={16} className="text-accent" />
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.company}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground shrink-0">
                  <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{item.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar size={14} />{item.period}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
