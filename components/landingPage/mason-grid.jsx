// import React, { useState, useEffect } from "react";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { Button } from "@/commonComponents/Button";
// import Title from "@/commonComponents/title";

// const ArticleCard = ({
//   category,
//   date,
//   title,
//   description,
//   image,
//   buttonText = "LEARN MORE",
//   size = "normal",
//   delay = 0,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 24,
//       scale: 0.95,
//       rotate: -6,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         duration: 0.9,
//         delay: delay,
//         ease: [0.22, 1, 0.36, 1],
//         opacity: {
//           duration: 0.9,
//           ease: "easeOut",
//         },
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="relative h-full overflow-hidden cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.3 }}
//       variants={cardVariants}
//     >
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

//           <div className="relative h-full p-6 flex flex-col justify-between">
//             <div>
//               <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold uppercase tracking-wide text-white border border-white/30 shadow-lg">
//                 {category}
//               </span>
//             </div>

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

//       <div
//         className={`
//         absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col justify-between
//         transition-all duration-500
//         ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
//       `}
//       >
//         <div>
//           <div className="text-xs font-bold uppercase tracking-wide mb-3 text-gray-600">
//             ARTICLE {date}
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
//             {title}
//           </h3>
//           <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
//         </div>

//         <div className="mt-6">
//           <Button
//             className="px-6 py-3 bg-[#6915ae] hover:[#6915ae] text-[white] font-bold  flex items-center gap-2 transition-all duration-300 hover:gap-4 text-sm"
//             label={buttonText}
//             iconRight={<ArrowRight className="w-4 h-4" />}
//           ></Button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Main Component
// const ServiceHoverCard = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % articles.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
//     setIsAutoPlaying(false);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % articles.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, articles.length]);

//   return (
//     <section className="features">
//       <div className="min-h-screen bg-white p-8">
//         <div className="px-2 md:px-16 mx-auto">
//           <div className="mb-12">
//             <Title>Latest Articles</Title>
//             <p className="text-gray-600 text-lg">
//               Insights and perspectives on business transformation. Hover to
//               read more.
//             </p>
//           </div>

//           {/* Desktop Grid Layout */}
//           <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="space-y-4">
//               <div className="h-[400px]">
//                 <ArticleCard {...articles[0]} delay={0} />
//               </div>
//               <div className="h-[350px]">
//                 <ArticleCard {...articles[3]} delay={0.15} />
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="h-[500px]">
//                 <ArticleCard {...articles[1]} delay={0.1} />
//               </div>
//               <div className="h-[300px]">
//                 <ArticleCard {...articles[4]} delay={0.11} />
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="h-[350px]">
//                 <ArticleCard {...articles[2]} delay={0.55} />
//               </div>
//               <div className="h-[380px]">
//                 <ArticleCard {...articles[5]} delay={0.25} />
//               </div>
//             </div>
//           </div>

//           {/* Mobile Carousel */}
//           <div className="lg:hidden relative">
//             {/* Carousel Container */}
//             <div className="relative overflow-hidden rounded-lg">
//               <div
//                 className="flex transition-transform duration-500 ease-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {articles.map((article, index) => (
//                   <div key={index} className="w-full flex-shrink-0 px-2">
//                     <div className="h-[500px]">
//                       <ArticleCard {...article} delay={0} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-900" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
//               aria-label="Next slide"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-900" />
//             </button>

//             {/* Dots Indicator */}
//             <div className="flex justify-center gap-2 mt-6">
//               {articles.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     currentSlide === index
//                       ? "w-8 h-2 bg-gray-900"
//                       : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Slide Counter */}
//             <div className="text-center mt-4 text-sm text-gray-600">
//               {currentSlide + 1} / {articles.length}
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
import { motion } from "framer-motion";
import { Button } from "@/commonComponents/Button";
import Title from "@/commonComponents/title";
import { EncryptedText } from "../ui/encrypted-text";
import Paragraph from "@/commonComponents/paragraph";

