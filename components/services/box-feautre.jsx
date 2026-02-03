"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "@/commonComponents/title";

const FeatureSection = ({ image, title, services = [], imageLeft = true }) => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="md:px-20 px-2 mx-auto">
        <div
          className={`flex flex-col ${
            imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 items-center`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img src={image} alt={title} className="w-full h-auto " />
          </div>

          {/* Content */}
          <div
            className={`w-full lg:w-1/2 space-y-0 mb-20 ${
              imageLeft ? "mt-0" : "xl-mt-20"
            }`}
          >
            {/* <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
              {title}
            </h2> */}
            <Title className={`${imageLeft ? "mt-0" : "xl:-mt-14"}`}>
              {" "}
              {title}
            </Title>

            <div className="space-y-6 xl:mt-5">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group xl:mt-5"
                >
                  {/* Animated Checkmark */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.1,
                      duration: 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                  >
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M3 8L6.5 11.5L13 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                      />
                    </motion.svg>
                  </motion.div>

                  {/* Service Title */}
                  <h3 className="text-xl font-normal text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Usage Example
const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    title: "Digital Growth Solutions",
    imageLeft: true,
    services: [
      "Social Media Marketing",
      "Email Marketing Services",
      "Web Development",
      "DevOps",
      "Testing",
      "Branding",
      "UI / UX Design",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    title: "Technology & Engineering",
    imageLeft: false,
    services: [
      "Frontend Development",
      "Backend Development",
      "API Integrations",
      "CI/CD Pipeline",
      "AWS Cloud Services",
      "Docker Containerization",
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {projects.map((project, index) => (
        <FeatureSection
          key={index}
          image={project.image}
          title={project.title}
          services={project.services}
          imageLeft={project.imageLeft}
        />
      ))}
    </div>
  );
}
