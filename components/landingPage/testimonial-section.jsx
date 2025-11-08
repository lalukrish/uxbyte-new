"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "../ui/testimonialcard";
import ClientComponent from "./gridComponent";
import BusinessFeatureSection from "./featureSection";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    img: "/images/user.png",
    name: "Sarah Johnson",
    body: "They were incredibly helpful throughout the visa process!",
    rating: 5,
  },
  {
    img: "/images/user.png",
    name: "Bhagyalakshmi Baburaj",
    body: "The team's support made the application stress-free.",
    rating: 4,
  },
  {
    img: "/images/user.png",
    name: "Priya Desai",
    body: "Highly professional and always available for help.",
    rating: 5,
  },
  {
    img: "/images/user.png",
    name: "Aiswrya Shaji",
    body: "Quick responses and great results. Highly recommend!",
    rating: 5,
  },
  {
    img: "/images/user.png",
    name: "Aisha Farouk",
    body: "Exceptional service from start to finish.",
    rating: 4,
  },
  {
    img: "/images/user.png",
    name: "Harikrishnan M C",
    body: "Made my dream of studying abroad come true!",
    rating: 5,
  },
];

export default function DomainSearchSection() {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // 👈 gives scroll distance instead of relying on container height
        scrub: true,
        pin: true,
      },
    });
    // Slide animations
    tl.fromTo(
      section2Ref.current,
      { yPercent: 100 },
      { yPercent: 0, duration: 1, ease: "none" }
    ).fromTo(
      section3Ref.current,
      { yPercent: 100 },
      { yPercent: 0, duration: 1, ease: "none" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden mt-20"
    >
      {/* --- Section 1 --- */}
      <h1 className="text-white text-7xl">comon</h1>
      <section
        ref={section1Ref}
        className="absolute inset-0 h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-blue-900 to-indigo-800  overflow-hidden"
      >
        {/* <div className="max-w-5xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-lg p-6">
            <Testimonials reviews={reviews} />
          </div>
        </div> */}
        <BusinessFeatureSection />
      </section>

      {/* --- Section 2 --- */}
      <section
        ref={section2Ref}
        className="absolute inset-0 h-screen  rounded-t-[4rem] text-white bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900"
      >
        {/* <div className="text-center space-y-8 px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Find the Perfect Domain
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Secure your identity online with a domain name that defines your
            brand.
          </p>

          <div className="w-full max-w-3xl mx-auto flex items-center bg-white/20 backdrop-blur-md rounded-full shadow-xl overflow-hidden border border-white/30">
            <input
              type="text"
              placeholder="Type your domain name..."
              className="flex-1 px-6 py-3 bg-transparent text-lg text-white placeholder-gray-300 outline-none"
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-3 font-semibold rounded-r-full transition-all">
              Search →
            </button>
          </div>
        </div> */}
        <ClientComponent />
      </section>

      {/* --- Section 3 --- */}
      <section
        ref={section3Ref}
        className="absolute inset-0 h-screen flex flex-col items-center justify-center rounded-t-[4rem] text-white bg-gradient-to-tr from-purple-800 via-fuchsia-700 to-pink-600"
      >
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Upgrade to Premium
          </h2>

          <div className="backdrop-blur-md bg-white/20 p-10 rounded-3xl shadow-2xl max-w-lg mx-auto border border-white/30">
            <h3 className="text-2xl font-semibold mb-4">
              Unlock Exclusive Features
            </h3>
            <p className="text-gray-100 mb-8">
              Get faster performance, better support, and advanced tools to grow
              your digital presence.
            </p>
            <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-purple-100 transition-all">
              Explore Plans →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
