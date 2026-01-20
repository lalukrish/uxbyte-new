import React from "react";
import { ArrowRight, Play, Youtube } from "lucide-react";

const PillarHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 relative overflow-hidden">
      {/* Diagonal Stripes Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[150%] bg-black transform rotate-[20deg]"></div>
          <div className="absolute top-[-20%] left-[15%] w-[30%] h-[150%] bg-indigo-950 transform rotate-[20deg]"></div>
          <div className="absolute top-[-20%] right-[20%] w-[35%] h-[150%] bg-black transform rotate-[20deg]"></div>
        </div>
      </div>

      {/* Bottom gradient shadows */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        {/* Laptop Frame */}
        <div className="relative w-full max-w-6xl">
          {/* Laptop Screen */}
          <div className="relative bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl p-4 backdrop-blur-sm border border-purple-400/30 shadow-2xl">
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 rounded-2xl overflow-hidden relative">
              {/* Diagonal stripes inside screen */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-20%] left-[-5%] w-[25%] h-[150%] bg-black transform rotate-[20deg]"></div>
                <div className="absolute top-[-20%] left-[15%] w-[20%] h-[150%] bg-indigo-950 transform rotate-[20deg]"></div>
                <div className="absolute top-[-20%] right-[25%] w-[30%] h-[150%] bg-black transform rotate-[20deg]"></div>
              </div>

              <div className="relative grid grid-cols-2 gap-8 p-12 min-h-[600px]">
                {/* Left Side - Content */}
                <div className="flex flex-col justify-center space-y-6">
                  {/* Logo */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-6 bg-white rounded-full"></div>
                      <div className="w-2 h-6 bg-white rounded-full"></div>
                      <div className="w-2 h-6 bg-white rounded-full"></div>
                    </div>
                    <span className="text-4xl font-bold text-white">
                      Pillar
                    </span>
                  </div>

                  {/* Search Bar */}
                  <div className="bg-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 max-w-md">
                    <span className="text-purple-300 text-sm">
                      💡 Turn ideas, hobbies & expert product → Biz + $$$$ 🤑
                    </span>
                  </div>

                  {/* Main Heading */}
                  <div>
                    <h1 className="text-6xl font-bold text-white leading-tight">
                      All-In-One
                      <br />
                      Creator Store
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-purple-200 text-lg max-w-md">
                    Turn followers into customers & brands into partners with
                    just one platform. Join Pillar for free today!
                  </p>

                  {/* CTA Button */}
                  <button className="bg-gradient-to-r from-cyan-400 to-teal-400 text-indigo-900 font-semibold px-8 py-4 rounded-full flex items-center gap-2 w-fit hover:shadow-lg hover:shadow-cyan-400/50 transition-all">
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Testimonial */}
                  <div className="flex items-start gap-3 pt-4">
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt="User"
                      className="w-12 h-12 rounded-full border-2 border-purple-400"
                    />
                    <div>
                      <p className="text-white text-sm leading-relaxed">
                        "I now monetize existing skills and turned them into a
                        service that I could sell."
                      </p>
                      <p className="text-purple-300 text-xs mt-1">
                        <strong>Simon Freund</strong>, Professional Tennis
                        Pillar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Cards */}
                <div className="relative flex items-center justify-center">
                  {/* Main Card - Profile */}
                  <div className="absolute top-8 right-8 bg-gradient-to-br from-orange-400 via-pink-500 to-pink-600 rounded-3xl p-6 w-80 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src="https://i.pravatar.cc/150?img=45"
                        alt="Creator"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4"
                      />
                      <h3 className="text-white font-bold text-xl mb-1">
                        Amanda Geller
                      </h3>
                      <p className="text-white/90 text-sm mb-4">
                        UGC Creator • Traveller • Foodie
                      </p>

                      <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl w-full font-semibold mb-2 hover:bg-indigo-700 transition-colors">
                        View Media Kit
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl w-full font-semibold hover:bg-white/30 transition-colors">
                        Get My Free Guide
                      </button>

                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-white text-pink-600 font-bold px-4 py-2 rounded-full shadow-lg">
                        $299
                      </div>

                      {/* Share Button */}
                      <button className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-white transition-colors">
                        ↗ Share
                      </button>
                    </div>
                  </div>

                  {/* Secondary Card - Travel */}
                  <div className="absolute top-32 left-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 w-56 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform">
                    <div className="relative h-32 bg-pink-300/30 rounded-xl overflow-hidden mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400"
                        alt="Travel"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 text-white">
                        <p className="text-xs font-semibold">
                          Travel with me to
                        </p>
                        <p className="text-xl font-bold">NEW YORK</p>
                      </div>
                      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 hover:bg-white transition-colors">
                        <Play className="w-6 h-6 text-purple-600 fill-purple-600" />
                      </button>
                    </div>
                  </div>

                  {/* Coaching Card */}
                  <div className="absolute bottom-8 right-0 bg-white rounded-2xl p-4 w-64 shadow-xl transform rotate-6 hover:rotate-0 transition-transform">
                    <h4 className="font-bold text-gray-800 text-lg mb-3">
                      UGC Creator Coaching
                    </h4>
                    <button className="bg-black text-white px-4 py-2 rounded-lg w-full font-semibold mb-3 hover:bg-gray-800 transition-colors">
                      📱 Pay
                    </button>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-red-100 hover:bg-red-200 p-3 rounded-lg transition-colors">
                        <Youtube className="w-6 h-6 text-red-600 mx-auto" />
                      </button>
                      <button className="flex-1 bg-red-100 hover:bg-red-200 p-3 rounded-lg transition-colors">
                        <div className="w-6 h-6 mx-auto bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          P
                        </div>
                      </button>
                      <button className="flex-1 bg-purple-100 hover:bg-purple-200 p-3 rounded-lg transition-colors">
                        <div className="w-6 h-6 mx-auto bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          IG
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Polaroid Camera Decoration */}
                  <div className="absolute top-0 right-0 transform rotate-12">
                    <div className="bg-white rounded-lg p-2 shadow-xl w-32">
                      <div className="bg-gray-800 h-20 rounded"></div>
                      <div className="mt-2 space-y-1">
                        <div className="h-1 bg-gray-300 rounded"></div>
                        <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative h-8 mt-2">
            <div className="absolute inset-x-0 mx-auto w-2/3 h-full bg-gradient-to-b from-purple-400/30 to-transparent rounded-b-3xl"></div>
            <div className="absolute inset-x-0 mx-auto w-1/2 h-full bg-gradient-to-b from-purple-500/40 to-transparent rounded-b-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarHero;
