"use client";

import { Button } from "@/commonComponents/Button";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white h-screen flex flex-col">
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-8">
            No Fluffs & No Frills
          </p>
          <h2 className="text-[clamp(4rem,15vw,12rem)] font-bold mb-16 leading-none tracking-tight">
            Let's Talk
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* <button className="px-10 py-5 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all text-base border-2 border-white hover:scale-105">
              Contact Us
            </button> */}
            <Button
              label=" Contact Us"
              className="border-white! hover:bg-black! hover:border-white! hover:text-white! text-white! py-4"
              variant="outlined"
            />
            {/* <button
              onClick={scrollToTop}
              className="px-10 py-5 bg-transparent text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all text-base border-2 border-white flex items-center gap-3 hover:scale-105"
            >
              Move to top
              <ArrowUp className="w-5 h-5" />
            </button> */}
            <Button
              label="Move to top"
              className="bg-white! text-black! py-4"
              variant="filled"
              iconRight={<ArrowUp className="w-5 h-5" />}
              onClick={scrollToTop}
            ></Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              Uxbyte Studio © {new Date().getFullYear()} All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
