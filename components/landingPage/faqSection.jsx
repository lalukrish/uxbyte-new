"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/commonComponents/title";
import { Button } from "@/commonComponents/Button";
import { EncryptedText } from "../ui/encrypted-text";
import Paragraph from "@/commonComponents/paragraph";

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
        className="absolute top-0 left-0 w-full  h-[100vh] md:h-[120vh]  bg-white flex flex-col rounded-b-[0rem] md:rounded-b-[6rem] z-10"
      >
        <div className="px-6 md:px-20 py-8 md:py-12 text-black h-full flex flex-col">
          <EncryptedText
            normaltext="SIMPLE"
            text=" ANSWERS, FAST"
            className="text-sm pl-4"
            normalClassName=""
            encryptedClassName="text-[#adadae]"
            revealedClassName="text-gray-500 dark:text-[#adadae]"
            revealDelayMs={30}
          />
          <Title className="pl-4"> Frequently Asked Questions</Title>

          <div className="divide-y divide-gray-300 flex-shrink-0">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 md:py-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-start w-full text-left cursor-pointer hover:bg-gray-50 transition-colors px-3 md:px-4 py-2 rounded-lg group"
                >
                  <p className="font-medium text-base md:text-lg pr-4 group-hover:cursor-pointer transition-colors">
                    {faq.question}
                  </p>

                  <ChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6  flex-shrink-0 transform transition-transform duration-300 ${
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
                  <Paragraph
                    className="text-[17px]! md:text-[17px]! xl:text-[17px]! px-3 md:px-4 pt-3 pb-2"
                    children={faq.answer}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section (revealed underneath as FAQ slides up) */}
      <div className="absolute top-10 left-0 w-full h-[50vh] md:h-[100vh]  bg-black text-white rounded-t-[6rem] flex flex-col justify-center items-center px-4 md:px-6">
        <div className="w-full flex flex-col items-center justify-center py-10 md:py-20 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] 2xl:text-9xl font-semibold text-center leading-tight gradient-text mb-4">
            The data you own,
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] 2xl:text-9xl font-semibold text-center leading-tight gradient-text">
            supercharged with AI
          </h1>
        </div>

        <Button
          className="mt-6 md:mt-8  py-4 px-10 hover:bg-black hover:text-white "
          variant="outlined"
          label={"Get Started"}
        ></Button>
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
