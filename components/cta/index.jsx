import React from "react";

const CTASection = () => {
  return (
    <section className="w-full  px-4 sm:px-6 lg:px-8 py-12">
      <div className="px-24 mx-auto">
        <div
          className="
            relative overflow-hidden rounded-3xl
            bg-gradient-to-br from-violet-900 via-purple-900 to-purple-950
            min-h-[620px] sm:min-h-[480px] lg:min-h-[520px]
            flex items-center
          "
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/3 -right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/3 -left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          </div>

          {/* CONTENT */}
          <div className="relative grid lg:grid-cols-2 gap-10 items-center w-full px-6 sm:px-10 lg:px-14">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                AI is here to make smart things, smarter!
              </h2>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                As a custom AI development company in India, we embed
                intelligence into your business that works seamlessly to drive
                smart results.
              </p>

              <button
                className="
                  inline-flex items-center gap-2
                  px-8 py-4
                  border-2 border-white
                  text-white font-medium rounded-lg
                  hover:bg-white hover:text-violet-900
                  transition-all duration-300
                "
              >
                Contact us
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
                {/* Animated circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-56 h-56 border border-violet-400/30 rounded-full animate-pulse" />
                  <div
                    className="absolute w-72 h-72 border border-violet-400/20 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute w-88 h-88 border border-violet-400/10 rounded-full animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                </div>

                {/* Center AI */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-violet-600/20 blur-2xl rounded-full" />
                    <div className="relative bg-black/40 backdrop-blur-sm w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-violet-400/30 flex items-center justify-center">
                      <span className="text-6xl sm:text-7xl font-bold bg-gradient-to-br from-violet-400 to-purple-300 bg-clip-text text-transparent">
                        AI
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-violet-400 rounded-full animate-bounce" />
                <div
                  className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute top-1/2 right-1/3 w-2 h-2 bg-violet-300 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
