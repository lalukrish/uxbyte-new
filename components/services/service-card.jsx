"use client";
import React, { useEffect, useRef, useState } from "react";

// Service Card Component - Grid style with hover effects
const ServiceCard = ({ title, description, image, index, gsapLoaded }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!gsapLoaded || !window.gsap) return;

    const card = cardRef.current;
    const img = imageRef.current;

    // Initial animation
    const tl = window.gsap.timeline();
    tl.from(card, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power3.out",
    });

    // Hover animations
    const handleMouseEnter = () => {
      window.gsap.to(img, {
        scale: 1.1,
        duration: 0.6,
        ease: "power2.out",
      });
      window.gsap.to(card, {
        y: -10,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      window.gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
      window.gsap.to(card, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index, gsapLoaded]);

  return (
    <div
      ref={cardRef}
      className="bg-white border-1 border-black overflow-hidden cursor-pointer"
    >
      <div className="h-64 overflow-hidden bg-gray-100">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Feature Box Component - Minimal boxes with icons
const FeatureBox = ({ icon, title, description, index, gsapLoaded }) => {
  const boxRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (!gsapLoaded || !window.gsap) return;

    const box = boxRef.current;
    const iconEl = iconRef.current;

    // Stagger animation on load
    window.gsap.from(box, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.15,
      ease: "back.out(1.7)",
    });

    // Floating animation for icon
    window.gsap.to(iconEl, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Hover effect
    const handleMouseEnter = () => {
      window.gsap.to(box, {
        backgroundColor: "#000",
        color: "#fff",
        duration: 0.3,
      });
      window.gsap.to(iconEl, {
        scale: 1.2,
        rotate: 360,
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      window.gsap.to(box, {
        backgroundColor: "#fff",
        color: "#000",
        duration: 0.3,
      });
      window.gsap.to(iconEl, {
        scale: 1,
        rotate: 0,
        duration: 0.5,
      });
    };

    box.addEventListener("mouseenter", handleMouseEnter);
    box.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      box.removeEventListener("mouseenter", handleMouseEnter);
      box.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index, gsapLoaded]);

  return (
    <div
      ref={boxRef}
      className="border-1 border-black p-8 text-center cursor-pointer bg-white"
    >
      <div ref={iconRef} className="text-6xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

// Timeline Component - Horizontal scroll effect
const TimelineService = ({ services, gsapLoaded }) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!gsapLoaded || !window.gsap || !window.ScrollTrigger) return;

    const container = containerRef.current;
    const items = itemsRef.current;

    // Horizontal scroll animation
    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    items.forEach((item, i) => {
      tl.from(
        item,
        {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
        },
        i * 0.2
      );
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, [gsapLoaded]);

  return (
    <div ref={containerRef} className="space-y-0">
      {services.map((service, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`flex items-center gap-8 py-12 border-b-2 border-black ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-1/3">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover border-2 border-black"
            />
          </div>
          <div className="w-2/3">
            <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
            <p className="text-lg text-gray-700">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Services Page
const ServicesPage = () => {
  const titleRef = useRef(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const script1 = document.createElement("script");
    script1.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    script2.async = true;

    script1.onload = () => {
      document.body.appendChild(script2);
    };

    script2.onload = () => {
      window.gsap.registerPlugin(window.ScrollTrigger);
      setGsapLoaded(true);

      // Animate title
      if (titleRef.current) {
        window.gsap.from(titleRef.current, {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        });
      }
    };

    document.body.appendChild(script1);

    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, []);

  const cardServices = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and best practices.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that enhance user experience and engagement.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    },
  ];

  const featureServices = [
    {
      icon: "⚡",
      title: "Fast Performance",
      description:
        "Lightning-fast load times and optimized performance for all devices.",
    },
    {
      icon: "🎨",
      title: "Creative Design",
      description:
        "Unique and engaging designs that capture your brand's essence.",
    },
    {
      icon: "🔒",
      title: "Secure Solutions",
      description: "Enterprise-grade security to protect your data and users.",
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Perfect experience across all screen sizes and devices.",
    },
  ];

  const timelineServices = [
    {
      title: "Strategy & Planning",
      description:
        "We analyze your business goals and create a comprehensive roadmap for success.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    },
    {
      title: "Design & Prototype",
      description:
        "Creating beautiful designs and interactive prototypes for your approval.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop",
    },
    {
      title: "Development & Testing",
      description:
        "Building robust solutions with rigorous testing for quality assurance.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-8">
        <h1 ref={titleRef} className="text-6xl font-bold text-center">
          Our Services
        </h1>
      </header>

      {/* Service Cards Section */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">What We Offer</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardServices.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
              gsapLoaded={gsapLoaded}
            />
          ))}
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="py-20 px-8 bg-gray-50 border-y-4 border-black">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {featureServices.map((feature, index) => (
            <FeatureBox
              key={index}
              {...feature}
              index={index}
              gsapLoaded={gsapLoaded}
            />
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
        <div className="max-w-5xl mx-auto">
          <TimelineService
            services={timelineServices}
            gsapLoaded={gsapLoaded}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-12 px-8 text-center">
        <p className="text-xl font-bold">Ready to get started?</p>
        <button className="mt-6 px-8 py-4 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition-colors">
          Contact Us
        </button>
      </footer>
    </div>
  );
};

export default ServicesPage;
