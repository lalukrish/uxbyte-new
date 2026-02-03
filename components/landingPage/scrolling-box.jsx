"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MultiSection from "./grid-box";
import { EncryptedText } from "../ui/encrypted-text";
import Title from "@/commonComponents/title";

gsap.registerPlugin(ScrollTrigger);

const ScrollingBox = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const nextSectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !boxRef.current || !nextSectionRef.current)
      return;

    const section = sectionRef.current;
    const box = boxRef.current;
    const nextSection = nextSectionRef.current;

    const expansionAnim = gsap.fromTo(
      box,
      {
        width: "400px",
        height: "300px",
        borderRadius: "20px",
        transformOrigin: "bottom center",
      },
      {
        width: "100%",
        height: "100vh",
        borderRadius: "0px",
        ease: "power1.inOut",
      },
    );

    const expansionTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top bottom+=100",
      end: "center center",
      scrub: 1.5,
      animation: expansionAnim,
      invalidateOnRefresh: true,
    });

    const slideUpAnim = gsap.fromTo(
      nextSection,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: "power1.inOut",
      },
    );

    const slideUpTrigger = ScrollTrigger.create({
      trigger: section,
      start: "center center",
      end: "bottom top",
      scrub: 1.5,
      pin: section,
      pinSpacing: true,
      anticipatePin: 1,
      animation: slideUpAnim,
      invalidateOnRefresh: true,
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      expansionTrigger.kill(true);
      slideUpTrigger.kill(true);
      expansionAnim.kill();
      slideUpAnim.kill();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 0);
    };
  }, []);

  return (
    <section className="video-section bg-gradient-to-b from-white to from-cyan-50 via-cyan-50 to-cyan-50">
      <div ref={sectionRef} className="will-change-transform relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full flex items-end justify-center">
            <div
              ref={boxRef}
              className="flex flex-col items-center justify-end will-change-transform relative"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="md:hidden block w-full px-6 pb-2 text-start">
                <EncryptedText
                  normaltext="PRODUCT DESIGN"
                  text=" AND DEVELOPMENT AGENCY"
                  className="text-[11px]! md:text-[14px]!"
                  normalClassName=""
                  encryptedClassName="text-[#535658] "
                  revealedClassName="text-[#535658] dark:text-[#535658]"
                  revealDelayMs={30}
                />
                <Title className="text-5xl sm:text-3xl font-bold text-black leading-tight pb-4">
                  We do the best for You <br /> We do the best for You
                </Title>
                <h1 className="text-xl sm:text-3xl pb-4 ">
                  lerate growth, streamline operations, and drive
                </h1>
              </div>

              {/* Video */}
              <video
                src="/test_vid_1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[60vh] md:h-[100vh] object-cover"
              />
            </div>
          </div>

          <div
            ref={nextSectionRef}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <div className="w-full h-full">
              <MultiSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingBox;
