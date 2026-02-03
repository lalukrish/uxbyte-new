"use client";

import { color } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ISSSpaceshipCanvas({
  radius = "80",
  color = "#4a90e2",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const iss = {
      angle: 0,
      orbitRadius: radius,
      speed: 0.01,
      size: 3,
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      iss.angle += iss.speed;

      const centerX = canvas.width * 0.28; // adjust for moon position
      const centerY = canvas.height * 0.42;

      const x = centerX + Math.cos(iss.angle) * iss.orbitRadius;
      const y = centerY + Math.sin(iss.angle) * iss.orbitRadius * 0.6;

      // Glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#ffffff";

      // Body
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y, iss.size, 0, Math.PI * 2);
      ctx.fill();

      // Panels
      ctx.shadowBlur = 0;
      ctx.fillStyle = color;
      ctx.fillRect(x - 8, y - 1, 16, 2);

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
    />
  );
}
