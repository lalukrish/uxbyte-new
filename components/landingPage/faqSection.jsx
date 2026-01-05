"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/commonComponents/title";

gsap.registerPlugin(ScrollTrigger);

const ChevronDown = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

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
  {
    question: "How long does the process take?",
    answer:
      "Processing times vary by country and visa type, typically ranging from 2-8 weeks. We keep you updated throughout the entire journey.",
  },
  {
    question: "Do you provide post-arrival support?",
    answer:
      "Yes, we offer comprehensive post-arrival assistance including accommodation help, orientation services, and ongoing support.",
  },
  {
    question: "What countries do you cover?",
    answer:
      "We assist with visa applications and study abroad programs for USA, UK, Canada, Australia, Ireland, and many European countries.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No, we believe in complete transparency. All costs are clearly outlined before you commit to our services.",
  },
];

const Testimonials = ({ reviews }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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

export default function ScrollFaqGsap() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const blueRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blueRef.current, {
        y: "-101vh",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="faq-section relative "
      style={{ isolation: "isolate", zIndex: 10 }}
    >
      {" "}
      {/* FAQ Section (slides up to reveal black section below) */}
      <div
        ref={blueRef}
        className="absolute top-0 left-0 w-full h-[120vh] bg-white flex flex-col rounded-b-[2.5rem] md:rounded-b-[6rem] z-10"
      >
        <div className="px-6 md:px-20 py-8 md:py-12 text-black h-full flex flex-col">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-start mb-8 md:mb-12 flex-shrink-0">
            Frequently Asked Questions
          </h2> */}
          <Title className="pl-4"> Frequently Asked Questions</Title>

          <div className="divide-y divide-gray-300 max-w-5xl xl:max-w-7xl flex-shrink-0">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 md:py-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-start w-full text-left cursor-pointer hover:bg-gray-50 transition-colors px-3 md:px-4 py-2 rounded-lg group"
                >
                  <p className="font-semibold text-base md:text-lg pr-4 group-hover:cursor-pointer transition-colors">
                    {faq.question}
                  </p>

                  <ChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 text-gray-700 flex-shrink-0 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-gray-800" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base px-3 md:px-4 pt-3 pb-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section (revealed underneath as FAQ slides up) */}
      <div className="absolute top-10 left-0 w-full h-[100vh] bg-black text-white rounded-t-[6rem] flex flex-col justify-center items-center px-4 md:px-6">
        <div className="w-full flex flex-col items-center justify-center py-10 md:py-20 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] 2xl:text-9xl font-semibold text-center leading-tight gradient-text mb-4">
            The data you own,
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] 2xl:text-9xl font-semibold text-center leading-tight gradient-text">
            supercharged with AI
          </h1>
        </div>

        <button className="mt-6 md:mt-8 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg lg:text-xl font-semibold hover:bg-gray-200 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300">
          Get Started
        </button>
      </div>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            90deg,
            #60a5fa 0%,
            #a78bfa 25%,
            #f472b6 50%,
            #a78bfa 75%,
            #60a5fa 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
    </section>
  );
}
