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
      category: "REAL-ESTATE",
      title: "Smart property solutions for modern real estate",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      challenges: [
        "Complex property listing management",
        "Virtual tour integration challenges",
        "Connecting buyers, sellers, and agents efficiently",
      ],
      solutions: [
        "Interactive 3D property tours and AR features",
        "AI-powered property matching algorithms",
        "Real-time communication platform for stakeholders",
      ],
      bgColor: "from-orange-900 via-red-900 to-orange-800",
    },
    {
      category: "EDUTECH",
      title: "Interactive learning platforms for the digital age",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      challenges: [
        "Engaging students in remote learning environments",
        "Tracking progress across diverse curricula",
        "Accessibility for different learning styles",
      ],
      solutions: [
        "Gamified learning experiences with rewards",
        "Adaptive learning paths powered by AI",
        "Multi-modal content delivery (video, text, interactive)",
      ],
      bgColor: "from-indigo-900 via-purple-900 to-indigo-800",
    },
    {
      category: "TRAVELTECH",
      title: "Seamless travel booking and management experiences",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      challenges: [
        "Complex itinerary management across multiple services",
        "Real-time pricing and availability updates",
        "Personalized recommendations at scale",
      ],
      solutions: [
        "Unified booking platform with AI recommendations",
        "Real-time synchronization with travel providers",
        "Smart itinerary builder with collaborative features",
      ],
      bgColor: "from-sky-900 via-blue-900 to-sky-800",
    },
    {
      category: "FOODTECH",
      title: "Delightful dining experiences from order to delivery",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      challenges: [
        "Managing high-volume orders during peak times",
        "Maintaining food quality during delivery",
        "Connecting restaurants with delivery partners efficiently",
      ],
      solutions: [
        "Smart routing algorithms for faster delivery",
        "Real-time kitchen display systems",
        "Integrated restaurant management dashboard",
      ],
      bgColor: "from-amber-900 via-yellow-900 to-amber-800",
    },
    {
      category: "FASHION",
      title: "Trendsetting e-commerce for fashion-forward brands",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      challenges: [
        "Showcasing products with accurate color representation",
        "Size recommendation and fitting challenges",
        "Managing seasonal inventory and trends",
      ],
      solutions: [
        "AR virtual try-on technology",
        "AI-powered size and style recommendations",
        "Dynamic inventory management with trend forecasting",
      ],
      bgColor: "from-pink-900 via-rose-900 to-pink-800",
    },
    {
      category: "MEDIA",
      title: "Content platforms that captivate and engage audiences",
      image:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop",
      challenges: [
        "Content discovery in vast media libraries",
        "Streaming quality across varying bandwidths",
        "Monetization without disrupting user experience",
      ],
      solutions: [
        "AI-driven content recommendation engine",
        "Adaptive bitrate streaming technology",
        "Non-intrusive ad integration with user controls",
      ],
      bgColor: "from-violet-900 via-purple-900 to-violet-800",
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
    <div className="min-h-screen text-black py-12 px-4">
      <div className="md:px-20 mx-auto">
        {/* Tab Navigation with Underline */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative flex gap-8 px-4">
              {projectData.map((project, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`relative px-4 py-3 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === index
                      ? "text-black"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span className="relative z-10">{project.category}</span>

                  {/* Animated Underline - moves with active tab */}
                  {activeTab === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      layoutId="underline"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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
            >
              <div className="grid md:grid-cols-2 gap-14 p-2 md:p-12 w-full h-[600px]">
                {/* Image Section */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative h-[400px] md:h-full  overflow-hidden group"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                          <span className="text-purple-500 text-xl mt-1">
                            ✱
                          </span>
                          <p className="text-gray-700">{challenge}</p>
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
                    <h3 className="text-sm font-bold tracking-wider text-black mb-3">
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
                          <span className="text-green-500 text-xl mt-1">✱</span>
                          <p className="text-gray-700">{solution}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:gap-5 w-fit"
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
                    ? "w-12 bg-black"
                    : "w-2 bg-gray-300 group-hover:bg-gray-400"
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
