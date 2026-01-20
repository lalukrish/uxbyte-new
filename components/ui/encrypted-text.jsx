"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset) {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(original, charset) {
  if (!original) return "";
  let result = "";
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === " " ? " " : generateRandomCharacter(charset);
  }
  return result;
}

export const EncryptedText = ({
  normaltext = "",
  text,
  className = "",
  normalClassName = "",
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName = "text-neutral-500 ",
  revealedClassName = "text-black dark:text-white ",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [mounted, setMounted] = useState(false);
  const [revealCount, setRevealCount] = useState(0);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);
  const scrambleCharsRef = useRef(
    text ? text.split("").map((ch) => (ch === " " ? " " : "?")) : [],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !mounted) return;

    const initial = text
      ? generateGibberishPreservingSpaces(text, charset)
      : "";
    scrambleCharsRef.current = initial.split("");
    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;
    setRevealCount(0);

    let isCancelled = false;

    const update = (now) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;
      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
      );

      setRevealCount(currentRevealCount);

      if (currentRevealCount >= totalLength) {
        return;
      }

      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        for (let index = 0; index < totalLength; index += 1) {
          if (index >= currentRevealCount) {
            if (text[index] !== " ") {
              scrambleCharsRef.current[index] =
                generateRandomCharacter(charset);
            } else {
              scrambleCharsRef.current[index] = " ";
            }
          }
        }
        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, text, revealDelayMs, charset, flipDelayMs, mounted]);

  if (!text) return null;

  return (
    <span ref={ref} className={`tracking-widest text-semibold! ${className}`}>
      {/* Normal text - no animation */}
      {normaltext && <span className={revealedClassName}>{normaltext}</span>}

      {/* Encrypted text - with animation */}
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = !mounted
          ? char === " "
            ? " "
            : "?"
          : isRevealed
            ? char
            : char === " "
              ? " "
              : (scrambleCharsRef.current[index] ?? "?");

        return (
          <motion.span
            key={index}
            className={isRevealed ? revealedClassName : encryptedClassName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayChar}
          </motion.span>
        );
      })}
    </span>
  );
};
