// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Testimonials from "../ui/testimonialcard";
// import ClientComponent from "./gridComponent";
// import BusinessFeatureSection from "./featureSection";

// gsap.registerPlugin(ScrollTrigger);

// const reviews = [
//   {
//     img: "/images/user.png",
//     name: "Sarah Johnson",
//     body: "They were incredibly helpful throughout the visa process!",
//     rating: 5,
//   },
//   {
//     img: "/images/user.png",
//     name: "Bhagyalakshmi Baburaj",
//     body: "The team's support made the application stress-free.",
//     rating: 4,
//   },
//   {
//     img: "/images/user.png",
//     name: "Priya Desai",
//     body: "Highly professional and always available for help.",
//     rating: 5,
//   },
//   {
//     img: "/images/user.png",
//     name: "Aiswrya Shaji",
//     body: "Quick responses and great results. Highly recommend!",
//     rating: 5,
//   },
//   {
//     img: "/images/user.png",
//     name: "Aisha Farouk",
//     body: "Exceptional service from start to finish.",
//     rating: 4,
//   },
//   {
//     img: "/images/user.png",
//     name: "Harikrishnan M C",
//     body: "Made my dream of studying abroad come true!",
//     rating: 5,
//   },
// ];

// export default function DomainSearchSection() {
//   const containerRef = useRef(null);
//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const section2ContentRef = useRef(null);
//   const section3Ref = useRef(null);
//   const [section2Scrolled, setSection2Scrolled] = useState(false);
//   const timelineRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=200%",
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     timelineRef.current = tl;

//     // Slide animations
//     tl.fromTo(
//       section2Ref.current,
//       { yPercent: 100 },
//       { yPercent: 0, duration: 1, ease: "power2.inOut" }
//     ).fromTo(
//       section3Ref.current,
//       { yPercent: 100 },
//       { yPercent: 0, duration: 1, ease: "power2.inOut" }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   useEffect(() => {
//     const section2Content = section2ContentRef.current;
//     if (!section2Content) return;

//     const handleScroll = () => {
//       const { scrollTop, scrollHeight, clientHeight } = section2Content;
//       const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold

//       if (isAtBottom && !section2Scrolled) {
//         setSection2Scrolled(true);
//         // Enable GSAP scroll progression
//         if (timelineRef.current?.scrollTrigger) {
//           timelineRef.current.scrollTrigger.enable();
//         }
//       } else if (!isAtBottom && section2Scrolled) {
//         setSection2Scrolled(false);
//       }
//     };

//     section2Content.addEventListener("scroll", handleScroll);
//     return () => section2Content.removeEventListener("scroll", handleScroll);
//   }, [section2Scrolled]);

//   return (
//     <div ref={containerRef} className="relative h-screen overflow-hidden mt-20">
//       {/* --- Section 1 --- */}
//       <section
//         ref={section1Ref}
//         className="absolute inset-0 h-screen w-full flex items-center justify-center overflow-hidden"
//       >
//         <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
//           <BusinessFeatureSection />
//         </div>
//       </section>

//       {/* --- Section 2 --- */}
//       <section
//         ref={section2Ref}
//         className="absolute inset-0 h-screen w-full rounded-t-[4rem] text-white bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 overflow-hidden"
//       >
//         {/* <div
//           ref={section2ContentRef}
//           className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
//           style={{
//             scrollBehavior: "smooth",
//           }}
//         > */}
//         <ClientComponent />
//         {/* Scroll indicator */}
//         {!section2Scrolled && (
//           <div className="sticky bottom-8 left-0 right-0 flex justify-center pointer-events-none">
//             <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm animate-bounce">
//               ↓ Scroll to continue
//             </div>
//           </div>
//         )}
//         {/* </div> */}
//       </section>

//       {/* --- Section 3 --- */}
//       {/* <section
//         ref={section3Ref}
//         className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center rounded-t-[4rem] text-white bg-gradient-to-tr from-purple-800 via-fuchsia-700 to-pink-600 overflow-hidden"
//       >
//         <div className="text-center px-6">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Upgrade to Premium
//           </h2>

//           <div className="backdrop-blur-md bg-white/20 p-10 rounded-3xl shadow-2xl max-w-lg mx-auto border border-white/30">
//             <h3 className="text-2xl font-semibold mb-4">
//               Unlock Exclusive Features
//             </h3>
//             <p className="text-gray-100 mb-8">
//               Get faster performance, better support, and advanced tools to grow
//               your digital presence.
//             </p>
//             <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-purple-100 transition-all">
//               Explore Plans →
//             </button>
//           </div>
//         </div>
//       </section> */}

