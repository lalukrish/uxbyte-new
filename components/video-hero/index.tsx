"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ArrowBigRight, ChevronDown, X } from "lucide-react";
import Hls from "hls.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UXBCube from "../ui/uxb-cube";
import { Button } from "@/commonComponents/Button";

gsap.registerPlugin(ScrollTrigger);

const CSS = `
  @keyframes scrollCascade {
    0%   { opacity: 0; transform: translateY(-6px); }
    40%  { opacity: 1; transform: translateY(0);    }
    80%  { opacity: 0; transform: translateY(8px);  }
    100% { opacity: 0; transform: translateY(8px);  }
  }
  @keyframes shimLine {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
`;

/* ─── LogoMark ─── */
function LogoMark({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex items-center gap-2.5 pl-4 md:pl-16 mt-1">
      <div
        className={`w-[36px] h-[36px] rounded-[9px] flex items-center justify-center shrink-0 transition-colors duration-300 ${
          isDark ? "bg-[#6915ae]" : "bg-black"
        }`}
      >
        <span className="text-[13px] font-extrabold text-white tracking-[-0.04em] leading-none">
          UXB
        </span>
      </div>
      <span
        className={`text-[18px] font-bold tracking-[0.04em] transition-colors duration-300 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Uxbyte studios
      </span>
    </div>
  );
}

/* ─── LogoIntro ─── */
function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"center" | "moving">("center");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("moving"), 900);

    const t2 = setTimeout(
      () => {
        const bg = bgRef.current;
        const logo = logoRef.current;
        if (!bg || !logo) return;

        gsap.to(logo, { opacity: 0, duration: 0.35, ease: "power2.inOut" });
        gsap.to(bg, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            requestAnimationFrame(() =>
              requestAnimationFrame(() => {
                onComplete?.();
              }),
            );
          },
        });
      },
      900 + 1000 + 200,
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <>
      <div
        ref={bgRef}
        className="fixed inset-0 bg-black pointer-events-none"
        style={{ zIndex: 500, willChange: "opacity" }}
      />
      <div
        ref={logoRef}
        className="fixed pointer-events-none"
        style={{
          zIndex: 501,
          willChange: "opacity",
          top: phase === "center" ? "50%" : "20px",
          left: phase === "center" ? "50%" : "20px",
          transform:
            phase === "center"
              ? "translate(-50%, -50%) scale(1.5)"
              : "translate(0, 0) scale(1)",
          transition:
            phase === "moving"
              ? "top 1s cubic-bezier(0.77,0,0.18,1), left 1s cubic-bezier(0.77,0,0.18,1), transform 1s cubic-bezier(0.77,0,0.18,1)"
              : "none",
        }}
      >
        <LogoMark isDark={true} />
      </div>
    </>
  );
}

/* ─── Hero ─── */
export default function Hero({
  videoUrl = "https://cdn.icgmiddleast.com/deutsche/career/career.m3u8",
  posterUrl = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
  title = "Crafting Experiences That Leave A Lasting Mark Compliance That Protects Let's Build Your",
  description = "We push boundaries every day, combining technology with human insight.",
  // ── Pass custom selectors from outside if needed
  // e.g. darkSections=".dark-section,.hero-section" lightSections=".white-section,.light-bg"
  darkSections = ".dark-section",
  lightSections = ".white-section",
}: {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  description?: string;
  darkSections?: string;
  lightSections?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const overlayContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const pipReopenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [videoReady, setVideoReady] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [pipVisible, setPipVisible] = useState(true);
  const [isDark, setIsDark] = useState(true);

  /* ─── ScrollTrigger: watch dark/light sections globally ─── */
  // Inside HeroVideo — find this useEffect and change timeout
  /* ─── ScrollTrigger: watch dark/light sections globally ─── */
  useEffect(() => {
    if (!introComplete) return;

    const triggers: ScrollTrigger[] = [];

    const timer = setTimeout(() => {
      document.querySelectorAll(darkSections).forEach((section) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => setIsDark(true),
            onEnterBack: () => setIsDark(false),
          }),
        );
      });

      document.querySelectorAll(lightSections).forEach((section) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => setIsDark(false),
            onEnterBack: () => setIsDark(false),
          }),
        );
      });

      // ── Hero section always white regardless of scroll direction
      if (wrapRef.current) {
        triggers.push(
          ScrollTrigger.create({
            trigger: wrapRef.current,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => setIsDark(true), // scroll down into hero → white
            onEnterBack: () => setIsDark(true), // scroll up back into hero → white
          }),
        );
      }

      ScrollTrigger.refresh();
    }, 800);

    return () => {
      clearTimeout(timer);
      triggers.forEach((t) => t.kill());
    };
  }, [introComplete, darkSections, lightSections]);

  /* ─── PiP close ─── */
  const closePip = useCallback(() => {
    if (!glassRef.current) return;
    gsap.to(glassRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setPipVisible(false),
    });
    clearTimeout(pipReopenTimer.current!);
    pipReopenTimer.current = setTimeout(() => setPipVisible(true), 30000);
  }, []);

  useEffect(() => {
    if (!pipVisible || !glassRef.current) return;
    gsap.fromTo(
      glassRef.current,
      { opacity: 0, scale: 0.9, y: 8 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.4)" },
    );
  }, [pipVisible]);

  useEffect(() => () => clearTimeout(pipReopenTimer.current!), []);

  /* ─── HLS video setup ─── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const fallback = setTimeout(() => setVideoReady(true), 6000);
    const onReady = () => {
      clearTimeout(fallback);
      setVideoReady(true);
    };
    v.addEventListener("loadeddata", onReady, { once: true });

    if (v.canPlayType("application/vnd.apple.mpegurl")) {
      v.src = videoUrl;
      v.play().catch(() => {});
    } else if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hlsRef.current = hls;
      hls.loadSource(videoUrl);
      hls.attachMedia(v);
      hls.on(Hls.Events.MANIFEST_PARSED, () => v.play().catch(() => {}));
    } else {
      clearTimeout(fallback);
      setVideoReady(true);
    }

    return () => {
      clearTimeout(fallback);
      v.removeEventListener("loadeddata", onReady);
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [videoUrl]);

  /* ─── Fade poster when video ready ─── */
  useEffect(() => {
    if (!videoReady || !posterRef.current) return;
    gsap.to(posterRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        if (posterRef.current) posterRef.current.style.display = "none";
      },
    });
  }, [videoReady]);

  /* ─── Title entrance (after intro + video) ─── */
  useEffect(() => {
    if (!videoReady || !introComplete || !titleRef.current) return;
    const ctx = gsap.context(() => {
      const words = titleRef.current!.querySelectorAll(".word");
      gsap.set(words, { opacity: 0, y: 48 });
      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.065,
        delay: 0.15,
      });
    }, titleRef);
    return () => ctx.revert();
  }, [videoReady, introComplete]);

  /* ─── Scroll animation ─── */
  useEffect(() => {
    if (!videoReady) return;
    const tid = setTimeout(() => {
      const wrap = wrapRef.current;
      const title = titleRef.current;
      const glass = glassRef.current;
      const gradient = gradientRef.current;
      const overlayContent = overlayContentRef.current;
      const rightImage = rightImageRef.current;
      if (
        !wrap ||
        !title ||
        !glass ||
        !gradient ||
        !overlayContent ||
        !rightImage
      )
        return;

      const isMobile = window.innerWidth < 768;

      gsap.set(gradient, { x: "-100%" });
      gsap.set(overlayContent, { x: "-100%" });
      gsap.set(glass, { opacity: 0 });
      gsap.set(".pip-label", { opacity: 0, y: 6 });

      if (!isMobile) {
        gsap.set(rightImage, { clipPath: "inset(100% 0 0 0)" });
        const rightImg = rightImage.querySelector("img");
        if (rightImg) gsap.set(rightImg, { y: 40 });
      } else {
        gsap.set(rightImage, { display: "none" });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      tl.to(
        title,
        { y: "110vh", opacity: 0, ease: "power2.in", duration: 0.35 },
        0,
      );
      tl.to(glass, { opacity: 1, ease: "power2.out", duration: 0.1 }, 0.35);
      tl.fromTo(
        gradient,
        { x: "-100%" },
        { x: "0%", ease: "power2.out", duration: 0.2 },
        0.5,
      );
      tl.fromTo(
        overlayContent,
        { x: "-100%" },
        { x: "0%", ease: "power2.out", duration: 0.2 },
        0.5,
      );

      if (!isMobile) {
        const rightImg = rightImage.querySelector("img");
        tl.to(
          rightImage,
          { clipPath: "inset(0% 0 0 0)", ease: "power3.out", duration: 0.13 },
          0.7,
        );
        if (rightImg)
          tl.to(rightImg, { y: 0, ease: "power3.out", duration: 0.13 }, 0.7);
      }

      tl.to(
        ".pip-label",
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.08, stagger: 0.04 },
        0.88,
      );

      ScrollTrigger.refresh();
    }, 180);

    return () => clearTimeout(tid);
  }, [videoReady]);

  /* ─── Title split ─── */
  const titleWords = title.split(" ");
  const total = titleWords.length;
  const l1end = Math.max(1, Math.round(total * 0.2));
  const l2end = l1end + Math.max(1, Math.round(total * 0.35));
  const titleLines = [
    titleWords.slice(0, l1end),
    titleWords.slice(l1end, l2end),
    titleWords.slice(l2end),
  ];
  const maxWidths = ["1200px", "1000px", "900px"];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ── Intro ── */}
      {!introComplete && (
        <LogoIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* ── Sticky nav after intro ── */}
      {introComplete && (
        <nav className="fixed top-0 left-0 z-[300] p-4 pointer-events-none">
          <LogoMark isDark={isDark} />
        </nav>
      )}

      {/* ── Scroll container ── */}
      <div ref={wrapRef} style={{ height: "350vh" }} className="">
        <section className="sticky top-0 h-screen overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          <img
            ref={posterRef}
            src={posterUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-[200]"
          />

          <div className="absolute inset-0 bg-black/30 z-[105]" />

          <div className="absolute inset-0 z-[110]">
            {/* Right image */}
            <div
              ref={rightImageRef}
              className="absolute top-0 right-0 h-full overflow-hidden hidden md:block"
              style={{
                width: "42%",
                zIndex: 114,
                clipPath: "inset(100% 0 0 0)",
              }}
            >
              <img
                src="/man-sitting.png"
                alt="office"
                className="w-full h-full object-cover object-center block"
                style={{ transform: "translateY(40px)" }}
              />
            </div>

            {/* Left black panel */}
            <div
              ref={gradientRef}
              className="absolute top-0 left-0 h-full bg-black w-full md:w-[58%] pointer-events-none"
              style={{ zIndex: 115 }}
            />

            {/* Overlay content */}
            <div
              ref={overlayContentRef}
              className="absolute inset-0 flex items-end md:items-center pb-16 md:pb-0"
              style={{ zIndex: 116, pointerEvents: "none" }}
            >
              <div className="w-full md:w-[48%] px-6 md:px-[clamp(24px,5vw,112px)] md:pr-8 flex flex-col gap-5 md:gap-8">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute hidden md:block pointer-events-none select-none whitespace-nowrap"
                    style={{
                      top: "0px",
                      left: "-20px",
                      fontSize: "clamp(180px,17vw,340px)",
                      fontWeight: 700,
                      color: "#fff",
                      opacity: 0.07,
                      lineHeight: 1,
                      letterSpacing: "-0.06em",
                    }}
                  >
                    UXB
                  </div>
                  <div className="mb-6 pointer-events-auto hidden md:flex ">
                    <UXBCube
                      size={140}
                      faces={[
                        { type: "image", src: "/cover-79.png", alt: "Cover" }, // front
                        { type: "label", label: "UI/UX", sub: "Design" }, // back
                        { type: "image", src: "/blog-1.webp" }, // right
                        { type: "label", label: "Web", sub: "Dev" }, // left
                        { type: "label", label: "Cloud", sub: "Scale" }, // top
                        { type: "image", src: "/2026.png" }, // bottom
                      ]}
                    />{" "}
                  </div>

                  <div className="flex items-baseline mt-10 md:mt-[300px] mb-1">
                    <span
                      className="font-semibold text-white/90 tracking-[0.12em] leading-none"
                      style={{ fontSize: "clamp(18px,3.5vw,52px)" }}
                    >
                      Digital
                    </span>
                  </div>

                  <div className="relative inline-block">
                    <div
                      className="font-semibold  mb-1.5 bg-clip-text text-transparent"
                      style={{
                        fontSize: "clamp(18px,3.5vw,52px)",
                        backgroundImage:
                          "linear-gradient(90deg, #5B2A86 0%, #9B5C7A 50%, #F59E0B 100%)",
                      }}
                    >
                      EXCELLENCE
                    </div>
                    <div className="h-px bg-white/20 mb-[3px]" />
                    <div className="h-0.5 w-[45%] bg-[#6915ae]" />
                  </div>

                  {/* <div className="flex gap-[5px] mt-3 mb-4">
                    {[0.5, 0.25, 0.12].map((op, i) => (
                      <div
                        key={i}
                        className="w-[5px] h-[5px] rounded-full"
                        style={{ background: `rgba(255,255,255,${op})` }}
                      />
                    ))}
                  </div> */}

                  <p className="mt-6 text-white/40 tracking-[0.06em] text-[11px] md:text-[13px]">
                    Strategy · Craft · Delivery — across every platform we touch
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    label={"View Our Work"}
                    variant="outlined"
                    className={"text-white!"}
                    iconRight={<ArrowBigRight />}
                  ></Button>
                  <span className="text-xs md:text-[13px] text-white/80 underline cursor-pointer hover:text-white/70 transition-colors duration-200">
                    Read case studies →
                  </span>
                </div>
              </div>
            </div>

            {/* Title pyramid */}
            <div
              ref={titleRef}
              className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-20 md:pt-48 pb-10 z-[120]"
              style={{ willChange: "transform, opacity" }}
            >
              {titleLines.map((lineWords, li) => (
                <div
                  key={li}
                  className="flex justify-center flex-wrap"
                  style={{
                    maxWidth: maxWidths[li],
                    lineHeight: 1.15,
                    marginBottom: "0.08em",
                  }}
                >
                  {lineWords.map((w, i) => (
                    <span
                      key={i}
                      className="word inline-block text-white font-medium text-3xl sm:text-4xl md:text-5xl xl:text-[55px] 2xl:text-[68px]"
                      style={{
                        marginRight: "0.22em",
                        willChange: "transform, opacity",
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* Scroll chevrons */}
            {/* <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-[120]">
              {[0, 0.28].map((delay, i) => (
                <ChevronDown
                  key={i}
                  strokeWidth={1.2}
                  className="text-white/70"
                  style={{
                    width: 26,
                    height: 26,
                    marginTop: i ? -7 : 0,
                    animation: "scrollCascade 2.2s ease-in-out infinite",
                    animationDelay: `${delay}s`,
                    opacity: 0,
                  }}
                />
              ))}
            </div> */}
          </div>
        </section>
      </div>

      {/* ── PiP glass chip ── */}
      {pipVisible && (
        <div
          ref={glassRef}
          className="fixed z-[99] opacity-0 bottom-4 right-4 md:bottom-7 md:right-7 w-[240px] sm:w-[280px] md:w-[300px]"
          style={{ borderRadius: 18 }}
        >
          <button
            onClick={closePip}
            title="Hide (auto-reopens in 30s)"
            className="absolute -top-2.5 -right-2.5 w-[26px] h-[26px] rounded-full flex items-center justify-center cursor-pointer z-10 hover:scale-110 transition-transform duration-150"
            style={{
              background: "rgba(30,30,40,0.9)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(200,60,60,0.85)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(30,30,40,0.9)")
            }
          >
            <X size={12} color="rgba(255,255,255,0.85)" strokeWidth={2.2} />
          </button>

          <div
            className="rounded-[18px]"
            style={{
              background: "rgba(10,12,20,0.82)",
              backdropFilter: "blur(28px) saturate(160%)",
              WebkitBackdropFilter: "blur(28px) saturate(160%)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            <div
              className="h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent)",
                backgroundSize: "200% 100%",
                animation: "shimLine 2.6s linear infinite",
              }}
            />
            <div className="px-3.5 pt-2.5 pb-3.5 md:px-[14px] md:pt-[10px] md:pb-[14px]">
              <div
                className="pip-label text-[12px] font-semibold text-white truncate"
                style={{ opacity: 0, transform: "translateY(6px)" }}
              >
                {title.split(" ").slice(0, 5).join(" ")}
              </div>
              <div
                className="pip-label text-[11px] text-white/60 mt-[3px] truncate"
                style={{ opacity: 0, transform: "translateY(6px)" }}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