const ArticleCard = ({
  category,
  title,
  description,
  image,
  slug,
  buttonText = "EXPLORE MORE",
  size = "normal",
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.95,
      rotate: -6,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
        opacity: {
          duration: 0.9,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <motion.div
      className="relative h-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={cardVariants}
    >
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

          <div className="relative h-full p-6 flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold uppercase tracking-wide text-white border border-white/30 shadow-lg">
                {category}
              </span>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 transition-transform duration-300 group-hover:-translate-y-2 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`
        absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col justify-between
        transition-all duration-500
        ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-wide mb-3 text-gray-600">
            {category}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
        </div>

        <div className="mt-6">
          <Button
            variant="outlined"
            //       className="px-6 py-3 bg-[#6915ae] hover:[#6915ae] text-[white] font-bold  flex items-center gap-2 transition-all duration-300 hover:gap-4 text-sm"
            label={buttonText}
            iconRight={<ArrowRight className="w-4 h-4" />}
          ></Button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const ServiceHoverCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      category: "Strategy Experience Design",
      title: "Transform Customer Journeys with Strategic Excellence",
      description:
        "Elevate your customer experience through strategic planning, user-centric design, and data-driven insights that drive engagement and loyalty.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      slug: "strategy-customer-experience",
      size: "normal",
    },
    {
      category: "Data Intelligence",
      title: "Unlock Business Value Through Data-Driven Intelligence",
      description:
        "Harness the power of data analytics, AI, and machine learning to transform raw data into actionable insights that fuel business growth.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      slug: "data-intelligence",
      size: "tall",
    },
    {
      category: "Digital Growth Transformation",
      title: "Accelerate Growth with Digital Marketing Innovation",
      description:
        "Drive measurable results through integrated digital marketing strategies, content creation, and performance optimization across all channels.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      slug: "digital-marketing-transformation",
      size: "normal",
    },
    {
      category: "Commerce Acceleration",
      title: "Build Scalable E-commerce Experiences That Convert",
      description:
        "Launch and scale your online business with cutting-edge e-commerce platforms, conversion optimization, and seamless payment integrations.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      slug: "ecommerce-accelerators",
      size: "normal",
    },
    {
      category: "Product Innovation Engineering",
      title: "Engineer Tomorrow's Products with Innovation at Core",
      description:
        "From ideation to deployment, we build innovative products using agile methodologies, modern tech stacks, and user-focused engineering.",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
      slug: "innovation-product-engineering",
      size: "wide",
    },
    {
      category: "Platform Technology",
      title: "Build Robust Platforms with Cutting-Edge Technology",
      description:
        "Develop scalable, secure, and high-performance platforms using cloud-native architecture, microservices, and modern development practices.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      slug: "platforms-technology",
      size: "normal",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
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
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  return (
    <section className="features">
      <div className="md:min-h-screen bg-white px-1 md:p-8">
        <div className="px-2 md:px-16 mx-auto">
          <div className="mb-12">
            <EncryptedText
              normaltext="TECHNOLOGY THAT"
              text="MOVES BUSINESS"
              className="text-sm "
              normalClassName=""
              encryptedClassName="text-[#adadae]"
              revealedClassName="text-gray-500 dark:text-[#adadae]"
              revealDelayMs={30}
            />
            <Title className="mt-0 md:-mt-3">Our Services</Title>
            <Paragraph className="">
              Comprehensive solutions to drive your digital transformation.
              Hover to explore more.
            </Paragraph>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="h-[400px]">
                <ArticleCard {...services[0]} delay={0} />
              </div>
              <div className="h-[350px]">
                <ArticleCard {...services[3]} delay={0.15} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[500px]">
                <ArticleCard {...services[1]} delay={0.1} />
              </div>
              <div className="h-[300px]">
                <ArticleCard {...services[4]} delay={0.11} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[350px]">
                <ArticleCard {...services[2]} delay={0.05} />
              </div>
              <div className="h-[380px]">
                <ArticleCard {...services[5]} delay={0.25} />
              </div>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden ">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="h-[400px]">
                      <ArticleCard {...service} delay={0} />
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
              {services.map((_, index) => (
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
              {currentSlide + 1} / {services.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHoverCard;
