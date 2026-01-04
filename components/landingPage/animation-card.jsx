"use client";
import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const AnimationCard = () => {
//   const scrollTriggerRef = useRef(null);
//   const matchMediaRef = useRef(null);
//   const isGapAnimationCompletedRef = useRef(false);
//   const isFlipAnimationCompletedRef = useRef(false);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const initAnimations = () => {
//       const cardContainer = document.querySelector(".animation-card-container");
//       const stickyHeader = document.querySelector(
//         ".animation-sticky-header h1"
//       );

//       if (!cardContainer || !stickyHeader) return null;

//       // Kill existing instances
//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.kill();
//         scrollTriggerRef.current = null;
//       }

//       if (matchMediaRef.current) {
//         matchMediaRef.current.kill();
//         matchMediaRef.current = null;
//       }

//       const mm = gsap.matchMedia();
//       matchMediaRef.current = mm;

//       mm.add("(max-width:999px)", () => {
//         document
//           .querySelectorAll(
//             ".animation-card,.animation-card-container,.animation-sticky-header h1"
//           )
//           .forEach((el) => (el.style.cssText = ""));

//         return () => {
//           // Mobile cleanup
//         };
//       });

//       mm.add("(min-width:1000px)", () => {
//         const trigger = ScrollTrigger.create({
//           trigger: ".animation-sticky",
//           start: "top top",
//           end: `+=${window.innerHeight * 4}px`,
//           scrub: 1,
//           pin: true,
//           pinSpacing: true,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             // Header animation
//             if (progress >= 0.1 && progress <= 0.25) {
//               const headerProgress = gsap.utils.mapRange(
//                 0.1,
//                 0.25,
//                 0,
//                 1,
//                 progress
//               );
//               const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
//               const opacityValue = gsap.utils.mapRange(
//                 0,
//                 1,
//                 0,
//                 1,
//                 headerProgress
//               );
//               gsap.set(stickyHeader, { y: yValue, opacity: opacityValue });
//             } else if (progress < 0.1) {
//               gsap.set(stickyHeader, { y: 40, opacity: 0 });
//             } else if (progress > 0.25) {
//               gsap.set(stickyHeader, { y: 0, opacity: 1 });
//             }

//             // Width animation
//             if (progress <= 0.25) {
//               const widthPercentage = gsap.utils.mapRange(
//                 0,
//                 0.25,
//                 75,
//                 60,
//                 progress
//               );
//               gsap.set(cardContainer, { width: `${widthPercentage}%` });
//             } else {
//               gsap.set(cardContainer, { width: "60%" });
//             }

//             // Gap animation
//             if (progress >= 0.35 && !isGapAnimationCompletedRef.current) {
//               gsap.to(cardContainer, {
//                 gap: "20px",
//                 duration: 0.5,
//                 ease: "power3.out",
//               });
//               gsap.to(
//                 ["#animation-card-1", "#animation-card-2", "#animation-card-3"],
//                 { borderRadius: "20px", duration: 0.5, ease: "power3.out" }
//               );
//               isGapAnimationCompletedRef.current = true;
//             } else if (progress < 0.35 && isGapAnimationCompletedRef.current) {
//               gsap.to(cardContainer, {
//                 gap: "0px",
//                 duration: 0.5,
//                 ease: "power3.out",
//               });
//               gsap.to("#animation-card-1", {
//                 borderRadius: "20px 0 0 20px",
//                 duration: 0.5,
//                 ease: "power3.out",
//               });
//               gsap.to("#animation-card-2", {
//                 borderRadius: "0px",
//                 duration: 0.5,
//                 ease: "power3.out",
//               });
//               gsap.to("#animation-card-3", {
//                 borderRadius: "0 20px 20px 0",
//                 duration: 0.5,
//                 ease: "power3.out",
//               });
//               isGapAnimationCompletedRef.current = false;
//             }

//             // Flip animation
//             if (progress >= 0.7 && !isFlipAnimationCompletedRef.current) {
//               gsap.to(".animation-card", {
//                 rotationY: 180,
//                 duration: 0.75,
//                 ease: "power3.inOut",
//                 stagger: 0.1,
//               });
//               gsap.to(["#animation-card-1", "#animation-card-3"], {
//                 y: 30,
//                 rotationZ: (i) => [-15, 15][i],
//                 duration: 0.75,
//                 ease: "power3.inOut",
//               });
//               isFlipAnimationCompletedRef.current = true;
//             } else if (progress < 0.7 && isFlipAnimationCompletedRef.current) {
//               gsap.to(".animation-card", {
//                 rotationY: 0,
//                 duration: 0.75,
//                 ease: "power3.inOut",
//                 stagger: -0.1,
//               });
//               gsap.to(["#animation-card-1", "#animation-card-3"], {
//                 y: 0,
//                 rotationZ: 0,
//                 duration: 0.75,
//                 ease: "power3.inOut",
//               });
//               isFlipAnimationCompletedRef.current = false;
//             }
//           },
//         });

//         scrollTriggerRef.current = trigger;

//         return () => {
//           // Desktop cleanup
//           if (trigger) trigger.kill();
//         };
//       });

//       return mm;
//     };

//     // Delay initialization to ensure Lenis is ready
//     const timer = setTimeout(() => {
//       initAnimations();
//       ScrollTrigger.refresh();
//     }, 300);

//     // Resize handler
//     let resizeTimer;
//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         ScrollTrigger.refresh();
//       }, 250);
//     };

//     window.addEventListener("resize", handleResize);

//     // ✅ PROPER CLEANUP - This was the main issue!
//     return () => {
//       clearTimeout(timer);
//       clearTimeout(resizeTimer);
//       window.removeEventListener("resize", handleResize);

//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.kill();
//         scrollTriggerRef.current = null;
//       }

//       if (matchMediaRef.current) {
//         matchMediaRef.current.kill();
//         matchMediaRef.current = null;
//       }
//     };
//   }, []);

gsap.registerPlugin(ScrollTrigger);

const AnimationCard = () => {
  const sectionRef = useRef(null);
  const cardContainerRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ---------- MOBILE RESET ---------- */
      mm.add("(max-width: 999px)", () => {
        gsap.set(
          [".animation-card", cardContainerRef.current, headerRef.current],
          { clearProps: "all" }
        );
      });

      /* ---------- DESKTOP ---------- */
      mm.add("(min-width: 1000px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%",
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        /* ---------- HEADER ---------- */
        tl.fromTo(
          headerRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0
        );

        /* ---------- WIDTH ---------- */
        tl.fromTo(
          cardContainerRef.current,
          { width: "75%" },
          { width: "60%", duration: 1 },
          0
        );

        /* ---------- GAP & RADIUS ---------- */
        tl.to(
          cardContainerRef.current,
          { gap: 20, duration: 0.6, ease: "power3.out" },
          1.4
        );

        tl.to(".animation-card", { borderRadius: 20, duration: 0.6 }, 1.4);

        /* ---------- FLIP ---------- */
        tl.to(
          ".animation-card",
          {
            rotationY: 180,
            stagger: 0.1,
            duration: 1,
            ease: "power3.inOut",
          },
          2.8
        );

        tl.to(
          ["#animation-card-1", "#animation-card-3"],
          {
            y: 30,
            rotationZ: (i) => [-15, 15][i],
            duration: 1,
            ease: "power3.inOut",
          },
          2.8
        );
      });

      return () => mm.kill();
    }, sectionRef);

    return () => ctx.revert();
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
          }
        }
      `}</style>
      <div className="animation-card-wrapper">
        <section className="animation-sticky relative w-full h-screen p-8 bg-black text-gray-100 flex justify-center items-center">
          <div className="animation-sticky-header absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-6xl font-medium leading-none text-center translate-y-10 opacity-0">
              three pillars with one purpose
            </h1>
          </div>
          <div className="animation-card-container relative w-3/4 flex translate-y-10 lg:flex-row flex-col lg:gap-0 gap-8">
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
              </div>
              <div className="animation-card-back absolute w-full h-full rounded-inherit overflow-hidden flex flex-col justify-center items-center text-center p-8 bg-indigo-500 text-white">
                <span className="absolute top-8 left-8 opacity-40 text-2xl font-medium">
                  (01)
                </span>
                <p className="text-2xl font-medium leading-none">
                  interactive web experience
                </p>
              </div>
            </div>
            <div
              className="animation-card relative flex-1 aspect-5/7 lg:rounded-none rounded-[20px]"
              id="animation-card-2"
            >
              <div className="animation-card-front absolute w-full h-full rounded-inherit overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=600&fit=crop"
                  alt="Card 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animation-card-back absolute w-full h-full rounded-inherit overflow-hidden flex flex-col justify-center items-center text-center p-8 bg-purple-600 text-white">
                <span className="absolute top-8 left-8 opacity-40 text-2xl font-medium">
                  (02)
                </span>
                <p className="text-2xl font-medium leading-none">
                  interactive visual design
                </p>
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
              <div className="animation-card-back absolute w-full h-full rounded-inherit overflow-hidden flex flex-col justify-center items-center text-center p-8 bg-pink-400 text-white">
                <span className="absolute top-8 left-8 opacity-40 text-2xl font-medium">
                  (03)
                </span>
                <p className="text-2xl font-medium leading-none">
                  best web design
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnimationCard;
