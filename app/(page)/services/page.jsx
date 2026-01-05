import React from "react";
import ServiceCard from "@/components/services/service-card";
import ProjectFilterSection from "@/components/services/all-services";
import FeatureSection from "@/components/services/box-feautre";
import BreadcrumbSection from "@/components/landingPage/breadcrumb-new";

const page = () => {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      title: "Digital Growth Solutions",
      imageLeft: true,
      services: [
        {
          title: "Digital Marketing",
          items: ["Social Media Marketing", "Email Marketing Services"],
        },
        {
          title: "Development",
          items: ["Web Development", "DevOps", "Testing"],
        },
        {
          title: "Designing",
          items: ["Branding", "UI / UX Design"],
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      title: "Technology & Engineering",
      imageLeft: false,
      services: [
        {
          title: "Development",
          items: ["Frontend", "Backend", "API Integrations"],
        },
        {
          title: "Cloud & DevOps",
          items: ["CI/CD", "AWS", "Docker"],
        },
      ],
    },
  ];

  return (
    <div>
      <BreadcrumbSection
        title="Study Abroad"
        items={[
          { label: "Home", href: "/" },
          { label: "Study Abroad", href: "/study-abroad" },
          { label: "Ireland" },
        ]}
      />

      {projects.map((project, index) => (
        <FeatureSection key={index} {...project} />
      ))}
      <ProjectFilterSection />

      <ServiceCard />
    </div>
  );
};

export default page;
