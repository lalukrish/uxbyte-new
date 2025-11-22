import React from "react";
import {
  ArrowRight,
  Play,
  Plus,
  Star,
  TrendingUp,
  Search,
  Share2,
} from "lucide-react";

export default function ClientComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 relative">
        <div className="text-center mb-12 sm:mb-16 relative">
          {/* Main White Box Container */}
          <div className="inline-block bg-black rounded-3xl sm:rounded-[3rem] shadow-2xl px-8 sm:px-12 lg:px-16 py-8 sm:py-12 relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <div className="mb-2">
                Your{" "}
                <span className="inline-flex items-center gap-1 sm:gap-2 align-middle">
                  <span className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 inline-block shadow-lg"></span>
                  <span className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 inline-block shadow-lg"></span>
                  <span className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gray-900 inline-flex items-center justify-center shadow-lg">
                    <Plus
                      className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
                      strokeWidth={3}
                    />
                  </span>
                </span>{" "}
                Marketing
              </div>
              <div className="mb-2">partner for digital</div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                <span>growth</span>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition flex items-center gap-2 sm:gap-3 text-base sm:text-xl font-semibold shadow-lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </h1>
          </div>

          {/* Decorative elements */}
          <div className="hidden lg:flex absolute left-4 lg:left-12 bottom-16 lg:bottom-24 gap-3">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-900 rounded-full flex items-center justify-center shadow-xl">
              <Play className="w-6 h-6 lg:w-7 lg:h-7 text-white fill-white ml-1" />
            </div>
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-900 rounded-full flex items-center justify-center shadow-xl">
              <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
          </div>

          <div className="hidden sm:flex absolute right-4 sm:right-8 lg:right-12 top-12 sm:top-20 items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 fill-gray-900" />
            <div className="text-left">
              <div className="text-xs sm:text-sm font-semibold leading-tight">
                Trusted by 500+
              </div>
              <div className="text-xs sm:text-sm font-semibold leading-tight">
                businesses
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
          {/* SEO Card */}
          <div className="bg-blue-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4 sm:mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="#e0e0e0"
                      opacity="0.3"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="60"
                      fill="#fff"
                      opacity="0.5"
                    />
                    <path
                      d="M100 40 L120 80 L165 90 L130 125 L140 170 L100 145 L60 170 L70 125 L35 90 L80 80 Z"
                      fill="#ffd700"
                    />
                    <circle cx="100" cy="100" r="25" fill="#4299e1" />
                    <text
                      x="100"
                      y="110"
                      fontSize="24"
                      fill="#fff"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      #1
                    </text>
                  </svg>
                </div>
              </div>
              <div className="bg-blue-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 inline-flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                SEO Optimization
              </h3>
              <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">
                Rank higher on Google and drive organic traffic to your website.
              </p>
              <button className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2 text-sm sm:text-base">
                LEARN MORE
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Digital Marketing Stats Card */}
          <div className="bg-gradient-to-br from-cyan-200 to-blue-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 sm:mb-4">
              300%
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 inline-block">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                Average ROI
              </h3>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                for our clients
              </h3>
            </div>
          </div>

          {/* Social Media Marketing Card */}
          <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="mb-4">
              {/* <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="#8b5cf6"
                    opacity="0.3"
                  />
                  <circle cx="70" cy="80" r="25" fill="#ec4899" />
                  <circle cx="130" cy="80" r="25" fill="#3b82f6" />
                  <circle cx="100" cy="130" r="25" fill="#10b981" />
                  <line
                    x1="70"
                    y1="80"
                    x2="100"
                    y2="130"
                    stroke="#666"
                    strokeWidth="3"
                  />
                  <line
                    x1="130"
                    y1="80"
                    x2="100"
                    y2="130"
                    stroke="#666"
                    strokeWidth="3"
                  />
                  <line
                    x1="70"
                    y1="80"
                    x2="130"
                    y2="80"
                    stroke="#666"
                    strokeWidth="3"
                  />
                </svg>
              </div> */}
              <div className=" w-[300px] inline-block">
                {/* Background GIF */}
                <img
                  src="/social-media.gif"
                  alt="background"
                  className="block w-[300px]"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 inline-block self-start">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
                Social Media
              </h3>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                Marketing
              </h3>
            </div>
          </div>
        </div>

        {/* Services Overview Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Complete Digital Marketing Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* SEO Services */}
              <div className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                  SEO Services
                </h3>
                <ul className="text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                  <li>• Keyword Research</li>
                  <li>• On-Page Optimization</li>
                  <li>• Link Building</li>
                  <li>• Technical SEO</li>
                  <li>• Local SEO</li>
                </ul>
              </div>

              {/* Digital Marketing */}
              <div className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                  Digital Marketing
                </h3>
                <ul className="text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                  <li>• PPC Campaigns</li>
                  <li>• Email Marketing</li>
                  <li>• Content Marketing</li>
                  <li>• Analytics & Reporting</li>
                  <li>• Conversion Optimization</li>
                </ul>
              </div>

              {/* Social Media Marketing */}
              <div className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Share2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                  Social Media
                </h3>
                <ul className="text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                  <li>• Strategy Development</li>
                  <li>• Content Creation</li>
                  <li>• Community Management</li>
                  <li>• Influencer Marketing</li>
                  <li>• Paid Social Ads</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 sm:mt-12 text-center">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition flex items-center gap-2 sm:gap-3 mx-auto text-base sm:text-lg font-semibold shadow-lg">
                Start Your Marketing Journey
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
