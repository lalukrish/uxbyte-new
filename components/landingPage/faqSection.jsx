"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
      <div className="absolute top-0 left-0 w-full h-full bg-white text-black rounded-t-[6rem] flex flex-col justify-center items-start px-6 md:px-10">
        <div className="max-w-full w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-start mb-12">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-gray-300">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-5 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="font-semibold text-lg">{faq.question}</p>
                  {openIndex === index && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>

                {/* Arrow Icon */}
                <ChevronDown
                  className={`w-6 h-6 text-gray-700 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
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
      {/* <div className="max-w-5xl px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                          What Our Clients Say
                        </h2>
                        <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-lg p-6">
                          <Testimonials reviews={reviews} />
                        </div>
                      </div> */}
    </section>
  );
}
