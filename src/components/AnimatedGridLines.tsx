import { useEffect, useRef } from "react";

const COLORS = [
  "rgba(99,102,241,", // indigo
  "rgba(56,189,248,", // cyan
  "rgba(34,197,94,",  // green
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
      const horizontal = Math.random() > 0.5;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const opacity = 0.04 + Math.random() * 0.05;

      if (horizontal) {
        lines.push({
          x: -120,
          y: Math.random() * h(),
          dx: 0.2 + Math.random() * 0.3,
          dy: 0,
          length: 100 + Math.random() * 160,
          opacity,
          horizontal: true,
          color,
        });
      } else {
        lines.push({
          x: Math.random() * w(),
          y: -120,
          dx: 0,
          dy: 0.2 + Math.random() * 0.3,
          length: 100 + Math.random() * 160,
          opacity,
          horizontal: false,
          color,
        });
      }
    };

    for (let i = 0; i < 8; i++) spawnLine();

    let animId: number;
    let frame = 0;

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w(), h());

      for (let i = lines.length - 1; i >= 0; i--) {
        const l = lines[i];
        l.x += l.dx;
        l.y += l.dy;

        const grad = l.horizontal
          ? ctx.createLinearGradient(l.x, l.y, l.x + l.length, l.y)
          : ctx.createLinearGradient(l.x, l.y, l.x, l.y + l.length);

        grad.addColorStop(0, `${l.color}0)`);
        grad.addColorStop(0.3, `${l.color}${l.opacity})`);
        grad.addColorStop(0.7, `${l.color}${l.opacity})`);
        grad.addColorStop(1, `${l.color}0)`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.5;
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

      frame++;
      if (frame % 90 === 0 && lines.length < 14) {
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
