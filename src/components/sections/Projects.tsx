"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        }); 
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 px-6 overflow-hidden  container-custom">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[300px] bg-[#a78bfa]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex items-center gap-3 mb-4">
          <span className="text-[#60a5fa] font-sans text-xs uppercase tracking-[0.2em]">// 03</span>
          <span className="text-[#60a5fa] font-sans text-xs uppercase tracking-[0.2em]">Featured Work</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#60a5fa]/30 to-transparent" />
        </div>

        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-inter)" }}>
            Projects I&apos;ve Built
          </h2>
          <p className="text-[#6b6b8a] font-sans text-sm">
            A collection of projects where code meets creativity
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal opacity-0 translate-y-6 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full flex flex-col bg-[#12121a] border border-[#2a2a3a] rounded-xl overflow-hidden hover:border-[#60a5fa]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,254,223,0.08)]">

                {/* Project Image / Preview */}
                <div className="relative h-48 bg-[#0a0a10] overflow-hidden border-b border-[#2a2a3a]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : null}

                  {/* Overlay with project number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-6xl font-bold text-[#60a5fa]/10 group-hover:text-[#60a5fa]/20 transition-all duration-300 select-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      0{project.id}
                    </span>
                  </div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#60a5fa]/80 via-[#a78bfa]/50 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-[#60a5fa] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-[#6b6b8a] font-sans text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#1a1a24] border border-[#2a2a3a] rounded-md text-[#a0a0b8] font-sans text-[11px] hover:border-[#60a5fa]/40 hover:text-[#60a5fa] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] rounded-lg text-[#a0a0b8] font-sans text-xs hover:border-[#60a5fa]/50 hover:text-[#60a5fa] transition-all duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#60a5fa]/10 border border-[#60a5fa]/30 rounded-lg text-[#60a5fa] font-sans text-xs hover:bg-[#60a5fa]/20 transition-all duration-300"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
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