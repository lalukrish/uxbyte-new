// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import MobileCenterCarousel from "./card-caruosel";

// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i = 0) => ({
//     pathLength: 1,
//     opacity: 1,
//     transition: {
//       pathLength: {
//         duration: 3,
//         delay: i * 0.25,
//         ease: "easeInOut",
//       },
//       opacity: {
//         duration: 0.5,
//         delay: i * 0.25,
//       },
//     },
//   }),
// };

// const paths = [
//   // U
//   "M20 20 V80 C20 100 60 100 60 80 V20",

//   // X
//   "M90 20 L130 80",
//   "M130 20 L90 80",

//   // B
//   "M160 20 V80 H190 C215 80 215 60 190 55 C215 50 215 20 190 20 Z",

//   // Y
//   "M240 20 L260 45 L280 20 M260 45 V80",

//   // T
//   "M310 20 H350 M330 20 V80",

//   // E
//   "M380 20 V80 M380 20 H420 M380 50 H410 M380 80 H420",

//   // Space
//   "",

//   // S
//   "M470 25 C440 15 440 55 470 55 C500 55 500 95 470 85",

//   // T
//   "M510 20 H550 M530 20 V80",

//   // U
//   "M580 20 V80 C580 100 620 100 620 80 V20",

//   // D
//   "M650 20 V80 H680 C720 80 720 20 680 20 Z",

//   // I
//   "M750 20 V80",

//   // O
//   "M790 50 C790 20 840 20 840 50 C840 80 790 80 790 50 Z",
// ];

// // Simple text flip component
// function LayoutTextFlip({ words }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((i) => (i + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [words.length]);

//   return <span className="inline-block">{words[index]}</span>;
// }

// // Encrypted text effect
// function EncryptedText({ text, className = "" }) {
//   return <span className={className}>{text}</span>;
// }

// export default function HeroNew() {
//   const containerRef = useRef(null);
//   const imagesRef = useRef(null);
//   const logoRef = useRef(null);
//   const overlayRef = useRef(null);
//   const [animationComplete, setAnimationComplete] = useState(false);
//   const [shouldPlayAnimation, setShouldPlayAnimation] = useState(true);

//   const images = [
//     {
//       src: "/hero1.jpg",
//       alt: "Modern laptop with code",
//       chip: "Innovation",
//     },
//     {
//       src: "/hero-2.jpg",
//       alt: "Digital network and connectivity",
//       chip: "Cloud Solutions",
//     },
//     {
//       src: "/hero-3.jpg",
//       alt: "Developers coding together",
//       chip: "Development",
//     },
//     {
//       src: "/hero-4.jpg",
//       alt: "Team collaboration",
//       chip: "Solutions",
//     },
//     {
//       src: "/hero-5.jpg",
//       alt: "AI and machine learning",
//       chip: "AI & Analytics",
//     },
//   ];

//   // Check if animation has been played before
//   useEffect(() => {
//     // TEMPORARILY DISABLED - Animation will play every time
//     // const hasSeenAnimation = sessionStorage.getItem('uxbyte_intro_seen');
//     // if (hasSeenAnimation) {
//     //   setShouldPlayAnimation(false);
//     //   setAnimationComplete(true);
//     // }
//   }, []);

//   // Logo animation
//   useEffect(() => {
//     // Skip animation if already seen
//     if (!shouldPlayAnimation) return;

//     const isMobile = window.innerWidth < 768;

//     // Show logo centered for only 500ms (reduced from 800ms)
//     const timer1 = setTimeout(() => {
//       if (!logoRef.current) return;

//       // Ultra smooth transition with custom easing
//       logoRef.current.style.transition =
//         "all 1.8s cubic-bezier(0.65, 0, 0.35, 1)"; // Smoother easing curve

//       if (isMobile) {
//         logoRef.current.style.left = "16px";
//         logoRef.current.style.top = "16px";
//         logoRef.current.style.transform = "translate(0, 0) scale(1)";
//       } else {
//         logoRef.current.style.left = "100px";
//         logoRef.current.style.top = "24px";
//         logoRef.current.style.transform = "translate(0, 0) scale(1)";
//       }
//     }, 500); // Reduced wait time

//     // Fade out overlay
//     const timer2 = setTimeout(() => {
//       if (overlayRef.current) {
//         overlayRef.current.style.transition = "opacity 0.6s ease-out";
//         overlayRef.current.style.opacity = "0";
//       }
//     }, 2000);

//     // Fade out logo
//     const timer3 = setTimeout(() => {
//       if (logoRef.current) {
//         logoRef.current.style.transition = "opacity 0.5s ease-out";
//         logoRef.current.style.opacity = "0";
//       }
//     }, 2600);

