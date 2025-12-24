"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExplosionImage = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scrolling setup
    const updateScroll = () => {
      ScrollTrigger.update();
    };

    let rafId;
    const smoothScroll = () => {
      updateScroll();
      rafId = requestAnimationFrame(smoothScroll);
    };
    rafId = requestAnimationFrame(smoothScroll);

    initSpotlightAnimations();

    const handleResize = () => {
      ScrollTrigger.refresh();
      initSpotlightAnimations();
    };

    window.addEventListener("resize", handleResize);

    function initSpotlightAnimations() {
      // Kill existing ScrollTriggers to prevent duplicates
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const images = document.querySelectorAll(".img");
      const coverImg = document.querySelector(".spotlight-cover-img");
      const introHeader = document.querySelector(".spotlight-intro-header h1");
      const outroHeader = document.querySelector(".spotlight-outro-header h1");

      if (!images.length || !coverImg || !introHeader) return;

      // Split text for word-by-word animation
      const introWords = introHeader.textContent.split(" ");
      const outroWords = outroHeader ? outroHeader.textContent.split(" ") : [];

      introHeader.innerHTML = introWords
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");
      if (outroHeader) {
        outroHeader.innerHTML = outroWords
          .map((word) => `<span class="word">${word}</span>`)
          .join(" ");
      }

      const introWordElements = introHeader.querySelectorAll(".word");
      const outroWordElements = outroHeader
        ? outroHeader.querySelectorAll(".word")
        : [];

      gsap.set(introWordElements, { opacity: 1 });
      gsap.set(outroWordElements, { opacity: 0 });

      const scatterDirections = [
        { x: 1.8, y: 1.2 },
        { x: -1.9, y: -0.4 },
        { x: 2.2, y: 1.1 },
        { x: -2.0, y: -1.0 },
        { x: 2.4, y: 2.2 },
        { x: -2.2, y: -1.0 },
        { x: 2.6, y: 2.0 },
        { x: -2.4, y: -0.8 },
        { x: 2.8, y: 2.6 },
        { x: -2.6, y: -1.4 },
        { x: 3.0, y: 2.8 },
        { x: -1.5, y: -2.2 },
        { x: 1.2, y: 2.4 },
        { x: -2.8, y: 0.6 },
        { x: 1.4, y: -2.6 },
        { x: -1.2, y: 2.8 },
        { x: 2.4, y: -1.4 },
        { x: -2.0, y: -1.8 },
        { x: 1.0, y: 3.0 },
        { x: 1.8, y: -3.0 },
      ];

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const isMobile = screenWidth < 1000;
      const scatterMultiplier = isMobile ? 3.0 : 2.0;

      const startPositions = Array.from(images).map(() => ({
        x: 0,
        y: 0,
        z: -1200,
        scale: 0,
      }));

      const endPositions = scatterDirections.map((dir) => ({
        x: dir.x * screenWidth * scatterMultiplier,
        y: dir.y * screenHeight * scatterMultiplier,
        z: 2000,
        scale: isMobile ? 3.5 : 7.0,
      }));

      images.forEach((img, index) => {
        gsap.set(img, startPositions[index]);
      });

      gsap.set(coverImg, {
        z: -1000,
        scale: 0,
        x: 0,
        y: 0,
      });

      ScrollTrigger.create({
        trigger: ".spotlight",
        start: "top top",
        end: `+=${window.innerHeight * 15}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
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
              imageProgress
            );
            const scaleValue = gsap.utils.interpolate(
              start.scale,
              end.scale,
              imageProgress
            );
            const xValue = gsap.utils.interpolate(
              start.x,
              end.x,
              imageProgress
            );
            const yValue = gsap.utils.interpolate(
              start.y,
              end.y,
              imageProgress
            );

            gsap.set(img, {
              z: zValue,
              scale: scaleValue,
              x: xValue,
              y: yValue,
            });
          });

          const coverProgress = Math.max(0, (progress - 0.7) * 4);
          const coverZValue = -1000 + 2000 * coverProgress;
          const coverScaleValue = Math.min(1, coverProgress * 2);

          gsap.set(coverImg, {
            z: coverZValue,
            scale: coverScaleValue,
            x: 0,
            y: 0,
          });

          // Intro header fade out
          if (introWordElements.length > 0) {
            if (progress >= 0.6 && progress <= 0.75) {
              const introFadeProgress = (progress - 0.6) / 0.15;
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
            } else if (progress < 0.6) {
              gsap.set(introWordElements, { opacity: 1 });
            } else if (progress > 0.75) {
              gsap.set(introWordElements, { opacity: 0 });
            }
          }

          // Outro header fade in
          if (outroWordElements.length > 0) {
            if (progress >= 0.75 && progress <= 0.9) {
              const outroFadeProgress = (progress - 0.75) / 0.15;
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
            } else if (progress < 0.75) {
              gsap.set(outroWordElements, { opacity: 0 });
            } else if (progress > 0.9) {
              gsap.set(outroWordElements, { opacity: 1 });
            }
          }
        },
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="intro">
        <h1>visions that move beyond the surface</h1>
      </section>
      <section className="spotlight">
        <section className="spotlight-images">
          <div className="img">
            <img src="/hero_image1.png" alt="" />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=350&fit=crop"
              alt=""
            />
          </div>
        </section>
        <section className="spotlight-cover-img">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop"
            alt=""
          />
        </section>

        <section className="spotlight-intro-header">
          <h1>when motion and stillness collide in layers</h1>
        </section>
        <section className="spotlight-outro-header">
          <h1>revealing depth in every dimension</h1>
        </section>
      </section>

      <section className="outro">
        <h1>the future begins where this moment ends</h1>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          --light: #f5f5f5;
          --dark: #0a0a0a;
          background: var(--dark);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        h1 {
          font-size: 5rem;
          font-weight: 500;
          letter-spacing: -0.1rem;
          line-height: 0.9;
        }

        section {
          position: relative;
          width: 100vw;
          height: 100vh;
          padding: 2rem;
          overflow: hidden;
        }

        .intro,
        .outro {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--light);
          color: var(--dark);
        }

        .intro h1,
        .outro h1 {
          width: 50%;
          text-align: center;
        }

        .spotlight {
          background-color: var(--dark);
          color: var(--light);
        }

        .spotlight-images,
        .spotlight-cover-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          perspective: 2000px;
        }

        .img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 350px;
          will-change: transform;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .spotlight-cover-img {
          will-change: transform;
        }

        .spotlight-intro-header,
        .spotlight-outro-header {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 50%;
          pointer-events: none;
        }

        .spotlight-intro-header {
          z-index: 1;
        }

        .spotlight-outro-header {
          z-index: 10;
        }

        .word {
          display: inline-block;
          white-space: pre;
        }

        @media (max-width: 1000px) {
          h1 {
            font-size: 2.5rem;
          }

          .intro h1,
          .outro h1,
          .spotlight-intro-header,
          .spotlight-outro-header {
            width: 90%;
            padding: 2rem;
          }

          .img {
            width: 200px;
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default ExplosionImage;
