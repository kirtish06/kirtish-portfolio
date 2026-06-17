"use client";

import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
 
  // Detect scroll to add glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
 
      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 max-w-[1200px] mx-auto h-20   container-custom">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#60a5fa]/10 rounded flex items-center justify-center border border-[#60a5fa]/20 group-hover:border-[#60a5fa]/60 transition-all duration-300">
            <span className="text-[#60a5fa] font-bold text-sm font-sans">{"</>"}</span>
          </div>
          <span
            className="font-bold text-xl text-white group-hover:text-[#60a5fa] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            KC
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs uppercase tracking-widest font-sans transition-colors duration-300 relative group ${
                  isActive ? "text-[#60a5fa]" : "text-[#a0a0b8] hover:text-[#60a5fa]"
                }`}
              >
                {link.label}
                {/* Underline indicator */}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#60a5fa] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}

          {/* Resume Button */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank" rel="noopener noreferrer"
            className="neon-border px-6 py-2 text-[#60a5fa] text-xs font-sans uppercase tracking-widest rounded-lg hover:bg-[#60a5fa]/5 transition-all duration-300"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#e2e2f0] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e2e2f0] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e2e2f0] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass border-t border-white/5 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm uppercase tracking-widest font-sans text-[#a0a0b8] hover:text-[#60a5fa] transition-colors duration-300 py-1"
            >
              {link.label}
            </button>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download
            className="neon-border px-6 py-2.5 text-[#60a5fa] text-xs font-sans uppercase tracking-widest rounded-lg text-center hover:bg-[#60a5fa]/5 transition-all duration-300 mt-2"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </nav>
  );
}