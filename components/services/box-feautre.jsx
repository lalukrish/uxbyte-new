import React from "react";

const FeatureSection = ({
  image,
  title,
  tags,
  techStack,
  timeline,
  results,
  imageLeft = true,
}) => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${
            imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 items-center`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Features/Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold text-gray-600 tracking-wider"
                >
                  #{tag.toUpperCase()}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>

            {/* Location/Category Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded">
                NOMUPAY
              </span>
              <span className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded flex items-center gap-2">
                🇳🇿 NEW ZEALAND
              </span>
            </div>

            {/* Tech Stack & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3 tracking-wider">
                  TECH STACK
                </h3>
                <p className="text-lg text-gray-900">{techStack}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3 tracking-wider">
                  TIMELINE
                </h3>
                <p className="text-lg text-gray-900">{timeline}</p>
              </div>
            </div>

            {/* Results */}
            <div className="pt-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-4 tracking-wider">
                RESULTS
              </h3>
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="text-xl font-semibold text-gray-900"
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
