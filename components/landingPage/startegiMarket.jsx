"use client";

import React from "react";

// Dummy CChip placeholder
const CChip = ({ title }) => (
  <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
    {title}
  </div>
);

const StrategiGrid = () => {
  const headingContent = {
    title: "Industries We Empower\nDriving Innovation Across Sectors",
  };

  const industries = [
    {
      title: "Healthcare",
      description:
        "Innovative digital solutions that improve patient care and streamline hospital management.",
      imageUrl:
        "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Finance",
      description:
        "Modern fintech applications that ensure secure, transparent, and efficient financial services.",
      imageUrl:
        "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Retail",
      description:
        "E-commerce platforms and POS systems designed to enhance customer experience and sales.",
      imageUrl:
        "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Education",
      description:
        "Digital learning platforms that empower institutions and engage students effectively.",
      imageUrl:
        "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Manufacturing",
      description:
        "Smart factory automation and IoT-driven solutions for efficient production management.",
      imageUrl:
        "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Travel & Tourism",
      description:
        "Custom booking systems and digital platforms for seamless travel experiences.",
      imageUrl:
        "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="py-0 xl:py-28 px-4 md:px-10 bg-white">
      {/* Header Section */}
      <div className="pl-0 md:pl-10 text-left">
        <CChip title="Industries We Serve" />

        <h2 className="mt-6 mb-12 font-light text-3xl md:text-4xl leading-snug text-gray-900">
          {headingContent.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-2 md:px-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden   transition-shadow duration-300"
          >
            <img
              src={industry.imageUrl}
              alt={industry.title}
              className="w-full h-72 object-cover"
            />
            <div className="pt-2">
              <h3 className="font-medium text-xl text-gray-900 capitalize mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategiGrid;
