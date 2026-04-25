"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThemeContext = createContext({ isDark: true });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
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
          })
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
          })
        );
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}