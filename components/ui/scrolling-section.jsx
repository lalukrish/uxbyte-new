"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  Cpu,
  ShieldCheck,
  LineChart,
  Menu,
  Bell,
  Search,
  User,
  Cloud,
} from "lucide-react";
import Counter from "../about/counter";
import AccessibilityIllustrations from "../about/animation-section";
import WhyChooseUsSection from "../about/title-points";

const strategies = [
  {
    id: 1,
    icon: <Cpu size={28} />,
    title: "Digital Innovation",
    description:
      "Building future-ready software solutions using cutting-edge technologies and agile development practices.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={28} />,
    title: "Cyber Security",
    description:
      "Protecting systems, data, and infrastructure through robust security architectures and proactive monitoring.",
  },
  {
    id: 3,
    icon: <Cloud size={28} />,
    title: "Cloud Transformation",
    description:
      "Enabling scalable, reliable, and cost-efficient cloud solutions for modern enterprises.",
  },
  {
    id: 4,
    icon: <LineChart size={28} />,
    title: "Data & Analytics",
    description:
      "Turning data into actionable insights to drive smarter decisions and business growth.",
  },
];

const EnergyScrollSections = () => {
  const scrollRef = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      setP(Math.min(Math.max(scrolled / total, 0), 1.5));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth easing functions
  const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  const easeOut = (t) => t * (2 - t);

  // Animation phases with smooth easing
  const greenMove = easeOut(Math.min(p * 1.2, 1));
  const heroFade = Math.max(1 - p * 3, 0);
  const boxRise = ease(Math.min(Math.max((p - 0.08) * 3.5, 0), 1));

  // Border animation
  const borderStart = 0.18;
  const borderDuration = 0.25;
  const borderRaw = Math.min(
    Math.max((p - borderStart) / borderDuration, 0),
    1,
  );
  const borderProgress = ease(borderRaw);

  // Fill animations with smoother timing
  const greenFillStart = 0.3;
  const greenFillDuration = 0.18;
  const greenFillRaw = Math.min(
    Math.max((p - greenFillStart) / greenFillDuration, 0),
    1,
  );
  const greenFill = ease(greenFillRaw);

  const img1Start = 0.52;
  const img1Duration = 0.18;
  const img1FillRaw = Math.min(Math.max((p - img1Start) / img1Duration, 0), 1);
  const image1Fill = ease(img1FillRaw);
  const image1TextFade = ease(Math.min(Math.max((p - 0.7) * 5, 0), 1));

  const img2Start = 0.78;
  const img2Duration = 0.18;
  const img2FillRaw = Math.min(Math.max((p - img2Start) / img2Duration, 0), 1);
  const image2Fill = ease(img2FillRaw);
  const image2TextFade = ease(Math.min(Math.max((p - 0.96) * 5, 0), 1));

  // Border edges
  const leftEdge = ease(Math.min(borderProgress * 4, 1));
  const topEdge = ease(Math.min(Math.max(borderProgress * 4 - 1, 0), 1));
  const rightEdge = ease(Math.min(Math.max(borderProgress * 4 - 2, 0), 1));
  const bottomEdge = ease(Math.min(Math.max(borderProgress * 4 - 3, 0), 1));

  return (
    <div ref={scrollRef} className="h-[1000vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* GREEN BACKGROUND */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50 to-cyan-200"
          style={{
            transform: `translateY(${-greenMove * 40}vh)`,
          }}
        />

        {/* HERO SECTION WITH ACCESSIBILITY ILLUSTRATIONS */}
        <div
          className="absolute inset-0 w-full h-full px-10"
          style={{
            opacity: heroFade,
            transform: `scale(${1 - p * 0.2})`,
          }}
        >
          {/* <AccessibilityIllustrations /> */}
          <WhyChooseUsSection />
        </div>

        {/* CENTER BOX */}
        <div className="absolute inset-0 flex items-center justify-center mt-10">
          <div
            className="relative w-[550px] h-[550px] bg-white overflow-hidden"
            style={{
              transform: `translateY(${(1 - boxRise) * 120}%)`,
              opacity: boxRise,
            }}
          >
            {/* BORDERS */}
            <div
              className="absolute left-0 top-0 w-px bg-gray-300"
              style={{ height: `${leftEdge * 100}%` }}
            />
            <div
              className="absolute top-0 left-0 h-px bg-gray-300"
              style={{ width: `${topEdge * 100}%` }}
            />
            <div
              className="absolute right-0 top-0 w-px bg-gray-300"
              style={{ height: `${rightEdge * 100}%` }}
            />
            <div
              className="absolute bottom-0 left-0 h-px bg-black"
              style={{ width: `${bottomEdge * 100}%` }}
            />

            {/* GREEN FILL */}
            <div
              className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-400"
              style={{ height: `${greenFill * 100}%` }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 p-12"
              style={{ opacity: greenFill }}
            >
              <h2 className="text-4xl font-medium text-black leading-tight">
                The world's demand for energy will more than double by 2050.
              </h2>
            </div>

            {/* IMAGES */}
            <ImageFill
              fill={image1Fill}
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
              text="Affordable Energy"
              textOpacity={1 - image1TextFade}
            />

            <ImageFill
              fill={image2Fill}
              src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=900"
              text="Clean Power"
              textOpacity={1 - image2TextFade}
            />
          </div>
        </div>

        {/* METER LABELS */}
        <div className="absolute right-[20%] top-1/2 -translate-y-1/2 space-y-24">
          <div style={{ opacity: topEdge }}>
            <span className="inline-block w-12 h-px bg-black mr-3" />
            <span className="font-medium">66k TWh</span>
            <div className="text-sm text-gray-600">in 2050</div>
          </div>

          <div style={{ opacity: bottomEdge }}>
            <span className="inline-block w-12 h-px bg-black mr-3" />
            <span className="font-medium">26k TWh</span>
            <div className="text-sm text-gray-600">in 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageFill = ({ fill, src, text, textOpacity = 1 }) => {
  if (fill <= 0) return null;

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{ height: `${fill * 100}%` }}
        >
          <img src={src} className="w-full h-full object-cover" alt="" />
        </div>
      </div>

      {text && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: Math.min(fill, 1) * textOpacity }}
        >
          <h2 className="text-7xl font-medium text-white text-center drop-shadow-lg">
            {text}
          </h2>
        </div>
      )}
    </>
  );
};

export default EnergyScrollSections;
