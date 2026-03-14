const AnimatedGridLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }} aria-hidden="true">
      {/* Horizontal moving lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 79px,
              rgba(99,102,241,0.07) 80px,
              transparent 81px
            )
          `,
          backgroundSize: "100% 80px",
          animation: "gridSlideDown 30s linear infinite",
        }}
      />
      {/* Vertical moving lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 119px,
              rgba(56,189,248,0.05) 120px,
              transparent 121px
            )
          `,
          backgroundSize: "120px 100%",
          animation: "gridSlideRight 35s linear infinite",
        }}
      />
      {/* Diagonal accent lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 199px,
              rgba(34,197,94,0.04) 200px,
              transparent 201px
            )
          `,
          backgroundSize: "200px 200px",
          animation: "gridSlideDiag 40s linear infinite",
        }}
      />
    </div>
  );
};

export default AnimatedGridLines;
