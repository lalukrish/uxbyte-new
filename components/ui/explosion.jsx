// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const ExplosionImage = () => {
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Smooth scrolling setup
//     const updateScroll = () => {
//       ScrollTrigger.update();
//     };

//     let rafId;
//     const smoothScroll = () => {
//       updateScroll();
//       rafId = requestAnimationFrame(smoothScroll);
//     };
//     rafId = requestAnimationFrame(smoothScroll);

//     initSpotlightAnimations();

//     const handleResize = () => {
//       ScrollTrigger.refresh();
//       initSpotlightAnimations();
//     };

//     window.addEventListener("resize", handleResize);

//     function initSpotlightAnimations() {
//       // Kill existing ScrollTriggers to prevent duplicates
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//       const images = document.querySelectorAll(".img");
//       const coverImg = document.querySelector(".spotlight-cover-img");
//       const introHeader = document.querySelector(".spotlight-intro-header h1");
//       const outroHeader = document.querySelector(".spotlight-outro-header h1");

//       if (!images.length || !coverImg || !introHeader) return;

//       // Split text for word-by-word animation
//       const introWords = introHeader.textContent.split(" ");
//       const outroWords = outroHeader ? outroHeader.textContent.split(" ") : [];

//       introHeader.innerHTML = introWords
//         .map((word) => `<span class="word">${word}</span>`)
//         .join(" ");
//       if (outroHeader) {
//         outroHeader.innerHTML = outroWords
//           .map((word) => `<span class="word">${word}</span>`)
//           .join(" ");
//       }

//       const introWordElements = introHeader.querySelectorAll(".word");
//       const outroWordElements = outroHeader
//         ? outroHeader.querySelectorAll(".word")
//         : [];

//       gsap.set(introWordElements, { opacity: 1 });
//       gsap.set(outroWordElements, { opacity: 0 });

//       const scatterDirections = [
//         { x: 1.8, y: 1.2 },
//         { x: -1.9, y: -0.4 },
//         { x: 2.2, y: 1.1 },
//         { x: -2.0, y: -1.0 },
//         { x: 2.4, y: 2.2 },
//         { x: -2.2, y: -1.0 },
//         { x: 2.6, y: 2.0 },
//         { x: -2.4, y: -0.8 },
//         { x: 2.8, y: 2.6 },
//         { x: -2.6, y: -1.4 },
//         { x: 3.0, y: 2.8 },
//         { x: -1.5, y: -2.2 },
//         { x: 1.2, y: 2.4 },
//         { x: -2.8, y: 0.6 },
//         { x: 1.4, y: -2.6 },
//         { x: -1.2, y: 2.8 },
//         { x: 2.4, y: -1.4 },
//         { x: -2.0, y: -1.8 },
//         { x: 1.0, y: 3.0 },
//         { x: 1.8, y: -3.0 },
//       ];

//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;
//       const isMobile = screenWidth < 1000;
//       const scatterMultiplier = isMobile ? 3.0 : 2.0;

//       const startPositions = Array.from(images).map(() => ({
//         x: 0,
//         y: 0,
//         z: -1200,
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

//       ScrollTrigger.create({
//         trigger: ".spotlight",
//         start: "top top",
//         end: `+=${window.innerHeight * 15}px`,
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
//               imageProgress
//             );
//             const scaleValue = gsap.utils.interpolate(
//               start.scale,
//               end.scale,
//               imageProgress
//             );
//             const xValue = gsap.utils.interpolate(
//               start.x,
//               end.x,
//               imageProgress
//             );
//             const yValue = gsap.utils.interpolate(
//               start.y,
//               end.y,
//               imageProgress
//             );

//             gsap.set(img, {
//               z: zValue,
//               scale: scaleValue,
//               x: xValue,
//               y: yValue,
//             });
//           });

//           const coverProgress = Math.max(0, (progress - 0.7) * 4);
//           const coverZValue = -1000 + 2000 * coverProgress;
//           const coverScaleValue = Math.min(1, coverProgress * 2);

//           gsap.set(coverImg, {
//             z: coverZValue,
//             scale: coverScaleValue,
//             x: 0,
//             y: 0,
//           });

