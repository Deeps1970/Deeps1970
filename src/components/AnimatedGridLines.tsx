import { useEffect, useRef } from "react";

const AnimatedGridLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
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
    }

    const lines: Line[] = [];
    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const spawnLine = () => {
      const horizontal = Math.random() > 0.5;
      if (horizontal) {
        lines.push({
          x: -100,
          y: Math.random() * h(),
          dx: 0.3 + Math.random() * 0.4,
          dy: 0,
          length: 80 + Math.random() * 120,
          opacity: 0.04 + Math.random() * 0.06,
          horizontal: true,
        });
      } else {
        lines.push({
          x: Math.random() * w(),
          y: -100,
          dx: 0,
          dy: 0.3 + Math.random() * 0.4,
          length: 80 + Math.random() * 120,
          opacity: 0.04 + Math.random() * 0.06,
          horizontal: false,
        });
      }
    };

    // Seed initial lines
    for (let i = 0; i < 6; i++) spawnLine();

    let animId: number;
    let frame = 0;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w(), h());

      for (let i = lines.length - 1; i >= 0; i--) {
        const l = lines[i];
        l.x += l.dx;
        l.y += l.dy;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(99,102,241,${l.opacity})`;
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
      if (frame % 120 === 0 && lines.length < 12) {
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
      aria-hidden="true"
    />
  );
};

export default AnimatedGridLines;
