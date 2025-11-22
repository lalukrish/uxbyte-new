"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMarquee() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: 600,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full py-32 bg-black overflow-hidden z-9999">
      <div className="rotate-[-8deg] origin-left">
        <h1
          ref={textRef}
          className="text-white text-6xl md:text-8xl font-bold whitespace-nowrap"
        >
          THE FUTURE OF INTELLIGENT SYSTEMS — THE FUTURE OF INTELLIGENT SYSTEMS
          —
        </h1>
      </div>
    </div>
  );
}
