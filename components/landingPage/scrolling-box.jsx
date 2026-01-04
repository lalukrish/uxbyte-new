"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RadixFilesDemo } from "../ui/files";
import SaaSSection from "./scrolling-features";
import { WobbleCardDemo } from "./wobble-card";
import BikeHero from "./grid-box";
import MultiSection from "./grid-box";

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
      }
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
        y: "100vh",
      },
      {
        y: "0vh",
        ease: "power1.inOut",
      }
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

    // Refresh ScrollTrigger on resize
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

      // Refresh after cleanup
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 0);
    };
  }, []);

  return (
    <section className="video-section">
      {/* Video expansion section */}
      <div ref={sectionRef} className="will-change-transform">
        <div className="sticky top-0 h-screen w-full flex items-end justify-center overflow-hidden">
          <div
            ref={boxRef}
            className="flex items-center justify-center will-change-transform"
            style={{ backfaceVisibility: "hidden" }}
          >
            <video
              src="/test_vid_1.mp4"
              autoPlay
              muted
              loop
              className="w-full h-[99.9vh] object-cover"
            />
          </div>

          <div
            ref={nextSectionRef}
            className="absolute inset-0 z-20 bg-white bg-[url('/assets/landing/maritime.jpg')] bg-cover bg-center will-change-transform overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* This is just a placeholder during the slide-up animation */}
            <div className="h-screen flex items-center justify-center">
              {/* <h2 className="text-6xl font-bold text-white drop-shadow-lg">
                Our Solutions
              </h2> */}
              <MultiSection />
            </div>
          </div>
        </div>
      </div>

      {/* SaaS Section - Separate from the animated container */}
      <div className="relative z-30 bg-white">
        <SaaSSection />
      </div>

      {/* Optional: WobbleCard Section */}
      {/* <div className="relative z-30 bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <WobbleCardDemo />
        </div>
      </div> */}
    </section>
  );
};

export default ScrollingBox;