//     // Complete animation and save to session
//     const timer4 = setTimeout(() => {
//       setAnimationComplete(true);
//       // TEMPORARILY DISABLED - Not saving to session for testing
//       // sessionStorage.setItem('uxbyte_intro_seen', 'true');
//     }, 3100);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//       clearTimeout(timer4);
//     };
//   }, [shouldPlayAnimation]);

//   // Horizontal scroll animation with GSAP - loaded from CDN
//   useLayoutEffect(() => {
//     if (!containerRef.current || !imagesRef.current) return;

//     // Load GSAP from CDN
//     const loadGSAP = () => {
//       // Check if GSAP is already loaded
//       if (window.gsap && window.ScrollTrigger) {
//         initAnimation();
//         return;
//       }

//       // Load GSAP script
//       const gsapScript = document.createElement("script");
//       gsapScript.src =
//         "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
//       gsapScript.async = true;

//       gsapScript.onload = () => {
//         // Load ScrollTrigger after GSAP
//         const scrollTriggerScript = document.createElement("script");
//         scrollTriggerScript.src =
//           "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
//         scrollTriggerScript.async = true;

//         scrollTriggerScript.onload = () => {
//           initAnimation();
//         };

//         document.head.appendChild(scrollTriggerScript);
//       };

//       document.head.appendChild(gsapScript);
//     };

//     const initAnimation = () => {
//       const gsap = window.gsap;
//       const ScrollTrigger = window.ScrollTrigger;

//       if (!gsap || !ScrollTrigger) return;

//       gsap.registerPlugin(ScrollTrigger);

//       const section = containerRef.current;
//       const track = imagesRef.current;

//       const getScrollDistance = () => {
//         const scrollWidth = track.scrollWidth;
//         const containerWidth = section.offsetWidth;
//         return scrollWidth - containerWidth;
//       };

//       const scrollDistance = getScrollDistance();

//       if (scrollDistance <= 0) return;

//       // Horizontal animation
//       const animation = gsap.to(track, {
//         x: () => -scrollDistance,
//         ease: "none",
//       });

//       // ScrollTrigger - fixed to prevent repeating
//       const st = ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: () => `+=${scrollDistance + window.innerHeight}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         animation,
//         invalidateOnRefresh: true,
//         once: false,
//       });

//       // Cleanup function
//       return () => {
//         st.kill();
//         animation.kill();
//       };
//     };

//     const cleanup = loadGSAP();

//     return () => {
//       if (cleanup) cleanup();
//     };
//   }, []);

//   // Handle resize
//   useEffect(() => {
//     let resizeTimer;
//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         if (window.ScrollTrigger) {
//           window.ScrollTrigger.refresh();
//         }
//       }, 250);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       clearTimeout(resizeTimer);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {shouldPlayAnimation && (
//         <>
//           <div
//             ref={overlayRef}
//             className="fixed inset-0 bg-white z-50 pointer-events-none"
//             style={{ opacity: 1 }}
//           />

//           {!animationComplete && (
//             <div
//               ref={logoRef}
//               className="fixed z-[60] pl-2 md:pl-0 flex items-center gap-1 md:gap-2 left-1/2 top-1/2 md:left-1/2 md:top-1/2 "
//               style={{
//                 transform: "translate(-50%, -50%) scale(2)",
//                 opacity: 1,
//               }}
//             >
//               <div className="h-10 w-10 md:w-11 md:h-11 bg-black items-center justify-center flex">
//                 <span className="text-white font-bold text-xl">UXB</span>
//               </div>
//               <span className="text-xl md:text-xl font-bold">
//                 Uxbyte Studio
//               </span>
//             </div>
//           )}
//         </>
//       )}

//       {/* MAIN CONTENT */}
//       <section
//         data-hero-section
//         className="data-hero-section relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 min-h-screen"
//         style={{
//           opacity: animationComplete ? 1 : 0,
//           transition: "opacity 0.5s ease-in",
//         }}
//       >
//         <div className="hidden md:block">
//           {/* Background pattern - positioned absolutely behind content */}

//           {/* Content - with glass effect */}
//           <div
//             ref={containerRef}
//             className="relative mt-14 2xl:-mt-2 z-10"
//           >
//             <div className="min-h-screen flex items-center bg-cyan-100">
//               <main className="w-full 2xl:px-56 xl:px-24 px-8 py-12">
//                 <div className="flex items-center justify-between gap-12">
//                   <div className="max-w-4xl mb-12">
//                     <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
//                       <span>Where thinking</span>
//                       <br />
//                       <span>flows, </span>
//                       <LayoutTextFlip
//                         words={[
//                           "innovation grows.",
//                           "creativity moves.",
//                           "insight blooms",
//                         ]}
//                       />
//                     </h1>

//                     <p className="text-xl text-gray-500">
//                       Your digital world, managed and organized with ease by
//                       UXByte.
//                     </p>
//                   </div>

