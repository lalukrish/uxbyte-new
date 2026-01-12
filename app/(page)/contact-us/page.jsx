"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/commonComponents/Button";

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.015 + 0.008,
    }));

    // Realistic Earth with rotation
    const earth = {
      x: canvas.width * 0.15,
      y: canvas.height * 0.25,
      radius: 50,
      rotation: 0,
      rotationSpeed: 0.002,
    };

    // Moon orbiting Earth
    const moon = {
      radius: 18,
      orbitRadius: 100,
      orbitSpeed: 0.008,
      angle: 0,
    };

    // Mars with rotation
    const mars = {
      x: canvas.width * 0.85,
      y: canvas.height * 0.7,
      radius: 35,
      rotation: 0,
      rotationSpeed: 0.0015,
    };

    // ISS Satellite - positioned on right side
    const iss = {
      x: canvas.width * 0.75,
      y: canvas.height * 0.5,
      size: 4,
      angle: 0,
      orbitRadius: 150,
      speed: 0.012,
      trail: [],
    };

    const drawEarth = () => {
      // Update rotation
      earth.rotation += earth.rotationSpeed;

      ctx.save();
      ctx.translate(earth.x, earth.y);
      ctx.rotate(earth.rotation);
      ctx.translate(-earth.x, -earth.y);

      // Earth base - More vibrant blue like real Earth photos
      const earthGradient = ctx.createRadialGradient(
        earth.x - earth.radius * 0.4,
        earth.y - earth.radius * 0.4,
        earth.radius * 0.1,
        earth.x,
        earth.y,
        earth.radius
      );
      earthGradient.addColorStop(0, "#5bb3e8");
      earthGradient.addColorStop(0.5, "#3a7fbe");
      earthGradient.addColorStop(1, "#2d5a8f");

      ctx.fillStyle = earthGradient;
      ctx.beginPath();
      ctx.arc(earth.x, earth.y, earth.radius, 0, Math.PI * 2);
      ctx.fill();

      // Continents - Green landmass
      ctx.fillStyle = "#3d7a3f";
      ctx.globalAlpha = 0.75;

      // North America
      ctx.beginPath();
      ctx.ellipse(earth.x - 18, earth.y - 12, 10, 16, 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Africa/Europe
      ctx.beginPath();
      ctx.ellipse(earth.x + 8, earth.y - 8, 12, 14, -0.1, 0, Math.PI * 2);
      ctx.fill();

      // South America
      ctx.beginPath();
      ctx.ellipse(earth.x - 10, earth.y + 15, 7, 12, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Asia
      ctx.beginPath();
      ctx.ellipse(earth.x + 20, earth.y + 5, 10, 8, 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;

      // Cloud layer - white swirls
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      ctx.beginPath();
      ctx.ellipse(earth.x - 5, earth.y - 20, 12, 6, 0.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(earth.x + 15, earth.y + 10, 10, 5, -0.3, 0, Math.PI * 2);
      ctx.fill();

      // Shadow for sphere effect
      const shadowGradient = ctx.createRadialGradient(
        earth.x,
        earth.y,
        earth.radius * 0.5,
        earth.x + earth.radius * 0.3,
        earth.y + earth.radius * 0.3,
        earth.radius
      );
      shadowGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      shadowGradient.addColorStop(1, "rgba(0, 40, 80, 0.4)");

      ctx.fillStyle = shadowGradient;
      ctx.beginPath();
      ctx.arc(earth.x, earth.y, earth.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Atmosphere glow (outside rotation) - Blue halo
      ctx.shadowBlur = 35;
      ctx.shadowColor = "#5bb3e8";
      ctx.strokeStyle = "rgba(91, 179, 232, 0.4)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(earth.x, earth.y, earth.radius + 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const drawMoon = () => {
      // Update moon orbit around Earth
      moon.angle += moon.orbitSpeed;
      const moonX = earth.x + Math.cos(moon.angle) * moon.orbitRadius;
      const moonY = earth.y + Math.sin(moon.angle) * moon.orbitRadius * 0.5;

      // Moon gradient
      const moonGradient = ctx.createRadialGradient(
        moonX - moon.radius * 0.4,
        moonY - moon.radius * 0.4,
        moon.radius * 0.1,
        moonX,
        moonY,
        moon.radius
      );
      moonGradient.addColorStop(0, "#c9c9c9");
      moonGradient.addColorStop(0.7, "#8a8a8a");
      moonGradient.addColorStop(1, "#5a5a5a");

      ctx.fillStyle = moonGradient;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moon.radius, 0, Math.PI * 2);
      ctx.fill();

      // Craters
      ctx.fillStyle = "rgba(90, 90, 90, 0.4)";
      ctx.beginPath();
      ctx.arc(moonX - 5, moonY - 3, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(moonX + 4, moonY + 2, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(moonX - 2, moonY + 5, 2.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawMars = () => {
      // Update rotation
      mars.rotation += mars.rotationSpeed;

      ctx.save();
      ctx.translate(mars.x, mars.y);
      ctx.rotate(mars.rotation);
      ctx.translate(-mars.x, -mars.y);

      // Mars gradient - Smooth pink/beige like the image
      const marsGradient = ctx.createRadialGradient(
        mars.x - mars.radius * 0.4,
        mars.y - mars.radius * 0.4,
        mars.radius * 0.1,
        mars.x,
        mars.y,
        mars.radius
      );
      marsGradient.addColorStop(0, "#f5c1b8");
      marsGradient.addColorStop(0.4, "#e8a89a");
      marsGradient.addColorStop(0.7, "#d8918c");
      marsGradient.addColorStop(1, "#b57a82");

      ctx.fillStyle = marsGradient;
      ctx.beginPath();
      ctx.arc(mars.x, mars.y, mars.radius, 0, Math.PI * 2);
      ctx.fill();

      // Subtle darker patches for texture
      ctx.fillStyle = "rgba(180, 120, 130, 0.15)";
      ctx.beginPath();
      ctx.ellipse(mars.x - 10, mars.y - 8, 10, 8, 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(mars.x + 8, mars.y + 5, 8, 6, -0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(mars.x - 5, mars.y + 12, 7, 5, 0.4, 0, Math.PI * 2);
      ctx.fill();

      // Soft shadow on bottom
      const shadowGradient = ctx.createRadialGradient(
        mars.x,
        mars.y,
        mars.radius * 0.6,
        mars.x,
        mars.y + mars.radius * 0.3,
        mars.radius
      );
      shadowGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      shadowGradient.addColorStop(1, "rgba(100, 60, 80, 0.3)");

      ctx.fillStyle = shadowGradient;
      ctx.beginPath();
      ctx.arc(mars.x, mars.y, mars.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Soft outer glow
      ctx.shadowBlur = 25;
      ctx.shadowColor = "rgba(232, 168, 154, 0.4)";
      ctx.strokeStyle = "rgba(232, 168, 154, 0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mars.x, mars.y, mars.radius + 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const drawISS = () => {
      // Update ISS position (orbiting on right side)
      iss.angle += iss.speed;
      const centerX = canvas.width * 0.75;
      const centerY = canvas.height * 0.5;
      iss.x = centerX + Math.cos(iss.angle) * iss.orbitRadius;
      iss.y = centerY + Math.sin(iss.angle) * iss.orbitRadius * 0.6;

      // Trail
      iss.trail.push({ x: iss.x, y: iss.y });
      if (iss.trail.length > 40) iss.trail.shift();

      for (let i = 0; i < iss.trail.length - 1; i++) {
        const alpha = i / iss.trail.length;
        ctx.beginPath();
        ctx.moveTo(iss.trail[i].x, iss.trail[i].y);
        ctx.lineTo(iss.trail[i + 1].x, iss.trail[i + 1].y);
        ctx.strokeStyle = `rgba(150, 200, 255, ${alpha * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ISS body (solar panels)
      ctx.fillStyle = "#4a90e2";
      ctx.fillRect(iss.x - 8, iss.y - 1, 16, 2);

      // Center module
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(iss.x - 2, iss.y - 2, 4, 4);

      // Glow
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ffffff";
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(iss.x, iss.y, iss.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      // Deep space background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars with twinkling
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw celestial bodies
      // drawEarth();
      drawMoon();
      //  drawMars();
      drawISS();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "#000000" }}
    />
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for FormSubmit
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("message", formData.message);

      // FormSubmit.co endpoint - directly sends to your email
      const response = await fetch("https://formsubmit.co/info@uxbyte.in", {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <SpaceBackground />

      <div className="relative z-10 flex flex-col md:flex-row gap-0 max-w-4xl w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex-1 p-6 md:p-10">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-800">
                Contact
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h1>
            <p className="text-sm text-gray-600">
              Complex technology, made simple to use
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                rows="3"
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none resize-none"
              ></textarea>
            </div>

            <Button
              onClick={handleSubmit}
              label={isSubmitting ? "Sending..." : "Send Message"}
              disabled={isSubmitting}
              className="py-3 text-sm rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            Need help?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Contact support
            </a>
          </p>
        </div>

        <div className="md:w-80 bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-xl font-bold mb-3">
              Complex technology, made simple to use
            </h2>

            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@uxbyte.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4" />
                <span className="text-sm">085-1040849</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-5 relative z-10">
            <h3 className="font-semibold mb-2 text-base">Quick Response</h3>
            <p className="text-xs text-indigo-100">
              We typically respond within 24 hours during business days. For
              urgent matters, please call us directly.
            </p>
          </div>

          <div className="absolute bottom-8 right-8 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
          <div className="absolute top-16 right-16 w-16 h-16 bg-pink-400/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
