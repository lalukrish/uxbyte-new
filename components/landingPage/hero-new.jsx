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
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
      alt: "Modern laptop with code",
      chip: "Innovation",
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop",
      alt: "Digital network and connectivity",
      chip: "Cloud Solutions",
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
      alt: "Developers coding together",
      chip: "Development",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      alt: "Team collaboration",
      chip: "Solutions",
    },
    {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      alt: "AI and machine learning",
      chip: "AI & Analytics",
    },
  ];
  useLayoutEffect(() => {
    if (!containerRef.current || !imagesRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = containerRef.current;
    const track = imagesRef.current;

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
      </nav>

      <div className="hidden md:block">
        <div ref={containerRef} className="bg-white relative  mt-14 ">
          <div className="h-screen flex items-center  ">
            <main className="w-full 2xl:px-56 xl:px-24 px-8 ">
              <div className="flex items-center justify-between gap-12 ">
                <div className="max-w-4xl mb-12">
                  <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6 ">
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
                  </h1>

                  <p className="text-xl text-gray-500">
                    Your digital world, managed and organized with ease by
                    UXByte.{" "}
                  </p>
                </div>

                <div className="flex-shrink-0 w-[460px] h-74 relative xl:-mt-25 md:block hidden">
                  <div className="w-full h-full rounded-none flex items-center justify-center overflow-hidden">
                    <img
                      src="/2026.png"
                      alt="Abstract art"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-4 md:-mt-16 md:pl-10">
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
