const AnimatedGridLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }} aria-hidden="true">
      {/* Horizontal lines - layer 1 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 78px,
              rgba(99,102,241,0.14) 79px,
              rgba(99,102,241,0.06) 80px,
              rgba(99,102,241,0.14) 81px,
              transparent 82px
            )
          `,
          backgroundSize: "100% 80px",
          animation: "gridSlideDown 25s linear infinite",
          filter: "blur(0.3px)",
        }}
      />
      {/* Vertical lines - layer 2 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 118px,
              rgba(34,211,238,0.12) 119px,
              rgba(34,211,238,0.05) 120px,
              rgba(34,211,238,0.12) 121px,
              transparent 122px
            )
          `,
          backgroundSize: "120px 100%",
          animation: "gridSlideRight 30s linear infinite",
          filter: "blur(0.3px)",
        }}
      />
      {/* Intersection glow layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle 2px at 0px 0px, rgba(34,197,94,0.15), transparent 4px)
          `,
          backgroundSize: "120px 80px",
          animation: "gridSlideDown 25s linear infinite, gridSlideRight 30s linear infinite",
        }}
      />
    </div>
  );
};

export default AnimatedGridLines;
