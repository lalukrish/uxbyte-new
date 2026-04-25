// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// const IsolatedExplosionImage = () => {
//   const scrollTriggerRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const initSpotlightAnimations = () => {
//       if (!containerRef.current) return;

//       // Kill existing ScrollTrigger to prevent duplicates
//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.kill();
//         scrollTriggerRef.current = null;
//       }

//       // Query elements ONLY within this component's container
//       const container = containerRef.current;
//       const images = container.querySelectorAll(".isolated-explosion-img");
//       const coverImg = container.querySelector(".isolated-explosion-cover-img");
//       const introHeader = container.querySelector(
//         ".isolated-explosion-intro-header h1",
//       );
//       const outroHeader = container.querySelector(
//         ".isolated-explosion-outro-header h1",
//       );

//       if (!images.length || !coverImg || !introHeader) return;

//       // Split text for word-by-word animation
//       const introWords = introHeader.textContent.split(" ");
//       const outroWords = outroHeader ? outroHeader.textContent.split(" ") : [];

//       introHeader.innerHTML = introWords
//         .map((word) => `<span class="isolated-explosion-word">${word}</span>`)
//         .join(" ");
//       if (outroHeader) {
//         outroHeader.innerHTML = outroWords
//           .map((word) => `<span class="isolated-explosion-word">${word}</span>`)
//           .join(" ");
//       }

//       const introWordElements = introHeader.querySelectorAll(
//         ".isolated-explosion-word",
//       );
//       const outroWordElements = outroHeader
//         ? outroHeader.querySelectorAll(".isolated-explosion-word")
//         : [];

//       gsap.set(introWordElements, { opacity: 1 });
//       gsap.set(outroWordElements, { opacity: 0 });

//       const scatterDirections = [
//         { x: 1.6, y: 0.4 },
//         { x: -1.9, y: 0.6 },
//         { x: 0.9, y: -0.8 },
//         { x: -1.9, y: -0.8 },
//         { x: 1.1, y: 2.5 },
//         { x: -1.9, y: 1.4 },
//         { x: 1.6, y: 1.2 },
//       ];

//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;
//       const isMobile = screenWidth < 1000;
//       const scatterMultiplier = isMobile ? 3.0 : 2.0;

//       const startPositions = Array.from(images).map(() => ({
//         x: 0,
//         y: 0,
//         z: -200,
//         scale: 0,
//       }));

//       const endPositions = scatterDirections.map((dir) => ({
//         x: dir.x * screenWidth * scatterMultiplier,
//         y: dir.y * screenHeight * scatterMultiplier,
//         z: 2000,
//         scale: isMobile ? 3.5 : 7.0,
//       }));

//       images.forEach((img, index) => {
//         gsap.set(img, startPositions[index]);
//       });

//       gsap.set(coverImg, {
//         z: -1000,
//         scale: 0,
//         x: 0,
//         y: 0,
//       });

//       // Different scroll distances for mobile vs desktop
//       const scrollDistance = isMobile
//         ? window.innerHeight * 4
//         : window.innerHeight * 4;

//       scrollTriggerRef.current = ScrollTrigger.create({
//         trigger: container.querySelector(".isolated-explosion-spotlight"),
//         start: "top top",
//         end: `+=${scrollDistance}`,
//         pin: true,
//         pinSpacing: true,
//         scrub: 1,
//         onUpdate: (self) => {
//           const progress = self.progress;

//           images.forEach((img, index) => {
//             const staggerDelay = index * 0.03;
//             let imageProgress = Math.max(0, (progress - staggerDelay) * 1.2);

//             const start = startPositions[index];
//             const end = endPositions[index];

//             const zValue = gsap.utils.interpolate(
//               start.z,
//               end.z,
//               imageProgress,
//             );
//             const scaleValue = gsap.utils.interpolate(
//               start.scale,
//               end.scale,
//               imageProgress,
//             );
//             const xValue = gsap.utils.interpolate(
//               start.x,
//               end.x,
//               imageProgress,
//             );
//             const yValue = gsap.utils.interpolate(
//               start.y,
//               end.y,
//               imageProgress,
//             );

//             gsap.set(img, {
//               z: zValue,
//               scale: scaleValue,
//               x: xValue,
//               y: yValue,
//             });
//           });

//           // Cover image appears earlier and faster
//           const coverProgress = Math.max(0, Math.min(1, (progress - 0.3) * 5));
//           const coverZValue = isMobile
//             ? -100 + 600 * coverProgress
//             : -1000 + 1000 * coverProgress;
//           const coverScaleValue = coverProgress;

