"use client";

import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";

export const BottomContactBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <>
      {/* Bottom Bar Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 transition-all duration-300 hover:scale-105"
        >
          <span className="text-lg font-medium">Tell us about your needs</span>
          <div className="flex flex-col gap-1">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Sliding Panel from Bottom */}

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};
