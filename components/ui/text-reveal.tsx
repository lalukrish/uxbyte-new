"use client";

import { FC, ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import React from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TextRevealProps {
  children: string;
  className?: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children = "the best person in the world one of you and me",
  className,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: sticky,
          anticipatePin: 1,
          onLeave: () => gsap.set(sticky, { autoAlpha: 0 }),
          onEnterBack: () => gsap.set(sticky, { autoAlpha: 1 }),
        },
      });

      const total = wordsRef.current.length;

      wordsRef.current.forEach((wordEl, i) => {
        if (!wordEl) return;
        const start = i / total;
        tl.fromTo(
          wordEl,
          { opacity: 0 },
          { opacity: 1, ease: "none", duration: 1 / total },
          start,
        );
      });
      tl.to(
        sticky,
        { y: "-20vh", autoAlpha: 0, ease: "none", duration: 0.2 },
        2,
      );
    }, section);

    return () => ctx.revert();
  }, [words.length]);

  return (
    <div
      ref={sectionRef}
      className={cn("relative h-[200vh] bg-black overflow-hidden", className)}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 mx-auto flex min-h-screen max-w-4xl xxl:max-w-8xl
                   items-center bg-transparent px-4 py-[2rem]"
      >
        <span
          className="flex flex-wrap justify-center text-center font-light text-2xl
                     leading-[1.6] md:text-3xl md:leading-[1.6] lg:text-4xl
                     lg:leading-[1.4] xl:text-5xl xl:leading-[1.35]
                     xxl:text-[72px] xxl:leading-[1.2] text-white p-5 md:p-8 lg:p-10"
        >
          {words.map((word, i) => (
            <Word key={i} ref={(el) => (wordsRef.current[i] = el)}>
              {word}
            </Word>
          ))}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  ref: (el: HTMLSpanElement | null) => void;
}

const Word = ({ children, ref }: WordProps) => (
  <span className="relative mx-1 lg:mx-1.5">
    {/* ghost / dim layer */}
    <span className="absolute opacity-20 text-white select-none" aria-hidden>
      {children}
    </span>
    {/* animated layer – starts invisible */}
    <span ref={ref} className="opacity-0 text-white">
      {children}
    </span>
  </span>
);
