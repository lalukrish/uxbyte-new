// import React, { useState } from "react";
// import { ArrowRight } from "lucide-react";

// // Article Card Component with Hover Transition
// const ArticleCard = ({
//   category,
//   date,
//   title,
//   description,
//   image,
//   buttonText = "LEARN MORE",
//   size = "normal", // "normal", "tall", or "wide"
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative h-full overflow-hidden cursor-pointer rounded-lg"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Default State - Image Card */}
//       <div
//         className={`
//         absolute inset-0 transition-opacity duration-500
//         ${isHovered ? "opacity-0" : "opacity-100"}
//       `}
//       >
//         <div className="relative h-full group">
//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
//             style={{ backgroundImage: `url(${image})` }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
//           </div>

//           {/* Content Overlay */}
//           <div className="relative h-full p-6 flex flex-col justify-between">
//             {/* Category Tag with Glassmorphism */}
//             <div>
//               <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold uppercase tracking-wide text-white border border-white/30 shadow-lg">
//                 {category}
//               </span>
//             </div>

//             {/* Article Info with Glassmorphism */}
//             <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 transition-transform duration-300 group-hover:-translate-y-2 shadow-xl">
//               <div className="text-xs font-bold uppercase tracking-wide mb-2 text-gray-600">
//                 ARTICLE {date}
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 leading-tight">
//                 {title}
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hover State - Text Card */}
//       <div
//         className={`
//         absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col justify-between
//         transition-all duration-500
//         ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
//       `}
//       >
//         {/* Article Info */}
//         <div>
//           <div className="text-xs font-bold uppercase tracking-wide mb-3 text-gray-600">
//             ARTICLE {date}
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
//             {title}
//           </h3>
//           <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
//         </div>

//         {/* Learn More Button */}
//         <div className="mt-6">
//           <button className="px-6 py-3 bg-green-400 hover:bg-green-500 text-gray-900 font-bold rounded-full flex items-center gap-2 transition-all duration-300 hover:gap-4 text-sm">
//             {buttonText}
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Component
// const ServiceHoverCard = () => {
//   const articles = [
//     {
//       category: "TECHNOLOGY, MEDIA, AND...",
//       date: "AUGUST 13, 2025",
//       title: "Rethinking B2B Software Pricing in the Agentic AI Era",
//       description:
//         "Explore how artificial intelligence is fundamentally changing B2B software pricing models and what companies need to do to stay competitive in this new landscape.",
//       image:
//         "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
//       size: "normal",
//     },
//     {
//       category: "ARTICLE",
//       date: "JULY 29, 2025",
//       title:
//         "Cloud Cover: Price Swings, Sovereignty Demands, and Wasted Resources",
//       description:
//         "As the global cloud environment continues to evolve, the sovereign cloud has emerged as a strategic imperative to ensure control over national data and cloud operations.",
//       image:
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
//       size: "tall",
//     },
//     {
//       category: "FINTECH",
//       date: "AUGUST 10, 2025",
//       title: "The Future of Digital Banking: Beyond Traditional Models",
//       description:
//         "Financial institutions are reimagining their digital strategies to meet evolving customer expectations in an increasingly competitive fintech landscape.",
//       image:
//         "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
//       size: "normal",
//     },
//     {
//       category: "GENERATIVE AI",
//       date: "AUGUST 5, 2025",
//       title: "GenAI Adoption Is Hard. Radical Employee Centricity Can Help",
//       description:
//         "Organizations face significant challenges in AI adoption. Putting employees at the center of transformation strategies can unlock unprecedented value.",
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
//       size: "normal",
//     },
//     {
//       category: "COST MANAGEMENT",
//       date: "JULY 28, 2025",
//       title: "Strategic Cost Optimization in Digital Transformation",
//       description:
//         "Learn proven methodologies for reducing operational costs while accelerating digital initiatives and maintaining competitive advantage.",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//       size: "wide",
//     },
//     {
//       category: "PEOPLE STRATEGY",
//       date: "AUGUST 4, 2025",
//       title: "Turbulent Times Call for a New People Strategy",
//       description:
//         "In times of uncertainty, organizations must rethink their approach to talent management, culture, and employee experience to thrive.",
//       image:
//         "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
//       size: "normal",
//     },
//     // {
//     //   category: "PEOPLE STRATEGY",
//     //   date: "JULY 22, 2025",
//     //   title: "Building Resilient Teams in Hybrid Environments",
//     //   description:
//     //     "Discover the frameworks and practices that enable teams to maintain high performance across distributed and hybrid work models.",
//     //   image:
//     //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
//     //   size: "normal",
//     // },
//     // {
//     //   category: "DIGITAL, TECHNOLOGY, AND DATA",
//     //   date: "JULY 15, 2025",
//     //   title: "Data Governance in the Age of AI",
//     //   description:
//     //     "As AI becomes ubiquitous, robust data governance frameworks are essential for maintaining trust, compliance, and competitive advantage.",
//     //   image:
//     //     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
//     //   size: "normal",
//     // },
//   ];

