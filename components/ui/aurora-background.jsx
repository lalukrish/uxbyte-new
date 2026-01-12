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
      {/* FORCE VISIBLE AURORA */}
      <div
        className="
          absolute inset-0
          animate-aurora-wave
          opacity-100
          blur-[30px]
        "
        style={{
          background:
            "linear-gradient(180deg, " +
            "rgba(22,163,74,0.0) 20%, " +
            "rgba(34,197,94,0.45) 40%, " +
            "rgba(74,222,128,0.6) 50%, " +
            "rgba(34,197,94,0.45) 60%, " +
            "rgba(22,163,74,0.0) 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white text-4xl">
        {children || "Aurora Visible"}
      </div>
    </div>
  );
};
