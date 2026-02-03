import React from "react";
import { ArrowRight, Play, Youtube } from "lucide-react";

const PillarHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 relative overflow-hidden">
      {/* Diagonal Stripes Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[150%] bg-black transform rotate-[20deg]"></div>
          <div className="absolute top-[-20%] left-[15%] w-[30%] h-[150%] bg-indigo-950 transform rotate-[20deg]"></div>
          <div className="absolute top-[-20%] right-[20%] w-[35%] h-[150%] bg-black transform rotate-[20deg]"></div>
        </div>
      </div>

      {/* Bottom gradient shadows */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent"></div>

  
    </div>
  );
};

export default PillarHero;
