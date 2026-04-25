"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/commonComponents/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

const faqs = [
  {
    question: "What services does UXByte provide?",
    answer:
      "UXByte is a full-service IT company offering development, cloud solutions, UI/UX design, digital marketing, branding, and social media management.",
  },
  {
    question: "Do you work with startups or large enterprises?",
    answer:
      "We work with businesses of all sizes, from early-stage startups to growing enterprises, tailoring our solutions to meet unique goals and requirements.",
  },
  {
    question: "How do you ensure fast project delivery?",
    answer:
      "We follow agile workflows, streamlined processes, and modern technology stacks to ensure efficient development and timely delivery without compromising quality.",
  },
  {
    question: "Can you handle end-to-end projects?",
    answer:
      "Yes, we manage projects from strategy and design to development, deployment, and ongoing support, providing complete end-to-end solutions.",
  },
  {
    question: "Do you offer cloud-based solutions?",
    answer:
      "Yes, we provide scalable and secure cloud solutions, including migration, deployment, and optimization to support business growth and performance.",
  },
  {
    question: "Will I get ongoing support after project delivery?",
    answer:
      "Absolutely. We offer post-launch support, maintenance, and optimization to ensure your digital solutions continue to perform effectively.",
  },
  {
    question: "How do you communicate during a project?",
    answer:
      "We maintain transparent communication through regular updates, progress reviews, and dedicated points of contact throughout the project lifecycle.",
  },
];

export default function ScrollFaqGsap() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);
  const blueRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const section = sectionRef.current;
    const blue = blueRef.current;

    if (!section || !blue) return;

    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      limitCallbacks: true,
    });

    const timer = setTimeout(() => {
      const animation = gsap.to(blue, {
        y: "-101vh",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: false,
          invalidateOnRefresh: true,
        },
      });

      scrollTriggerRef.current = animation.scrollTrigger;
    }, 200);

    return () => {
      clearTimeout(timer);

      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });

      if (section) {
        const spacers = section.querySelectorAll(".pin-spacer");
        spacers.forEach((spacer) => {
          const parent = spacer.parentNode;
          if (parent) {
            while (spacer.firstChild) {
              parent.insertBefore(spacer.firstChild, spacer);
            }
            parent.removeChild(spacer);
          }
        });
      }
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="white-section faq-section-wrapper mt-5 md:mt-0 h-[50vh] md:h-[200vh]"
      style={{
        position: "relative",
        isolation: "isolate",
        zIndex: 10,
      }}
    >
      {/* Sticky container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          overflow: "hidden",
        }}
        className="h-[100vh] md:h-screen"
      >
        {/* FAQ Section (slides up) */}
        <div
          ref={blueRef}
          className="absolute h-[89vh] max-h-[120vh] md:h-[120vh] top-0 left-0 w-full bg-white flex flex-col z-10 overflow-hidden overflow-y-hidden"
          style={{
            borderBottomLeftRadius: "3rem",
            borderBottomRightRadius: "3rem",
          }}
        >
          <div className="px-4 md:px-20 py-6 md:py-12 text-black h-full flex flex-col overflow-auto">
            <div className="text-xs md:text-sm pl-2 md:pl-4 mb-3 md:mb-4">
              <span className="text-black">SIMPLE</span>
              <span className="text-gray-500"> ANSWERS, FAST</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold pl-2 md:pl-4 mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-gray-300 flex-shrink-0">
              {faqs.map((faq, index) => (
                <div key={index} className="py-3 md:py-5">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-start w-full text-left cursor-pointer hover:bg-gray-50 transition-colors px-2 md:px-4 py-2 rounded-lg group"
                  >
                    <p className="font-medium text-sm md:text-lg pr-3 md:pr-4 group-hover:cursor-pointer transition-colors">
                      {faq.question}
                    </p>

                    <ChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transform transition-transform duration-300 ${
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
                    <p className="text-sm md:text-[17px] px-2 md:px-4 pt-2 md:pt-3 pb-2 text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute left-0 w-full bg-black text-white flex flex-col justify-center items-center px-4 md:px-6 mt-40 md:mt-0  md:top-[10vh]  h-[100vh]"
          style={{
            borderTopLeftRadius: "3rem",
            borderTopRightRadius: "3rem",
          }}
        >
          <div className="w-full flex flex-col items-center justify-center py-8 md:py-20 max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-semibold text-center leading-tight gradient-text mb-2 md:-mb-4">
              The data you own,
            </h1>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-semibold text-center leading-tight gradient-text">
              supercharged with AI
            </h1>
          </div>

          <Button
            className="mt-4 md:mt-8 py-3 md:py-4 px-8 md:px-10 text-sm md:text-base border-2 text-white border-white rounded-full hover:bg-white hover:text-black transition-colors "
            label={"Get Started"}
          ></Button>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            90deg,
            #60a5fa 0%,
            #a78bfa 25%,
            #f472b6 50%,
            #a78bfa 75%,
            #ff7a32 100%
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