//   return (
//     <section className="features">
//       <div className="min-h-screen bg-white p-8">
//         <div className="px-2 md:px-16 mx-auto">
//           <div className="mb-12">
//             <h1 className="text-5xl font-bold mb-4">Latest Articles</h1>
//             <p className="text-gray-600 text-lg">
//               Insights and perspectives on business transformation. Hover to
//               read more.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="space-y-4">
//               <div className="h-[400px]">
//                 <ArticleCard {...articles[0]} />
//               </div>
//               <div className="h-[350px]">
//                 <ArticleCard {...articles[3]} />
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="h-[500px]">
//                 <ArticleCard {...articles[1]} />
//               </div>
//               <div className="h-[300px]">
//                 <ArticleCard {...articles[4]} />
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="h-[350px]">
//                 <ArticleCard {...articles[2]} />
//               </div>
//               <div className="h-[380px]">
//                 <ArticleCard {...articles[5]} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceHoverCard;

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Article Card Component with Hover Transition
const ArticleCard = ({
  category,
  date,
  title,
  description,
  image,
  buttonText = "LEARN MORE",
  size = "normal",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-full overflow-hidden cursor-pointer rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default State - Image Card */}
      <div
        className={`
        absolute inset-0 transition-opacity duration-500
        ${isHovered ? "opacity-0" : "opacity-100"}
      `}
      >
        <div className="relative h-full group">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative h-full p-6 flex flex-col justify-between">
            {/* Category Tag with Glassmorphism */}
            <div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold uppercase tracking-wide text-white border border-white/30 shadow-lg">
                {category}
              </span>
            </div>

            {/* Article Info with Glassmorphism */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 transition-transform duration-300 group-hover:-translate-y-2 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-wide mb-2 text-gray-600">
                ARTICLE {date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Hover State - Text Card */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col justify-between
        transition-all duration-500
        ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      >
        {/* Article Info */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wide mb-3 text-gray-600">
            ARTICLE {date}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
        </div>

        {/* Learn More Button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-green-400 hover:bg-green-500 text-gray-900 font-bold rounded-full flex items-center gap-2 transition-all duration-300 hover:gap-4 text-sm">
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ServiceHoverCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const articles = [
    {
      category: "TECHNOLOGY, MEDIA, AND...",
      date: "AUGUST 13, 2025",
      title: "Rethinking B2B Software Pricing in the Agentic AI Era",
      description:
        "Explore how artificial intelligence is fundamentally changing B2B software pricing models and what companies need to do to stay competitive in this new landscape.",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
      size: "normal",
    },
    {
      category: "ARTICLE",
      date: "JULY 29, 2025",
      title:
        "Cloud Cover: Price Swings, Sovereignty Demands, and Wasted Resources",
      description:
        "As the global cloud environment continues to evolve, the sovereign cloud has emerged as a strategic imperative to ensure control over national data and cloud operations.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      size: "tall",
    },
    {
      category: "FINTECH",
      date: "AUGUST 10, 2025",
      title: "The Future of Digital Banking: Beyond Traditional Models",
      description:
        "Financial institutions are reimagining their digital strategies to meet evolving customer expectations in an increasingly competitive fintech landscape.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      size: "normal",
    },
    {
      category: "GENERATIVE AI",
      date: "AUGUST 5, 2025",
      title: "GenAI Adoption Is Hard. Radical Employee Centricity Can Help",
      description:
        "Organizations face significant challenges in AI adoption. Putting employees at the center of transformation strategies can unlock unprecedented value.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      size: "normal",
    },
    {
      category: "COST MANAGEMENT",
      date: "JULY 28, 2025",
      title: "Strategic Cost Optimization in Digital Transformation",
      description:
        "Learn proven methodologies for reducing operational costs while accelerating digital initiatives and maintaining competitive advantage.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      size: "wide",
    },
    {
      category: "PEOPLE STRATEGY",
      date: "AUGUST 4, 2025",
      title: "Turbulent Times Call for a New People Strategy",
      description:
        "In times of uncertainty, organizations must rethink their approach to talent management, culture, and employee experience to thrive.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      size: "normal",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, articles.length]);

  return (
    <section className="features">
      <div className="min-h-screen bg-white p-8">
        <div className="px-2 md:px-16 mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Latest Articles</h1>
            <p className="text-gray-600 text-lg">
              Insights and perspectives on business transformation. Hover to
              read more.
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="h-[400px]">
                <ArticleCard {...articles[0]} />
              </div>
              <div className="h-[350px]">
                <ArticleCard {...articles[3]} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[500px]">
                <ArticleCard {...articles[1]} />
              </div>
              <div className="h-[300px]">
                <ArticleCard {...articles[4]} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[350px]">
                <ArticleCard {...articles[2]} />
              </div>
              <div className="h-[380px]">
                <ArticleCard {...articles[5]} />
              </div>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {articles.map((article, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="h-[500px]">
                      <ArticleCard {...article} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 h-2 bg-gray-900"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 text-sm text-gray-600">
              {currentSlide + 1} / {articles.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHoverCard;
