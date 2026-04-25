"use client";

import React, { useEffect, useState, useRef } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GlossyText({ text, className }) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.1;
      const percent =
        1 - Math.min(1, Math.max(0, (rect.top - end) / (start - end)));
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLetterColor = (index, total) => {
    // Each letter has its own threshold — left letters change first
    const letterThreshold = index / total;
    // How far this letter is into its own transition (0 = silver, 1 = done)
    const range = 1 / total; // window of scroll for each letter
    const localProgress = Math.min(
      1,
      Math.max(0, (scrollPercent - letterThreshold * 0.8) / (range * 4)),
    );

    if (localProgress < 0.5) {
      // silver → purple
      const t = localProgress / 0.5;
      const r = Math.round(192 - t * (192 - 105)); // 192 → 105
      const g = Math.round(192 - t * (192 - 21)); // 192 → 21
      const b = Math.round(192 - t * (192 - 174)); // 192 → 174
      return `rgb(${r},${g},${b})`;
    } else {
      // purple → black
      const t = (localProgress - 0.5) / 0.5;
      const r = Math.round(105 - t * 105); // 105 → 0
      const g = Math.round(21 - t * 21); // 21 → 0
      const b = Math.round(174 - t * 174); // 174 → 0
      return `rgb(${r},${g},${b})`;
    }
  };

  const letters = text.split("");
  const total = letters.length;

  return (
    <span
      ref={ref}
      className={cn("relative inline-block font-medium", className)}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          style={{
            color: char === " " ? "transparent" : getLetterColor(i, total),
            transition: "color 0.3s ease",
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
