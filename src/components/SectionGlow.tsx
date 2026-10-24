interface GlowPosition {
  x: string;
  y: string;
  color: "indigo" | "green";
  size: string;
  animation?: "float-slow" | "float-slow-reverse";
}

const colorMap = {
  indigo: "rgba(99,102,241,0.08)",
  green: "rgba(34,197,94,0.06)",
};

interface SectionGlowProps {
  glows: GlowPosition[];
}

const SectionGlow = ({ glows }: SectionGlowProps) => {
  return (
    <>
      {glows.map((g, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none rounded-full blur-3xl ${
            g.animation === "float-slow-reverse"
              ? "animate-float-slow-reverse"
              : "animate-float-slow"
          }`}
          style={{
            top: g.y,
            left: g.x,
            width: g.size,
            height: g.size,
            background: `radial-gradient(circle, ${colorMap[g.color]}, transparent 70%)`,
          }}
        />
      ))}
    </>
  );
};

export default SectionGlow;
