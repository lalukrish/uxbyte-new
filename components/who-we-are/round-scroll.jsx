"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Admission",
    description:
      "Getting admission from the right program is crucial for having a strong visa application. admittedz gives you the guidelines and tools for applying to and getting admission from the right program.",
    image: "/about-2.webp",
    gradient: "from-pink-300 via-purple-300 to-blue-300",
  },
  {
    id: 2,
    title: "Visa Process",
    description:
      "We guide you step by step in preparing and submitting your visa documents.",
    image: "/about-4.webp",
    gradient: "from-blue-300 via-indigo-300 to-purple-300",
  },
  {
    id: 3,
    title: "Scholarship",
    description:
      "Find the best scholarships and funding opportunities for your education.",
    image: "/about-6.webp",
    gradient: "from-green-300 via-teal-300 to-blue-300",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const blackBoxRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // MAIN SCROLL TRIGGER WITH ANIMATIONS
  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSections = services.length + 1;
      const scrollHeight = totalSections * 100;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollHeight}%`,
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const sectionProgress = progress * totalSections;
          const currentSection = Math.floor(sectionProgress);
          const sectionLocalProgress = sectionProgress - currentSection;

          if (currentSection < services.length) {
            if (currentSection !== activeIndex) {
              setActiveIndex(currentSection);
            }
            animateCurrentSection(currentSection, sectionLocalProgress);
          }

          if (currentSection >= services.length) {
            const blackProgress = sectionLocalProgress;
            animateBlackBox(blackProgress);
          } else {
            resetBlackBox();
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex]);

  // ANIMATE CURRENT SECTION BASED ON SCROLL
  const animateCurrentSection = (index, progress) => {
    if (!titleRef.current || !descRef.current || !buttonRef.current) return;

    // ========================================
    // IMAGE ANIMATION SETTINGS
    // ========================================
    const imageScrollDuration = 0.6;

    imagesRef.current.forEach((img, imgIndex) => {
      if (!img) return;

      if (imgIndex === index) {
        // ========================================
        // CURRENT IMAGE - COMING FROM RIGHT
        // ========================================
        if (progress <= imageScrollDuration) {
          const imageProgress = progress / imageScrollDuration;
          gsap.set(img, {
            x: `${(1 - imageProgress) * 100}vw`,
            opacity: imageProgress,
            rotation: (1 - imageProgress) * 15,
            scale: 0.8 + imageProgress * 0.2,
            zIndex: 3, // Keep current image on top
          });
        } else {
          gsap.set(img, {
            x: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            zIndex: 3,
          });
        }
      } else if (imgIndex === index - 1) {
        if (progress <= imageScrollDuration) {
          const exitProgress = progress / imageScrollDuration;
          gsap.set(img, {
            x: `${-exitProgress * 100}vw`,
            opacity: 1 - exitProgress,
            rotation: -exitProgress * 15,
            scale: 1 - exitProgress * 0.2,
            zIndex: 2,
          });
        } else {
          gsap.set(img, {
            x: "-100vw",
            opacity: 0,
            rotation: -15,
            scale: 0.8,
            zIndex: 2,
          });
        }
      } else if (imgIndex < index) {
        // ========================================
        // OLDER IMAGES - ALREADY GONE (LEFT SIDE)
        // ========================================
        gsap.set(img, {
          x: "-100vw",
          opacity: 0,
          rotation: -15,
          scale: 0.8,
          zIndex: 1,
        });
      } else {
        // ========================================
        // FUTURE IMAGES - WAITING OFF SCREEN (RIGHT SIDE)
        // ========================================
        gsap.set(img, {
          x: "100vw",
          opacity: 0,
          rotation: 15,
          scale: 0.8,
          zIndex: 1,
        });
      }
    });

    const titleStart = 0.6;
    const titleEnd = 0.75;

    if (progress > titleStart && progress <= titleEnd) {
      const titleProgress = (progress - titleStart) / (titleEnd - titleStart);
      gsap.set(titleRef.current, {
        y: (1 - titleProgress) * 100,
        opacity: titleProgress,
      });
    } else if (progress > titleEnd) {
      gsap.set(titleRef.current, {
        y: 0,
        opacity: 1,
      });
    } else {
      gsap.set(titleRef.current, {
        y: 100,
        opacity: 0,
      });
    }

    // ========================================
    // DESCRIPTION ANIMATION SETTINGS
    // ========================================
    const descStart = 0.75;
    const descEnd = 0.9;

    if (progress > descStart && progress <= descEnd) {
      const descProgress = (progress - descStart) / (descEnd - descStart);
      gsap.set(descRef.current, {
        y: (1 - descProgress) * 100,
        opacity: descProgress,
      });
    } else if (progress > descEnd) {
      gsap.set(descRef.current, {
        y: 0,
        opacity: 1,
      });
    } else {
      gsap.set(descRef.current, {
        y: 100,
        opacity: 0,
      });
    }

    // ========================================
    // BUTTON ANIMATION SETTINGS
    // ========================================
    const buttonStart = 0.9;
    const buttonEnd = 1.0;

    if (progress > buttonStart && progress <= buttonEnd) {
      const buttonProgress =
        (progress - buttonStart) / (buttonEnd - buttonStart);
      gsap.set(buttonRef.current, {
        y: (1 - buttonProgress) * 100,
        opacity: buttonProgress,
      });
    } else if (progress > buttonEnd) {
      gsap.set(buttonRef.current, {
        y: 0,
        opacity: 1,
      });
    } else {
      gsap.set(buttonRef.current, {
        y: 100,
        opacity: 0,
      });
    }
  };

  const animateBlackBox = (progress) => {
    if (!blackBoxRef.current) return;

    const startWidth = 600;
    const startHeight = 800;
    const endWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
    const endHeight = typeof window !== "undefined" ? window.innerHeight : 1080;

    const currentWidth = startWidth + (endWidth - startWidth) * progress;
    const currentHeight = startHeight + (endHeight - startHeight) * progress;

    const startRightPosition = 100;
    const rightOffset = startRightPosition - startRightPosition * progress;

    const startTopPosition = 50;
    const topOffset = startTopPosition - progress * (startTopPosition - 0);

    const borderRadius = (1 - progress) * 24;

    gsap.set(blackBoxRef.current, {
      width: currentWidth,
      height: currentHeight,
      right: `${rightOffset}vw`,
      top: `${topOffset}%`,
      borderRadius: `${borderRadius}px`,
    });
  };

  const resetBlackBox = () => {
    if (!blackBoxRef.current) return;
    gsap.set(blackBoxRef.current, {
      width: 600,
      height: 800,
      right: "100vw",
      top: "50%",
      borderRadius: "24px",
    });
  };

  const service = services[activeIndex];

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen  overflow-hidden transition-all duration-700`}
    >
      <div className="container mx-auto px-6 lg:px-12 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          {/* IMAGE SIDE */}
          <div className="relative flex items-center justify-center h-[600px]">
            {/* WHITE ELLIPSE - STATIC */}
            <div
              className="absolute w-[500px] h-[200px] bg-white rounded-full shadow-2xl opacity-80"
              style={{
                zIndex: 1,
                transform: "perspective(1000px) rotateX(60deg)",
              }}
            />

            {/* ALL IMAGES - LAYERED */}
            {services.map((svc, index) => (
              <div
                key={svc.id}
                ref={(el) => (imagesRef.current[index] = el)}
                className="absolute w-[500px] h-[500px]"
                style={{
                  transform:
                    "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.25))",
                  opacity: 0,
                  zIndex: 2,
                }}
              >
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-contain"
                  style={{
                    transform: "translateZ(50px)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* TEXT SIDE */}
          <div className="flex flex-col justify-center space-y-8 max-w-2xl">
            {/* SERVICES LABEL - ALWAYS VISIBLE, NO ANIMATION */}
            <p className="text-lg font-bold text-pink-600">Services</p>

            {/* ANIMATED TITLE */}
            <h2
              ref={titleRef}
              className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
            >
              {service.title}
            </h2>

            {/* ANIMATED DESCRIPTION */}
            <p ref={descRef} className="text-xl text-gray-700 leading-relaxed">
              {service.description}
            </p>

            {/* ANIMATED BUTTON */}
            <button
              ref={buttonRef}
              className="w-fit px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-2xl hover:bg-white transition-all border-2 border-gray-900 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* BLACK EXPANDING BOX */}
      <div
        ref={blackBoxRef}
        className="fixed bg-black shadow-2xl -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "800px",
          right: "100vw",
          top: "50%",
          zIndex: 50,
          borderRadius: "24px",
        }}
      />
    </section>
  );
}
