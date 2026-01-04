import Image from "next/image";
import React from "react";

function AboutSection() {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, responsive websites that captivate and convert.",
      icon: "🎨",
    },
    {
      title: "App Development",
      description:
        "Intuitive mobile and web applications built for performance.",
      icon: "⚙️",
    },
    {
      title: "Brand Strategy",
      description: "Strategic direction to make your brand stand out.",
      icon: "🎯",
    },
    {
      title: "UX/UI Design",
      description: "User experiences that are delightful and accessible.",
      icon: "✨",
    },
  ];
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      bio: "Visionary designer with 10+ years in digital innovation",
    },
    {
      name: "Michael Chen",
      role: "CTO & Lead Developer",
      bio: "Full-stack engineer passionate about scalable solutions",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Strategy",
      bio: "Strategic thinker focused on business growth",
    },
    {
      name: "James Wilson",
      role: "Lead Designer",
      bio: "UX/UI specialist creating delightful interfaces",
    },
  ];

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-4 py-15 md:py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-3xl text-center space-y-6">
          <div className="space-y-2">
            <p className=" font-semibold text-md tracking-widest uppercase">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              Bridging Design & Development
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
            We close the gap between cutting-edge design and powerful
            development. From sleek websites to intuitive apps, we empower your
            brand to thrive in the ever-evolving digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-border rounded-full font-semibold hover:bg-secondary/50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="py-15 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that exceptional digital experiences come from the
                perfect harmony of aesthetics and functionality. Our mission is
                to transform ideas into digital realities that engage, inspire,
                and convert.
              </p>
              <div className="space-y-4">
                {[
                  "Design Excellence",
                  "Technical Mastery",
                  "User-Centric Approach",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold mt-1">
                      ✓
                    </div>
                    <span className="text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-white rounded-2xl aspect-square overflow-hidden">
              <Image
                src="/about-us/mission.webp"
                alt="Mission image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 md:py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive solutions to elevate your digital presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-xl p-6 hover:border-accent transition-colors space-y-3"
              >
                <p className="text-4xl">{service.icon}</p>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-15 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented minds working together to bring your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-border bg-secondary/50 p-6 hover:border-accent transition-all"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-accent text-sm font-semibold">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-15 md:py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl opacity-90">
              Let's collaborate and create something extraordinary together
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary-foreground text-primary rounded-full font-semibold hover:bg-opacity-90 transition-opacity">
              Start a Project
            </button>
            <button className="px-8 py-3 border border-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
