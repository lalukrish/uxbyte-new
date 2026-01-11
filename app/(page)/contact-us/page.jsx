"use client";
// import ContactUsSection from "@/components/contact-us/ContactUsSection";
// import OurLocations from "@/components/contact-us/OurLocations";

// export default function page() {
//   return (
//     <>
//       <ContactUsSection />
//       <OurLocations />
//     </>
//   );
// }
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-400 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-20 right-20 w-48 h-48 bg-yellow-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-yellow-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full opacity-40 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>

      {/* Main container */}
      <div className="relative z-10 flex flex-col md:flex-row gap-0 max-w-5xl h-[80vh] w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left side - Form */}
        <div className="flex-1 p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-800">
                Contact
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Get in Touch
            </h1>
            <p className="text-gray-600">
              Complex technology, made simple to use
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                rows="4"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Need help?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Contact support
            </a>
          </p>
        </div>

        {/* Right side - Info card */}
        <div className="md:w-96 bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Complex technology, made simple to use
            </h2>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@winck.nl</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>085-1040849</span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-lg">Quick Response</h3>
            <p className="text-sm text-indigo-100">
              We typically respond within 24 hours during business days. For
              urgent matters, please call us directly.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-yellow-400/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-pink-400/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default page;
