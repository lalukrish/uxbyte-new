// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Image from "next/image";

// // gsap.registerPlugin(ScrollTrigger);

// // // Simple text flip component
// // function LayoutTextFlip({ words }) {
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setIndex((i) => (i + 1) % words.length);
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, [words.length]);

// //   return <span className="inline-block">{words[index]}</span>;
// // }

// // export default function HeroNew() {
// //   const containerRef = useRef(null);
// //   const imagesRef = useRef(null);

// //   const images = [
// //     {
// //       src: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop",
// //       alt: "Camera on yellow background",
// //     },
// //     {
// //       src: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=400&h=400&fit=crop",
// //       alt: "Red fabric hands",
// //     },
// //     {
// //       src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
// //       alt: "Pink book",
// //     },
// //     {
// //       src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
// //       alt: "Person",
// //     },
// //     {
// //       src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
// //       alt: "Landscape",
// //     },
// //   ];

// //   useEffect(() => {
// //     let ctx = gsap.context(() => {
// //       // Calculate total scroll width needed
// //       const totalWidth = images.length * 320; // 300px + 20px gap
// //       const viewportWidth = window.innerWidth;
// //       const scrollDistance = totalWidth - viewportWidth + 200; // Extra 200px padding

// //       gsap.to(imagesRef.current, {
// //         x: () => -scrollDistance,
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: containerRef.current,
// //           start: "top top",
// //           end: () => `+=${scrollDistance * 2}`, // Multiply for scroll duration
// //           scrub: 1,
// //           pin: true,
// //           anticipatePin: 1,
// //           invalidateOnRefresh: true,
// //         },
// //       });
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, [images.length]);

// //   return (
// //     <div className="bg-white">
// //       {/* Navigation */}
// //       <nav className="flex items-center justify-between px-8 py-6 lg:px-24 mx-auto">
// //         <div className="flex items-center gap-2">
// //           <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
// //             <Image src="/logo-1.png" alt="logo" width={100} height={100} />
// //           </div>
// //           <span className="text-2xl font-bold text-gray-900">
// //             Uxbyte Studio
// //           </span>
// //         </div>

// //         <div className="flex items-center gap-8">
// //           <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
// //             Schedule a Demo
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Spacer to allow scrolling */}
// //       {/* <div className="h-screen"></div> */}

// //       {/* Hero Section with Horizontal Scroll */}
// //       <section
// //         ref={containerRef}
// //         className=" bg-white overflow-hidden relative mt-20"
// //       >
// //         <div className="h-full flex items-center">
// //           <main className="w-full 2xl:px-56 xl:px-24 px-8">
// //             {/* Headline */}
// //             <div className="max-w-4xl mb-12">
// //               <h1 className="text-7xl font-bold leading-tight mb-6">
// //                 <span>Where curiosity</span>
// //                 <br />
// //                 <span>roams, </span>
// //                 <LayoutTextFlip
// //                   words={["you think.", "imagine", "you think."]}
// //                 />
// //               </h1>

// //               <p className="text-xl text-gray-500">
// //                 All of your notes, bookmarks, and documents at your fingertips.
// //               </p>
// //             </div>

// //             {/* Horizontal Image Scroll */}
// //             <div className="overflow-visible">
// //               <div ref={imagesRef} className="flex gap-5 will-change-transform">
// //                 {images.map((img, i) => (
// //                   <div
// //                     key={i}
// //                     className="flex-shrink-0 w-[300px] h-[300px] rounded-3xl overflow-hidden shadow-lg"
// //                   >
// //                     <img
// //                       src={img.src}
// //                       alt={img.alt}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </main>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

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

// export default function HeroNew() {
//   const containerRef = useRef(null);
//   const imagesRef = useRef(null);
//   const scrollTriggerRef = useRef(null);

