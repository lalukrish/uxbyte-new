import React from "react";
import ServiceCard from "@/components/services/service-card";
import ProjectFilterSection from "@/components/services/all-services";
import FeatureSection from "@/components/services/box-feautre";
import BreadcrumbSection from "@/components/landingPage/breadcrumb-new";
import ProjectShowcase from "@/components/services/sector-details";
import ProjectDetailSection from "@/components/services/sector-details";
import { FAQAccordion } from "@/components/services/accordian-inner";
import Breadcrumb from "@/components/landingPage/breadcrumb-new";

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

  const projectData = [
    {
      category: "HEALTHCARE",
      title: "HIPAA-compliant design and development for health tech products",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
      challenges: [
        "UX complexity in health tracking, patient records, and telehealth",
        "Data privacy and HIPAA compliance",
        "Building trust with patients and practitioners",
      ],
      solutions: [
        "Patient-first UX that simplifies complex workflows",
        "Secure infrastructure aligned with regulatory standards",
        "Clean, professional UI that builds user trust",
      ],
      buttonText: "EXPLORE",
      buttonLink: "/projects/healthcare",
      imageLeft: true,
      bgColor: "bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800",
    },
    {
      category: "FINTECH",
      title: "Secure and scalable financial technology solutions",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=800&fit=crop",
      challenges: [
        "Complex financial regulations and compliance requirements",
        "Real-time transaction processing at scale",
        "Building user trust in digital financial services",
      ],
      solutions: [
        "Enterprise-grade security with end-to-end encryption",
        "Microservices architecture for scalability",
        "Intuitive UX that simplifies financial complexity",
      ],
      buttonText: "VIEW CASE STUDY",
      buttonLink: "/projects/fintech",
      imageLeft: false,
      bgColor: "bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800",
    },
    {
      category: "SAAS",
      title: "Enterprise SaaS platform for modern businesses",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=800&fit=crop",
      challenges: [
        "Managing multi-tenant architecture at scale",
        "Complex user permissions and role management",
        "Seamless third-party integrations",
      ],
      solutions: [
        "Robust API-first architecture",
        "Flexible permission system with granular controls",
        "Extensive integration marketplace",
      ],
      buttonText: "LEARN MORE",
      buttonLink: "/projects/saas",
      imageLeft: true,
      bgColor: "bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800",
    },
  ];

  const faqData = [
    {
      question: "What services does Phenomenon Studio offer?",
      answer:
        "Phenomenon Studio offers a comprehensive range of design and development services including UX/UI design, web development, mobile app development, branding, and digital strategy consulting. We work with startups and established businesses to create exceptional digital experiences.",
    },
    {
      question: "Can you help startups with product scalability and growth?",
      answer:
        "Absolutely! We specialize in helping startups scale their products effectively. Our team focuses on building scalable architectures, optimizing user experiences, and implementing growth strategies that support your business objectives as you expand.",
    },
    {
      question: "What makes your designs user-friendly?",
      answer:
        "Our designs prioritize user-centered principles, extensive research, and iterative testing. We focus on intuitive navigation, accessibility standards, clear visual hierarchy, and responsive layouts that work seamlessly across all devices and user contexts.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
      question: "What is your design process?",
      answer:
        "Our process includes discovery and research, strategy development, wireframing and prototyping, visual design, development, testing, and launch. We maintain close collaboration with clients throughout each phase to ensure alignment with your vision and goals.",
    },
  ];
  return (
    <div>
      {/* <BreadcrumbSection
        title="Services"
        items={[
          { label: "Home", href: "/" },
          { label: "services", href: "/services" },
          { label: "services" },
        ]}
      /> */}
      <Breadcrumb
        title="Services"
        path={["Home", "Services"]}
        shape="pentagon"
      />
      {projects.map((project, index) => (
        <FeatureSection key={index} {...project} />
      ))}
      {/* {projectData.map((project, index) => ( */}
      <ProjectDetailSection />
      {/* ))} */}
      <FAQAccordion
        title="Questions already answered"
        subtitle="FAQ"
        faqs={faqData}
      />
    </div>
  );
};

export default page;
