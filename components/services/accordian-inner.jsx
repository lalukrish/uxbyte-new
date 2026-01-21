"use client";
import Paragraph from "@/commonComponents/paragraph";
import Title from "@/commonComponents/title";
import React, { useState } from "react";

// FAQItem Component
const FAQItem = ({ number, question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start gap-8 flex-1">
          <span className="min-w-[2rem]">{number}</span>
          <Paragraph
            className="text-md! flex-1"
            children={question}
          ></Paragraph>
        </div>
        <div className="flex items-center gap-2 ml-4">
          {/* <span className="text-sm font-medium text-gray-900">MORE</span> */}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-8 pl-[4.5rem] pr-20">
          <p className=" text-base leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQAccordion = ({
  title = "Questions already answered",
  subtitle = "FAQ",
  faqs = [],
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full md:px-24 mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        {subtitle && (
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            {subtitle}
          </p>
        )}
        <Title>{title}</Title>
      </div>

      {/* FAQ Items */}
      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            number={String(index + 1).padStart(2, "0")}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};
