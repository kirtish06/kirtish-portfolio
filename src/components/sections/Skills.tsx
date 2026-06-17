"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          } 
        });
      },
      { threshold: 0.1 }
    );
    const children = sectionRef.current?.querySelectorAll(".reveal");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 px-6 overflow-hidden   container-custom">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#60a5fa]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex items-center gap-3 mb-4">
          <span className="text-[#60a5fa] font-sans text-xs uppercase tracking-[0.2em]">// 02</span>
          <span className="text-[#60a5fa] font-sans text-xs uppercase tracking-[0.2em]">Technical Arsenal</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#60a5fa]/30 to-transparent" />
        </div>

        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-inter)" }}>
            Technologies I Work With
          </h2>
          <p className="text-[#6b6b8a] font-sans text-sm">
            The tools I use to turn ideas into reality
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="reveal opacity-0 translate-y-6 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex flex-col items-center justify-center gap-3 p-4 bg-[#12121a] border border-[#2a2a3a] rounded-xl hover:border-[#60a5fa]/50 hover:bg-[#1a1a24] neon-glow-cyan-hover transition-all duration-300 cursor-default h-24">
                {/* Icon using devicon CDN */}
                <img
                  src={getIconUrl(skill.icon)}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className={`w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300 ${
                    skill.icon === "github" || skill.icon === "express" || skill.icon === "nextjs"
                      ? "brightness-0 invert opacity-80"
                      : ""
                  }`}
                  onError={(e) => {
                    // Fallback to colored initial if icon fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("span");
                      fallback.style.cssText = `color: ${skill.color}; font-size: 20px; font-weight: 700; font-family: monospace;`;
                      fallback.textContent = skill.name.slice(0, 2).toUpperCase();
                      parent.insertBefore(fallback, target);
                    }
                  }}
                />
                <span className="text-[#a0a0b8] font-sans text-xs group-hover:text-[#60a5fa] transition-colors duration-300 text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}

function getIconUrl(icon: string): string {
  const iconMap: Record<string, string> = {
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    cplusplus: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  };
  return iconMap[icon] ?? "";
}