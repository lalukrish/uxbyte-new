import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/commonComponents/Button";

export default function SaaSSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for desktop scroll tracking
  useEffect(() => {
    if (isMobile) return;

    const sections = document.querySelectorAll(".category-section");

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          if (index !== -1) {
            setActiveCategory(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isMobile]);

  // Mobile Tab View
  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#e0e0e00f] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Tab Navigation */}
          <div className="mb-8">
            <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex-shrink-0 px-5 py-3  font-medium text-sm
                    transition-all duration-300 whitespace-nowrap
                    ${
                      activeCategory === category.id
                        ? "bg-[#6915ae] text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-200"
                    }
                  `}
                  label={category.name}
                ></Button>
              ))}
            </div>
          </div>

          {/* Mobile Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium text-gray-900 leading-tight">
              {categories[activeCategory].heading}
            </h2>

            <div className="space-y-4">
              {categories[activeCategory].services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button
                    label="EXPLORE"
                    variant="outlined"
                    className="text-sm px-4 py-2"
                  />
                </div>
              ))}
            </div>

            <Button
              label="Explore All"
              href="/explore-all"
              variant="outlined"
              className="w-full justify-center mt-6"
              iconRight={<ArrowRight size={18} />}
            />
          </div>
        </div>
      </div>
    );
  }

  // Desktop View (Original)
  return (
    <div className="min-h-screen bg-[#e0e0e00f] py-20 px-4">
      <div className="px-2 md:px-20 mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Section - Fixed Categories */}
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-3">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => {
                    const sections =
                      document.querySelectorAll(".category-section");
                    sections[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className={`
                    flex items-center gap-3 px-5 py-4 rounded-sm cursor-pointer
                    transition-all duration-300 group
                    ${
                      activeCategory === index
                        ? "bg-[#6915ae] text-white shadow-indigo-50"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
              ))}

              <Button
                label="Explore All"
                type="button"
                href="/explore-all"
                variant="outlined"
                className="px-5 py-3 w-full justify-center items-center hover:bg-black hover:text-white"
                iconRight={<ArrowRight />}
              />
            </div>
          </div>

          {/* Right Section - Scrolling Content */}
          <div className="col-span-12 lg:col-span-9 space-y-24">
            {categories.map((category) => (
              <div key={category.id} className="category-section">
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-12 leading-tight">
                  {category.heading}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="content-item bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col"
                    >
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#6915ae] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                        {service.description}
                      </p>
                      <Button
                        label="EXPLORE"
                        variant="outlined"
                        className="flex items-center gap-2 px-5 py-2.5 self-start hover:bg-black hover:text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
