"use client";
import React, { useState } from "react";
import { ChevronRight, Home } from "lucide-react";

// Breadcrumb Component with unique design
const Breadcrumb = ({ items, variant = "slash" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Slash Style - Diagonal separators
  const SlashStyle = () => (
    <nav className="flex items-center gap-1 py-3">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              relative px-4 py-2 font-medium transition-all duration-300
              ${
                index === items.length - 1
                  ? "text-black bg-black text-white"
                  : "text-gray-600 hover:text-black"
              }
              ${
                hoveredIndex === index && index !== items.length - 1
                  ? "translate-x-1"
                  : ""
              }
            `}
            style={{
              clipPath:
                index === items.length - 1
                  ? "polygon(8% 0%, 100% 0%, 100% 100%, 8% 100%, 0% 50%)"
                  : "none",
            }}
          >
            {index === 0 && <Home className="inline-block w-4 h-4 mr-1" />}
            {item.label}
          </a>
          {index < items.length - 1 && (
            <span className="text-gray-400 font-bold text-xl">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );

  // Pill Style - Rounded connected pills
  const PillStyle = () => (
    <nav className="flex items-center">
      {items.map((item, index) => (
        <div key={index} className="relative flex items-center">
          <a
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              px-6 py-2 font-medium transition-all duration-300 relative z-10
              ${
                index === items.length - 1
                  ? "bg-black text-white rounded-full"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
              ${index === 0 ? "rounded-l-full pl-8" : ""}
              ${
                index !== 0 && index !== items.length - 1
                  ? "rounded-r-full -ml-4"
                  : ""
              }
              ${
                hoveredIndex === index && index !== items.length - 1
                  ? "scale-105"
                  : ""
              }
            `}
          >
            {index === 0 && <Home className="inline-block w-4 h-4 mr-2" />}
            {item.label}
          </a>
          {index < items.length - 1 && index !== items.length - 2 && (
            <ChevronRight className="w-5 h-5 text-gray-400 -ml-2 z-0" />
          )}
        </div>
      ))}
    </nav>
  );

  // Arrow Style - Connected arrows
  const ArrowStyle = () => (
    <nav className="flex items-center">
      {items.map((item, index) => (
        <div key={index} className="relative flex items-center">
          <a
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              relative px-8 py-3 font-medium transition-all duration-300
              ${
                index === items.length - 1
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border-2 border-black hover:bg-gray-50"
              }
              ${
                hoveredIndex === index && index !== items.length - 1
                  ? "-translate-y-1"
                  : ""
              }
            `}
            style={{
              clipPath:
                index === items.length - 1
                  ? "polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)"
                  : "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)",
              marginLeft: index === 0 ? "0" : "-20px",
              zIndex: items.length - index,
            }}
          >
            {index === 0 && <Home className="inline-block w-4 h-4 mr-2" />}
            {item.label}
          </a>
        </div>
      ))}
    </nav>
  );

  // Underline Style - Minimal with animated underlines
  const UnderlineStyle = () => (
    <nav className="flex items-center gap-4 py-3">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative group"
          >
            <span
              className={`
              font-medium transition-colors duration-300
              ${
                index === items.length - 1
                  ? "text-black font-bold"
                  : "text-gray-600"
              }
            `}
            >
              {index === 0 && <Home className="inline-block w-4 h-4 mr-2" />}
              {item.label}
            </span>
            <span
              className={`
                absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300
                ${
                  index === items.length - 1
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }
              `}
            />
          </a>
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );

  // Dots Style - Connected with dots
  const DotsStyle = () => (
    <nav className="flex items-center gap-2">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              px-5 py-2 rounded font-medium transition-all duration-300
              ${
                index === items.length - 1
                  ? "bg-black text-white scale-110"
                  : "text-gray-700 hover:bg-gray-100"
              }
              ${
                hoveredIndex === index && index !== items.length - 1
                  ? "bg-gray-100 scale-105"
                  : ""
              }
            `}
          >
            {index === 0 && <Home className="inline-block w-4 h-4 mr-2" />}
            {item.label}
          </a>
          {index < items.length - 1 && (
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
            </div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );

  // Card Style - Elevated cards
  const CardStyle = () => (
    <nav className="flex items-center gap-3">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2
              ${
                index === items.length - 1
                  ? "bg-black text-white border-black shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:shadow-md hover:border-gray-400"
              }
              ${
                hoveredIndex === index && index !== items.length - 1
                  ? "shadow-md -translate-y-1"
                  : ""
              }
            `}
          >
            {index === 0 && <Home className="inline-block w-4 h-4 mr-2" />}
            {item.label}
          </a>
          {index < items.length - 1 && (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );

  const variants = {
    slash: SlashStyle,
    pill: PillStyle,
    arrow: ArrowStyle,
    underline: UnderlineStyle,
    dots: DotsStyle,
    card: CardStyle,
  };

  const SelectedVariant = variants[variant] || SlashStyle;

  return <SelectedVariant />;
};

// Demo Page
const BreadcrumbDemo = () => {
  const [selectedVariant, setSelectedVariant] = useState("slash");

  const breadcrumbItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Laptops", href: "#" },
  ];

  const variants = [
    { name: "slash", label: "Slash Style" },
    { name: "pill", label: "Pill Style" },
    { name: "arrow", label: "Arrow Style" },
    { name: "underline", label: "Underline Style" },
    { name: "dots", label: "Dots Style" },
    { name: "card", label: "Card Style" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Breadcrumb Component Variants
        </h1>

        {/* Variant Selector */}
        <div className="bg-white border-2 border-black p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Select Variant:</h2>
          <div className="flex flex-wrap gap-3">
            {variants.map((variant) => (
              <button
                key={variant.name}
                onClick={() => setSelectedVariant(variant.name)}
                className={`
                  px-6 py-2 rounded font-medium transition-all duration-300 border-2
                  ${
                    selectedVariant === variant.name
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:border-black"
                  }
                `}
              >
                {variant.label}
              </button>
            ))}
          </div>
        </div>

        {/* Breadcrumb Display */}
        <div className="bg-white border-2 border-black p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">Preview:</h2>
          <Breadcrumb items={breadcrumbItems} variant={selectedVariant} />
        </div>

        {/* Usage Example */}
        <div className="bg-black text-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Usage Example:</h2>
          <pre className="text-sm overflow-x-auto">
            {`import Breadcrumb from './Breadcrumb';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', href: '/products/electronics/laptops' }
];

<Breadcrumb 
  items={breadcrumbItems} 
  variant="${selectedVariant}" 
/>`}
          </pre>
        </div>

        {/* Different Examples */}
        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold">All Variants:</h2>

          {variants.map((variant) => (
            <div
              key={variant.name}
              className="bg-white border-2 border-gray-200 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-700">
                {variant.label}
              </h3>
              <Breadcrumb items={breadcrumbItems} variant={variant.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbDemo;
