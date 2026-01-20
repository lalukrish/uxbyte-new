"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { EncryptedText } from "./encrypted-text";

export default function IndustrySignature() {
  const [scope, animate] = useAnimate();

  const industries = [
    "E-Commerce",
    "FinTech",
    "Healthcare",
    "SaaS",
    "Real Estate",
    "Education",
    "Gaming",
    "Entertainment",
  ];

  const mainText = "Industry Signature";
  const wordsArray = mainText.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      },
    );
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-between gap-20 px-8 lg:px-20 py-20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left Side - Industry Chips */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 max-w-lg z-10"
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/50 text-xs uppercase tracking-[0.3em] mb-6 font-light"
        >
          <EncryptedText
            text={"industries we serve"}
            className="text-white!"
            encryptedClassName="text-white!"
            normalClassName="text-white!"
            revealedClassName="text-white!"
          />
        </motion.h3>
        <div className="flex flex-wrap gap-3">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-7 py-3.5 bg-transparent border border-white/20 rounded-full text-white/70 text-base font-light tracking-wide hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Large Text & CTA */}
      <div className="flex flex-col items-start z-10">
        {/* Large Text */}
        <div ref={scope} className="text-left mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm uppercase tracking-[0.3em] mb-8 font-light"
          >
            Privacy Policy
          </motion.div>
          <motion.div className="text-8xl md:text-6xl lg:text-[6rem] font-bold text-white leading-none tracking-tight flex gap-6">
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="opacity-0 filter blur-md"
                style={{
                  filter: "blur(10px)",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-5xl md:text-6xl lg:text-[55px] font-bold text-green-400 mt-4"
          >
            OUR PRIORITY
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-white/60 text-lg max-w-2xl mb-8 leading-relaxed"
        >
          A few words about your product/offer on the benefits or features.
          <br />
          Explain how your product will improve your customer's life.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-green-500 rounded-md text-black text-base font-medium tracking-wide hover:bg-green-400 transition-all"
          >
            Learn more
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border border-white/30 rounded-md text-white text-base font-light tracking-wide hover:bg-white/5 hover:border-white/50 transition-all"
          >
            Contact us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
