"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingFeatures = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);

  const [activeTab, setActiveTab] = useState("commercial");
  const activeTabRef = useRef("commercial");

  const vesselData = {
    commercial: {
      image: "/feature-1.png",
      title: "Commercial Vessels",
      description:
        "Our commercial vessels are designed for maximum efficiency and reliability in global shipping operations.",
      bgText: "COMMERCIAL",
    },
    offshore: {
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
      title: "Offshore Vessels",
      description:
        "Specialized offshore vessels built to withstand harsh marine environments.",
      bgText: "OFFSHORE",
    },
    naval: {
      image:
        "https://images.unsplash.com/photo-1590564762947-4ce2996e3110?w=800&h=600&fit=crop",
      title: "Naval Vessels",
      description:
        "Advanced naval vessels engineered for defense and security operations.",
      bgText: "NAVAL",
    },
  };

  const tabs = ["commercial", "offshore", "naval"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imagesRef.current,
        { x: "0%" },
        {
          x: "-85vw",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2500",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              let newTab = "commercial";

              if (progress >= 0.33 && progress < 0.66) {
                newTab = "offshore";
              } else if (progress >= 0.66) {
                newTab = "naval";
              }

              if (activeTabRef.current !== newTab) {
                activeTabRef.current = newTab;
                setActiveTab(newTab);
              }
            },
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen px-6 py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative"
    >
      {/* Animated background gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 max-w-7xl mx-auto relative z-10">
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            {vesselData[activeTab].title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            {vesselData[activeTab].description}
          </p>
          <button className="mt-4 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:scale-105">
            Explore More →
          </button>
        </div>

        <div className="flex-shrink-0">
          <div className="flex gap-8 font-semibold text-xl">
            {tabs.map((tab, index) => (
              <div key={tab} className="relative">
                <span
                  className={`capitalize transition-all duration-300 cursor-pointer ${
                    activeTab === tab
                      ? "text-slate-900 scale-110"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                </span>
                {activeTab === tab && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-slate-900 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden">
        <div ref={imagesRef} className="flex w-[190vw] gap-8">
          {tabs.map((tab, index) => (
            <div
              key={tab}
              className="w-[60vw] flex items-center justify-center relative group"
            >
              {/* Background text with gradient */}
              <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-300 to-slate-100 opacity-40 pointer-events-none whitespace-nowrap">
                {vesselData[tab].bgText}
              </h2>

              {/* Image container with hover effects */}
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={vesselData[tab].image}
                  className="w-[400px] h-[250px] md:h-[100px] rounded-2xl object-cover shadow-2xl"
                  alt={vesselData[tab].title}
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="font-semibold text-slate-900">
                    View Details →
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-slate-900/10 blur-xl rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingFeatures;
