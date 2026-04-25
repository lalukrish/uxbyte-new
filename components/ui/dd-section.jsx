"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DDSection({ wrapRef }) {
  const ddRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const dd = ddRef.current;
    const line = lineRef.current;
    if (!dd || !line || !wrapRef?.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "30% top",
        end: "70% top",
        scrub: 1.5,
      },
    });

    // DD glow — white text shadow intensifies
    tl.fromTo(
      dd,
      {
        filter: "drop-shadow(0 0 0px rgba(255,255,255,0))",
        opacity: 0.95,
      },
      {
        filter:
          "drop-shadow(0 0 18px rgba(255,255,255,0.55)) drop-shadow(0 0 40px rgba(255,255,255,0.25))",
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
    );

    // Line glow — synced exactly
    tl.fromTo(
      line,
      {
        boxShadow: "none",
        background: "rgba(255,255,255,0.18)",
      },
      {
        boxShadow:
          "0 0 8px rgba(255,255,255,0.6), 0 0 24px rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.7)",
        ease: "power2.inOut",
        duration: 1,
      },
      0, // same start as DD
    );

    return () =>
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars?.trigger === wrapRef.current) t.kill();
      });
  }, [wrapRef]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* ── Ghost watermark DD ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-40px",
          left: "-20px",
          fontSize: "clamp(180px, 28vw, 340px)",
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          color: "#fff",
          opacity: 0.04,
          lineHeight: 1,
          letterSpacing: "-0.06em",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        DD
      </div>

      {/* ── 3D DD Monogram + subheading ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 14,
          marginBottom: 24,
        }}
      >
        <div ref={ddRef} style={{ lineHeight: 1 }}>
          {/* 3D extrude via layered SVG */}
          <svg
            width="clamp(56px, 8vw, 80px)"
            height="clamp(48px, 6.5vw, 68px)"
            viewBox="0 0 80 68"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "visible" }}
          >
            {[
              { x: 14, y: 62, op: 0.05 },
              { x: 12, y: 60, op: 0.09 },
              { x: 10, y: 58, op: 0.14 },
              { x: 8, y: 56, op: 0.2 },
              { x: 6, y: 54, op: 0.27 },
              { x: 4, y: 52, op: 0.36 },
            ].map(({ x, y, op }, i) => (
              <text
                key={i}
                x={x}
                y={y}
                fontFamily="Georgia, serif"
                fontSize="62"
                fontWeight="700"
                fill={`rgba(255,255,255,${op})`}
                letterSpacing="-5"
              >
                DD
              </text>
            ))}
            {/* Face */}
            <text
              x="2"
              y="50"
              fontFamily="Georgia, serif"
              fontSize="62"
              fontWeight="700"
              fill="rgba(255,255,255,0.96)"
              letterSpacing="-5"
            >
              DD
            </text>
            {/* Highlight edge */}
            <text
              x="2"
              y="50"
              fontFamily="Georgia, serif"
              fontSize="62"
              fontWeight="700"
              fill="none"
              stroke="rgba(255,255,255,0.38)"
              strokeWidth="0.5"
              letterSpacing="-5"
            >
              DD
            </text>
          </svg>
        </div>

        {/* Small subheading under DD */}
        <div style={{ paddingBottom: 4 }}>
          <div
            style={{
              fontSize: "clamp(8px, 0.7vw, 10px)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1.5,
            }}
          >
            Design
          </div>
          <div
            style={{
              fontSize: "clamp(8px, 0.7vw, 10px)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1.5,
            }}
          >
            Development
          </div>
        </div>
      </div>

      {/* ── Headline typography stack ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          marginBottom: 20,
        }}
      >
        {/* We — solid serif */}
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(44px, 6.5vw, 82px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.035em",
            lineHeight: 1.02,
          }}
        >
          We
        </div>

        {/* Build — outlined */}
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(44px, 6.5vw, 82px)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1.2px rgba(255,255,255,0.65)",
            letterSpacing: "-0.035em",
            lineHeight: 1.02,
          }}
        >
          Build
        </div>

        {/* Digital — light italic serif */}
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(40px, 6vw, 76px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "-0.02em",
            lineHeight: 1.02,
          }}
        >
          Digital
        </div>

        {/* EXCELLENCE + glowing rule */}
        <div style={{ marginTop: 10 }}>
          <div
            style={{
              fontFamily: "var(--font-sans, sans-serif)",
              fontSize: "clamp(13px, 1.8vw, 20px)",
              fontWeight: 500,
              color: "#fff",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Excellence
          </div>
          {/* Dividing line — glows on scroll */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              ref={lineRef}
              style={{
                width: "clamp(48px, 7vw, 80px)",
                height: 2,
                background: "rgba(255,255,255,0.18)",
                borderRadius: 1,
                transition: "all 0.1s",
              }}
            />
            <div
              style={{
                flex: 1,
                height: 1,
                background: "rgba(255,255,255,0.08)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Stats — no boxes, inline ── */}
      <div
        style={{
          display: "flex",
          gap: 0,
          marginBottom: 28,
        }}
      >
        {[
          { value: "12+", label: "Years" },
          { value: "340+", label: "Projects" },
          { value: "98%", label: "Satisfaction" },
        ].map(({ value, label }, i) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              paddingLeft: i !== 0 ? "clamp(14px, 2vw, 28px)" : 0,
              paddingRight: "clamp(14px, 2vw, 28px)",
              borderLeft: i !== 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(18px, 2.2vw, 28px)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {value}
            </span>
            <span
              style={{
                fontSize: "clamp(8px, 0.75vw, 10px)",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Single CTA button ── */}
      <button
        style={{
          background: "transparent",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: 6,
          padding: "10px 24px",
          fontSize: 12,
          fontWeight: 500,
          cursor: "pointer",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          pointerEvents: "all",
        }}
      >
        View Our Work
      </button>
    </div>
  );
}
