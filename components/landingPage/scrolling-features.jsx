import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/commonComponents/Button";

export default function SaaSSection() {
  const containerRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Development",
      icon: "💻",
      heading: "Build scalable & modern web applications",
      services: [
        {
          title: "Frontend Development",
          description:
            "Create responsive, high-performance user interfaces with React, Vue, or Angular that deliver exceptional user experiences.",
        },
        {
          title: "Backend Development",
          description:
            "Build robust server-side applications with Node.js, Python, or Java that handle complex business logic and data processing.",
        },
        {
          title: "Full-Stack Development",
          description:
            "Get end-to-end development from database to UI, ensuring seamless integration and optimal performance across your entire stack.",
        },
      ],
    },
    {
      id: 1,
      name: "Design",
      icon: "🎨",
      heading: "Craft beautiful & intuitive user experiences",
      services: [
        {
          title: "UI/UX Design",
          description:
            "Design intuitive interfaces backed by user research, wireframes, and prototypes that solve real user problems and drive engagement.",
        },
        {
          title: "Product Design",
          description:
            "Transform ideas into polished products with user-centered design thinking, from concept to high-fidelity mockups.",
        },
        {
          title: "Design Systems",
          description:
            "Build scalable design systems with reusable components, guidelines, and documentation that ensure consistency across your product.",
        },
      ],
    },
    {
      id: 2,
      name: "Mobile Dev",
      icon: "📱",
      heading: "Launch powerful native & cross-platform apps",
      services: [
        {
          title: "iOS Development",
          description:
            "Build native iOS apps with Swift that leverage the latest Apple technologies and deliver smooth, intuitive experiences.",
        },
        {
          title: "Android Development",
          description:
            "Create performant Android apps with Kotlin that work seamlessly across devices and Android versions.",
        },
        {
          title: "React Native",
          description:
            "Develop cross-platform mobile apps with a single codebase that delivers near-native performance on both iOS and Android.",
        },
        {
          title: "Flutter Development",
          description:
            "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter.",
        },
      ],
    },
    {
      id: 3,
      name: "Marketing",
      icon: "📢",
      heading: "Drive growth with data-driven marketing",
      services: [
        {
          title: "Digital Marketing",
          description:
            "Launch targeted campaigns across search, social, and display channels that reach your ideal customers and drive conversions.",
        },
        {
          title: "Content Marketing",
          description:
            "Create compelling content strategies with SEO-optimized articles, videos, and resources that attract and engage your audience.",
        },
        {
          title: "Marketing Analytics",
          description:
            "Track and optimize campaign performance with comprehensive analytics dashboards that turn data into actionable insights.",
        },
      ],
    },
  ];

  useLayoutEffect(() => {
    if (!containerRef.current || !rightSectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const sections =
      rightSectionRef.current.querySelectorAll(".category-section");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveCategory(index),
        onEnterBack: () => setActiveCategory(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="px-2 md:px-20 mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Section - Fixed Categories */}
          <div className="col-span-12 lg:col-span-3 ">
            <div className="lg:sticky lg:top-24 space-y-3">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => {
                    const sections =
                      rightSectionRef.current.querySelectorAll(
                        ".category-section"
                      );
                    sections[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className={`
                    flex  items-center gap-3 px-5 py-4 rounded-sm cursor-pointer
                    transition-all duration-300 group
                    ${
                      activeCategory === index
                        ? "bg-black text-white shadow-lg shadow-indigo-200"
                        : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md"
                    }
                  `}
                >
                  {/* <span className="text-2xl">{category.icon}</span> */}
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
              ))}

              {/* <button className="w-full mt-6 px-5 py-3 rounded-xl bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2 group border border-gray-200">
                EXPLORE ALL
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button> */}
              <Button
                label={"Explore All"}
                type="button"
                href="/explore-all"
                variant="outlined"
                className="px-5 py-3 w-full! justify-center! items-center!"
              />
            </div>
          </div>

          {/* Right Section - Scrolling Content */}
          <div
            ref={rightSectionRef}
            className="col-span-12 lg:col-span-9 space-y-24"
          >
            {categories.map((category, catIndex) => (
              <div key={category.id} className="category-section">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                  {category.heading}
                </h2>

                {/* Service Cards - 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="content-item bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col"
                      onClick={() => {
                        console.log(`Clicked: ${service.title}`);
                      }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                        {service.description}
                      </p>
                      <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 font-medium text-sm group-hover:shadow-lg group-hover:shadow-indigo-200 self-start">
                        EXPLORE
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* Extra space for scroll
            <div className="h-96"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
