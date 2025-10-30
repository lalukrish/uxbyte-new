"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------- Sample Data ----------
const reviews = [
  {
    name: "Sarah Johnson",
    body: "They were incredibly helpful throughout the visa process!",
    rating: 5,
  },
  {
    name: "Priya Desai",
    body: "Highly professional and always available for help.",
    rating: 5,
  },
  {
    name: "Harikrishnan M C",
    body: "Made my dream of studying abroad come true!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer visa consulting, study abroad assistance, travel guidance, and documentation support tailored to each client's needs.",
  },
  {
    question: "Do you charge for consultation?",
    answer:
      "Our initial consultation is completely free. We only charge once you decide to proceed with our services.",
  },
  {
    question: "Can I track my application status?",
    answer:
      "Yes, we provide a secure dashboard where you can track your visa or admission process in real-time.",
  },
];

// ---------- Subcomponent ----------
const Testimonials = ({ reviews }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {reviews.map((review, index) => (
      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-xl">
            👤
          </div>
          <div>
            <p className="font-semibold text-white">{review.name}</p>
            <div className="flex gap-1">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-white/90 text-sm">{review.body}</p>
      </div>
    ))}
  </div>
);

// ---------- Main Component ----------
export default function ScrollFaqGsap() {
  const sectionRef = useRef(null);
  const blueRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blueRef.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh] overflow-hidden">
      {/* Blue Section */}
      <div
        ref={blueRef}
        className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 to-indigo-800 flex flex-col justify-center items-center rounded-b-[6rem] z-10"
      >
        <div className="max-w-5xl px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What Our Clients Say
          </h2>
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-lg p-6">
            <Testimonials reviews={reviews} />
          </div>
        </div>
      </div>

      {/* White FAQ Section */}
      <div className="absolute top-0 left-0 w-full h-full bg-white text-black rounded-t-[6rem] flex flex-col justify-center items-center px-6 md:px-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <p className="font-semibold text-lg mb-2">{faq.question}</p>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
