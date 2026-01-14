"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectShowcase = ({ projects = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const projectData = projects;

  return (
    <ProjectShowcaseContent
      projectData={projectData}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      direction={direction}
      setDirection={setDirection}
    />
  );
};

export default ProjectShowcase;

const ProjectShowcaseContent = ({
  projectData,
  activeTab,
  setActiveTab,
  direction,
  setDirection,
}) => {
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
    <div className="min-h-screen text-black py-6 md:py-12 px-4">
      <div className="md:px-20 mx-auto ">
        {/* Tab Navigation - Mobile Scrollable */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Mobile: Show only active tab */}
            <div className="md:hidden relative flex-1 text-center">
              <button className="px-4 py-2 text-sm font-semibold text-black relative">
                <span className="relative z-10">{currentProject.category}</span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-black" />
              </button>
            </div>

            {/* Desktop: Show all tabs with scrolling if needed */}
            <div className="hidden md:block  overflow-x-hidden  ">
              <div className="flex gap-4 lg:gap-8  px-4 xl:-px-20">
                {projectData.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabChange(index)}
                    className={`relative px-4 py-3 text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === index
                        ? "text-black"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <span className="relative z-10">{project.category}</span>

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
            </div>

            <button
              onClick={handleNext}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Content Area */}
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
              <div className="grid md:grid-cols-2 gap-8 md:gap-14 p-2 md:p-12 w-full md:h-[600px]">
                {/* Image Section */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative h-[300px] md:h-full rounded-lg overflow-hidden group"
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
                    className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8 leading-tight"
                  >
                    {currentProject.title}
                  </motion.h2>

                  {/* Challenges */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-5 md:mb-6"
                  >
                    <h3 className="text-xs md:text-sm font-bold tracking-wider text-black mb-2 md:mb-3">
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
                          className="flex gap-2 md:gap-3 items-start"
                        >
                          <span className="text-purple-500 text-lg md:text-xl mt-0.5 md:mt-1 flex-shrink-0">
                            ✱
                          </span>
                          <p className="text-sm md:text-base text-gray-700">
                            {challenge}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Solutions */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-6 md:mb-8"
                  >
                    <h3 className="text-xs md:text-sm font-bold tracking-wider text-black mb-2 md:mb-3">
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
                          className="flex gap-2 md:gap-3 items-start"
                        >
                          <span className="text-green-500 text-lg md:text-xl mt-0.5 md:mt-1 flex-shrink-0">
                            ✱
                          </span>
                          <p className="text-sm md:text-base text-gray-700">
                            {solution}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="group inline-flex items-center gap-2 md:gap-3 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-gray-800 transition-all hover:gap-4 md:hover:gap-5 w-fit"
                  >
                    EXPLORE PROJECT
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className="group"
              aria-label={`Go to project ${index + 1}`}
            >
              <div
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === activeTab
                    ? "w-8 md:w-12 bg-black"
                    : "w-1.5 md:w-2 bg-gray-300 group-hover:bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// const defaultProjects = [
// export default ProjectShowcase;
