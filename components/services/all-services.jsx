"use client";
import React, { useState } from "react";

// Reusable Tab Filter Component
const TabFilter = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-6 py-3 font-semibold uppercase tracking-wide text-sm
            transition-all duration-300 rounded-lg
            ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-transparent text-black hover:bg-gray-100"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 mb-6 aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Project Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-semibold text-gray-500 uppercase tracking-wide"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-gray-700 transition-colors">
        {project.title}
      </h3>

      {/* Project Meta */}
      <div className="flex gap-3">
        <span className="px-4 py-2 bg-black text-white text-xs font-semibold uppercase rounded-lg">
          {project.company}
        </span>
        <span className="px-4 py-2 bg-gray-900 text-white text-xs font-semibold uppercase rounded-lg flex items-center gap-2">
          {project.flag && <span>{project.flag}</span>}
          {project.location}
        </span>
      </div>

      {/* Additional Info */}
      {project.techStack && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
            Tech Stack
          </p>
          <p className="text-sm text-gray-700">{project.techStack}</p>
        </div>
      )}
    </div>
  );
};

// Main Component
const ProjectFilterSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "webapp", label: "Web App" },
    { id: "mobile", label: "Mobile App" },
    { id: "website", label: "Website" },
    { id: "branding", label: "Branding" },
  ];

  const projects = [
    {
      id: 1,
      category: "webapp",
      tags: [
        "UX AUDIT",
        "PRODUCT REDESIGN",
        "WEB DEVELOPMENT",
        "TEAM EXTENTION",
      ],
      title:
        "Isora – optimizing governance, risk & compliance for top institutions",
      company: "SALTYCLOUD",
      location: "TEXAS, USA",
      flag: "🇺🇸",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      techStack: "React, Node.js, PostgreSQL",
    },
    {
      id: 2,
      category: "webapp",
      tags: ["FINTECH", "FULL STACK", "CLOUD INFRASTRUCTURE"],
      title: "Banking Platform - Next-gen digital banking solution",
      company: "FINCORE",
      location: "LONDON, UK",
      flag: "🇬🇧",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      techStack: "Vue.js, Python, AWS",
    },
    {
      id: 3,
      category: "mobile",
      tags: ["MOBILE FIRST", "USER EXPERIENCE", "HEALTH TECH"],
      title: "HealthTrack - Personal wellness monitoring app",
      company: "WELLNESS CO",
      location: "CALIFORNIA, USA",
      flag: "🇺🇸",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      techStack: "React Native, Firebase",
    },
    {
      id: 4,
      category: "website",
      tags: ["E-COMMERCE", "SEO", "CONVERSION OPTIMIZATION"],
      title: "LuxeBrand - Premium fashion e-commerce platform",
      company: "LUXE RETAIL",
      location: "PARIS, FRANCE",
      flag: "🇫🇷",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      techStack: "Next.js, Shopify, Vercel",
    },
    {
      id: 5,
      category: "branding",
      tags: ["BRAND IDENTITY", "LOGO DESIGN", "STYLE GUIDE"],
      title: "TechVision - Complete brand identity for AI startup",
      company: "TECHVISION",
      location: "SINGAPORE",
      flag: "🇸🇬",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop",
      techStack: "Figma, Adobe Creative Suite",
    },
    {
      id: 6,
      category: "mobile",
      tags: ["SOCIAL MEDIA", "REAL-TIME", "VIDEO STREAMING"],
      title: "ConnectNow - Social networking platform",
      company: "SOCIALIZE",
      location: "TOKYO, JAPAN",
      flag: "🇯🇵",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      techStack: "Flutter, WebRTC, MongoDB",
    },
    {
      id: 7,
      category: "website",
      tags: ["PORTFOLIO", "ANIMATION", "INTERACTIVE"],
      title: "CreativeStudio - Award-winning agency portfolio",
      company: "STUDIO X",
      location: "NEW YORK, USA",
      flag: "🇺🇸",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
      techStack: "React, Three.js, GSAP",
    },
    {
      id: 8,
      category: "webapp",
      tags: ["SAAS", "PROJECT MANAGEMENT", "COLLABORATION"],
      title: "TaskFlow - Enterprise project management suite",
      company: "WORKFLOW INC",
      location: "BERLIN, GERMANY",
      flag: "🇩🇪",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      techStack: "Angular, .NET, Azure",
    },
    {
      id: 9,
      category: "branding",
      tags: ["REBRANDING", "PACKAGING", "MARKETING"],
      title: "GreenEarth - Sustainable products brand refresh",
      company: "ECO BRANDS",
      location: "AMSTERDAM",
      flag: "🇳🇱",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
      techStack: "Illustrator, InDesign",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-6xl font-bold mb-12">Explore our projects</h1>

        {/* Tab Filter */}
        <TabFilter
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilterSection;
