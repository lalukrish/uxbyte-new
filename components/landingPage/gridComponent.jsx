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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-16 pb-4 relative">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {/* SEO Card */}
          <div className="bg-blue-500 rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <div className="w-24 h-24 mx-auto">
                  {" "}
                  {/* Smaller icon */}
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle
                      cx="100"
                      cy="100"
                      r="70"
                      fill="#e0e0e0"
                      opacity="0.3"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="50"
                      fill="#fff"
                      opacity="0.5"
                    />
                    <path
                      d="M100 40 L120 80 L165 90 L130 125 L140 170 L100 145 L60 170 L70 125 L35 90 L80 80 Z"
                      fill="#ffd700"
                    />
                    <circle cx="100" cy="100" r="20" fill="#4299e1" />
                    <text
                      x="100"
                      y="108"
                      fontSize="20"
                      fill="#fff"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      #1
                    </text>
                  </svg>
                </div>
              </div>

              <div className="bg-blue-400 rounded-xl p-2 inline-flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-blue-500" />
                </div>
              </div>

              <h3 className="text-base font-semibold mb-1">SEO Optimization</h3>

              <p className="text-blue-100 mb-3 text-sm">
                Rank higher on Google and drive organic traffic.
              </p>

              <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2 text-sm">
                LEARN MORE <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ROI Card */}
          <div className="bg-gradient-to-br from-cyan-200 to-blue-300 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>

            <div className="text-4xl font-bold text-gray-900 mb-2">300%</div>

            <div className="bg-white rounded-xl px-4 py-3 inline-block">
              <h3 className="text-sm font-semibold text-gray-900">
                Average ROI
              </h3>
              <h3 className="text-sm font-semibold text-gray-900">
                for our clients
              </h3>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="mb-4">
              <div className="w-[220px] inline-block">
                {" "}
                {/* Reduced size */}
                <img src="/social-media.gif" className="block w-[220px]" />
              </div>
            </div>

            <div className="bg-white rounded-xl px-4 py-3 inline-block self-start">
              <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Social Media
              </h3>
              <h3 className="text-sm font-semibold text-gray-900">Marketing</h3>
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
