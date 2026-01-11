"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const projectData = [
    {
      category: "HEALTHCARE",
      title: "HIPAA-compliant design and development for health tech products",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      challenges: [
        "UX complexity in health tracking, patient records, and telehealth",
        "Data privacy and HIPAA compliance",
        "Building trust with patients and practitioners",
      ],
      solutions: [
        "Patient-first UX that simplifies complex workflows",
        "Secure infrastructure aligned with regulatory standards",
        "Clean, professional UI that builds user trust",
      ],
      bgColor: "from-black via-black to-black",
    },
    {
      category: "FINTECH",
      title: "Secure and scalable financial technology solutions",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      challenges: [
        "Complex financial regulations and compliance requirements",
        "Real-time transaction processing at scale",
        "Building user trust in digital financial services",
      ],
      solutions: [
        "Enterprise-grade security with end-to-end encryption",
        "Microservices architecture for scalability",
        "Intuitive UX that simplifies financial complexity",
      ],
      bgColor: "from-blue-900 via-cyan-900 to-blue-800",
    },
    {
      category: "E-COMMERCE",
      title: "Modern shopping experiences that drive conversions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      challenges: [
        "High cart abandonment rates",
        "Complex inventory management across channels",
        "Creating seamless mobile shopping experiences",
      ],
      solutions: [
        "Optimized checkout flow with minimal friction",
        "Real-time inventory sync and analytics dashboard",
        "Mobile-first design with native app performance",
      ],
      bgColor: "from-emerald-900 via-teal-900 to-emerald-800",
    },
    {
      category: "Real-Estate",
      title: "Modern shopping experiences that drive conversions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      challenges: [
        "High cart abandonment rates",
        "Complex inventory management across channels",
        "Creating seamless mobile shopping experiences",
      ],
      solutions: [
        "Optimized checkout flow with minimal friction",
        "Real-time inventory sync and analytics dashboard",
        "Mobile-first design with native app performance",
      ],
      bgColor: "from-emerald-900 via-teal-900 to-emerald-800",
    },
    {
      category: "Edutech",
      title: "Modern shopping experiences that drive conversions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      challenges: [
        "High cart abandonment rates",
        "Complex inventory management across channels",
        "Creating seamless mobile shopping experiences",
      ],
      solutions: [
        "Optimized checkout flow with minimal friction",
        "Real-time inventory sync and analytics dashboard",
        "Mobile-first design with native app performance",
      ],
      bgColor: "from-emerald-900 via-teal-900 to-emerald-800",
    },
    {
      category: "Traveltech",
      title: "Modern shopping experiences that drive conversions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      challenges: [
        "High cart abandonment rates",
        "Complex inventory management across channels",
        "Creating seamless mobile shopping experiences",
      ],
      solutions: [
        "Optimized checkout flow with minimal friction",
        "Real-time inventory sync and analytics dashboard",
        "Mobile-first design with native app performance",
      ],
      bgColor: "from-emerald-900 via-teal-900 to-emerald-800",
    },
    {
      category: "Foodtech",
      title: "Modern shopping experiences that drive conversions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      challenges: [
        "High cart abandonment rates",
        "Complex inventory management across channels",
        "Creating seamless mobile shopping experiences",
      ],
      solutions: [
        "Optimized checkout flow with minimal friction",
        "Real-time inventory sync and analytics dashboard",
        "Mobile-first design with native app performance",
      ],
      bgColor: "from-emerald-900 via-teal-900 to-emerald-800",
    },
    {
      category: "Fashion",
      title: "Modern shopping experiences that drive conversions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      challenges: [
        "High cart abandonment rates",
        "Complex inventory management across channels",
        "Creating seamless mobile shopping experiences",
      ],
      solutions: [
        "Optimized checkout flow with minimal friction",
        "Real-time inventory sync and analytics dashboard",
        "Mobile-first design with native app performance",
      ],
      bgColor: "from-emerald-900 via-teal-900 to-emerald-800",
    },
    {
      category: "Media",
      title: "Modern shopping experiences that drive conversions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      challenges: [
        "High cart abandonment rates",
        "Complex inventory management across channels",
        "Creating seamless mobile shopping experiences",
      ],
      solutions: [
        "Optimized checkout flow with minimal friction",
        "Real-time inventory sync and analytics dashboard",
        "Mobile-first design with native app performance",
      ],
      bgColor: "from-emerald-900 via-teal-900 to-emerald-800",
    },
  ];

  const handleTabChange = (newIndex) => {
    setDirection(newIndex > activeTab ? 1 : -1);
    setActiveTab(newIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeTab + 1) % projectData.length;
    setDirection(1);
    setActiveTab(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeTab - 1 + projectData.length) % projectData.length;
    setDirection(-1);
    setActiveTab(prevIndex);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentProject = projectData[activeTab];

  return (
    <div className="min-h-screen  text-black py-12 px-4">
      <div className="md:px-20 mx-auto">
        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-1 bg-white/5 p-1 rounded-full backdrop-blur-sm">
              {projectData.map((project, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className="relative px-6 py-3 rounded-full text-sm font-semibold transition-all"
                >
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${project.bgColor} rounded-full`}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{project.category}</span>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Area with Slide Animation */}
        <div className="relative overflow-hidden w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              //  className={`bg-gradient-to-br ${currentProject.bgColor} rounded-3xl overflow-hidden shadow-2xl`}
            >
              <div className="grid md:grid-cols-2 gap-14! p-2 md:p-12 w-full h-[600px]">
                {/* Image Section */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative h-[400px] md:h-full rounded-2xl overflow-hidden group"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.category}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col justify-center">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-semibold mb-8 leading-tight"
                  >
                    {currentProject.title}
                  </motion.h2>

                  {/* Challenges */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-6"
                  >
                    <h3 className="text-sm font-bold tracking-wider text-black mb-3">
                      CHALLENGES:
                    </h3>
                    <div className="space-y-2">
                      {currentProject.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.3,
                          }}
                          className="flex gap-3 items-start"
                        >
                          <span className="text-purple-300 text-xl mt-1">
                            ✱
                          </span>
                          <p className="text-black/90">{challenge}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Solutions */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-8"
                  >
                    <h3 className="text-sm font-bold tracking-wider text-white/70 mb-3">
                      HOW WE SOLVE THEM:
                    </h3>
                    <div className="space-y-2">
                      {currentProject.solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: 0.7 + index * 0.1,
                            duration: 0.3,
                          }}
                          className="flex gap-3 items-start"
                        >
                          <span className="text-green-300 text-xl mt-1">✱</span>
                          <p className="text-black/90">{solution}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:gap-5 w-fit"
                  >
                    EXPLORE PROJECT
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className="group"
              aria-label={`Go to project ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeTab
                    ? "w-12 bg-white"
                    : "w-2 bg-white/30 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