//   const images = [
//     {
//       src: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop",
//       alt: "Camera on yellow background",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=400&h=400&fit=crop",
//       alt: "Red fabric hands",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
//       alt: "Pink book",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//       alt: "Person",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
//       alt: "Landscape",
//     },
//   ];

//   useLayoutEffect(() => {
//     if (!containerRef.current || !imagesRef.current) return;

//     gsap.registerPlugin(ScrollTrigger);

//     const section = containerRef.current;
//     const track = imagesRef.current;

//     // Calculate how much we need to scroll horizontally
//     const scrollWidth = track.scrollWidth;
//     const viewportWidth = section.offsetWidth;
//     const scrollDistance = scrollWidth - viewportWidth;

//     if (scrollDistance <= 0) return;

//     // Horizontal animation
//     const animation = gsap.to(track, {
//       x: "-55vw",
//       ease: "none",
//     });

//     // ScrollTrigger
//     const st = ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       end: `+=${scrollDistance * 3.5}`, // 🔥 controls smoothness
//       scrub: 1.1, // 🔥 smoother than `true`
//       pin: true,
//       anticipatePin: 1,
//       animation,
//       invalidateOnRefresh: true,
//     });

//     return () => {
//       st.kill();
//       animation.kill();
//     };
//   }, []);

//   // Handle resize
//   useEffect(() => {
//     let resizeTimer;
//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         ScrollTrigger.refresh();
//       }, 250);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       clearTimeout(resizeTimer);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="bg-white">
//       {/* Navigation */}
//       <nav className="flex items-center justify-between px-8 py-6 lg:px-24 mx-auto">
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
//             <div className="w-8 h-8 bg-white rounded"></div>
//           </div>
//           <span className="text-2xl font-bold text-gray-900">
//             Uxbyte Studio
//           </span>
//         </div>

//         <div className="flex items-center gap-8">
//           <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
//             Schedule a Demo
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section with Horizontal Scroll */}
//       <section
//         ref={containerRef}
//         className="hero-section bg-white relative mt-10"
//       >
//         <div className="h-screen flex items-center">
//           <main className="w-full 2xl:px-56 xl:px-24 px-8">
//             {/* Headline */}
//             <div className="max-w-4xl mb-12">
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
//                 <span>Where curiosity</span>
//                 <br />
//                 <span>roams, </span>
//                 <LayoutTextFlip
//                   words={["you think.", "imagine", "you create."]}
//                 />
//               </h1>

//               <p className="text-xl text-gray-500">
//                 All of your notes, bookmarks, and documents at your fingertips.
//               </p>
//             </div>

//             {/* Horizontal Image Scroll */}
//             <div className="overflow-hidden 2xl:pl-40">
//               <div
//                 ref={imagesRef}
//                 className="flex gap-5 w-max will-change-transform"
//               >
//                 {images.map((img, i) => (
//                   <div
//                     key={i}
//                     className="flex-shrink-0 w-[300px] h-[300px] rounded-3xl overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={img.src}
//                       alt={img.alt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </main>
//         </div>
//       </section>

//       {/* Space for scroll */}
//     </div>
//   );
// }

"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { EncryptedText } from "../ui/encrypted-text";
import MobileArticleCarousel from "./card-caruosel";

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

