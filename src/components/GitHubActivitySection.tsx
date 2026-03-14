const GitHubActivitySection = () => {
  const username = "Deeps1970";

  return (
    <section id="github-activity" className="bg-muted">
      <div className="container max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12">
          GitHub Activity
        </h2>
        <div className="space-y-6">
          {/* Contribution heatmap */}
          <div className="border border-border rounded-xl p-4 bg-card overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt="GitHub Contribution Heatmap"
              className="w-full max-w-3xl mx-auto"
              loading="lazy"
            />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-4 bg-card overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=ffffff&title_color=0a0a0a&text_color=666666&icon_color=2563eb`}
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="border border-border rounded-xl p-4 bg-card overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=ffffff&ring=2563eb&fire=2563eb&currStreakLabel=0a0a0a&sideLabels=0a0a0a&dates=666666`}
                alt="GitHub Streak Stats"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivitySection;
