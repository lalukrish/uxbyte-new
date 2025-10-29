"use client";

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* --- Top Section --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 border-b border-gray-200 pb-12">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Website Templates</Link>
              </li>
              <li>
                <Link href="#">Website Builder</Link>
              </li>
              <li>
                <Link href="#">Website Design</Link>
              </li>
              <li>
                <Link href="#">App Market</Link>
              </li>
              <li>
                <Link href="#">Domain Names</Link>
              </li>
              <li>
                <Link href="#">AI Website Builder</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Online Store</Link>
              </li>
              <li>
                <Link href="#">Portfolio Website</Link>
              </li>
              <li>
                <Link href="#">Blog Website</Link>
              </li>
              <li>
                <Link href="#">Enterprise Solutions</Link>
              </li>
              <li>
                <Link href="#">Logo Maker</Link>
              </li>
              <li>
                <Link href="#">Landing Page Builder</Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Wix Blog</Link>
              </li>
              <li>
                <Link href="#">SEO Learning Hub</Link>
              </li>
              <li>
                <Link href="#">Wix University</Link>
              </li>
              <li>
                <Link href="#">Wix Encyclopedia</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Hire a Professional</Link>
              </li>
              <li>
                <Link href="#">Report Abuse</Link>
              </li>
              <li>
                <Link href="#">System Status</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Press & Media</Link>
              </li>
              <li>
                <Link href="#">Investor Relations</Link>
              </li>
              <li>
                <Link href="#">Accessibility Statement</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Middle Section (Brand Info) --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-3">YOUR LOGO</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We provide innovative web solutions that empower businesses to
              create, grow, and succeed online — combining design, technology,
              and strategy.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <Link href="#" className="font-semibold hover:underline">
              About
            </Link>
            <Link href="#" className="font-semibold hover:underline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* --- Bottom Section (Social + Copyright) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-5 mb-4 md:mb-0">
            <Link href="#">
              <Facebook className="w-5 h-5 hover:text-gray-700" />
            </Link>
            <Link href="#">
              <Twitter className="w-5 h-5 hover:text-gray-700" />
            </Link>
            <Link href="#">
              <Linkedin className="w-5 h-5 hover:text-gray-700" />
            </Link>
            <Link href="#">
              <Instagram className="w-5 h-5 hover:text-gray-700" />
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
