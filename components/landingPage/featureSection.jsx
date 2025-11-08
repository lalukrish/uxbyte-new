"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "eCommerce",
    description:
      "Set up your online store, manage products, and start selling with ease.",
    image: "/hospitality.jpg",
    featuredTitle: "Start your online store today",
    featuredDesc:
      "Learn how to launch a beautiful online shop and reach customers worldwide.",
  },
  {
    title: "Scheduling",
    description:
      "Manage your appointments and bookings effortlessly with our tools.",
    image: "/maritime.jpg",
    featuredTitle: "Simplify your scheduling process",
    featuredDesc:
      "Keep your calendar organized and let customers book with you easily.",
  },
  {
    title: "Portfolio",
    description:
      "Showcase your creative work with beautiful layouts and galleries.",
    image: "/manufacutring.jpg",
    featuredTitle: "Show your work in style",
    featuredDesc:
      "Build a stunning digital portfolio that attracts clients and opportunities.",
  },
  {
    title: "Blog",
    description:
      "Write, publish, and grow your audience through engaging posts.",
    image: "/ecommerce.jpg",
    featuredTitle: "Grow your audience with blogging",
    featuredDesc:
      "Share your ideas and connect with your community through well-written content.",
  },
  {
    title: "Online Courses",
    description:
      "Create and sell video courses to share your expertise with the world.",
    image: "/construction.jpg",
    featuredTitle: "Teach and inspire learners",
    featuredDesc:
      "Launch your own course and empower people to learn new skills from you.",
  },
  {
    title: "Events",
    description:
      "Host, manage, and promote your events easily with integrated tools.",
    image: "/logistics.jpg",
    featuredTitle: "Make your events unforgettable",
    featuredDesc:
      "Simplify event management and connect with your audience in real life.",
  },
];

export default function BusinessFeatureSection() {
  const [openIndex, setOpenIndex] = useState(0); // default open first
  const selected = features[openIndex];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 gap-10">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 leading-snug">
          Add everything you need to grow your business
        </h2>

        <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-100">
          {features.map((item, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between py-4 text-lg font-medium transition-colors ${
                  openIndex === index
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                <span>{item.title}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="pb-4 text-gray-600 text-sm md:text-base">
                  {item.description}
                  <div className="mt-2">
                    <button
                      onClick={() => setOpenIndex(index)}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      View Example →
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - Changes based on selected item */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start transition-all duration-500 ease-in-out">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md transform hover:scale-[1.02] transition duration-300">
          <div className="relative h-64 w-full">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {selected.featuredTitle}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {selected.featuredDesc}
            </p>
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <p className="text-gray-800 font-semibold">
                Subscription – <span className="text-blue-600">$10</span> /
                month
              </p>
              <p className="text-gray-500 text-sm mb-3">
                Get exclusive access to premium content and tools.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
