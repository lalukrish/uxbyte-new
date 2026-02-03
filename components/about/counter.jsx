"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Counter() {
  const StatsData = [
    { id: 1, label: "Projects Completed", value: 250, suffix: "+" },
    { id: 2, label: "Happy Clients", value: 120, suffix: "+" },
    { id: 3, label: "Countries Served", value: 35, suffix: "+" },
    { id: 4, label: "Years Experience", value: 10, suffix: "+" },
  ];
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((el, index) => {
      if (!el) return;
      const { value } = StatsData[index];

      const counterObj = { val: 0 };

      gsap.to(counterObj, {
        val: value,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          const current = counterObj.val;
          el.innerText =
            value % 1 !== 0
              ? current.toFixed(1)
              : Math.floor(current).toString();
        },
      });
    });
  }, []);

  return (
    <section className="w-full  text-center items-center justify-center xl:py-1 mb-0 ">
      <div className=" xl:mx-28 2xl:gap-0 2xl:mx-32 xl:gap-14 flex flex-col md:flex-row justify-center items-center gap-4  px-4 mt-5 xl:mt-0">
        {StatsData.map((stat, index) => (
          <div
            key={index}
            className="xl:flex-1 text-center px-4 md:px-10 xl:px-4 md:border-r md:border-gray-300 last:border-none"
          >
            <div className="xl:text-7xl 2xl:text-8xl text-5xl mt-1 xl:mt-0 font-normal  flex justify-center items-baseline gap-1 xl:gap-1 number-font">
              {/* {index === 0 && (
                <span className="hidden md:block h-16 w-[2px] bg-[#0E1943]/30"></span>
              )} */}

              <span
                ref={(el) => {
                  countersRef.current[index] = el;
                }}
              >
                0
              </span>
              <span className="">{stat.suffix}</span>
            </div>
            <p className="mt-3 xl:mt-2 text-base font-medium  uppercase tracking-wide">
              {stat.label}
            </p>
            <div className="mt-4 w-48 mx-auto border-b  border-gray-100/50 md:hidden"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { X } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const HoveringComponent = () => {
//   const sectionRef = useRef(null);
//   const boxesRef = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const data = [
//     { title: "Projects Completed", value: 250, height: 100 },
//     { title: "Happy Clients", value: 120, height: 100 },
//     { title: "Countries Served", value: 35, height: 100 },
//     { title: "Years Experience", value: 10, height: 100 },
//     { title: "Awards Won", value: 18, height: 100 },
//   ];

//   /* DESKTOP SCROLL ANIMATION */
//   useEffect(() => {
//     gsap.fromTo(
//       boxesRef.current,
//       { y: 400, scale: 0.95 },
//       {
//         y: 0,
//         scale: 1,
//         duration: 0.9,
//         ease: "power3.out",
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 40%",
//         },
//       },
//     );
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-full md:h-[40vh] overflow-hidden xl:px-24"
//     >
//       {/* ================= DESKTOP ================= */}
//       <div className="hidden md:flex h-full">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             ref={(el) => (boxesRef.current[index] = el)}
//             onClick={() => setActiveIndex(index)}
//             className="
//               relative flex-1 overflow-hidden cursor-pointer
//               transition-all duration-500 ease-in-out
//               hover:flex-[3]
//             "
//           >
//             <CounterPanel item={item} />
//           </div>
//         ))}
//       </div>

//       {/* ================= MOBILE ================= */}
//       <div className="md:hidden px-4 py-14 flex justify-center">
//         <div className="flex flex-col gap-3 w-full max-w-md">
//           <CounterCollageBox
//             item={data[0]}
//             className="h-28"
//             onClick={() => setActiveIndex(0)}
//           />

//           <div className="flex gap-3">
//             <CounterCollageBox
//               item={data[1]}
//               className="h-36 flex-1"
//               onClick={() => setActiveIndex(1)}
//             />
//             <CounterCollageBox
//               item={data[2]}
//               className="h-36 flex-1"
//               onClick={() => setActiveIndex(2)}
//             />
//             <CounterCollageBox
//               item={data[3]}
//               className="h-36 flex-1"
//               onClick={() => setActiveIndex(3)}
//             />
//           </div>

//           <CounterCollageBox
//             item={data[4]}
//             className="h-28"
//             onClick={() => setActiveIndex(4)}
//           />
//         </div>
//       </div>

//       {/* ================= MODAL ================= */}
//       {activeIndex !== null && (
//         <>
//           <div
//             onClick={() => setActiveIndex(null)}
//             className="fixed inset-0 bg-black/80 z-50"
//           />

//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             <div className="relative bg-gray-900 rounded-3xl w-full max-w-lg overflow-hidden">
//               <button
//                 onClick={() => setActiveIndex(null)}
//                 className="absolute top-4 right-4 bg-white/10 p-2 rounded-full"
//               >
//                 <X className="text-white" />
//               </button>

//               <div className="h-72">
//                 <CounterPanel item={data[activeIndex]} />
//               </div>

//               <div className="p-6">
//                 <h2 className="text-white text-3xl font-bold">
//                   {data[activeIndex].title}
//                 </h2>
//                 <p className="text-gray-400 mt-3">
//                   Detailed description about {data[activeIndex].title}.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// /* ================= DESKTOP PANEL ================= */
// const CounterPanel = ({ item }) => {
//   const barRef = useRef(null);
//   const countRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       barRef.current,
//       { height: 0 },
//       { height: `${item.height}%`, duration: 1.8, ease: "power3.out" },
//     );

//     const counter = { val: 0 };
//     gsap.to(counter, {
//       val: item.value,
//       duration: 1.8,
//       ease: "power1.out",
//       onUpdate: () => {
//         countRef.current.innerText = Math.floor(counter.val);
//       },
//     });
//   }, []);

//   return (
//     <div className="relative w-full h-full bg-gray-800">
//       <div
//         ref={barRef}
//         className="absolute bottom-0 w-full bg-blue-500 flex flex-col justify-end p-6"
//         style={{ height: 0 }}
//       >
//         <div className="text-5xl font-bold text-white flex items-baseline gap-1">
//           <span ref={countRef}>0</span>
//           <span>+</span>
//         </div>
//         <p className="uppercase tracking-wide text-white/90 text-sm">
//           {item.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// /* ================= MOBILE BOX ================= */
// const CounterCollageBox = ({ item, className, onClick }) => {
//   const barRef = useRef(null);
//   const countRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       barRef.current,
//       { height: 0 },
//       { height: `${item.height}%`, duration: 1.4, ease: "power3.out" },
//     );

//     const counter = { val: 0 };
//     gsap.to(counter, {
//       val: item.value,
//       duration: 1.4,
//       ease: "power1.out",
//       onUpdate: () => {
//         countRef.current.innerText = Math.floor(counter.val);
//       },
//     });
//   }, []);

//   return (
//     <button
//       onClick={onClick}
//       className={`relative overflow-hidden rounded-2xl bg-gray-800 ${className}`}
//     >
//       <div
//         ref={barRef}
//         className="absolute bottom-0 w-full bg-blue-500 p-3"
//         style={{ height: 0 }}
//       >
//         <div className="text-white font-bold text-xl">
//           <span ref={countRef}>0</span>+
//         </div>
//         <p className="text-xs uppercase text-white/90">{item.title}</p>
//       </div>
//     </button>
//   );
// };

// export default HoveringComponent;
