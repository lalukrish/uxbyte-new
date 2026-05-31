"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import Title from "@/commonComponents/title";

// const SpaceBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const stars = Array.from({ length: 300 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 1.2,
//       opacity: Math.random(),
//       twinkleSpeed: Math.random() * 0.015 + 0.008,
//     }));

//     const moon = {
//       radius: 18,
//       orbitRadius: 100,
//       orbitSpeed: 0.008,
//       angle: 0,
//       x: canvas.width * 0.15,
//       y: canvas.height * 0.25,
//     };

//     const iss = {
//       x: canvas.width * 0.75,
//       y: canvas.height * 0.5,
//       size: 4,
//       angle: 0,
//       orbitRadius: 150,
//       speed: 0.012,
//       trail: [],
//     };

//     const drawMoon = () => {
//       moon.angle += moon.orbitSpeed;
//       const moonX = moon.x + Math.cos(moon.angle) * moon.orbitRadius;
//       const moonY = moon.y + Math.sin(moon.angle) * moon.orbitRadius * 0.5;

//       const moonGradient = ctx.createRadialGradient(
//         moonX - moon.radius * 0.4,
//         moonY - moon.radius * 0.4,
//         moon.radius * 0.1,
//         moonX,
//         moonY,
//         moon.radius,
//       );
//       moonGradient.addColorStop(0, "#c9c9c9");
//       moonGradient.addColorStop(0.7, "#8a8a8a");
//       moonGradient.addColorStop(1, "#5a5a5a");

//       ctx.fillStyle = moonGradient;
//       ctx.beginPath();
//       ctx.arc(moonX, moonY, moon.radius, 0, Math.PI * 2);
//       ctx.fill();

//       ctx.fillStyle = "rgba(90, 90, 90, 0.4)";
//       ctx.beginPath();
//       ctx.arc(moonX - 5, moonY - 3, 3, 0, Math.PI * 2);
//       ctx.fill();

//       ctx.beginPath();
//       ctx.arc(moonX + 4, moonY + 2, 2, 0, Math.PI * 2);
//       ctx.fill();

//       ctx.beginPath();
//       ctx.arc(moonX - 2, moonY + 5, 2.5, 0, Math.PI * 2);
//       ctx.fill();
//     };

//     const drawISS = () => {
//       iss.angle += iss.speed;
//       const centerX = canvas.width * 0.75;
//       const centerY = canvas.height * 0.5;
//       iss.x = centerX + Math.cos(iss.angle) * iss.orbitRadius;
//       iss.y = centerY + Math.sin(iss.angle) * iss.orbitRadius * 0.6;

//       iss.trail.push({ x: iss.x, y: iss.y });
//       if (iss.trail.length > 40) iss.trail.shift();

//       for (let i = 0; i < iss.trail.length - 1; i++) {
//         const alpha = i / iss.trail.length;
//         ctx.beginPath();
//         ctx.moveTo(iss.trail[i].x, iss.trail[i].y);
//         ctx.lineTo(iss.trail[i + 1].x, iss.trail[i + 1].y);
//         ctx.strokeStyle = `rgba(150, 200, 255, ${alpha * 0.3})`;
//         ctx.lineWidth = 1;
//         ctx.stroke();
//       }

//       ctx.fillStyle = "#4a90e2";
//       ctx.fillRect(iss.x - 8, iss.y - 1, 16, 2);

//       ctx.fillStyle = "#ffffff";
//       ctx.fillRect(iss.x - 2, iss.y - 2, 4, 4);

//       ctx.shadowBlur = 8;
//       ctx.shadowColor = "#ffffff";
//       ctx.fillStyle = "#ffffff";
//       ctx.beginPath();
//       ctx.arc(iss.x, iss.y, iss.size, 0, Math.PI * 2);
//       ctx.fill();
//       ctx.shadowBlur = 0;
//     };

//     const animate = () => {
//       ctx.fillStyle = "#000000";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       stars.forEach((star) => {
//         star.opacity += star.twinkleSpeed;
//         if (star.opacity > 1 || star.opacity < 0.2) {
//           star.twinkleSpeed *= -1;
//         }

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
//         ctx.fill();
//       });

//       drawMoon();
//       drawISS();

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full"
//       style={{ background: "#000000" }}
//     />
//   );
// };

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
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("message", formData.message);

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
    <div className="min-h-screen relative flex items-center justify-center p-4 lg:p-8 overflow-hidden">
      {/* <SpaceBackground /> */}

      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-start md:mt-20">
        {/* Left Side - Info */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <EncryptedText
              normaltext={"DESIGN AND"}
              text={" DEVELOPMENT AGENCY"}
              className="text-sm"
              encryptedClassName="text-[#535658]"
              revealedClassName="text-[#535658]"
              revealDelayMs={30}
            />
            <Title className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get in touch
            </Title>
            <p className="text-lg text-gray-300">
              Have questions or ready to transform your business with AI
              automation?
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {/* Email Card */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email us</h3>
                    <p className="text-gray-400 text-sm">info@uxbyte.in</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call us</h3>
                    <p className="text-gray-400 text-sm">085-1040849</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Our location
                    </h3>
                    <p className="text-gray-400 text-sm">Mumbai, India</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-all" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#6915ae]/12 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-0 py-4 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 outline-none focus:border-gray-400 transition-colors text-lg"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-0 py-4 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 outline-none focus:border-gray-400 transition-colors text-lg"
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-0 py-4 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 outline-none focus:border-gray-400 transition-colors text-lg"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows="4"
                className="w-full px-0 py-2 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 outline-none focus:border-gray-400 transition-colors resize-none text-lg"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-4 rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