//                 </div>

//                 {/* Horizontal Image Scroll */}
//                 <div className="overflow-hidden -mx-8 px-8">
//                   <div
//                     ref={imagesRef}
//                     className="flex gap-5 w-max will-change-transform"
//                   >
//                     {images.map((img, i) => (
//                       <div key={i} className="flex-shrink-0 w-[400px]">
//                         <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
//                           <img
//                             src={img.src}
//                             alt={img.alt}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>

//                         <div className="mt-3 flex justify-center">
//                           <span className="px-4 xl:px-8 py-1 text-gray-700 rounded-none text-sm font-medium">
//                             {img.chip}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </main>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col md:hidden overflow-x-hidden min-h-screen">
//           {/* TEXT SECTION */}
//           <div className="px-4 mb-1 mt-9">
//             <h1 className="text-[36px] font-semibold leading-tight mb-6 text-center text-white">
//               <span>Where curiosity</span>
//               <br />
//               <span>roams, </span>
//               <LayoutTextFlip
//                 words={["you think.", "imagine", "you create."]}
//               />
//             </h1>

//             <p className="text-md text-gray-200 text-center">
//               All of your notes, bookmarks, and documents at your fingertips.
//             </p>
//           </div>

//           {/* IMAGE / CAROUSEL */}
//           <div className="relative z-10">
//             <MobileCenterCarousel />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MobileCenterCarousel from "./card-caruosel";
import Title from "@/commonComponents/title";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 3,
        delay: i * 0.25,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.5,
        delay: i * 0.25,
      },
    },
  }),
};

const paths = [
  // U
  "M20 20 V80 C20 100 60 100 60 80 V20",

  // X
  "M90 20 L130 80",
  "M130 20 L90 80",

  // B
  "M160 20 V80 H190 C215 80 215 60 190 55 C215 50 215 20 190 20 Z",

  // Y
  "M240 20 L260 45 L280 20 M260 45 V80",

  // T
  "M310 20 H350 M330 20 V80",

  // E
  "M380 20 V80 M380 20 H420 M380 50 H410 M380 80 H420",

  // Space
  "",

  // S
  "M470 25 C440 15 440 55 470 55 C500 55 500 95 470 85",

  // T
  "M510 20 H550 M530 20 V80",

  // U
  "M580 20 V80 C580 100 620 100 620 80 V20",

  // D
  "M650 20 V80 H680 C720 80 720 20 680 20 Z",

  // I
  "M750 20 V80",

  // O
  "M790 50 C790 20 840 20 840 50 C840 80 790 80 790 50 Z",
];