//           // Intro header fade out
//           if (introWordElements.length > 0) {
//             if (progress >= 0.6 && progress <= 0.75) {
//               const introFadeProgress = (progress - 0.6) / 0.15;
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
//             } else if (progress < 0.6) {
//               gsap.set(introWordElements, { opacity: 1 });
//             } else if (progress > 0.75) {
//               gsap.set(introWordElements, { opacity: 0 });
//             }
//           }

//           // Outro header fade in
//           if (outroWordElements.length > 0) {
//             if (progress >= 0.75 && progress <= 0.9) {
//               const outroFadeProgress = (progress - 0.75) / 0.15;
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
//             } else if (progress < 0.75) {
//               gsap.set(outroWordElements, { opacity: 0 });
//             } else if (progress > 0.9) {
//               gsap.set(outroWordElements, { opacity: 1 });
//             }
//           }
//         },
//       });
//     }

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(rafId);
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div>
//       <section className="intro">
//         <h1>visions that move beyond the surface</h1>
//       </section>
//       <section className="spotlight">
//         <section className="spotlight-images">
//           <div className="img">
//             <img src="/hero_image1.png" alt="" />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//           <div className="img">
//             <img
//               src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//               alt=""
//             />
//           </div>
//         </section>
//         <section className="spotlight-cover-img">
//           <img
//             src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop"
//             alt=""
//           />
//         </section>

//         <section className="spotlight-intro-header">
//           <h1>when motion and stillness collide in layers</h1>
//         </section>
//         <section className="spotlight-outro-header">
//           <h1>revealing depth in every dimension</h1>
//         </section>
//       </section>

//       <section className="outro">
//         <h1>the future begins where this moment ends</h1>
//       </section>

//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
//           --light: #f5f5f5;
//           --dark: #0a0a0a;
//           background: var(--dark);
//         }

//         img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         h1 {
//           font-size: 5rem;
//           font-weight: 500;
//           letter-spacing: -0.1rem;
//           line-height: 0.9;
//         }

//         section {
//           position: relative;
//           width: 100vw;
//           height: 100vh;
//           padding: 2rem;
//           overflow: hidden;
//         }

//         .intro,
//         .outro {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background-color: var(--light);
//           color: var(--dark);
//         }

//         .intro h1,
//         .outro h1 {
//           width: 50%;
//           text-align: center;
//         }

//         .spotlight {
//           background-color: var(--dark);
//           color: var(--light);
//         }

//         .spotlight-images,
//         .spotlight-cover-img {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//           perspective: 2000px;
//         }

//         .img {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 500px;
//           height: 350px;
//           will-change: transform;
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
//         }

//         .spotlight-cover-img {
//           will-change: transform;
//         }

//         .spotlight-intro-header,
//         .spotlight-outro-header {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           text-align: center;
//           width: 50%;
//           pointer-events: none;
//         }

//         .spotlight-intro-header {
//           z-index: 1;
//         }

//         .spotlight-outro-header {
//           z-index: 10;
//         }

//         .word {
//           display: inline-block;
//           white-space: pre;
//         }

//         @media (max-width: 1000px) {
//           h1 {
//             font-size: 2.5rem;
//           }

//           .intro h1,
//           .outro h1,
//           .spotlight-intro-header,
//           .spotlight-outro-header {
//             width: 90%;
//             padding: 2rem;
//           }

//           .img {
//             width: 200px;
//             height: 400px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ExplosionImage;

// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const ExplosionImage = () => {
//   const scrollTriggerRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const initSpotlightAnimations = () => {
//       // Kill existing ScrollTrigger to prevent duplicates
//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.kill();
//         scrollTriggerRef.current = null;
//       }

//       const images = document.querySelectorAll(".explosion-img");
//       const coverImg = document.querySelector(".explosion-cover-img");
//       const introHeader = document.querySelector(".explosion-intro-header h1");
//       const outroHeader = document.querySelector(".explosion-outro-header h1");

//       if (!images.length || !coverImg || !introHeader) return;

