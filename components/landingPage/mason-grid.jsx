import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Article Card Component with Hover Transition
const ArticleCard = ({
  category,
  date,
  title,
  description,
  image,
  buttonText = "LEARN MORE",
  size = "normal", // "normal", "tall", or "wide"
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
    // {
    //   category: "PEOPLE STRATEGY",
    //   date: "JULY 22, 2025",
    //   title: "Building Resilient Teams in Hybrid Environments",
    //   description:
    //     "Discover the frameworks and practices that enable teams to maintain high performance across distributed and hybrid work models.",
    //   image:
    //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    //   size: "normal",
    // },
    // {
    //   category: "DIGITAL, TECHNOLOGY, AND DATA",
    //   date: "JULY 15, 2025",
    //   title: "Data Governance in the Age of AI",
    //   description:
    //     "As AI becomes ubiquitous, robust data governance frameworks are essential for maintaining trust, compliance, and competitive advantage.",
    //   image:
    //     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    //   size: "normal",
    // },
  ];

  return (
    <section className="features">
      <div className="min-h-screen bg-white p-8">
        <div className="px-16 mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Latest Articles</h1>
            <p className="text-gray-600 text-lg">
              Insights and perspectives on business transformation. Hover to
              read more.
            </p>
          </div>

          {/* Masonry Grid - Matching Reference Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="space-y-4">
              <div className="h-[400px]">
                <ArticleCard {...articles[0]} />
              </div>
              <div className="h-[350px]">
                <ArticleCard {...articles[3]} />
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <div className="h-[500px]">
                <ArticleCard {...articles[1]} />
              </div>
              <div className="h-[300px]">
                <ArticleCard {...articles[4]} />
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-4">
              <div className="h-[350px]">
                <ArticleCard {...articles[2]} />
              </div>
              <div className="h-[380px]">
                <ArticleCard {...articles[5]} />
              </div>
              {/* <div className="h-[320px]">
              <ArticleCard {...articles[6]} />
            </div> */}
            </div>
          </div>

          {/* Second Row */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="h-[380px]">
            <ArticleCard {...articles[7]} />
          </div>
        </div> */}

          {/* Usage Example */}
          {/* <div className="mt-16 bg-black text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Usage Example:</h2>
          <pre className="text-sm overflow-x-auto">
            {`import ArticleCard from './ArticleCard';

<ArticleCard 
  category="GENERATIVE AI"
  date="AUGUST 5, 2025"
  title="GenAI Adoption Is Hard..."
  description="Organizations face significant challenges..."
  image="/path/to/image.jpg"
  buttonText="LEARN MORE"
/>`}
          </pre>
        </div> */}

          {/* Features */}
          {/* <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Features:</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              ✨ <strong>Glassmorphism Effect:</strong> Frosted glass category
              tags and content boxes
            </li>
            <li>
              🎨 <strong>Masonry Grid Layout:</strong> Different sized cards for
              visual interest
            </li>
            <li>
              🎯 <strong>Hover Transformation:</strong> Smooth transition from
              image to detailed view
            </li>
            <li>
              📱 <strong>Responsive Design:</strong> Adapts beautifully to all
              screen sizes
            </li>
            <li>
              💫 <strong>Backdrop Blur:</strong> Modern glass effect with
              semi-transparent backgrounds
            </li>
          </ul>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceHoverCard;
