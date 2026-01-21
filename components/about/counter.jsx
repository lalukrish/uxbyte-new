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
    <section className="w-full  text-center items-center justify-center xl:py-1 mb-0 py-18!">
      <div className=" xl:mx-28 2xl:gap-0 2xl:mx-32 xl:gap-14 flex flex-col md:flex-row justify-center items-center gap-4  px-4 mt-5 xl:mt-2">
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
