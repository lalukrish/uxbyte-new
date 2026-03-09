"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Paragraphs from "@/components/ui/Paragraphs";
import Countdown from "./count-donw";
import Paragraph from "@/commonComponents/paragraph";
import Title from "@/commonComponents/title";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection({
  className = "",
  textColor = "text-[#F9F9F9]",
  title = "",
  description = "",
  stats,
}) {
  const numberRefs = useRef([]);

  useEffect(() => {
    numberRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stats[i].value,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.innerText = Math.round(Number(el.innerText)) + stats[i].suffix;
          },
        },
      );
    });
  }, []);

  return (
    <section
      className={`py-[1.5rem] md:py-[1rem] xl:py-[4rem] 2xl:py-[5rem] bg-[#060405] z-50! isolate will-change-transform ${className}`}
    >
      <div className="mx-auto w-full max-w-[75vw] justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-items-center flex-col ">
          {title && <Title text={title} className="text-center" />}
          {description && (
            <div className=" justify-center flex py-10">
              <Paragraph
                text={description}
                className="text-center max-w-[800px]"
              />
            </div>
          )}
        </div>
        <Countdown stats={stats} />
      </div>
    </section>
  );
}