//           gsap.set(coverImg, {
//             z: coverZValue,
//             scale: coverScaleValue,
//             x: 0,
//             y: 0,
//           });

//           // Intro header fade out
//           if (introWordElements.length > 0) {
//             if (progress >= 0.7 && progress <= 0.6) {
//               const introFadeProgress = (progress - 0.4) / 0.2;
//               const totalWords = introWordElements.length;

//               introWordElements.forEach((word, index) => {
//                 const wordFadeProgress = index / totalWords;
//                 const fadeRange = 0.1;

//                 if (introFadeProgress >= wordFadeProgress + fadeRange) {
//                   gsap.set(word, { opacity: 0 });
//                 } else if (introFadeProgress <= wordFadeProgress) {
//                   gsap.set(word, { opacity: 1 });
//                 } else {
//                   const wordOpacity =
//                     1 - (introFadeProgress - wordFadeProgress) / fadeRange;
//                   gsap.set(word, { opacity: wordOpacity });
//                 }
//               });
//             } else if (progress < 0.4) {
//               gsap.set(introWordElements, { opacity: 1 });
//             } else if (progress > 0.6) {
//               gsap.set(introWordElements, { opacity: 0 });
//             }
//           }

//           // Outro header fade in
//           if (outroWordElements.length > 0) {
//             if (progress >= 0.6 && progress <= 0.8) {
//               const outroFadeProgress = (progress - 0.6) / 0.2;
//               const totalWords = outroWordElements.length;

//               outroWordElements.forEach((word, index) => {
//                 const wordFadeProgress = index / totalWords;
//                 const fadeRange = 0.1;

//                 if (outroFadeProgress >= wordFadeProgress + fadeRange) {
//                   gsap.set(word, { opacity: 1 });
//                 } else if (outroFadeProgress <= wordFadeProgress) {
//                   gsap.set(word, { opacity: 0 });
//                 } else {
//                   const wordOpacity =
//                     (outroFadeProgress - wordFadeProgress) / fadeRange;
//                   gsap.set(word, { opacity: wordOpacity });
//                 }
//               });
//             } else if (progress < 0.6) {
//               gsap.set(outroWordElements, { opacity: 0 });
//             } else if (progress > 0.8) {
//               gsap.set(outroWordElements, { opacity: 1 });
//             }
//           }
//         },
//       });
//     };

//     // Delay initialization to ensure everything is ready
//     const timer = setTimeout(() => {
//       initSpotlightAnimations();
//       ScrollTrigger.refresh();
//     }, 300);

//     let resizeTimer;
//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         initSpotlightAnimations();
//         ScrollTrigger.refresh();
//       }, 250);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(resizeTimer);
//       window.removeEventListener("resize", handleResize);

//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.kill();
//         scrollTriggerRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <section data-people-section className="data-people-section">
//       <div
//         ref={containerRef}
//         className="isolated-explosion-wrapper relative"
//         style={{ isolation: "isolate", zIndex: 1 }}
//       >
//         <style>{`
//         .isolated-explosion-images,
//         .isolated-explosion-cover-img-wrapper {
//           transform-style: preserve-3d;
//           perspective: 2000px;
//         }

//         .isolated-explosion-img {
//           will-change: transform;
//         }

//         .isolated-explosion-cover-img-wrapper {
//           will-change: transform;
//         }

//         .isolated-explosion-word {
//           display: inline-block;
//           white-space: pre;
//         }
//       `}</style>

//         <div className="overflow-x-hidden">
//           <section className="isolated-explosion-spotlight relative w-screen h-screen p-8 overflow-hidden bg-black text-gray-100">
//             <section className="isolated-explosion-images absolute top-0 left-0 w-full h-full">
//               <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] xl:w-[400px] xl:h-[500px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//                 <img
//                   src="/aslam.jpeg"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] xl:w-[400px] xl:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//                 <img
//                   src="hijaz.jpeg"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] xl:w-[400px] xl:h-[500px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//                 <img
//                   src="swafuvan.jpeg"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] xl:w-[400px] xl:h-[450px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//                 <img
//                   src="adhithya.jpeg"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[650px] xl:w-[500px] xl:h-[630px] md:w-[200px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
//                 <img
//                   src="/abhi.jpeg"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] xl:w-[500px] xl:h-[510px] md:w-[200px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
//                 <img
//                   src="rohith.jpeg"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[650px] xl:w-[500px] xl:h-[570px] md:w-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
//                 <img
//                   src="/lallu.png"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </section>

