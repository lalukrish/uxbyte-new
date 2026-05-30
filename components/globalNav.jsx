"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalNav() {
  const bgRef = useRef < HTMLDivElement > null;
  const logoRef = useRef < HTMLDivElement > null;
  const [phase, setPhase] = (useState < "center") | ("moving" > "center");
  const [introDone, setIntroDone] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // ── Intro animation
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("moving"), 900);

    const t2 = setTimeout(
      () => {
        const bg = bgRef.current;
        const logo = logoRef.current;
        if (!bg || !logo) return;

        gsap.to(logo, { opacity: 0, duration: 0.35, ease: "power2.inOut" });
        gsap.to(bg, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            requestAnimationFrame(() =>
              requestAnimationFrame(() => setIntroDone(true)),
            );
          },
        });
      },
      900 + 1000 + 200,
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // ── ScrollTrigger for dark/white sections after intro
  useEffect(() => {
    if (!introDone) return;

    const triggers = [];
    const timer = setTimeout(() => {
      document.querySelectorAll(".dark-section").forEach((section) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => setIsDark(true),
            onEnterBack: () => setIsDark(true),
          }),
        );
      });

      document.querySelectorAll(".white-section").forEach((section) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => setIsDark(false),
            onEnterBack: () => setIsDark(false),
          }),
        );
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      triggers.forEach((t) => t.kill());
    };
  }, [introDone]);

  // ── Shared LogoMark JSX
  const logoMark = (dark) => (
    <div className="flex items-center gap-2.5 pl-4 md:pl-16 mt-1">
      <div className="w-[36px] h-[36px] bg-[#6915ae] rounded-[9px] flex items-center justify-center shrink-0">
        <span className="text-[13px] font-extrabold text-white tracking-[-0.04em] leading-none">
          UXB
        </span>
      </div>
      <span
        className={`text-[18px] font-bold tracking-[0.04em] transition-colors duration-300 ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Uxbyte studios
      </span>
    </div>
  );

  return (
    <>
      {/* ── Intro overlay */}
      {!introDone && (
        <>
          <div
            ref={bgRef}
            className="fixed inset-0 bg-black pointer-events-none"
            style={{ zIndex: 500, willChange: "opacity" }}
          />
          <div
            ref={logoRef}
            className="fixed pointer-events-none"
            style={{
              zIndex: 501,
              willChange: "opacity",
              top: phase === "center" ? "50%" : "20px",
              left: phase === "center" ? "50%" : "20px",
              transform:
                phase === "center"
                  ? "translate(-50%, -50%) scale(1.5)"
                  : "translate(0, 0) scale(1)",
              transition:
                phase === "moving"
                  ? "top 1s cubic-bezier(0.77,0,0.18,1), left 1s cubic-bezier(0.77,0,0.18,1), transform 1s cubic-bezier(0.77,0,0.18,1)"
                  : "none",
            }}
          >
            {logoMark(true)}
          </div>
        </>
      )}

      {/* ── Sticky nav after intro */}
      {introDone && (
        <nav className="fixed top-0 left-0 z-50 p-4">{logoMark(isDark)}</nav>
      )}
    </>
  );
}
