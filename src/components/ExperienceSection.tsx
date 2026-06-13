import { Briefcase, Calendar, MapPin, FileText, Clock, FileCheck } from "lucide-react";
import { useState } from "react";
import SectionGlow from "./SectionGlow";
import { RESUME_URL, experienceAssets, toDirectDropboxImageUrl } from "@/data/portfolioAssets";
import AssetViewer, { type AssetViewerItem } from "./AssetViewer";

const internships = [
  {
    role: "AI & Full Stack Engineer",
    company: "SNR Automation Pvt Ltd",
    location: "Hybrid",
    period: "Feb 2026 – Apr 2026",
    description: "Built a mini ERP like system for a distributor handling brands like Nestlé, Britannia, Sunfeast, and Gold Winner across Kumbakonam, enabling centralized data management. Collaborated with clients through on-site visits and remote coordination to understand workflows, implement solutions, and resolve system-level and UI issues.",
  },
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
  const [viewerAsset, setViewerAsset] = useState<AssetViewerItem | null>(null);
  return (
    <section id="experience" className="bg-muted relative overflow-hidden">
      <SectionGlow
        glows={[
          { x: "15%", y: "20%", color: "green", size: "20rem", animation: "float-slow" },
          { x: "85%", y: "50%", color: "indigo", size: "16rem", animation: "float-slow-reverse" },
        ]}
      />
      <div className="container max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl font-medium tracking-display text-foreground">Internship Experience</h2>
          <button
            type="button"
            onClick={() => setViewerAsset({ url: RESUME_URL, title: "Resume — Deepak B T", kind: "pdf" })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent text-accent bg-transparent hover:bg-accent/10 transition-all text-sm font-medium"
          >
            View Resume
            <FileText size={16} />
          </button>
        </div>
        <div className="space-y-6">
          {internships.map((item, i) => {
            const asset = experienceAssets[item.company];
            const initials = item.company
              .replace(/Pvt Ltd|EdTech|AI|Software/gi, "")
              .trim()
              .split(/\s+/)
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 text-accent font-medium text-sm overflow-hidden">
                      <span>{initials}</span>
                    </div>
                    {asset?.logo && (
                      <img
                        src={toDirectDropboxImageUrl(asset.logo)}
                        alt={`${item.company} logo`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-12 h-12 rounded-lg object-cover border border-border bg-muted shrink-0 -ml-16 relative z-10"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                        <Briefcase size={16} className="text-accent" />
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground shrink-0">
                    <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{item.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar size={14} />{item.period}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-border">
                  <button
                    type="button"
                    disabled={!asset?.offerLetter || asset.offerLetter === "#"}
                    onClick={() =>
                      asset?.offerLetter &&
                      asset.offerLetter !== "#" &&
                      setViewerAsset({
                        url: asset.offerLetter,
                        title: `${item.company} — Offer Letter`,
                        kind: "auto",
                      })
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent bg-transparent hover:bg-accent/10 transition-all text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <FileText size={14} />
                    View Offer Letter
                  </button>
                  {asset?.inProgress ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground bg-transparent text-xs font-medium cursor-not-allowed">
                      <Clock size={14} />
                      In Progress
                    </span>
                  ) : (
                    <button
                      type="button"
                      disabled={!asset?.certificate || asset.certificate === "#"}
                      onClick={() =>
                        asset?.certificate &&
                        asset.certificate !== "#" &&
                        setViewerAsset({
                          url: asset.certificate,
                          title: `${item.company} — Internship Certificate`,
                          kind: "auto",
                        })
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent bg-transparent hover:bg-accent/10 transition-all text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <FileCheck size={14} />
                      View Internship Certificate
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <AssetViewer asset={viewerAsset} onClose={() => setViewerAsset(null)} />
    </section>
  );
};

export default ExperienceSection;
