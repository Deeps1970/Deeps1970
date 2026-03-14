import { Award } from "lucide-react";
import SectionGlow from "./SectionGlow";

const certifications = [
  { title: "Full Stack Web Development", org: "Udemy", year: "2024" },
  { title: "MERN Stack Masterclass", org: "NoviTech R&D Pvt Ltd", year: "2024" },
  { title: "Full Stack Development Webinar", org: "Guvi", year: "2024" },
  { title: "Git & GitHub Workshop", org: "SRM Institute", year: "2024" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative overflow-hidden">
      <SectionGlow
        glows={[
          { x: "70%", y: "20%", color: "indigo", size: "20rem", animation: "float-slow" },
        ]}
      />
      <div className="container max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-4 border border-border rounded-xl p-5 bg-card transition-shadow hover:shadow-lg hover:shadow-accent/5">
              <div className="p-2 bg-muted rounded-lg shrink-0">
                <Award size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.org} · {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