// Simple text flip component
function LayoutTextFlip({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return <span className="inline-block">{words[index]}</span>;
}

// Encrypted text effect
function EncryptedText({ text, className = "" }) {
  return <span className={className}>{text}</span>;
}

export default function HeroNew() {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(true);

  const images = [
    {
      src: "/hero1.jpg",
      alt: "Modern laptop with code",
      chip: "Innovation",
    },
    {
      src: "/hero-2.jpg",
      alt: "Digital network and connectivity",
      chip: "Cloud Solutions",
    },
    {
      src: "/hero-3.jpg",
      alt: "Developers coding together",
      chip: "Development",
    },
    {
      src: "/hero-4.jpg",
      alt: "Team collaboration",
      chip: "Solutions",
    },
    {
      src: "/hero-5.jpg",
      alt: "AI and machine learning",
      chip: "AI & Analytics",
    },
  ];

  // Check if animation has been played before
  useEffect(() => {
    // TEMPORARILY DISABLED - Animation will play every time
    // const hasSeenAnimation = sessionStorage.getItem('uxbyte_intro_seen');
    // if (hasSeenAnimation) {
    //   setShouldPlayAnimation(false);
    //   setAnimationComplete(true);
    // }
  }, []);

  // Logo animation
  useEffect(() => {
    // Skip animation if already seen
    if (!shouldPlayAnimation) return;

    const isMobile = window.innerWidth < 768;

    // Show logo centered for only 500ms (reduced from 800ms)
    const timer1 = setTimeout(() => {
      if (!logoRef.current) return;

      // Ultra smooth transition with custom easing
      logoRef.current.style.transition =
        "all 1.8s cubic-bezier(0.65, 0, 0.35, 1)"; // Smoother easing curve

      if (isMobile) {
        logoRef.current.style.left = "16px";
        logoRef.current.style.top = "16px";
        logoRef.current.style.transform = "translate(0, 0) scale(1)";
      } else {
        logoRef.current.style.left = "100px";
        logoRef.current.style.top = "24px";
        logoRef.current.style.transform = "translate(0, 0) scale(1)";
      }
    }, 500); // Reduced wait time

    // Fade out overlay
    const timer2 = setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.style.transition = "opacity 0.6s ease-out";
        overlayRef.current.style.opacity = "0";
      }
    }, 2000);

    // Fade out logo
    const timer3 = setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.style.transition = "opacity 0.5s ease-out";
        logoRef.current.style.opacity = "0";
      }
    }, 2600);

    // Complete animation and save to session
    const timer4 = setTimeout(() => {
      setAnimationComplete(true);
      // TEMPORARILY DISABLED - Not saving to session for testing
      // sessionStorage.setItem('uxbyte_intro_seen', 'true');
    }, 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [shouldPlayAnimation]);

  // Horizontal scroll animation with GSAP - loaded from CDN
  useLayoutEffect(() => {
    if (!containerRef.current || !imagesRef.current) return;

    // Load GSAP from CDN
    const loadGSAP = () => {
      // Check if GSAP is already loaded
      if (window.gsap && window.ScrollTrigger) {
        initAnimation();
        return;
      }

      // Load GSAP script
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      gsapScript.async = true;

      gsapScript.onload = () => {
        // Load ScrollTrigger after GSAP
        const scrollTriggerScript = document.createElement("script");
        scrollTriggerScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        scrollTriggerScript.async = true;

        scrollTriggerScript.onload = () => {
          initAnimation();
        };

        document.head.appendChild(scrollTriggerScript);
      };

      document.head.appendChild(gsapScript);
    };

    const initAnimation = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      const section = containerRef.current;
      const track = imagesRef.current;

      const getScrollDistance = () => {
        const scrollWidth = track.scrollWidth;
        const containerWidth = section.offsetWidth;
        return scrollWidth - containerWidth;
      };

      const scrollDistance = getScrollDistance();

      if (scrollDistance <= 0) return;

      // Horizontal animation
      const animation = gsap.to(track, {
        x: () => -scrollDistance,
        ease: "none",
      });

      // ScrollTrigger - fixed to prevent repeating
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${scrollDistance + window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        animation,
        invalidateOnRefresh: true,
        once: false,
      });

      // Cleanup function
      return () => {
        st.kill();
        animation.kill();
      };
    };

    const cleanup = loadGSAP();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {shouldPlayAnimation && (
        <>
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-white z-50 pointer-events-none"
            style={{ opacity: 1 }}
          />

          {!animationComplete && (
            <div
              ref={logoRef}
              className="fixed z-[60] pl-2 md:pl-0 flex items-center gap-1 md:gap-2 left-1/2 top-1/2 md:left-1/2 md:top-1/2 "
              style={{
                transform: "translate(-50%, -50%) scale(2)",
                opacity: 1,
              }}
            >
              <div className="h-10 w-10 md:w-11 md:h-11 bg-black items-center justify-center flex">
                <span className="text-white font-bold text-xl">UXB</span>
              </div>
              <span className="text-xl md:text-xl font-bold">
                Uxbyte Studio
              </span>
            </div>
          )}
        </>
      )}

      <section>
        <div className="hidden md:block">
          <div ref={containerRef} className="relative mt-10! 2xl:-mt-2 z-10">
            <div className="min-h-screen flex items-center bg-white">
              <main className="w-full 2xl:px-56 xl:px-24 px-8 py-12">
                <div className="flex items-center justify-between gap-12">
                  <div className="max-w-4xl mb-12">
                    <Title className="text-4xl md:text-5xl! font-medium leading-tight mb-6">
                      <span>Where thinking</span>
                      <br />
                      <span>flows, </span>
                      <LayoutTextFlip
                        words={[
                          "innovation grows.",
                          "creativity moves.",
                          "insight blooms",
                        ]}
                      />
                    </Title>

                    <p className="text-xl text-gray-500">
                      Your digital world, managed and organized with ease by
                      UXByte.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden -mx-8 px-8">
                  <div
                    ref={imagesRef}
                    className="flex gap-5 w-max will-change-transform"
                  >
                    {images.map((img, i) => (
                      <div key={i} className="flex-shrink-0 w-[400px]">
                        <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="mt-3 flex justify-center">
                          <span className="px-4 xl:px-8 py-1 text-gray-700 rounded-none text-sm font-medium">
                            {img.chip}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:hidden overflow-x-hidden min-h-screen">
          <div className="px-4 mb-1 mt-9">
            <h1 className="text-[36px] font-semibold leading-tight mb-6 text-center text-white">
              <span>Where curiosity</span>
              <br />
              <span>roams, </span>
              <LayoutTextFlip
                words={["you think.", "imagine", "you create."]}
              />
            </h1>

            <p className="text-md text-gray-200 text-center">
              All of your notes, bookmarks, and documents at your fingertips.
            </p>
          </div>

          <div className="relative z-10">
            <MobileCenterCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
