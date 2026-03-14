const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-medium tracking-display text-foreground mb-8">
          About
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a B.Tech Computer Science Engineering student at SRM Institute of
              Science &amp; Technology with a passion for building web applications and
              exploring the intersection of AI and software engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With hands-on experience from internships and personal projects, I've built
              responsive web applications, full-stack prototypes, and AI-integrated tools.
              I focus on writing clean code and shipping solutions that solve real problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm particularly interested in machine learning, full stack development,
              and building products that create meaningful impact.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Focus", value: "Full Stack & AI/ML Development" },
              { label: "Education", value: "B.Tech CSE — SRM Institute of Science & Technology" },
              { label: "Location", value: "Chennai, Tamil Nadu, India" },
              { label: "Email", value: "thiagarajandeepu2007@gmail.com" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 border-b border-border pb-4 last:border-0">
                <span className="text-sm font-mono text-muted-foreground w-24 shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
