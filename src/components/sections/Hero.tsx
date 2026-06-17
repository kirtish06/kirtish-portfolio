"use client";

import { useEffect, useState } from "react";

import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setCharIndex(0);
          setRoleIndex((i) => (i + 1) % personalInfo.roles.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 grid-bg mesh-gradient overflow-hidden  container-custom"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#60a5fa]/8 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#a78bfa]/5 rounded-full blur-[140px] animate-pulse pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#60a5fa]/5 border border-[#60a5fa]/15 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60a5fa] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60a5fa]" />
          </span>
          <span className="text-[10px] text-[#60a5fa] uppercase tracking-[0.2em] font-sans">
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.02em" }}
        >
          Hi, I&apos;m{" "}
         <span className="text-[#60a5fa]">
  Kirtish Chaturvedi
</span> 
        </h1>

        {/* Typewriter */}
        <div className="h-8 mb-6 flex items-center justify-center">
          <p className="text-lg md:text-xl text-[#a0a0b8] font-sans">
            {displayText}
            <span className="typewriter-cursor" />
          </p>
        </div>

        {/* Bio */}
        <p className="text-[#6b6b8a] font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Crafting clean, responsive UIs and scalable full-stack applications.
          <br className="hidden md:block" />
          Currently pursuing M.Tech in IT — building things that matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#60a5fa] text-[#0a0a10] font-sans font-bold text-sm uppercase tracking-widest rounded-lg neon-glow-cyan hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore Work →
          </button>
          <a
            href={personalInfo.resumeUrl}
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 neon-border text-[#60a5fa] font-sans font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-[#60a5fa]/5 hover:scale-105 active:scale-95 transition-all duration-300 text-center"
          >
            Get Resume ↓
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-[#a0a0b8] hover:text-[#60a5fa] hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/5 transition-all duration-300"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-[#a0a0b8] hover:text-[#60a5fa] hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/5 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Gmail */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-[#a0a0b8] hover:text-[#60a5fa] hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/5 transition-all duration-300"
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute mt-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-[10px] text-[#6b6b8a] font-sans uppercase tracking-widest">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b6b8a" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div> 
    </section>
  );
}