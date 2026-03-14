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
              I'm a developer who thrives at the intersection of data and user interfaces.
              With experience spanning frontend development, backend systems, and machine
              learning, I build end-to-end solutions that are both technically robust and
              user-friendly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach is simple: write clean code, ship fast, and iterate based on
              real feedback. I'm constantly exploring new technologies and pushing
              the boundaries of what's possible on the web.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Focus", value: "Full Stack & AI/ML Development" },
              { label: "Education", value: "Computer Science Engineering" },
              { label: "Location", value: "India" },
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
