"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import React from "react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { EncryptedText } from "../ui/encrypted-text";
import ISSSpaceshipCanvas from "../ui/spaceship";
import MobileCenterCarousel from "./card-caruosel";
import { X } from "lucide-react";

export default function DamnGoodHero() {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(true);
  const [showVideo, setShowVideo] = useState(true);

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
  useEffect(() => {
    let timer;

    if (showVideo) {
      // Auto hide after 30s when visible
      timer = setTimeout(() => {
        setShowVideo(false);
      }, 30000);
    } else {
      // Show again after 25s when closed
      timer = setTimeout(() => {
        setShowVideo(true);
      }, 25000);
    }

    return () => clearTimeout(timer);
  }, [showVideo]);

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
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* ================= LEFT BACKGROUND (DESKTOP ONLY) ================= */}
        <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden hidden md:flex">
          <div className="absolute inset-0 bg-[url('/hero-01.jpg')] bg-cover bg-center" />
          <ISSSpaceshipCanvas radius={330} color="#4a90e2" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* ================= NAV ================= */}
        <nav className="relative z-50 flex items-center px-4 md:px-8 py-3">
          <div className="flex items-center gap-4 md:pl-16">
            <div className="h-12 w-12 bg-[#6915ae] flex items-center justify-center">
              <span className="font-bold text-xl">UXB</span>
            </div>
            <span className="text-xl font-bold">Uxbyte Studio</span>
          </div>

          <div className="hidden md:flex gap-8 mx-auto">
            <span className="text-sm font-medium tracking-wider cursor-pointer">
              WHAT WE DO
            </span>
            <span className="text-sm font-medium tracking-wider cursor-pointer">
              WHO ARE WE
            </span>
          </div>
        </nav>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative min-h-screen md:flex md:items-center px-1 md:px-16 lg:px-24">
          {/* ================= MOBILE HERO (REDUCED HEIGHT) ================= */}
          <div className="md:hidden relative h-[40vh] overflow-hidden mb-8">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/hero-01.jpg')] bg-cover bg-center -ml-80" />

            {/* Canvas */}
            <div className="absolute inset-0 z-10 flex items-end justify-center pb-4">
              <ISSSpaceshipCanvas radius={100} color="#4a90e2" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-20" />

            {/* Text */}
            <div className="absolute inset-0 z-30 flex items-center px-4">
              <div>
                <h1 className="text-3xl font-medium leading-[1.15] mb-3">
                  <span className="block">Where thinking</span>
                  <span className="inline-flex items-baseline gap-1">
                    <span>flows,</span>
                    <LayoutTextFlip
                      words={[
                        "creativity moves.",
                        "innovation grows.",
                        "insight blooms.",
                      ]}
                    />
                  </span>
                </h1>

                <p className="text-md text-gray-300">
                  Your digital world, managed and organized <br />
                  with ease by UXByte.
                </p>
              </div>
            </div>
          </div>
          {/* ================= MOBILE CAROUSEL (SEPARATE SECTION) ================= */}
          <div className="md:hidden px-4 pb-10">
            <MobileCenterCarousel />
          </div>
          {/* ================= DESKTOP LEFT TEXT ================= */}
          <div className="hidden md:block z-10 w-full max-w-[640px] md:-mt-40">
            <h1 className="text-4xl md:text-7xl font-medium leading-[1.15] mb-6">
              <span className="block">Where thinking</span>
              <span className="inline-flex items-baseline gap-1">
                <span>flows,</span>
                <LayoutTextFlip
                  words={[
                    "creativity moves.",
                    "innovation grows.",
                    "insight blooms.",
                  ]}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-400">
              Your digital world, managed and organized with ease by UXByte.
            </p>
          </div>
          {/* ================= DESKTOP RIGHT CAROUSEL ================= */}
          <div className="hidden md:flex ml-auto w-[460px] shrink-0 relative -mt-52">
            {/* Replace the previous image with carousel */}
            <MobileCenterCarousel />{" "}
          </div>
          {showVideo && (
            <div className="absolute bottom-4 fixed right-20 w-[240px] rounded-md bg-black border border-white/10 shadow-2xl overflow-hidden z-50">
              {/* Close Button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-black/70 flex items-center justify-center hover:bg-black"
                aria-label="Close video"
              >
                <X size={14} />
              </button>
              {/* Video */}{" "}
              <div className="px-3 py-2 border-t border-white/10">
                <div className="w-full h-[135px] overflow-hidden">
                  <video
                    src="/test_vid_1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Band */}

                <p className="text-xs text-gray-400 leading-snug">
                  Watch how we design seamless digital experiences.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
