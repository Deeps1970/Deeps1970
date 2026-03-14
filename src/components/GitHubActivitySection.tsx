const GitHubActivitySection = () => {
  const username = "Deeps1970";

  return (
    <section id="github-activity" className="bg-muted min-h-screen flex items-center pt-16">
      <div className="container max-w-6xl mx-auto px-6 py-12 w-full">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-12">
          GitHub Activity
        </h2>
        <div className="space-y-6">
          <div className="border border-border rounded-xl p-4 bg-card overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/3b82f6/${username}`}
              alt="GitHub Contribution Heatmap"
              className="w-full max-w-3xl mx-auto"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-4 bg-card overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=1f2937&title_color=f1f5f9&text_color=94a3b8&icon_color=3b82f6`}
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="border border-border rounded-xl p-4 bg-card overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=1f2937&ring=3b82f6&fire=3b82f6&currStreakLabel=f1f5f9&sideLabels=f1f5f9&dates=94a3b8&currStreakNum=f1f5f9&sideNums=f1f5f9`}
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
