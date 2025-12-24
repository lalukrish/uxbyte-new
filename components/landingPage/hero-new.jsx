"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    },
    {
      src: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=400&h=400&fit=crop",
      alt: "Red fabric hands",
    },
    {
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
      alt: "Pink book",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      alt: "Person",
    },
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
      alt: "Landscape",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Calculate total scroll width needed
      const totalWidth = images.length * 320; // 300px + 20px gap
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth + 200; // Extra 200px padding

      gsap.to(imagesRef.current, {
        x: () => -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollDistance * 2}`, // Multiply for scroll duration
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [images.length]);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 lg:px-24 mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.89-7-5.23-7-9.5V8.3l7-3.11v15.62z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900">hatch</span>
        </div>

        <div className="flex items-center gap-8">
          <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Schedule a Demo
          </button>
          {/* <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
        </div>
      </nav>

      {/* Spacer to allow scrolling */}
      {/* <div className="h-screen"></div> */}

      {/* Hero Section with Horizontal Scroll */}
      <section
        ref={containerRef}
        className=" bg-white overflow-hidden relative"
      >
        <div className="h-full flex items-center">
          <main className="w-full 2xl:px-56 xl:px-40 px-8">
            {/* Headline */}
            <div className="max-w-4xl mb-12">
              <h1 className="text-7xl font-bold leading-tight mb-6">
                <span>Where curiosity</span>
                <br />
                <span>roams, </span>
                <LayoutTextFlip
                  words={["you think.", "imagine", "you think."]}
                />
              </h1>

              <p className="text-xl text-gray-500">
                All of your notes, bookmarks, and documents at your fingertips.
              </p>
            </div>

            {/* Horizontal Image Scroll */}
            <div className="overflow-visible">
              <div ref={imagesRef} className="flex gap-5 will-change-transform">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[300px] h-[300px] rounded-3xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
