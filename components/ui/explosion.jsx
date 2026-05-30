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

      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      const container = containerRef.current;
      const images = container.querySelectorAll(".isolated-explosion-img");
      const coverImg = container.querySelector(".isolated-explosion-cover-img");
      const introHeader = container.querySelector(
        ".isolated-explosion-intro-header h1",
      );
      const outroHeader = container.querySelector(
        ".isolated-explosion-outro-header h1",
      );

      if (!images.length || !coverImg || !introHeader) return;

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
        ".isolated-explosion-word",
      );
      const outroWordElements = outroHeader
        ? outroHeader.querySelectorAll(".isolated-explosion-word")
        : [];

      gsap.set(introWordElements, { opacity: 1 });
      gsap.set(outroWordElements, { opacity: 0 });

      const scatterDirections = [
        { x: 1.6, y: 0.4 },
        { x: -1.9, y: 0.6 },
        { x: 0.9, y: -0.8 },
        { x: -1.9, y: -0.8 },
        { x: 1.1, y: 2.5 },
        { x: -1.9, y: 1.4 },
        { x: 1.6, y: 1.2 },
      ];

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const isMobile = screenWidth < 1000;
      const scatterMultiplier = isMobile ? 3.0 : 2.0;

      const startPositions = Array.from(images).map(() => ({
        x: 0,
        y: 0,
        z: -200,
        scale: 0,
      }));

      const endPositions = scatterDirections.map((dir) => ({
        x: dir.x * screenWidth * scatterMultiplier,
        y: dir.y * screenHeight * scatterMultiplier,
        z: 2000,
        scale: isMobile ? 3.5 : 7.0,
      }));

      images.forEach((img, index) => {
        gsap.set(img, {
          ...startPositions[index],
          opacity: 1, // Add this to ensure images are visible from start
        });
      });

      gsap.set(coverImg, {
        z: -1000,
        scale: 0,
        x: 0,
        y: 0,
        opacity: 1,
      });

      const scrollDistance = isMobile
        ? window.innerHeight * 4
        : window.innerHeight * 4;

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: container.querySelector(".isolated-explosion-spotlight"),
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1, // Add this to prevent flashing
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
              imageProgress,
            );
            const scaleValue = gsap.utils.interpolate(
              start.scale,
              end.scale,
              imageProgress,
            );
            const xValue = gsap.utils.interpolate(
              start.x,
              end.x,
              imageProgress,
            );
            const yValue = gsap.utils.interpolate(
              start.y,
              end.y,
              imageProgress,
            );

            gsap.set(img, {
              z: zValue,
              scale: scaleValue,
              x: xValue,
              y: yValue,
            });
          });

          // Cover image appears earlier and faster
          const coverProgress = Math.max(0, Math.min(1, (progress - 0.3) * 5));
          const coverZValue = isMobile
            ? -100 + 600 * coverProgress
            : -1000 + 1000 * coverProgress;
          const coverScaleValue = coverProgress;

          gsap.set(coverImg, {
            z: coverZValue,
            scale: coverScaleValue,
            x: 0,
            y: 0,
          });

          // Intro header fade out
          if (introWordElements.length > 0) {
            if (progress >= 0.7 && progress <= 0.6) {
              const introFadeProgress = (progress - 0.4) / 0.2;
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
            } else if (progress < 0.4) {
              gsap.set(introWordElements, { opacity: 1 });
            } else if (progress > 0.6) {
              gsap.set(introWordElements, { opacity: 0 });
            }
          }

          // Outro header fade in
          if (outroWordElements.length > 0) {
            if (progress >= 0.6 && progress <= 0.8) {
              const outroFadeProgress = (progress - 0.6) / 0.2;
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
            } else if (progress < 0.6) {
              gsap.set(outroWordElements, { opacity: 0 });
            } else if (progress > 0.8) {
              gsap.set(outroWordElements, { opacity: 1 });
            }
          }
        },
      });
    };

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
    <div ref={containerRef} className="isolated-explosion-container">
      <div className="isolated-explosion-spotlight relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
        <div className="isolated-explosion-intro-header pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white md:text-7xl h-1"></h1>
        </div>
        <div className="isolated-explosion-outro-header pointer-events-none absolute inset-0 z-20 flex items-center justify-center mt-0 ml-0 md:mt-60 md:ml-88">
          <h1 className="text-center text-4xl font-bold text-white md:text-7xl">
            Creators Behind Growth
          </h1>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {[
            "abhi.jpeg",
            "rohith.jpeg",
            "lallu.png",
            "adhithya.jpeg",
            "swafuvan.jpeg",
            "hijaz.jpeg",
            "aslam.jpeg",
          ].map((num) => (
            <Image
              key={num}
              src={`${num}`}
              alt={`Image ${num}`}
              width={400}
              height={400}
              className="isolated-explosion-img absolute"
              style={{ transformStyle: "preserve-3d" }}
            />
          ))}
          <Image
            // src="/blog-3.webp"
            src="/top-leaders.png"
            alt="Cover Image"
            width={500}
            height={500}
            className="isolated-explosion-cover-img absolute w-full hidden md:block"
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
      </div>
    </div>
  );
};

export default IsolatedExplosionImage;
