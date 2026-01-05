import React from "react";

const FeatureSection = ({ image, title, services = [], imageLeft = true }) => {
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
          {/* Features/Content */}
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>

            <div className="space-y-8">
              {services.map((group, index) => (
                <div key={index}>
                  {/* Main Item */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white text-sm font-bold">
                      ✓
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {group.title}
                    </h3>
                  </div>

                  {/* Sub Items */}
                  {group.items?.length > 0 && (
                    <ul className="ml-9 space-y-2">
                      {group.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
