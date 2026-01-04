import React from "react";
import ServiceCard from "@/components/services/service-card";
import ProjectFilterSection from "@/components/services/all-services";
import FeatureSection from "@/components/services/box-feautre";

const page = () => {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      title:
        "KlickEx – frictionless cross-border payments for the Pacific Island communities",
      tags: ["UX AUDIT", "PRODUCT REDESIGN", "WEB DEVELOPMENT"],
      techStack: "Next.js, TypeScript, React Redux",
      timeline: "6 months",
      results: [
        '+35% "Add Money" conversion rate',
        '+30% "Money Transfer" completion rate',
      ],
      imageLeft: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      title: "Analytics Dashboard – Real-time insights for growing businesses",
      tags: ["UI/UX DESIGN", "DASHBOARD", "DATA VISUALIZATION"],
      techStack: "React, D3.js, Node.js",
      timeline: "4 months",
      results: ["+45% User engagement", "+60% Faster data processing"],
      imageLeft: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      title:
        "E-commerce Platform – Seamless shopping experience across devices",
      tags: ["MOBILE APP", "E-COMMERCE", "PAYMENT INTEGRATION"],
      techStack: "React Native, Firebase, Stripe",
      timeline: "8 months",
      results: ["+50% Mobile conversions", "+40% Average order value"],
      imageLeft: true,
    },
  ];

  return (
    <div>
      {/* <BreadcrumbDemo /> */}
      <ProjectFilterSection />

      {projects.map((project, index) => (
        <FeatureSection key={index} {...project} />
      ))}

      <ServiceCard />
    </div>
  );
};

export default page;