//       <style jsx global>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mock components for demo
const Testimonials = ({ reviews }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
    {reviews.map((review, i) => (
      <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-purple-500"></div>
          <div>
            <p className="font-semibold">{review.name}</p>
            <p className="text-yellow-400">{"⭐".repeat(review.rating)}</p>
          </div>
        </div>
        <p className="text-gray-200">{review.body}</p>
      </div>
    ))}
  </div>
);

const ClientComponent = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center p-8">
      <h2 className="text-5xl font-bold mb-4">Client Success Stories</h2>
      <p className="text-xl text-purple-200">Trusted by thousands worldwide</p>
      <div className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div className="bg-white/20 p-6 rounded-xl backdrop-blur">
          <p className="text-4xl font-bold mb-2">500+</p>
          <p className="text-sm">Happy Clients</p>
        </div>
        <div className="bg-white/20 p-6 rounded-xl backdrop-blur">
          <p className="text-4xl font-bold mb-2">98%</p>
          <p className="text-sm">Success Rate</p>
        </div>
        <div className="bg-white/20 p-6 rounded-xl backdrop-blur">
          <p className="text-4xl font-bold mb-2">24/7</p>
          <p className="text-sm">Support</p>
        </div>
      </div>
    </div>
  </div>
);

const BusinessFeatureSection = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center">
        Business Features
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12">
        Everything you need to grow your business
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-16 h-16 bg-indigo-600 rounded-xl mb-4"></div>
            <h3 className="text-2xl font-bold mb-3">Feature {i}</h3>
            <p className="text-gray-600">
              Powerful tools designed to help you succeed in your business
              journey.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const reviews = [
  {
    img: "/images/user.png",
    name: "Sarah Johnson",
    body: "They were incredibly helpful throughout the visa process!",
    rating: 5,
  },
  {
    img: "/images/user.png",
    name: "Bhagyalakshmi Baburaj",
    body: "The team's support made the application stress-free.",
    rating: 4,
  },
  {
    img: "/images/user.png",
    name: "Priya Desai",
    body: "Highly professional and always available for help.",
    rating: 5,
  },
  {
    img: "/images/user.png",
    name: "Aiswrya Shaji",
    body: "Quick responses and great results. Highly recommend!",
    rating: 5,
  },
  {
    img: "/images/user.png",
    name: "Aisha Farouk",
    body: "Exceptional service from start to finish.",
    rating: 4,
  },
  {
    img: "/images/user.png",
    name: "Harikrishnan M C",
    body: "Made my dream of studying abroad come true!",
    rating: 5,
  },
];

export default function DomainSearchSection() {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section2ContentRef = useRef(null);
  const section3Ref = useRef(null);
  const [section2Scrolled, setSection2Scrolled] = useState(false);
  const timelineRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    // Kill only this component's ScrollTrigger if it exists
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    // Delay initialization to work with Lenis
    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onEnter: () => console.log("Domain section entered"),
          onLeave: () => console.log("Domain section left"),
        },
      });

      timelineRef.current = tl;
      scrollTriggerRef.current = tl.scrollTrigger;

      // Slide animations
      tl.fromTo(
        section2Ref.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1, ease: "power2.inOut" }
      ).fromTo(
        section3Ref.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1, ease: "power2.inOut" }
      );

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      // Only kill THIS component's ScrollTrigger
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const section2Content = section2ContentRef.current;
    if (!section2Content) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = section2Content;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;

      if (isAtBottom && !section2Scrolled) {
        setSection2Scrolled(true);
        // Enable GSAP scroll progression
        if (timelineRef.current?.scrollTrigger) {
          timelineRef.current.scrollTrigger.enable();
        }
      } else if (!isAtBottom && section2Scrolled) {
        setSection2Scrolled(false);
      }
    };

    section2Content.addEventListener("scroll", handleScroll);
    return () => section2Content.removeEventListener("scroll", handleScroll);
  }, [section2Scrolled]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden mt-20">
      {/* --- Section 1 --- */}
      <section
        ref={section1Ref}
        className="absolute inset-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
          <BusinessFeatureSection />
        </div>
      </section>

      {/* --- Section 2 --- */}
      <section
        ref={section2Ref}
        className="absolute inset-0 h-screen w-full rounded-t-[4rem] text-white bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 overflow-hidden"
      >
        <ClientComponent />

        {!section2Scrolled && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none z-10">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm animate-bounce">
              ↓ Scroll to continue
            </div>
          </div>
        )}
      </section>

      {/* --- Section 3 --- */}
      <section
        ref={section3Ref}
        className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center rounded-t-[4rem] text-white bg-gradient-to-tr from-purple-800 via-fuchsia-700 to-pink-600 overflow-hidden"
      >
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Client Testimonials
          </h2>

          <div className="max-w-6xl mx-auto">
            <Testimonials reviews={reviews} />
          </div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
