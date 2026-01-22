"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimationCard = () => {
  const scrollTriggerRef = useRef(null);
  const matchMediaRef = useRef(null);
  const isGapAnimationCompletedRef = useRef(false);
  const isFlipAnimationCompletedRef = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Mobile click handler for card flip
    const handleMobileCardClick = (e) => {
      if (window.innerWidth <= 999) {
        const card = e.currentTarget;
        card.classList.toggle("flipped");
      }
    };

    // Add click listeners to cards for mobile
    const cards = document.querySelectorAll(".animation-card");
    cards.forEach((card) => {
      card.addEventListener("click", handleMobileCardClick);
    });

    const initAnimations = () => {
      const cardContainer = document.querySelector(".animation-card-container");
      const stickyHeader = document.querySelector(
        ".animation-sticky-header h1",
      );

      if (!cardContainer || !stickyHeader) return null;

      // Kill existing instances
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      if (matchMediaRef.current) {
        matchMediaRef.current.kill();
        matchMediaRef.current = null;
      }

      const mm = gsap.matchMedia();
      matchMediaRef.current = mm;

      mm.add("(max-width:999px)", () => {
        document
          .querySelectorAll(
            ".animation-card,.animation-card-container,.animation-sticky-header h1",
          )
          .forEach((el) => (el.style.cssText = ""));

        return () => {
          // Mobile cleanup
        };
      });

      mm.add("(min-width:1000px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: ".animation-sticky",
          start: "top top",
          end: `+=${window.innerHeight * 4}px`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // Header animation
            if (progress >= 0.1 && progress <= 0.25) {
              const headerProgress = gsap.utils.mapRange(
                0.1,
                0.25,
                0,
                1,
                progress,
              );
              const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
              const opacityValue = gsap.utils.mapRange(
                0,
                1,
                0,
                1,
                headerProgress,
              );
              gsap.set(stickyHeader, { y: yValue, opacity: opacityValue });
            } else if (progress < 0.1) {
              gsap.set(stickyHeader, { y: 40, opacity: 0 });
            } else if (progress > 0.25) {
              gsap.set(stickyHeader, { y: 0, opacity: 1 });
            }

            // Width animation
            if (progress <= 0.25) {
              const widthPercentage = gsap.utils.mapRange(
                0,
                0.25,
                75,
                60,
                progress,
              );
              gsap.set(cardContainer, { width: `${widthPercentage}%` });
            } else {
              gsap.set(cardContainer, { width: "60%" });
            }

            // Gap animation
            if (progress >= 0.35 && !isGapAnimationCompletedRef.current) {
              gsap.to(cardContainer, {
                gap: "20px",
                duration: 0.5,
                ease: "power3.out",
              });
              gsap.to(
                ["#animation-card-1", "#animation-card-2", "#animation-card-3"],
                { borderRadius: "20px", duration: 0.5, ease: "power3.out" },
              );
              isGapAnimationCompletedRef.current = true;
            } else if (progress < 0.35 && isGapAnimationCompletedRef.current) {
              gsap.to(cardContainer, {
                gap: "0px",
                duration: 0.5,
                ease: "power3.out",
              });
              gsap.to("#animation-card-1", {
                borderRadius: "20px 0 0 20px",
                duration: 0.5,
                ease: "power3.out",
              });
              gsap.to("#animation-card-2", {
                borderRadius: "0px",
                duration: 0.5,
                ease: "power3.out",
              });
              gsap.to("#animation-card-3", {
                borderRadius: "0 20px 20px 0",
                duration: 0.5,
                ease: "power3.out",
              });
              isGapAnimationCompletedRef.current = false;
            }

            // Flip animation
            if (progress >= 0.7 && !isFlipAnimationCompletedRef.current) {
              gsap.to(".animation-card", {
                rotationY: 180,
                duration: 0.75,
                ease: "power3.inOut",
                stagger: 0.1,
              });
              gsap.to(["#animation-card-1", "#animation-card-3"], {
                y: 30,
                rotationZ: (i) => [-15, 15][i],
                duration: 0.75,
                ease: "power3.inOut",
              });
              isFlipAnimationCompletedRef.current = true;
            } else if (progress < 0.7 && isFlipAnimationCompletedRef.current) {
              gsap.to(".animation-card", {
                rotationY: 0,
                duration: 0.75,
                ease: "power3.inOut",
                stagger: -0.1,
              });
              gsap.to(["#animation-card-1", "#animation-card-3"], {
                y: 0,
                rotationZ: 0,
                duration: 0.75,
                ease: "power3.inOut",
              });
              isFlipAnimationCompletedRef.current = false;
            }
          },
        });

        scrollTriggerRef.current = trigger;

        return () => {
          // Desktop cleanup
          if (trigger) trigger.kill();
        };
      });

      return mm;
    };

    // Delay initialization to ensure Lenis is ready
    const timer = setTimeout(() => {
      initAnimations();
      ScrollTrigger.refresh();
    }, 300);

    // Resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    // ✅ PROPER CLEANUP - This was the main issue!
    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);

      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      if (matchMediaRef.current) {
        matchMediaRef.current.kill();
        matchMediaRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .animation-card-container {
          perspective: 1000px;
        }

        .animation-card {
          transform-style: preserve-3d;
          transform-origin: center;
        }

        .animation-card-front,
        .animation-card-back {
          backface-visibility: hidden;
        }

        .animation-card-back {
          transform: rotateY(180deg);
        }

        .animation-sticky-header h1 {
          will-change: transform, opacity;
        }

        .animation-card-container {
          will-change: width;
        }

        @media (max-width: 999px) {
          .animation-card {
            transform: none !important;
            cursor: pointer;
            transition: transform 0.6s;
          }
          
          .animation-card.flipped {
            transform: rotateY(180deg) !important;
          }
          
          .animation-sticky {
            height: auto !important;
            padding: 2rem 1rem !important;
          }
          
          .animation-card-container {
            width: 100% !important;
            margin-top: 0 !important;
            padding: 0 !important;
          }
          
          .animation-sticky-header {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            margin-bottom: 2rem;
          }
          
          .animation-sticky-header h1 {
            transform: none !important;
            opacity: 1 !important;
            margin-top: 0 !important;
            font-size: 2rem !important;
          }
        }
      `}</style>
      <div className="animation-card-wrapper">
        <section className="animation-sticky relative w-full h-screen p-8 bg-from-black via-neutral-900 to-white text-gray-100 flex justify-center items-center">
          <div className="animation-sticky-header absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 className="hidden md:flex text-6xl font-medium leading-none text-center translate-y-10 opacity-0 xl:mt-4! text-black">
              Vision. Mission. Values.{" "}
            </h1>
          </div>
          <div className="animation-card-container relative w-3/4 flex translate-y-10 lg:flex-row flex-col lg:gap-0 gap-8 xl:mt-24!">
            <div
              className="animation-card relative flex-1 aspect-5/7 lg:rounded-l-[20px] lg:rounded-r-none rounded-[20px]"
              id="animation-card-1"
            >
              <div className="animation-card-front absolute w-full h-full rounded-inherit overflow-hidden bg-gradient-to-br from-black to-white">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=600&fit=crop"
                  alt="Card 1"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-end mb-4 pr-4 justify-end lg:hidden pointer-events-none">
                  <style>{`
    @keyframes gradientBorder {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>

                  {/* Gradient border */}
                  <div
                    className="p-[2px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #ffffff, #9ca3af, #ffffff)",
                      backgroundSize: "200% 200%",
                      animation: "gradientBorder 3s ease infinite",
                    }}
                  >
                    {/* Gradient background */}
                    <div
                      className="px-6 py-3 rounded-full backdrop-blur-sm"
                      style={{
                        background: "linear-gradient(135deg, #6915ae, #4c0f85)",
                      }}
                    >
                      <span className="text-white text-sm font-medium tracking-wide">
                        reveal vision
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
      animation-card-back
      absolute
      w-full
      h-full
      rounded-inherit
      overflow-hidden
      flex
      flex-col
      justify-between
      p-10
      bg-white
      text-black
      border
      border-black/10
      shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]
    "
              >
                {/* Top label */}
                <span className="text-sm font-medium tracking-widest uppercase opacity-50">
                  Vision 01
                </span>

                {/* Main content */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl xl:text-2xl font-semibold leading-tight">
                    Crafting Meaningful Digital Experiences
                  </h3>

                  <p className="text-base xl:text-lg font-light leading-relaxed text-gray-600 max-w-[100%]">
                    We envision digital products that are intuitive, immersive,
                    and built to connect brands with people through thoughtful
                    interaction.
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest uppercase opacity-40">
                    Pillar 01
                  </span>

                  <span className="w-10 h-[1px] bg-black/30" />
                </div>
              </div>
            </div>
            <div
              className="animation-card relative flex-1 aspect-5/7 lg:rounded-none rounded-[20px]"
              id="animation-card-2"
            >
              <div className="animation-card-front absolute w-full h-full rounded-inherit overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=600&fit=crop"
                  alt="Card 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="
    animation-card-back
    absolute
    w-full
    h-full
    rounded-inherit
    overflow-hidden
    flex
    flex-col
    justify-between
    p-10
    bg-white
    text-black
    border
    border-black/10
    shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]
  "
              >
                {/* Top label */}
                <span className="text-sm font-medium tracking-widest uppercase opacity-50">
                  Vision 02
                </span>

                {/* Main content */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl xl:text-2xl font-semibold leading-tight">
                    Interactive Visual Design
                  </h3>

                  <p className="text-base xl:text-lg font-light leading-relaxed text-gray-600 max-w-[90%]">
                    We design intuitive, visually striking interfaces that
                    elevate brand identity and turn user interaction into a
                    seamless experience.
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest uppercase opacity-40">
                    Pillar 02
                  </span>

                  <span className="w-10 h-[1px] bg-black/30" />
                </div>
              </div>
            </div>
            <div
              className="animation-card relative flex-1 aspect-[5/7] lg:rounded-r-[20px] lg:rounded-l-none rounded-[20px]"
              id="animation-card-3"
            >
              <div className="animation-card-front absolute w-full h-full rounded-inherit overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=600&fit=crop"
                  alt="Card 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="
    animation-card-back
    absolute
    w-full
    h-full
    rounded-inherit
    overflow-hidden
    flex
    flex-col
    justify-between
    p-10
    bg-white
    text-black
    border
    border-black/10
    shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]
  "
              >
                {/* Top label */}
                <span className="text-sm font-medium tracking-widest uppercase opacity-50">
                  Core Values
                </span>

                {/* Main content */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-3xl xl:text-2xl font-semibold leading-tight">
                    Design with Purpose
                  </h3>

                  <ul className="space-y-3 text-gray-600 text-base xl:text-lg font-light leading-relaxed">
                    <li>• Clarity over complexity</li>
                    <li>• Empathy for real users</li>
                    <li>• Precision in every detail</li>
                    <li>• Innovation driven by insight</li>
                  </ul>
                </div>

                {/* Bottom accent */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest uppercase opacity-40">
                    Our Foundation
                  </span>

                  <span className="w-10 h-[1px] bg-black/30" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnimationCard;
