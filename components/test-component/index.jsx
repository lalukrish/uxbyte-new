"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TestComponent() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 800); // delay before animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          scale: 1.4,
        }}
        animate={
          start
            ? {
                top: "20px",
                left: "20px",
                x: 0,
                y: 0,
                scale: 1,
              }
            : {}
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute flex items-center gap-2"
      >
        {/* Logo Icon */}
        <div className="w-8 h-8 bg-white rounded-md" />
        <span className="text-xl font-semibold">AnimateUI</span>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={start ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        {/* <h1 className="text-4xl md:text-6xl font-bold">
          Animate your UI with smooth style
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl">
          A fully animated open-source React component distribution.
        </p> */}
        {/* 
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-lg font-medium">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-600 rounded-lg">
            Browse Components
          </button>
        </div> */}
      </motion.div>
    </main>
  );
}
