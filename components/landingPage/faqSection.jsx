"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer visa consulting, study abroad assistance, travel guidance, and documentation support tailored to each client's needs.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Visa processing time varies by country and application type, but we keep you updated at every stage to ensure smooth progress.",
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
    question: "Do you handle travel arrangements too?",
    answer:
      "Absolutely! We help you book flights, find accommodation, and arrange travel insurance for a stress-free experience.",
  },
];

// Simple Testimonials Component
const Testimonials = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
              <span className="text-2xl">👤</span>
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
};

export default function ScrollFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress
      const scrollStart = rect.top;
      const scrollRange = containerHeight - viewportHeight;

      let progress = 0;
      if (scrollStart <= 0 && scrollStart >= -scrollRange) {
        progress = Math.abs(scrollStart) / scrollRange;
      } else if (scrollStart < -scrollRange) {
        progress = 1;
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform based on scroll progress
  const testimonialTransform = `translateY(${-100 + scrollProgress * 100}%)`;

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* FAQ Section (White Background) - Static */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white text-black overflow-hidden">
        <div className="w-full py-16 px-6 md:px-20">
          <div className="mx-auto text-start mb-12 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="mx-auto space-y-6 max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left text-lg md:text-xl font-medium text-gray-800 focus:outline-none hover:bg-gray-200 transition-colors"
                  >
                    {faq.question}
                    <span className="text-2xl text-gray-600">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 text-gray-700"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {index !== faqs.length - 1 && (
                  <hr className="my-6 border-t border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section (Blue Background) - Slides Down */}
      <div
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-blue-900 to-indigo-800 rounded-t-[8rem] shadow-2xl overflow-hidden pointer-events-none"
        style={{
          transform: testimonialTransform,
          transition: "none",
        }}
      >
        <div className="max-w-5xl px-6 pointer-events-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-lg p-6">
            <Testimonials reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
