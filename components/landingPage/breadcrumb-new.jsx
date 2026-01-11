// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const Breadcrumb = ({ title, path = [] }) => {
//   return (
//     <section className="relative w-full md:h-[40vh] bg-black flex items-center overflow-hidden">
//       {/* Rotating Orange Blob on Right Side */}
//       <div className="absolute -right-18 top-[40%] -translate-y-1/2 w-60 h-60 md:w-96 md:h-96 opacity-40">
//         <motion.svg
//           viewBox="0 0 250 250"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-full"
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         >
//           <defs>
//             <radialGradient id="purpleGradient" cx="30%" cy="30%">
//               <stop offset="0%" stopColor="#8b5cf6" />
//               <stop offset="40%" stopColor="#7c3aed" />
//               <stop offset="70%" stopColor="#6915ae" />
//               <stop offset="100%" stopColor="#581c87" />
//             </radialGradient>
//           </defs>
//           <path
//             fill="url(#purpleGradient)"
//             d="M 100, 50
//                A 50, 50 0 1, 1 150, 100
//                A 50, 50 0 1, 1 100, 150
//                A 50, 50 0 1, 1 50, 100
//                A 50, 50 0 1, 1 100, 50
//                Z"
//             style={{
//               filter: "blur(2px)",
//             }}
//           />
//         </motion.svg>
//       </div>

//       {/* Black Loading Spinner */}

//       <div className="relative z-10 xl:px-24 mx-auto px-6 text-left text-white w-full">
//         {/* Page Title */}
//         <h1 className="text-3xl md:text-5xl font-semibold mb-4">{title}</h1>

//         {/* Breadcrumb Path */}
//         <nav className="flex items-center gap-2 text-sm text-white/80">
//           <Link href="/" className="hover:text-white">
//             Home
//           </Link>

//           {path.map((item, index) => (
//             <span key={index} className="flex items-center gap-2">
//               <span>/</span>
//               <span className="hover:text-white cursor-pointer">{item}</span>
//             </span>
//           ))}
//         </nav>
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20" />
//     </section>
//   );
// };

// export default Breadcrumb;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// All shape components
const shapes = {
  triangle: () => (
    <motion.svg
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <radialGradient id="purpleGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6915ae" />
          <stop offset="100%" stopColor="#581c87" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purpleGradient)"
        d="M 125, 30 L 220, 200 L 30, 200 Z"
        style={{ filter: "blur(2px)" }}
      />
    </motion.svg>
  ),
  pentagon: () => (
    <motion.svg
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <radialGradient id="purpleGradient2" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6915ae" />
          <stop offset="100%" stopColor="#581c87" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purpleGradient2)"
        d="M 125, 30 L 220, 100 L 180, 210 L 70, 210 L 30, 100 Z"
        style={{ filter: "blur(2px)" }}
      />
    </motion.svg>
  ),
  hexagon: () => (
    <motion.svg
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <radialGradient id="purpleGradient3" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6915ae" />
          <stop offset="100%" stopColor="#581c87" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purpleGradient3)"
        d="M 125, 30 L 200, 75 L 200, 165 L 125, 210 L 50, 165 L 50, 75 Z"
        style={{ filter: "blur(2px)" }}
      />
    </motion.svg>
  ),
  star: () => (
    <motion.svg
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <radialGradient id="purpleGradient4" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6915ae" />
          <stop offset="100%" stopColor="#581c87" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purpleGradient4)"
        d="M 125, 30 L 145, 90 L 210, 90 L 160, 130 L 180, 195 L 125, 155 L 70, 195 L 90, 130 L 40, 90 L 105, 90 Z"
        style={{ filter: "blur(2px)" }}
      />
    </motion.svg>
  ),
  diamond: () => (
    <motion.svg
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <radialGradient id="purpleGradient5" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6915ae" />
          <stop offset="100%" stopColor="#581c87" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purpleGradient5)"
        d="M 125, 30 L 200, 125 L 125, 220 L 50, 125 Z"
        style={{ filter: "blur(2px)" }}
      />
    </motion.svg>
  ),
  blob: () => (
    <motion.svg
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <radialGradient id="purpleGradient6" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6915ae" />
          <stop offset="100%" stopColor="#581c87" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purpleGradient6)"
        d="M 100, 50 A 50, 50 0 1, 1 150, 100 A 50, 50 0 1, 1 100, 150 A 50, 50 0 1, 1 50, 100 A 50, 50 0 1, 1 100, 50 Z"
        style={{ filter: "blur(2px)" }}
      />
    </motion.svg>
  ),
  roundedTriangle: () => (
    <motion.svg
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <radialGradient id="purpleGradient7" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6915ae" />
          <stop offset="100%" stopColor="#581c87" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purpleGradient7)"
        d="M 125, 40 Q 135, 35 145, 45 L 210, 185 Q 215, 200 200, 205 L 50, 205 Q 35, 200 40, 185 L 105, 45 Q 115, 35 125, 40 Z"
        style={{ filter: "blur(2px)" }}
      />
    </motion.svg>
  ),
  organicBlob: () => (
    <motion.svg
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <radialGradient id="purpleGradient8" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6915ae" />
          <stop offset="100%" stopColor="#581c87" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purpleGradient8)"
        d="M 125, 40 C 180, 40, 210, 80, 210, 125 C 210, 170, 180, 210, 125, 210 C 85, 210, 40, 180, 40, 135 C 40, 90, 70, 40, 125, 40 Z"
        style={{ filter: "blur(2px)" }}
      />
    </motion.svg>
  ),
};

const Breadcrumb = ({ title, path = [], shape = "blob" }) => {
  const ShapeComponent = shapes[shape] || shapes.blob;

  return (
    <section className="relative w-full md:h-[40vh] bg-black flex items-center overflow-hidden">
      {/* Rotating Shape on Right Side */}
      <div className="absolute -right-18 top-[40%] -translate-y-1/2 w-60 h-60 md:w-96 md:h-96 opacity-40">
        <ShapeComponent />
      </div>

      <div className="relative z-10 xl:px-24 mx-auto px-6 text-left text-white w-full">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">{title}</h1>

        {/* Breadcrumb Path */}
        <nav className="flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          {path.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <span>/</span>
              <span className="hover:text-white cursor-pointer">{item}</span>
            </span>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
};

export default Breadcrumb;
