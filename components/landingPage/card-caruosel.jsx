import React, { useEffect, useState } from "react";

const articles = [
  {
    id: 1,
    category: "AI AGENTS",
    date: "ARTICLE · NOVEMBER 18, 2025",
    title:
      "Leading in the Age of AI Agents: Managing the Machines That Manage...",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    category: "BUSINESS",
    date: "ARTICLE · DECEMBER 15, 2025",
    title: "The Future of Remote Work and Digital Collaboration",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    category: "TECHNOLOGY",
    date: "ARTICLE · JANUARY 3, 2026",
    title: "Blockchain and the New Era of Digital Trust",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
  },
];

export default function MobileCenterCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % articles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    if (index === active) return "center";
    if (index === (active - 1 + articles.length) % articles.length)
      return "left";
    if (index === (active + 1) % articles.length) return "right";
    return "hidden";
  };

  return (
    <div className="relative w-full h-[60vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-md mx-auto px-12">
        <div className="relative h-[100px] flex items-center justify-center">
          {articles.map((article, index) => {
            const position = getPosition(index);

            return (
              <div
                key={article.id}
                onClick={() => setActive(index)}
                className={`absolute transition-all duration-700 ease-in-out cursor-pointer
                  ${
                    position === "center"
                      ? "z-30 scale-100 opacity-100 translate-x-0"
                      : ""
                  }
                  ${
                    position === "left"
                      ? "z-20 scale-75 opacity-90 -translate-x-[270px]"
                      : ""
                  }
                  ${
                    position === "right"
                      ? "z-20 scale-75 opacity-90 translate-x-[270px]"
                      : ""
                  }
                  ${position === "hidden" ? "z-10 scale-50 opacity-0" : ""}
                `}
                style={{
                  width: "270px",
                  height: "330px",
                }}
              >
                <div className="relative w-full h-full  overflow-hidden shadow-2xl">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 text-xs font-bold tracking-wider text-white bg-blue-600 rounded-full uppercase">
                      {article.category}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="bg-white rounded-2xl p-5 shadow-xl">
                      <p className="text-xs text-gray-500 font-medium mb-2 tracking-wide">
                        {article.date}
                      </p>
                      <h2 className="text-base font-bold text-gray-900 leading-tight">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-300 rounded-full
                ${
                  index === active
                    ? "w-8 h-2 bg-gray-900"
                    : "w-2 h-2 bg-gray-300"
                }
              `}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setActive((active - 1 + articles.length) % articles.length)
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors z-40"
        >
          ‹
        </button>
        <button
          onClick={() => setActive((active + 1) % articles.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors z-40"
        >
          ›
        </button>
      </div>
    </div>
  );
}
