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
import { EncryptedText } from "./ui/encrypted-text";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="dark-section w-full bg-black text-white h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          <EncryptedText
            normaltext="PRODUCT DESIGN"
            text=" AND DEVELOPMENT AGENCY"
            className="text-sm"
            normalClassName=""
            encryptedClassName="text-[#535658]"
            revealedClassName="text-[#535658] dark:text-[#535658]"
            revealDelayMs={30}
          />
          <h2 className="text-[clamp(4rem,15vw,12rem)] font-bold mb-16 leading-none tracking-tight">
            Let's Talk
          </h2>
          <div className="flex  sm:flex-row items-center justify-center gap-6">
            <Button
              label=" Contact Us"
              className="border-white! hover:bg-black! hover:border-white! hover:text-white! text-white! py-4 px-10"
              variant="outlined"
            />

            <Button
              label="Move to top"
              className="bg-white! text-black! py-4 px-4!"
              variant="filled"
              iconRight={<ArrowUp className="w-5 h-5" />}
              onClick={scrollToTop}
            ></Button>
          </div>
        </div>
      </div>
      <div className="mt-1 pb-14  flex flex-col items-center gap-4 text-gray-400">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
          General Enquiry
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 text-base text-white">
          <a
            href="tel:+918883367373"
            className="hover:text-gray-300 transition-colors"
          >
            +91 88833 67373{" "}
          </a>

          <span className="hidden sm:block text-gray-600">|</span>

          <a
            href="mailto:hello@uxbyte.studio"
            className="hover:text-gray-300 transition-colors"
          >
            info@uxbyte.in
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              Uxbyte Studio © {new Date().getFullYear()} All rights reserved
            </p>

            <div className="flex items-center gap-6">
              <Link
                target="_blank"
                href="https://www.instagram.com/uxbyte?igsh=MWRiMjZ5ZWJobjdxYw"
                className="hover:text-gray-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/uxbyte-studio/"
                className="hover:text-gray-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                target="_blank"
                href="https://x.com/uxbytestudio"
                className="hover:text-gray-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>

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
