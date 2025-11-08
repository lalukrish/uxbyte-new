import React from "react";
import { ArrowRight, Play, Plus, Star } from "lucide-react";

export default function ClientComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 overflow-hidden">
      {/* Header */}
      {/* <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold">
            NEXUS<span className="text-blue-600">SCI</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Log In
          </button>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
            Sign Up
          </button>
        </div>
      </header> */}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12 relative">
        <div className="text-center mb-16 relative">
          {/* Main White Box Container */}
          <div className="inline-block bg-white rounded-[3rem] shadow-2xl px-16 py-12 relative">
            <h1 className="text-6xl font-bold leading-tight">
              <div className="mb-2">
                Your{" "}
                <span className="inline-flex items-center gap-2 align-middle">
                  <span className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 inline-block shadow-lg"></span>
                  <span className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 inline-block shadow-lg"></span>
                  <span className="w-14 h-14 rounded-full bg-gray-900 inline-flex items-center justify-center shadow-lg">
                    <Plus className="w-7 h-7 text-white" strokeWidth={3} />
                  </span>
                </span>{" "}
                AI partner
              </div>
              <div className="mb-2">for advanced scientific</div>
              <div className="flex items-center justify-center gap-6">
                <span>discovery</span>
                <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition flex items-center gap-3 text-xl font-semibold shadow-lg">
                  Get Started
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </h1>
          </div>

          {/* Decorative elements */}
          <div className="absolute left-12 bottom-24 flex gap-3">
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center shadow-xl">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </div>
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center shadow-xl">
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
            </div>
          </div>

          <div className="absolute right-12 top-20 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-xl">
            <Star className="w-6 h-6 text-gray-900 fill-gray-900" />
            <div className="text-left">
              <div className="text-sm font-semibold leading-tight">
                The world's best
              </div>
              <div className="text-sm font-semibold leading-tight">
                science startup
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {/* Microscope Card */}
          <div className="bg-blue-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 250'%3E%3Crect x='70' y='40' width='60' height='20' rx='3' fill='%23e0e0e0'/%3E%3Ccircle cx='100' cy='45' r='8' fill='%23999'/%3E%3Crect x='80' y='60' width='40' height='80' rx='5' fill='%23c0c0c0'/%3E%3Crect x='75' y='140' width='50' height='15' rx='3' fill='%23999'/%3E%3Ccircle cx='100' cy='165' r='25' fill='%23333'/%3E%3Ccircle cx='85' cy='190' r='12' fill='%23333'/%3E%3Ccircle cx='100' cy='190' r='12' fill='%23333'/%3E%3Ccircle cx='115' cy='190' r='12' fill='%23333'/%3E%3Crect x='60' y='200' width='80' height='10' rx='5' fill='%23666'/%3E%3Cellipse cx='100' cy='220' rx='50' ry='15' fill='%23999'/%3E%3C/svg%3E"
                  alt="Microscope"
                  className="w-48 h-auto"
                />
              </div>
              <div className="bg-blue-400 rounded-2xl p-4 mb-4 inline-flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI-powered platform
              </h3>
              <p className="text-blue-100 mb-4">for groundbreaking research.</p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2">
                LEARN MORE
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 1.5K+ Card */}
          <div className="bg-gradient-to-br from-cyan-200 to-blue-300 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="text-7xl font-bold text-gray-900 mb-4">1.5K+</div>
            <div className="bg-white rounded-2xl px-6 py-4 inline-block">
              <h3 className="text-xl font-semibold text-gray-900">
                Research at your
              </h3>
              <h3 className="text-xl font-semibold text-gray-900">
                fingertips
              </h3>
            </div>
          </div>

          {/* Reviews Card */}
          <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='70' r='35' fill='%23d4a574'/%3E%3Cpath d='M65 120 Q100 100 135 120 L135 200 L65 200 Z' fill='%2387CEEB'/%3E%3Crect x='70' y='110' width='60' height='20' rx='10' fill='%23d4a574'/%3E%3Cpath d='M70 55 Q50 40 55 30 Q60 35 70 45 Z' fill='%23654321'/%3E%3Cpath d='M130 55 Q150 40 145 30 Q140 35 130 45 Z' fill='%23654321'/%3E%3Cpath d='M75 50 Q100 35 125 50 Q100 60 75 50 Z' fill='%23654321'/%3E%3Ccircle cx='85' cy='65' r='3' fill='%23333'/%3E%3Ccircle cx='115' cy='65' r='3' fill='%23333'/%3E%3Cpath d='M85 80 Q100 85 115 80' stroke='%23333' fill='none' stroke-width='2'/%3E%3Crect x='75' y='140' width='15' height='60' rx='3' fill='%23d4a574'/%3E%3Crect x='110' y='140' width='15' height='60' rx='3' fill='%23d4a574'/%3E%3Cellipse cx='82' cy='155' rx='8' ry='4' fill='%23fff' opacity='0.5'/%3E%3Cellipse cx='118' cy='155' rx='8' ry='4' fill='%23fff' opacity='0.5'/%3E%3C/svg%3E"
              alt="User"
              className="absolute right-8 bottom-8 w-48 h-auto"
            />
            <div className="bg-white rounded-2xl px-6 py-4 inline-block self-start">
              <h3 className="text-xl font-semibold text-gray-900">
                See reviews from
              </h3>
              <h3 className="text-xl font-semibold text-gray-900">our users</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
