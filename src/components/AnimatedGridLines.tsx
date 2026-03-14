import { useEffect, useRef } from "react";

const COLORS = [
  "rgba(99,102,241,",  // indigo
  "rgba(56,189,248,",  // cyan
  "rgba(34,197,94,",   // green
];

const AnimatedGridLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Line {
      x: number;
      y: number;
      dx: number;
      dy: number;
      length: number;
      opacity: number;
      horizontal: boolean;
      color: string;
    }

    const lines: Line[] = [];
    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const spawnLine = () => {
      const horizontal = Math.random() > 0.45;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const opacity = 0.06 + Math.random() * 0.06;

      if (horizontal) {
        lines.push({
          x: -150,
          y: Math.random() * h(),
          dx: 0.15 + Math.random() * 0.25,
          dy: 0,
          length: 120 + Math.random() * 200,
          opacity,
          horizontal: true,
          color,
        });
      } else {
        lines.push({
          x: Math.random() * w(),
          y: -150,
          dx: 0,
          dy: 0.15 + Math.random() * 0.25,
          length: 120 + Math.random() * 200,
          opacity,
          horizontal: false,
          color,
        });
      }
    };

    for (let i = 0; i < 12; i++) spawnLine();

    let animId: number;
    let frame = 0;

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w(), h());

      // Draw lines
      for (let i = lines.length - 1; i >= 0; i--) {
        const l = lines[i];
        l.x += l.dx;
        l.y += l.dy;

        const grad = l.horizontal
          ? ctx.createLinearGradient(l.x, l.y, l.x + l.length, l.y)
          : ctx.createLinearGradient(l.x, l.y, l.x, l.y + l.length);

        grad.addColorStop(0, `${l.color}0)`);
        grad.addColorStop(0.2, `${l.color}${l.opacity})`);
        grad.addColorStop(0.8, `${l.color}${l.opacity})`);
        grad.addColorStop(1, `${l.color}0)`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.7;
        if (l.horizontal) {
          ctx.moveTo(l.x, l.y);
          ctx.lineTo(l.x + l.length, l.y);
        } else {
          ctx.moveTo(l.x, l.y);
          ctx.lineTo(l.x, l.y + l.length);
        }
        ctx.stroke();

        if (l.x > w() + 200 || l.y > h() + 200) {
          lines.splice(i, 1);
        }
      }

      // Draw intersection glows where horizontal and vertical lines cross
      for (let a = 0; a < lines.length; a++) {
        for (let b = a + 1; b < lines.length; b++) {
          const la = lines[a];
          const lb = lines[b];
          if (la.horizontal === lb.horizontal) continue;

          const hz = la.horizontal ? la : lb;
          const vt = la.horizontal ? lb : la;

          const ix = vt.x;
          const iy = hz.y;

          if (
            ix >= hz.x && ix <= hz.x + hz.length &&
            iy >= vt.y && iy <= vt.y + vt.length
          ) {
            const glow = ctx.createRadialGradient(ix, iy, 0, ix, iy, 6);
            const o = Math.min(hz.opacity, vt.opacity) * 1.5;
            glow.addColorStop(0, `${hz.color}${o})`);
            glow.addColorStop(1, `${hz.color}0)`);
            ctx.fillStyle = glow;
            ctx.fillRect(ix - 6, iy - 6, 12, 12);
          }
        }
      }

      frame++;
      if (frame % 60 === 0 && lines.length < 18) {
        spawnLine();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

export default AnimatedGridLines;
