"use client";
import { cn } from "@/lib/utils";

export const AuroraBackground = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative h-screen w-full overflow-hidden bg-black flex items-center justify-center",
        className
      )}
    >
      {/* PURPLE AURORA */}
      <div
        className="
          absolute inset-0
          animate-aurora-wave
          opacity-50
          blur-[90px]
        "
        style={{
          background: `
    linear-gradient(
     140deg,
      rgba(216,180,254,1) 10%,
      rgba(192,132,252,0.95) 25%,
      rgba(168,85,247,0.75) 45%,
      rgba(139,92,246,0.5) 35%,
      rgba(0,0,0,0) 75%
    )
  `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white text-4xl font-semibold">
        {children || "Purple Aurora"}
      </div>
    </div>
  );
};

//   background:
//     "linear-gradient(180deg, " +
//     "rgba(22,163,74,0.0) 20%, " +
//     "rgba(34,197,94,0.45) 40%, " +
//     "rgba(74,222,128,0.6) 50%, " +
//     "rgba(34,197,94,0.45) 60%, " +
//     "rgba(22,163,74,0.0) 80%)",
// }}
