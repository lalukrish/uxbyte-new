"use client";

import { useTheme } from "@/context/themeContext";

export function LogoMark() {
  const { isDark } = useTheme();

  return (
    <div className="flex items-center gap-2.5 pl-4 md:pl-16 mt-1">
      <div
        className={`w-[36px] h-[36px] rounded-[9px] flex items-center justify-center shrink-0 transition-colors duration-300 ${
          isDark ? "bg-[#6915ae]" : "bg-black"
        }`}
      >
        <span className="text-[13px] font-extrabold text-white tracking-[-0.04em] leading-none">
          UXB
        </span>
      </div>
      <span
        className={`text-[18px] font-bold tracking-[0.04em] transition-colors duration-300 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Uxbyte studios
      </span>
    </div>
  );
}