//       // Split text for word-by-word animation
//       const introWords = introHeader.textContent.split(" ");
//       const outroWords = outroHeader ? outroHeader.textContent.split(" ") : [];

//       introHeader.innerHTML = introWords
//         .map((word) => `<span class="explosion-word">${word}</span>`)
//         .join(" ");
//       if (outroHeader) {
//         outroHeader.innerHTML = outroWords
//           .map((word) => `<span class="explosion-word">${word}</span>`)
//           .join(" ");
//       }

//       const introWordElements = introHeader.querySelectorAll(".explosion-word");
//       const outroWordElements = outroHeader
//         ? outroHeader.querySelectorAll(".explosion-word")
//         : [];

//       gsap.set(introWordElements, { opacity: 1 });
//       gsap.set(outroWordElements, { opacity: 0 });

//       const scatterDirections = [
//         { x: 1.8, y: 0.4 },
//         { x: -1.9, y: 0.4 },
//         { x: 2.2, y: 1.1 },
//         { x: -2.0, y: -1.0 },
//         { x: 2.4, y: 1.6 },
//         { x: -2.2, y: 0.4 },
//         { x: 2.6, y: 2.0 },
//         { x: -2.4, y: -0.8 },
//         { x: 1.8, y: 1.6 },
//         { x: -2.6, y: -1.4 },
//         { x: 2.4, y: 2.1 },
//         { x: 1.5, y: 1.7 },
//       ];

//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;
//       const isMobile = screenWidth < 1000;
//       const scatterMultiplier = isMobile ? 3.0 : 2.0;

//       const startPositions = Array.from(images).map(() => ({
//         x: 0,
//         y: 0,
//         z: -1200,
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

//       scrollTriggerRef.current = ScrollTrigger.create({
//         trigger: ".explosion-spotlight",
//         start: "top top",
//         end: `+=${window.innerHeight * 15}px`,
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
//               imageProgress
//             );
//             const scaleValue = gsap.utils.interpolate(
//               start.scale,
//               end.scale,
//               imageProgress
//             );
//             const xValue = gsap.utils.interpolate(
//               start.x,
//               end.x,
//               imageProgress
//             );
//             const yValue = gsap.utils.interpolate(
//               start.y,
//               end.y,
//               imageProgress
//             );

//             gsap.set(img, {
//               z: zValue,
//               scale: scaleValue,
//               x: xValue,
//               y: yValue,
//             });
//           });

//           const coverProgress = Math.max(0, (progress - 0.7) * 4);
//           const coverZValue = -1000 + 2000 * coverProgress;
//           const coverScaleValue = Math.min(1, coverProgress * 2);

//           gsap.set(coverImg, {
//             z: coverZValue,
//             scale: coverScaleValue,
//             x: 0,
//             y: 0,
//           });

//           // Intro header fade out
//           if (introWordElements.length > 0) {
//             if (progress >= 0.6 && progress <= 0.75) {
//               const introFadeProgress = (progress - 0.6) / 0.15;
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
//             } else if (progress < 0.6) {
//               gsap.set(introWordElements, { opacity: 1 });
//             } else if (progress > 0.75) {
//               gsap.set(introWordElements, { opacity: 0 });
//             }
//           }

//           // Outro header fade in
//           if (outroWordElements.length > 0) {
//             if (progress >= 0.75 && progress <= 0.9) {
//               const outroFadeProgress = (progress - 0.75) / 0.15;
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
//             } else if (progress < 0.75) {
//               gsap.set(outroWordElements, { opacity: 0 });
//             } else if (progress > 0.9) {
//               gsap.set(outroWordElements, { opacity: 1 });
//             }
//           }
//         },
//       });
//     };

//     // Delay initialization to ensure Lenis is ready
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

//     // ✅ PROPER CLEANUP
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
//     <div className="overflow-x-auto">
//       <style>{`
//         .explosion-images,
//         .explosion-cover-img-wrapper {
//           transform-style: preserve-3d;
//           perspective: 2000px;
//         }

//         .explosion-img {
//           will-change: transform;
//         }