export default function HeroNew() {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop",
      alt: "Camera on yellow background",
      chip: "Photography",
    },
    {
      src: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=400&h=400&fit=crop",
      alt: "Red fabric hands",
      chip: "Creative Arts",
    },
    {
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
      alt: "Pink book",
      chip: "Reading",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      alt: "Person",
      chip: "People",
    },
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
      alt: "Landscape",
      chip: "Travel",
    },
  ];

  useLayoutEffect(() => {
    if (!containerRef.current || !imagesRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = containerRef.current;
    const track = imagesRef.current;

    // Calculate how much we need to scroll horizontally
    const getScrollDistance = () => {
      const scrollWidth = track.scrollWidth;
      const containerWidth = track.parentElement.offsetWidth;
      return scrollWidth - containerWidth;
    };

    const scrollDistance = getScrollDistance();

    if (scrollDistance <= 0) return;

    // Horizontal animation - calculate dynamically
    const animation = gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: "none",
    });

    // ScrollTrigger
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${scrollDistance * 3}`,
      scrub: 1.1,
      pin: true,
      anticipatePin: 1,
      animation,
      invalidateOnRefresh: true,
    });

    return () => {
      st.kill();
      animation.kill();
    };
  }, []);

  // Handle resize
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section data-hero-section className="data-hero-section bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-4 md:py-6 lg:px-24 mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-1.png"
            alt="Uxbyte Studio"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
          <span className="text-xl md:text-2xl font-bold text-gray-900">
            Uxbyte Studio
          </span>
        </div>

        {/* <div className="hidden lg:block">
          <a
            href="/contact"
            className={`inline-flex items-center gap-2 px-6 py-4.5  bg-black text-white font-medium transition-colors text-sm`}
          >
            GET IN TOUCH
            <ArrowRight size={16} />
          </a>
        </div> */}
      </nav>

      {/* Hero Section with Horizontal Scroll */}
      <div className="hidden md:block">
        <div ref={containerRef} className="bg-white relative  mt-14 ">
          <div className="h-screen flex items-center  ">
            <main className="w-full 2xl:px-56 xl:px-24 px-8 ">
              {/* Headline */}
              <div className="flex items-center justify-between gap-12 ">
                {/* Left text */}
                <div className="max-w-4xl mb-12">
                  <h1 className="text-4xl md:text-7xl font-semibold leading-tight mb-6 ">
                    <span>Where curiosity</span>
                    <br />
                    <span>roams, </span>
                    <LayoutTextFlip
                      words={["you think.", "imagine", "you create."]}
                    />
                  </h1>

                  <p className="text-xl text-gray-500">
                    All of your notes, bookmarks, and documents at your
                    fingertips.
                  </p>
                </div>

                {/* Right image */}
                <div className="flex-shrink-0 w-[460px] h-74 relative xl:-mt-25 md:block hidden">
                  <div className="w-full h-full rounded-none flex items-center justify-center overflow-hidden">
                    <img
                      src="/2026.png"
                      alt="Abstract art"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <p className="text-center absolute -mt-4 text-sm text-gray-600">
                  Version 2.0 <br />
                </p> */}
                  <div className="flex flex-col items-start gap-4 ">
                    <EncryptedText
                      normaltext=""
                      text="VERSION 2.0"
                      className="text-sm"
                      normalClassName=""
                      encryptedClassName="text-[#adadae]"
                      revealedClassName="text-gray-500 dark:text-[#adadae]"
                      revealDelayMs={30}
                    />
                  </div>
                </div>
              </div>

              {/* Horizontal Image Scroll */}
              <div className="overflow-hidden">
                <div
                  ref={imagesRef}
                  className="flex gap-5 w-max will-change-transform"
                >
                  {images.map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-[300px]">
                      <div className="relative h-[300px] rounded-none shadow-lg overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="mt-3 flex justify-center">
                        <span className="px-4 xl:px-8 py-1 border-1-black text-gray-700 rounded-none text-sm font-medium">
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
      <div className="flex flex-col  md:hidden overflow-x-hidden">
        {/* TEXT SECTION */}
        <div className="px-4 mb-1 mt-9">
          <h1 className="text-[36px] font-semibold leading-tight mb-6 text-center">
            <span>Where curiosity</span>
            <br />
            <span>roams, </span>
            <LayoutTextFlip words={["you think.", "imagine", "you create."]} />
          </h1>

          <p className="text-md text-gray-500 text-center">
            All of your notes, bookmarks, and documents at your fingertips.
          </p>
        </div>

        {/* IMAGE / CAROUSEL */}
        <div className="relative z-10">
          <MobileArticleCarousel />
        </div>
      </div>
    </section>
  );
}
