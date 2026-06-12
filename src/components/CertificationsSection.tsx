import { Award, FileCheck, Clock } from "lucide-react";
import SectionGlow from "./SectionGlow";
import { certificationAssets } from "@/data/portfolioAssets";

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
          {certifications.map((cert, i) => {
            const asset = certificationAssets[cert.title];
            return (
              <div
                key={i}
                className="flex flex-col border border-border rounded-xl p-5 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-muted rounded-lg shrink-0">
                    <Award size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.org} · {cert.year}</p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-border">
                  {asset?.inProgress ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground bg-transparent text-xs font-medium cursor-not-allowed">
                      <Clock size={14} />
                      In Progress
                    </span>
                  ) : (
                    <a
                      href={asset?.certificate || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent bg-transparent hover:bg-accent/10 transition-all text-xs font-medium"
                    >
                      <FileCheck size={14} />
                      View Certification
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
