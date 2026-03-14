import { useEffect, useRef } from "react";

const WireframeSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 320;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const r = 120;
    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.strokeStyle = "rgba(99,102,241,0.12)";
      ctx.lineWidth = 0.6;

      // Longitude lines
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI + angle;
        ctx.beginPath();
        for (let j = 0; j <= 40; j++) {
          const t = (j / 40) * Math.PI * 2;
          const x = cx + r * Math.cos(t) * Math.cos(a);
          const y = cy + r * Math.sin(t);
          j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Latitude lines
      for (let i = 1; i < 6; i++) {
        const lat = (i / 6) * Math.PI - Math.PI / 2;
        const lr = r * Math.cos(lat);
        const ly = cy + r * Math.sin(lat);
        ctx.beginPath();
        for (let j = 0; j <= 40; j++) {
          const t = (j / 40) * Math.PI * 2 + angle;
          const x = cx + lr * Math.cos(t);
          const y = ly + lr * Math.sin(t) * 0.3;
          j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      angle += 0.003;
      animId = requestAnimationFrame(draw);
    };

    let animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default WireframeSphere;