//             <section className="isolated-explosion-cover-img-wrapper absolute top-0 left-0 w-full h-full">
//               <div className="isolated-explosion-cover-img w-full h-full bg-black md:flex items-center justify-center  hidden">
//                 <span className="hidden md:flex">
//                   {" "}
//                   <Image src="/blog-3.webp" alt="powerful persons" fill />
//                 </span>{" "}
//               </div>
//             </section>

//             <section className="isolated-explosion-intro-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2 lg:w-1/2 md:w-[90%] pointer-events-none z-[1] p-8 md:p-8">
//               <h1 className="text-7xl lg:text-8xl md:text-4xl font-medium tracking-tight leading-[0.9] h-1"></h1>
//             </section>

//             <section className="isolated-explosion-outro-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2 lg:w-full md:w-[90%]  pointer-events-none z-10 p-8">
//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-b
//                   from-black/40
//                   via-black/20
//                   to-black/40
//                   blur-2xl
//                   -z-10
//                 "
//               />

//               <h1 className="text-4xl lg:text-8xl md:text-4xl font-medium tracking-wide md:tracking-tight md:leading-[0.9] text-white">
//                 Creators Behind Growth
//               </h1>
//             </section>
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IsolatedExplosionImage;

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const IsolatedExplosionImage = () => {
  const scrollTriggerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const initSpotlightAnimations = () => {
      if (!containerRef.current) return;

      // Kill existing ScrollTrigger to prevent duplicates
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      // Query elements ONLY within this component's container
      const container = containerRef.current;
      const images = container.querySelectorAll(".isolated-explosion-img");
      const coverImg = container.querySelector(".isolated-explosion-cover-img");
      const introHeader = container.querySelector(
        ".isolated-explosion-intro-header h1",
      );
      const outroHeader = container.querySelector(
        ".isolated-explosion-outro-header h1",
      );

      if (!images.length || !coverImg || !introHeader) return;

      // Split text for word-by-word animation
      const introWords = introHeader.textContent.split(" ");
      const outroWords = outroHeader ? outroHeader.textContent.split(" ") : [];

      introHeader.innerHTML = introWords
        .map((word) => `<span class="isolated-explosion-word">${word}</span>`)
        .join(" ");

      if (outroHeader) {
        outroHeader.innerHTML = outroWords
          .map((word) => `<span class="isolated-explosion-word">${word}</span>`)
          .join(" ");
      }

      const introWordElements = introHeader.querySelectorAll(
        ".isolated-explosion-word",
      );
      const outroWordElements = outroHeader
        ? outroHeader.querySelectorAll(".isolated-explosion-word")
        : [];

      gsap.set(introWordElements, { opacity: 1 });
      gsap.set(outroWordElements, { opacity: 0 });

      const scatterDirections = [
        { x: 1.6, y: 0.4 },
        { x: -1.9, y: 0.6 },
        { x: 0.9, y: -0.8 },
        { x: -1.9, y: -0.8 },
        { x: 1.1, y: 2.5 },
        { x: -1.9, y: 1.4 },
        { x: 1.6, y: 1.2 },
      ];

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const isMobile = screenWidth < 1000;
      const scatterMultiplier = isMobile ? 3.0 : 2.0;

      const startPositions = Array.from(images).map(() => ({
        x: 0,
        y: 0,
        z: -200,
        scale: 0,
      }));

      const endPositions = scatterDirections.map((dir) => ({
        x: dir.x * screenWidth * scatterMultiplier,
        y: dir.y * screenHeight * scatterMultiplier,
        z: 2000,
        scale: isMobile ? 3.5 : 7.0,
      }));

      images.forEach((img, index) => {
        gsap.set(img, {
          ...startPositions[index],
          opacity: 1, // Add this to ensure images are visible from start
        });
      });

      gsap.set(coverImg, {
        z: -1000,
        scale: 0,
        x: 0,
        y: 0,
        opacity: 1, // Add this to ensure cover image is visible
      });

      // Different scroll distances for mobile vs desktop
      const scrollDistance = isMobile
        ? window.innerHeight * 4
        : window.innerHeight * 4;

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: container.querySelector(".isolated-explosion-spotlight"),
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1, // Add this to prevent flashing
        onUpdate: (self) => {
          const progress = self.progress;

          images.forEach((img, index) => {
            const staggerDelay = index * 0.03;
            let imageProgress = Math.max(0, (progress - staggerDelay) * 1.2);

            const start = startPositions[index];
            const end = endPositions[index];

            const zValue = gsap.utils.interpolate(
              start.z,
              end.z,
              imageProgress,
            );
            const scaleValue = gsap.utils.interpolate(
              start.scale,
              end.scale,
              imageProgress,
            );
            const xValue = gsap.utils.interpolate(
              start.x,
              end.x,
              imageProgress,
            );
            const yValue = gsap.utils.interpolate(
              start.y,
              end.y,
              imageProgress,
            );

            gsap.set(img, {
              z: zValue,
              scale: scaleValue,
              x: xValue,
              y: yValue,
            });
          });

          // Cover image appears earlier and faster
          const coverProgress = Math.max(0, Math.min(1, (progress - 0.3) * 5));
          const coverZValue = isMobile
            ? -100 + 600 * coverProgress
            : -1000 + 1000 * coverProgress;
          const coverScaleValue = coverProgress;

          gsap.set(coverImg, {
            z: coverZValue,
            scale: coverScaleValue,
            x: 0,
            y: 0,
          });

          // Intro header fade out
          if (introWordElements.length > 0) {
            if (progress >= 0.7 && progress <= 0.6) {
              const introFadeProgress = (progress - 0.4) / 0.2;
              const totalWords = introWordElements.length;

              introWordElements.forEach((word, index) => {
                const wordFadeProgress = index / totalWords;
                const fadeRange = 0.1;

                if (introFadeProgress >= wordFadeProgress + fadeRange) {
                  gsap.set(word, { opacity: 0 });
                } else if (introFadeProgress <= wordFadeProgress) {
                  gsap.set(word, { opacity: 1 });
                } else {
                  const wordOpacity =
                    1 - (introFadeProgress - wordFadeProgress) / fadeRange;
                  gsap.set(word, { opacity: wordOpacity });
                }
              });
            } else if (progress < 0.4) {
              gsap.set(introWordElements, { opacity: 1 });
            } else if (progress > 0.6) {
              gsap.set(introWordElements, { opacity: 0 });
            }
          }

          // Outro header fade in
          if (outroWordElements.length > 0) {
            if (progress >= 0.6 && progress <= 0.8) {
              const outroFadeProgress = (progress - 0.6) / 0.2;
              const totalWords = outroWordElements.length;

              outroWordElements.forEach((word, index) => {
                const wordFadeProgress = index / totalWords;
                const fadeRange = 0.1;

                if (outroFadeProgress >= wordFadeProgress + fadeRange) {
                  gsap.set(word, { opacity: 1 });
                } else if (outroFadeProgress <= wordFadeProgress) {
                  gsap.set(word, { opacity: 0 });
                } else {
                  const wordOpacity =
                    (outroFadeProgress - wordFadeProgress) / fadeRange;
                  gsap.set(word, { opacity: wordOpacity });
                }
              });
            } else if (progress < 0.6) {
              gsap.set(outroWordElements, { opacity: 0 });
            } else if (progress > 0.8) {
              gsap.set(outroWordElements, { opacity: 1 });
            }
          }
        },
      });
    };

    // Delay initialization to ensure everything is ready
    const timer = setTimeout(() => {
      initSpotlightAnimations();
      ScrollTrigger.refresh();
    }, 300);

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initSpotlightAnimations();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="isolated-explosion-container">
      <div className="isolated-explosion-spotlight relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
        <div className="isolated-explosion-intro-header pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white md:text-7xl h-1"></h1>
        </div>
        <div className="isolated-explosion-outro-header pointer-events-none absolute inset-0 z-20 flex items-center justify-center mt-60 ml-88">
          <h1 className="text-center text-4xl font-bold text-white md:text-7xl">
            Creators Behind Growth
          </h1>
        </div>

        {/* Images container with proper stacking */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {[
            "abhi.jpeg",
            "rohith.jpeg",
            "lallu.png",
            "adhithya.jpeg",
            "swafuvan.jpeg",
            "hijaz.jpeg",
            "aslam.jpeg",
          ].map((num) => (
            <Image
              key={num}
              src={`${num}`}
              alt={`Image ${num}`}
              width={400}
              height={400}
              className="isolated-explosion-img absolute"
              style={{ transformStyle: "preserve-3d" }}
            />
          ))}
          <Image
            // src="/blog-3.webp"
            src="/top-leaders.png"
            alt="Cover Image"
            width={500}
            height={500}
            className="isolated-explosion-cover-img absolute w-full hidden md:block"
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
      </div>
    </div>
  );
};

export default IsolatedExplosionImage;
