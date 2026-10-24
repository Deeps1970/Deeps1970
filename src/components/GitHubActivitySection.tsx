import { useState } from "react";
import SectionGlow from "./SectionGlow";

const GitHubActivitySection = () => {
  const username = "Deeps1970";
  const normalizedUsername = username.trim();
  const [statsVersion] = useState(() => Date.now());
  const [statsLoadFailed, setStatsLoadFailed] = useState(false);

  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(normalizedUsername)}&show_icons=true&theme=tokyonight&cache_seconds=1800&v=${statsVersion}`;

  return (
    <section id="github-activity" className="bg-muted min-h-screen flex items-center pt-16 relative overflow-hidden">
      <SectionGlow
        glows={[
          { x: "80%", y: "15%", color: "indigo", size: "22rem", animation: "float-slow-reverse" },
          { x: "10%", y: "60%", color: "green", size: "18rem", animation: "float-slow" },
        ]}
      />
      <div className="container max-w-6xl mx-auto px-6 py-12 w-full relative z-10">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12">GitHub Activity</h2>
        <div className="space-y-6">
          <div className="border border-border rounded-xl p-4 bg-card overflow-x-auto">
            <img src={`https://ghchart.rshah.org/${encodeURIComponent(normalizedUsername)}`} alt="GitHub Contribution Heatmap" className="w-full max-w-3xl mx-auto" loading="lazy" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-4 bg-card overflow-hidden min-h-[220px] flex items-center justify-center">
              {!statsLoadFailed ? (
                <img
                  src={githubStatsUrl}
                  alt={`GitHub Stats for ${normalizedUsername}`}
                  className="w-full"
                  loading="lazy"
                  onError={() => setStatsLoadFailed(true)}
                />
              ) : (
                <div
                  id="fallback"
                  className="w-full rounded-lg border border-dashed border-border/70 bg-muted/40 px-6 py-10 text-center text-sm text-muted-foreground"
                  role="status"
                  aria-live="polite"
                >
                  Unable to load GitHub stats right now. Try refreshing.
                </div>
              )}
            </div>
            <div className="border border-border rounded-xl p-4 bg-card overflow-hidden">
              <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${encodeURIComponent(normalizedUsername)}&hide_border=true&background=1e293b&ring=6366f1&fire=22c55e&currStreakLabel=f8fafc&sideLabels=f8fafc&dates=94a3b8&currStreakNum=f8fafc&sideNums=f8fafc`} alt="GitHub Streak Stats" className="w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivitySection;
