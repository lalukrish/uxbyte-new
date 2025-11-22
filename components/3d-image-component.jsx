"use client";

import React, { useEffect, useRef } from "react";

const MaritimeCarousel = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&q=80",
      title: "Neptune Odyssey",
      subtitle: "Discharged with record speed",
      startPos: { x: "-35%", y: "15%", rotation: -8, scale: 0.85 },
      size: { width: "550px", height: "380px" },
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      title: "Ocean Carrier",
      subtitle: "International freight operations",
      startPos: { x: "40%", y: "10%", rotation: 5, scale: 0.65 },
      size: { width: "420px", height: "300px" },
    },
    {
      url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
      title: "Port Machinery",
      subtitle: "Advanced loading systems",
      startPos: { x: "-40%", y: "45%", rotation: -6, scale: 0.55 },
      size: { width: "380px", height: "260px" },
    },
    {
      url: "https://images.unsplash.com/photo-1519003300449-424ad0405076?w=800&q=80",
      title: "River Barge",
      subtitle: "Bon voyage Zhen Hua 33",
      startPos: { x: "45%", y: "55%", rotation: 7, scale: 0.75 },
      size: { width: "480px", height: "340px" },
    },
    {
      url: "https://images.unsplash.com/photo-1605731414895-6f1e0b8f3b29?w=800&q=80",
      title: "Maritime Logistics",
      subtitle: "Global supply chain excellence",
      startPos: { x: "-38%", y: "70%", rotation: -7, scale: 0.6 },
      size: { width: "400px", height: "280px" },
    },
    {
      url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      title: "Container Terminal",
      subtitle: "Efficient cargo handling",
      startPos: { x: "42%", y: "-5%", rotation: 6, scale: 0.7 },
      size: { width: "450px", height: "320px" },
    },
  ];

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    script2.async = true;

    document.body.appendChild(script1);

    script1.onload = () => {
      document.body.appendChild(script2);

      script2.onload = () => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        // Set initial positions for all images
        imageRefs.current.forEach((el, index) => {
          if (!el) return;

          const img = images[index];
          const zDepth = -600 - index * 150;

          gsap.set(el, {
            x: img.startPos.x,
            y: img.startPos.y,
            z: zDepth,
            scale: img.startPos.scale,
            rotation: img.startPos.rotation,
            opacity: 0.5,
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          });
        });

        // Create master timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=7000",
            scrub: 1.5,
            pin: true,
          },
        });

        // Animate each image with unique timing and path
        images.forEach((img, index) => {
          const el = imageRefs.current[index];
          if (!el) return;

          const isLeft = img.startPos.x.includes("-");
          const exitX = isLeft ? "120%" : "-120%";
          const exitRotation = isLeft ? 25 : -25;

          const startTime = index * 1.4;

          // Phase 1: Move from position to center/front
          tl.to(
            el,
            {
              x: "0%",
              y: "0%",
              z: 200,
              scale: 1.2,
              rotation: 0,
              opacity: 1,
              duration: 1.8,
              ease: "power3.out",
            },
            startTime
          );

          // Phase 2: Slight pause and emphasis at center
          tl.to(
            el,
            {
              scale: 1.25,
              z: 250,
              duration: 0.6,
              ease: "power1.inOut",
            },
            startTime + 1.8
          );

          // Phase 3: Exit with rotation
          tl.to(
            el,
            {
              x: exitX,
              y: isLeft ? "-20%" : "20%",
              z: 400,
              scale: 0.9,
              rotation: exitRotation,
              opacity: 0,
              duration: 1.6,
              ease: "power2.in",
            },
            startTime + 2.4
          );
        });
      };
    };

    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <div className="w-full bg-slate-950">
      {/* 3D Scroll Section */}
      <div
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden"
        style={{
          perspective: "1800px",
          perspectiveOrigin: "center center",
          background: "linear-gradient(to bottom, #0f172a, #1e293b, #0f172a)",
        }}
      >
        {/* Large CASES text background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h2
            className="font-black text-white select-none tracking-tighter"
            style={{
              fontSize: "22rem",
              opacity: 0.08,
              lineHeight: 1,
              fontWeight: 900,
            }}
          >
            CASES
          </h2>
        </div>

        {/* 3D Image Stack */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {images.map((img, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="absolute"
              style={{
                width: img.size.width,
                height: img.size.height,
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
              }}
            >
              <div className="relative w-full h-full group">
                {/* Image card */}
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1 drop-shadow-lg leading-tight">
                      {img.title}
                    </h3>
                    <p className="text-sm text-gray-200 drop-shadow-md">
                      {img.subtitle}
                    </p>
                  </div>

                  {/* Top right corner accent */}
                  <div className="absolute top-4 right-4 w-14 h-14 border-t-2 border-r-2 border-white/40" />
                </div>

                {/* Glow effect behind card */}
                <div
                  className="absolute inset-0 blur-2xl opacity-30 -z-10"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 text-white/70 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-bold tracking-[0.3em] uppercase">
              Scroll
            </p>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
        </div>
      </div>

      {/* End content */}
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl text-center text-white">
          <h2 className="text-6xl font-black mb-8 tracking-tight">
            Maritime Excellence
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            Delivering comprehensive logistics solutions across global shipping
            routes. Our portfolio showcases successful operations spanning
            container ports, ocean freight, and inland waterway transport.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors">
            Explore All Cases
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaritimeCarousel;