//         .explosion-cover-img-wrapper {
//           will-change: transform;
//         }

//         .explosion-word {
//           display: inline-block;
//           white-space: pre;
//         }
//       `}</style>

//       <div id="explosure" className="explosion-wrapper overflow-x-hidden">
//         <section className="explosion-spotlight relative w-screen h-screen p-8 overflow-hidden bg-black text-gray-100">
//           <section className="explosion-images absolute top-0 left-0 w-full h-full">
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=550&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[450px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[410px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[470px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[510px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </section>

//           <section className="explosion-cover-img-wrapper absolute top-0 left-0 w-full h-full">
//             <div className="explosion-cover-img w-full h-full bg-black flex items-center justify-center">
//               <div className="text-white text-9xl font-bold">COVER</div>
//             </div>
//           </section>

//           <section className="explosion-intro-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2 lg:w-1/2 md:w-[90%] pointer-events-none z-[1] p-8 md:p-8">
//             <h1 className="text-7xl lg:text-8xl md:text-4xl font-medium tracking-tight leading-[0.9]">
//               when motion and stillness collide in layers
//             </h1>
//           </section>

//           <section className="explosion-outro-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2 lg:w-1/2 md:w-[90%] pointer-events-none z-10 p-8 md:p-8">
//             <h1 className="text-7xl lg:text-8xl md:text-4xl font-medium tracking-tight leading-[0.9]">
//               revealing depth in every dimension
//             </h1>
//           </section>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ExplosionImage;

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
        ".isolated-explosion-intro-header h1"
      );
      const outroHeader = container.querySelector(
        ".isolated-explosion-outro-header h1"
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
        ".isolated-explosion-word"
      );
      const outroWordElements = outroHeader
        ? outroHeader.querySelectorAll(".isolated-explosion-word")
        : [];

      gsap.set(introWordElements, { opacity: 1 });
      gsap.set(outroWordElements, { opacity: 0 });

      const scatterDirections = [
        { x: 1.9, y: 0.4 },
        { x: -1.9, y: 0.6 },
        { x: 1.9, y: -0.8 },
        { x: -1.9, y: -1.0 },
        { x: 1.1, y: 2.5 },
        { x: -1.9, y: 1.4 },
        { x: 0.4, y: -2.3 },
        { x: -1.0, y: -0.8 },
        { x: 1.8, y: 1.6 },
        { x: -2.6, y: -1.4 },
        { x: 2.4, y: 2.1 },
        { x: -1.5, y: 1.1 },
      ];

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const isMobile = screenWidth < 1000;
      const scatterMultiplier = isMobile ? 3.0 : 2.0;

      const startPositions = Array.from(images).map(() => ({
        x: 0,
        y: 0,
        z: -1200,
        scale: 0,
      }));

      const endPositions = scatterDirections.map((dir) => ({
        x: dir.x * screenWidth * scatterMultiplier,
        y: dir.y * screenHeight * scatterMultiplier,
        z: 2000,
        scale: isMobile ? 3.5 : 7.0,
      }));

      images.forEach((img, index) => {
        gsap.set(img, startPositions[index]);
      });

      gsap.set(coverImg, {
        z: -1000,
        scale: 0,
        x: 0,
        y: 0,
      });

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: container.querySelector(".isolated-explosion-spotlight"),
        start: "top top",
        end: `+=${window.innerHeight * 15}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
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
              imageProgress
            );
            const scaleValue = gsap.utils.interpolate(
              start.scale,
              end.scale,
              imageProgress
            );
            const xValue = gsap.utils.interpolate(
              start.x,
              end.x,
              imageProgress
            );
            const yValue = gsap.utils.interpolate(
              start.y,
              end.y,
              imageProgress
            );

            gsap.set(img, {
              z: zValue,
              scale: scaleValue,
              x: xValue,
              y: yValue,
            });
          });

          const coverProgress = Math.max(0, (progress - 0.7) * 4);
          const coverZValue = -1000 + 2000 * coverProgress;
          const coverScaleValue = Math.min(1, coverProgress * 2);

          gsap.set(coverImg, {
            z: coverZValue,
            scale: coverScaleValue,
            x: 0,
            y: 0,
          });

          // Intro header fade out
          if (introWordElements.length > 0) {
            if (progress >= 0.6 && progress <= 0.75) {
              const introFadeProgress = (progress - 0.6) / 0.15;
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
            } else if (progress < 0.6) {
              gsap.set(introWordElements, { opacity: 1 });
            } else if (progress > 0.75) {
              gsap.set(introWordElements, { opacity: 0 });
            }
          }

          // Outro header fade in
          if (outroWordElements.length > 0) {
            if (progress >= 0.75 && progress <= 0.9) {
              const outroFadeProgress = (progress - 0.75) / 0.15;
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
            } else if (progress < 0.75) {
              gsap.set(outroWordElements, { opacity: 0 });
            } else if (progress > 0.9) {
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
    <section data-people-section className="data-people-section">
      <div
        ref={containerRef}
        className="isolated-explosion-wrapper relative"
        style={{ isolation: "isolate", zIndex: 1 }}
      >
        <style>{`
        .isolated-explosion-images,
        .isolated-explosion-cover-img-wrapper {
          transform-style: preserve-3d;
          perspective: 2000px;
        }

        .isolated-explosion-img {
          will-change: transform;
        }

        .isolated-explosion-cover-img-wrapper {
          will-change: transform;
        }

        .isolated-explosion-word {
          display: inline-block;
          white-space: pre;
        }
      `}</style>

        <div className="overflow-x-hidden">
          <section className="isolated-explosion-spotlight relative w-screen h-screen p-8 overflow-hidden bg-black text-gray-100">
            <section className="isolated-explosion-images absolute top-0 left-0 w-full h-full">
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/aslam.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] lg:w-[400px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="hijaz.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="swafuvan.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] lg:w-[400px] lg:h-[450px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="adhithya.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[650px] lg:w-[500px] lg:h-[630px] md:w-[200px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/abhi.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] lg:w-[500px] lg:h-[510px] md:w-[200px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="rohith.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[650px] lg:w-[500px] lg:h-[570px] md:w-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/lallu.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[450px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&h=350&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[450px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=350&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&h=350&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[450px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=500&h=350&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[400px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=350&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            <section className="isolated-explosion-cover-img-wrapper absolute top-0 left-0 w-full h-full">
              <div className="isolated-explosion-cover-img w-full h-full bg-black flex items-center justify-center">
                <Image src="/blog-3.webp" alt="powerful persons" fill />{" "}
              </div>
            </section>

            <section className="isolated-explosion-intro-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2 lg:w-1/2 md:w-[90%] pointer-events-none z-[1] p-8 md:p-8">
              <h1 className="text-7xl lg:text-8xl md:text-4xl font-medium tracking-tight leading-[0.9] h-1"></h1>
            </section>

            <section className="isolated-explosion-outro-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2 lg:w-1/2 md:w-[90%] pointer-events-none z-10 p-8 md:p-8">
              <h1 className="text-7xl lg:text-8xl md:text-4xl font-medium tracking-tight leading-[0.9]">
                revealing depth in every dimension
              </h1>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IsolatedExplosionImage;
// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

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
//         ".isolated-explosion-intro-header h1"
//       );
//       const outroHeader = container.querySelector(
//         ".isolated-explosion-outro-header h1"
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
//         ".isolated-explosion-word"
//       );
//       const outroWordElements = outroHeader
//         ? outroHeader.querySelectorAll(".isolated-explosion-word")
//         : [];

//       gsap.set(introWordElements, { opacity: 1 });
//       gsap.set(outroWordElements, { opacity: 0 });

//       const scatterDirections = [
//         { x: 1.8, y: 0.4 },
//         { x: -1.9, y: 0.4 },
//         { x: 2.2, y: 1.1 },
//         { x: -2.0, y: -1.0 },
//         { x: 2.4, y: 1.6 },
//         { x: -2.2, y: 0.4 },
//         { x: 2.6, y: 2.0 },
//         { x: -2.4, y: -0.8 },
//         { x: 1.8, y: 1.6 },
//         { x: -2.6, y: -1.4 },
//         { x: 2.4, y: 2.1 },
//         { x: 1.5, y: 1.7 },
//       ];

//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;
//       const isMobile = screenWidth < 1000;
//       const scatterMultiplier = isMobile ? 3.0 : 2.0;

//       const startPositions = Array.from(images).map(() => ({
//         x: 0,
//         y: 0,
//         z: -1200,
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

//       scrollTriggerRef.current = ScrollTrigger.create({
//         trigger: container.querySelector(".isolated-explosion-spotlight"),
//         start: "top top",
//         end: `+=${window.innerHeight * 15}px`,
//         pin: true,
//         pinSpacing: true,
//         scrub: 1,
//         id: "explosion-animation",
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
//               imageProgress
//             );
//             const scaleValue = gsap.utils.interpolate(
//               start.scale,
//               end.scale,
//               imageProgress
//             );
//             const xValue = gsap.utils.interpolate(
//               start.x,
//               end.x,
//               imageProgress
//             );
//             const yValue = gsap.utils.interpolate(
//               start.y,
//               end.y,
//               imageProgress
//             );

//             gsap.set(img, {
//               z: zValue,
//               scale: scaleValue,
//               x: xValue,
//               y: yValue,
//             });
//           });

//           const coverProgress = Math.max(0, (progress - 0.7) * 4);
//           const coverZValue = -1000 + 2000 * coverProgress;
//           const coverScaleValue = Math.min(1, coverProgress * 2);

//           gsap.set(coverImg, {
//             z: coverZValue,
//             scale: coverScaleValue,
//             x: 0,
//             y: 0,
//           });

//           // Intro header fade out
//           if (introWordElements.length > 0) {
//             if (progress >= 0.6 && progress <= 0.75) {
//               const introFadeProgress = (progress - 0.6) / 0.15;
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
//             } else if (progress < 0.6) {
//               gsap.set(introWordElements, { opacity: 1 });
//             } else if (progress > 0.75) {
//               gsap.set(introWordElements, { opacity: 0 });
//             }
//           }

//           // Outro header fade in
//           if (outroWordElements.length > 0) {
//             if (progress >= 0.75 && progress <= 0.9) {
//               const outroFadeProgress = (progress - 0.75) / 0.15;
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
//             } else if (progress < 0.75) {
//               gsap.set(outroWordElements, { opacity: 0 });
//             } else if (progress > 0.9) {
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
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="isolated-explosion-wrapper"
//       style={{ isolation: "isolate", position: "relative", zIndex: 10 }}
//     >
//       <style>{`
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

//       <div className="overflow-x-hidden">
//         <section className="isolated-explosion-spotlight relative w-screen h-screen p-8 overflow-hidden bg-black text-gray-100">
//           <section className="isolated-explosion-images absolute top-0 left-0 w-full h-full">
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=550&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[450px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[410px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[470px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[510px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="isolated-explosion-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] lg:w-[500px] lg:h-[350px] md:w-[200px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=350&fit=crop"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </section>

//           <section className="isolated-explosion-cover-img-wrapper absolute top-0 left-0 w-full h-full">
//             <div className="isolated-explosion-cover-img w-full h-full bg-black flex items-center justify-center">
//               {/* <div className="text-white text-9xl font-bold">COVER</div> */}
//               <img src="/run-man.png" alt="" />
//             </div>
//           </section>

//           <section className="isolated-explosion-intro-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2 lg:w-1/2 md:w-[90%] pointer-events-none z-[1] p-8 md:p-8">
//             <h1 className="text-7xl lg:text-8xl md:text-4xl font-medium tracking-tight leading-[0.9]">
//               when motion and stillness collide in layers
//             </h1>
//           </section>

//           <section className="isolated-explosion-outro-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2 lg:w-1/2 md:w-[90%] pointer-events-none z-10 p-8 md:p-8">
//             <h1 className="text-7xl lg:text-8xl md:text-4xl font-medium tracking-tight leading-[0.9]">
//               revealing depth in every dimension
//             </h1>
//           </section>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default IsolatedExplosionImage;
