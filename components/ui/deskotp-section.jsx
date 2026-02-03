"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from "@/commonComponents/title";

const MonitorHero = ({
  items = [
    {
      title: "AirPods®",
      rightContent: {
        title: "Your fitness partner",
        subtitle: "sleek and powerful",
        description:
          "technology meets style in this essential fitness companion for modern life.",
      },
      productImage: "/screenshot-1.png",
      features: [
        { icon: "🎯", text: "99% Accuracy" },
        { icon: "⚡", text: "3 Modes Non Battery" },
      ],
    },
    {
      title: "Smart Watch®",
      subtitle: "Pro Series",
      description: "Fitness Tracker",
      productImage: "/screenshot-2.png",
      features: [
        { icon: "❤️", text: "Heart Rate Monitor" },
        { icon: "💧", text: "Water Resistant" },
      ],
      badge: "Watch Collection",
      rightContent: {
        title: "Your fitness partner",
        subtitle: "sleek and powerful",
        description:
          "technology meets style in this essential fitness companion for modern life.",
      },
    },
  ],
  topNav = ["About", "Services", "Industry", "Blog"],
  cartCount = 2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const scrollLockRef = useRef(false);

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === items.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? prev : prev + 1));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      const scrollingForward = e.deltaX > 0 || e.deltaY > 0;
      const scrollingBackward = e.deltaX < 0 || e.deltaY < 0;

      // ✅ Allow page scroll at boundaries
      if ((scrollingForward && isAtEnd) || (scrollingBackward && isAtStart)) {
        return; // DO NOT preventDefault → page scrolls
      }

      // ⛔ Lock page scroll only when we handle slides
      e.preventDefault();

      if (scrollLockRef.current) return;
      scrollLockRef.current = true;

      if (scrollingForward && !isAtEnd) {
        handleNext();
      } else if (scrollingBackward && !isAtStart) {
        handlePrev();
      }

      setTimeout(() => {
        scrollLockRef.current = false;
      }, 700);
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [isAtStart, isAtEnd]);

  const currentItem = items[currentIndex];

  return (
    <>
      <div className="relative w-full flex items-center px-28! mt-10">
        <div className="absolute px-28!inset-0 flex justify-start pointer-events-none">
          <Title className="text-start  pb-4 px-14! ">
            What Our Clients Say
          </Title>
        </div>

        <div className="ml-auto flex gap-4 pr-6 z-30">
          <button
            onClick={handlePrev}
            className="
              w-12 h-12 rounded-full
              bg-white hover:bg-zinc-700/50
              backdrop-blur-sm
              border border-gray-400
              flex items-center justify-center
              transition-all hover:scale-110 cursor-pointer
            "
          >
            <ChevronLeft className="w-6 h-6 text-zinc-400" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAtEnd}
            className={`
              w-12 h-12 rounded-full
              backdrop-blur-sm
              border
              flex items-center justify-center
              transition-all cursor-pointer
              ${
                isAtEnd
                  ? "bg-black border-black cursor-not-allowed"
                  : "bg-zinc-800/50 hover:bg-zinc-700/50 border-zinc-700 hover:scale-110"
              }
            `}
          >
            <ChevronRight
              className={`w-6 h-6 ${isAtEnd ? "text-white" : "text-zinc-400"}`}
            />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="md:min-h-screen bg-white flex items-center justify-center p-1 -mt-20 py-20"
      >
        <div className="relative w-full xl:px-40!">
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-3">
              <div className="bg-black rounded-2xl overflow-hidden relative md:aspect-[21/9] border border-zinc-800">
                <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-12 z-20">
                  <div className="w-44! flex items-center justify-center text-white" />

                  <div className="flex gap-2 md:gap-6">
                    {topNav.map((item, i) => (
                      <button
                        key={i}
                        className="px-4 py-2 rounded-lg text-zinc-200 text-sm hover:bg-zinc-700/50 transition-colors backdrop-blur-sm"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <button className="px-4 py-2 rounded-lg bg-zinc-800/50 text-zinc-400 text-sm hover:bg-zinc-700/50 transition-colors backdrop-blur-sm flex items-center gap-2">
                    Get In Touch
                  </button>
                </div>

                <div className="relative h-full grid gird-cols-1 md:grid-cols-2 gap-12 px-18 py-20">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-transparent blur-3xl" />
                    </div>

                    <img
                      src={currentItem.productImage}
                      alt="Product"
                      className="
                        relative z-10
                        max-w-[calc(100%-20px)]
                        max-h-[calc(100%-20px)]
                        w-auto h-auto
                        object-contain
                        drop-shadow-2xl
                      "
                    />
                  </div>

                  <div className="flex flex-col justify-center text-left space-y-4 max-w-lg">
                    <h2 className="text-white text-4xl font-light leading-tight">
                      {currentItem.title}
                    </h2>

                    <h3 className="text-zinc-300 text-lg font-medium">
                      {currentItem.rightContent.subtitle}
                    </h3>

                    <p className="text-zinc-500 text-base leading-relaxed">
                      {currentItem.rightContent.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent -z-10"></div>
        </div>
      </div>
    </>
  );
};

export default MonitorHero;
