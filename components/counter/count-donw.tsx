"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import React from "react";

function DigitRoller({ digit, delay = 0 }: { digit: number; delay: number }) {
  const stripRef = useRef(null);
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const targetY = -digit * 10;

    gsap.fromTo(
      el,
      { y: "0%" },
      {
        y: `${targetY}%`,
        duration: 1.6,
        delay,
        ease: "power2.out",
      },
    );
  }, [digit, delay]);

  return (
    <div
      style={{
        height: "1em",
        overflow: "hidden",
        display: "inline-block",
        position: "relative",
      }}
    >
      <div
        ref={stripRef}
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: "1em",
          willChange: "transform",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} style={{ height: "1em", display: "block" }}>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function RollingNumber({
  value,
  className = "",
  style,
}: {
  value: number | string;
  className: string;
  style?: React.CSSProperties;
}) {
  const digits = String(value).padStart(1, "0").split("").map(Number);

  return (
    <div className={`flex items-end font-mono ${className}`} style={style}>
      {digits.map((d, i) => (
        <DigitRoller key={i} digit={d} delay={i * 0.08} />
      ))}
    </div>
  );
}

function StatCard({
  label,
  endValue,
  prefix = "",
  suffix = "",
  color,
}: {
  label: string;
  endValue: number;
  prefix?: string;
  suffix?: string;
  color: string;
}) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const obj = { val: endValue };

          gsap.to(obj, {
            val: endValue,
            duration: 3.5,
            ease: "power1.out",
            onUpdate() {
              setCurrent(Math.round(obj.val));
            },
          });
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endValue, started]);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center gap-3 xl:gap-10 2xl:!gap-40 p-8  transition-all duration-500 cursor-default"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-baseline">
          {prefix && (
            <span
              className={`text-xl md:text-3xl opacity-70 text-${color}`}
              style={{ lineHeight: 1 }}
            >
              {prefix}
            </span>
          )}

          <RollingNumber
            value={current}
            className={`text-[3rem] md:text-[3rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[5rem] leading-none text-${color}`}
            style={{ color }}
          />

          {suffix && (
            <span
              className={`text-5xl opacity-80 text-${color}!`}
              style={{ lineHeight: 1, color: `${color}` }}
            >
              {suffix}
            </span>
          )}
        </div>

        <h2
          className={`mt-2 text-[16px] font-light font-secondary text-text-${color} text-center whitespace-nowrap`}
          style={{ color: `${color}` }}
        >
          {label}
        </h2>
      </div>
    </div>
  );
}

type Stat = {
  label: string;
  endValue: number;
  suffix?: string;
  prefix?: string;
  color: string;
};
type CountdownProps = {
  stats?: Stat[];
};

export default function Countdown({
  stats = [
    { label: "Projects Shipped", endValue: 248, suffix: "+", color: "#a78bfa" },
    { label: "Projects Shippeds", endValue: 1000, suffix: "+", color: "#fff" },
    { label: "Projects Shippedl", endValue: 964, suffix: "+", color: "#fff" },
    { label: "Projects Shipped9", endValue: 96, suffix: "+", color: "#a78bfa" },
  ],
}: CountdownProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600&display=swap');

        body { margin: 0; }

        /* Subtle noise grain overlay for texture depth */
        .noise-overlay::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 100;
          opacity: 0.4;
        }
      `}</style>

      <div
        className="noise-overlay h-auto flex flex-col items-center justify-center px-6 py-16 md:py-8 lg:py-10 xl:py-16 2xl:py-16"
        // style={{
        //   background:
        //     "radial-gradient(ellipse at 20% 50%, #1e1040 0%, #0a0a0f 50%, #0d1a10 100%)",
        //   fontFamily: "'DM Sans', sans-serif",
        // }}
      >
        <div className="text-center mb-16">
          {/* <p
            className="text-xs tracking-[0.4em] uppercase text-purple-400 mb-3"
            style={{ opacity: 0.7 }}
          >
            By the numbers
          </p>
          <h1
            className="text-white"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            Things we&apos;ve done
          </h1> */}
          {/* <div
            className="mx-auto mt-4 h-[2px] w-24 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #a78bfa, transparent)",
            }}
          /> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-40 lg:gap-40 xl:gap-40 2xl:gap-40  w-full max-w-5xl 2xl:max-w-7xl">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </>
  );
}
