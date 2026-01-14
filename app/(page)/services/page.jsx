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
  const myProjects = [
    {
      category: "SAAS",
      title: "Custom project title",
      image: "url",
      challenges: ["Challenge 1", "Challenge 2"],
      solutions: ["Solution 1", "Solution 2"],
      bgColor: "from-blue-900 via-cyan-900 to-blue-800", // Optional
    },
    {
      category: "HEALTHCARE",
      title: "HIPAA-compliant design and development for health tech products",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
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
      bgColor: "from-black via-black to-black",
    },
    {
      category: "FINTECH",
      title: "Secure and scalable financial technology solutions",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
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
      bgColor: "from-blue-900 via-cyan-900 to-blue-800",
    },
    {
      category: "E-COMMERCE",
      title: "Modern shopping experiences that drive conversions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      challenges: [
        "High cart abandonment rates",
        "Complex inventory management across channels",
        "Creating seamless mobile shopping experiences",
      ],
      solutions: [
        "Optimized checkout flow with minimal friction",
        "Real-time inventory sync and analytics dashboard",
        "Mobile-first design with native app performance",
      ],
      bgColor: "from-emerald-900 via-teal-900 to-emerald-800",
    },
    {
      category: "REAL-ESTATE",
      title: "Smart property solutions for modern real estate",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      challenges: [
        "Complex property listing management",
        "Virtual tour integration challenges",
        "Connecting buyers, sellers, and agents efficiently",
      ],
      solutions: [
        "Interactive 3D property tours and AR features",
        "AI-powered property matching algorithms",
        "Real-time communication platform for stakeholders",
      ],
      bgColor: "from-orange-900 via-red-900 to-orange-800",
    },
    {
      category: "EDUTECH",
      title: "Interactive learning platforms for the digital age",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      challenges: [
        "Engaging students in remote learning environments",
        "Tracking progress across diverse curricula",
        "Accessibility for different learning styles",
      ],
      solutions: [
        "Gamified learning experiences with rewards",
        "Adaptive learning paths powered by AI",
        "Multi-modal content delivery (video, text, interactive)",
      ],
      bgColor: "from-indigo-900 via-purple-900 to-indigo-800",
    },
    {
      category: "TRAVELTECH",
      title: "Seamless travel booking and management experiences",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      challenges: [
        "Complex itinerary management across multiple services",
        "Real-time pricing and availability updates",
        "Personalized recommendations at scale",
      ],
      solutions: [
        "Unified booking platform with AI recommendations",
        "Real-time synchronization with travel providers",
        "Smart itinerary builder with collaborative features",
      ],
      bgColor: "from-sky-900 via-blue-900 to-sky-800",
    },
    {
      category: "FOODTECH",
      title: "Delightful dining experiences from order to delivery",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      challenges: [
        "Managing high-volume orders during peak times",
        "Maintaining food quality during delivery",
        "Connecting restaurants with delivery partners efficiently",
      ],
      solutions: [
        "Smart routing algorithms for faster delivery",
        "Real-time kitchen display systems",
        "Integrated restaurant management dashboard",
      ],
      bgColor: "from-amber-900 via-yellow-900 to-amber-800",
    },
    {
      category: "FASHION",
      title: "Trendsetting e-commerce for fashion-forward brands",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      challenges: [
        "Showcasing products with accurate color representation",
        "Size recommendation and fitting challenges",
        "Managing seasonal inventory and trends",
      ],
      solutions: [
        "AR virtual try-on technology",
        "AI-powered size and style recommendations",
        "Dynamic inventory management with trend forecasting",
      ],
      bgColor: "from-pink-900 via-rose-900 to-pink-800",
    },
    {
      category: "MEDIA",
      title: "Content platforms that captivate and engage audiences",
      image:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop",
      challenges: [
        "Content discovery in vast media libraries",
        "Streaming quality across varying bandwidths",
        "Monetization without disrupting user experience",
      ],
      solutions: [
        "AI-driven content recommendation engine",
        "Adaptive bitrate streaming technology",
        "Non-intrusive ad integration with user controls",
      ],
      bgColor: "from-violet-900 via-purple-900 to-violet-800",
    },
  ];
  return (
    <div>
      <Breadcrumb
        title="Services"
        path={["Home", "Services"]}
        shape="pentagon"
      />
      {projects.map((project, index) => (
        <FeatureSection key={index} {...project} />
      ))}

      <ProjectShowcase projects={myProjects} />
      <FAQAccordion
        title="Questions already answered"
        subtitle="FAQ"
        faqs={faqData}
      />
    </div>
  );
};

export default page;
