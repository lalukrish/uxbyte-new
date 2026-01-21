"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuData = [
  {
    label: "ABOUT US",
    href: "/about-us",
    // items: [
    //   { label: "About Us", href: "/company/about" },
    //   { label: "Careers", href: "/company/careers" },
    //   { label: "Team", href: "/company/team" },
    // ],
  },
  {
    label: "SERVICES",
    href: "/services",
    // items: [
    //   { label: "Web Development", href: "/services/web-dev" },
    //   { label: "Mobile Apps", href: "/services/mobile" },
    //   { label: "UI/UX Design", href: "/services/design" },
    //   { label: "Cloud Solutions", href: "/services/cloud" },
    //   { label: "AI Integration", href: "/services/ai" },
    //   { label: "Digital Marketing", href: "/services/marketing" },
    // ],
  },
  {
    label: "INDUSTRIES",
    href: "/industries",
    // items: [
    //   { label: "SaaS", href: "/industries/saas" },
    //   { label: "Healthcare", href: "/industries/healthcare" },
    //   { label: "Fintech", href: "/industries/fintech" },
    //   { label: "Edtech", href: "/industries/edtech" },
    // ],
  },
  // {
  //   label: "CASES",
  //   href: "/cases",
  //   items: [],
  // },

  // {
  //   label: "INSIGHTS",
  //   href: "/insights",
  //   items: [{ label: "Blogs", href: "/blog" }],
  // },

  {
    label: "BLOG",
    href: "/blog",
    //  items: [{ label: "Blogs", href: "/blog" }],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Function to check if a menu item is active
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if we're in hero or people section
      const heroSection = document.querySelector("[data-hero-section]");
      const peopleSection = document.querySelector("[data-people-section]");

      let inHeroOrPeople = false;

      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        inHeroOrPeople = heroBottom > 80;
      }

      if (!inHeroOrPeople && peopleSection) {
        const peopleRect = peopleSection.getBoundingClientRect();
        const peopleTop = peopleRect.top;
        const peopleBottom = peopleRect.bottom;
        inHeroOrPeople = peopleTop < 80 && peopleBottom > 0;
      }

      if (inHeroOrPeople) {
        setShowHeader(false);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      if (currentScrollY > 300 && currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else if (currentScrollY <= 300) {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
      detectSectionColor();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const detectSectionColor = () => {
    const sections = document.querySelectorAll("section, div[data-section]");
    const headerHeight = 80;
    const scrollPosition = window.scrollY + headerHeight;

    let foundDarkSection = true;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const bgColor = window.getComputedStyle(section).backgroundColor;
        const rgb = bgColor.match(/\d+/g);
        if (rgb) {
          const brightness =
            (parseInt(rgb[0]) * 299 +
              parseInt(rgb[1]) * 587 +
              parseInt(rgb[2]) * 114) /
            1000;
          foundDarkSection = brightness < 128;
        }
      }
    });

    setIsDarkSection(foundDarkSection);
  };

  const headerBg = isDarkSection
    ? "bg-white/95 backdrop-blur-sm"
    : "bg-[#0a0a0a]/95 backdrop-blur-sm";
  const borderColor = isDarkSection ? "border-gray-200" : "border-gray-800";
  const textColor = isDarkSection ? "text-gray-700" : "text-gray-300";
  const textHoverColor = isDarkSection
    ? "hover:text-black"
    : "hover:text-white";
  const logoText = isDarkSection ? "text-black" : "text-white";
  const ctaBg = isDarkSection
    ? "bg-black text-white hover:bg-gray-800"
    : "bg-white text-black hover:bg-gray-100";

  // Active state colors
  const getActiveColor = (href) => {
    if (!isActive(href)) return "";
    return isDarkSection
      ? "text-black font-semibold"
      : "text-white font-semibold";
  };

  const getActiveIndicator = (href) => {
    if (!isActive(href)) return "";
    return isDarkSection
      ? "border-b-2 border-black"
      : "border-b-2 border-white";
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 ${headerBg} border-b ${borderColor} transition-all duration-500 ${
          showHeader && !scrollingDown
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="xl:px-24 mx-auto px-4 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#6915ae] flex items-center justify-center p-1">
              <span className="text-white font-bold text-xl">UXB</span>
            </div>
            <span className={`${logoText} font-semibold text-lg tracking-wide`}>
              Uxbyte Studio
            </span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-2">
            {menuData.map((item) => (
              <div
                key={item.label}
                className="relative h-20 flex items-center"
                onMouseEnter={() =>
                  item.items?.length && setOpenMenu(item.label)
                }
                onMouseLeave={() => setOpenMenu(null)}
              >
                {!item.items || item.items.length === 0 ? (
                  <Link
                    href={item.href}
                    className={`px-4 hover:cursor-pointer text-sm font-medium ${
                      isActive(item.href)
                        ? getActiveColor(item.href)
                        : `${textColor} ${textHoverColor}`
                    } transition-colors h-full flex items-center ${getActiveIndicator(
                      item.href,
                    )}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`flex hover:cursor-pointer items-center gap-1 px-4 text-sm font-medium ${
                      isActive(item.href)
                        ? getActiveColor(item.href)
                        : `${textColor} ${textHoverColor}`
                    } transition-colors h-full ${getActiveIndicator(
                      item.href,
                    )}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {item.items?.length > 0 && openMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 h-2"></div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-6 py-2 ${ctaBg} font-medium transition-colors text-sm`}
            >
              GET IN TOUCH
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MEGA MENU ================= */}
      <div className="hidden md:block">
        {menuData.map(
          (item) =>
            item.items?.length > 0 && (
              <div
                key={item.label}
                className={`fixed top-20 left-0 w-full bg-[#0a0a0a] border-b border-gray-800 z-40 transition-all duration-300 ease-in-out ${
                  openMenu === item.label && showHeader
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-4"
                }`}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="max-w-7xl mx-auto px-8 py-12">
                  <div className="grid grid-cols-12 gap-16">
                    <div className="col-span-4">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {item.label === "SERVICES"
                          ? "Ready to bring your idea to life?"
                          : item.label === "INDUSTRIES"
                            ? "Industry Expertise"
                            : item.label}
                      </h3>
                      <p className="text-gray-400 mb-8 leading-relaxed">
                        {item.label === "SERVICES"
                          ? "Explore our comprehensive range of services designed to help you succeed."
                          : item.label === "INDUSTRIES"
                            ? "Specialized solutions tailored for your industry."
                            : `Discover more about ${item.label.toLowerCase()}.`}
                      </p>

                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#6915ae] text-white font-medium hover:bg-[#6915ae] transition-colors"
                      >
                        Visit Page <ArrowRight size={18} />
                      </Link>
                    </div>

                    <div className="col-span-8">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`group py-3 border-b transition-colors ${
                              isActive(sub.href)
                                ? "border-[#6915ae]"
                                : "border-gray-800 hover:border-gray-600"
                            }`}
                          >
                            <div
                              className={`text-lg font-medium transition-colors ${
                                isActive(sub.href)
                                  ? "text-[#6915ae]"
                                  : "text-white group-hover:text-[#6915ae]"
                              }`}
                            >
                              {sub.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>

      {/* ================= FLOATING CTA & MOBILE MENU ICON ================= */}
      {mounted && (
        <>
          <div className="fixed top-3 right-6 xl:right-24 z-50 hidden md:block">
            <Link
              href="/contact-us"
              className={`inline-flex items-center gap-2 px-6 py-3.5 font-medium transition-all duration-500 text-sm shadow-lg ${
                showHeader
                  ? `${ctaBg}`
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              GET IN TOUCH
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            className="fixed top-4 right-6 z-50 md:hidden bg-white backdrop-blur-sm p-3 rounded-lg shadow-lg border-1 border-gray-200 text-black hover:bg-black transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </>
      )}

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-[#0a0a0a] text-white transform transition-transform duration-300 ease-in-out lg:hidden overflow-hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-800">
          <span className="font-bold text-xl">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="hover:bg-gray-800 p-2 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-2 overflow-y-auto h-[calc(100%-88px)]">
          {menuData.map((item) => (
            <div key={item.label}>
              {!item.items || item.items.length === 0 ? (
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                    isActive(item.href)
                      ? "bg-[#6915ae] text-white"
                      : "hover:bg-gray-800"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                    className={`w-full text-left px-4 py-3 flex justify-between items-center rounded-lg transition-colors text-sm font-medium ${
                      isActive(item.href)
                        ? "bg-[#6915ae] text-white"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMenu === item.label && (
                    <div className="ml-4 mt-2 space-y-1 pl-4 border-l-2 border-gray-700">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`block text-sm py-2 px-3 rounded transition-colors ${
                            isActive(sub.href)
                              ? "bg-[#6915ae] text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
