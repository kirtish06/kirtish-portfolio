"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const highlights = [
  { label: "M.Tech IT", icon: "🎓" }, 
  { label: "B.Tech IT", icon: "🎓" },
  { label: "Ujjain, MP", icon: "📍" },
  { label: "Open to Work", icon: "💼" },
];

export default function About() {
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
      { threshold: 0.15 }
    );

    const children = sectionRef.current?.querySelectorAll(".reveal");
    children?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden  container-custom"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#a78bfa]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex items-center gap-3 mb-12">
          <span className="text-[#60a5fa] font-sans text-xs uppercase tracking-[0.2em]">
            // 01
          </span>
          <span className="text-[#60a5fa] font-sans text-xs uppercase tracking-[0.2em]">
            About Me
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#60a5fa]/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Profile Image */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 flex justify-center md:justify-start">
            <div className="relative">
              {/* Outer rotating ring */}
             <div
  className="p-[3px]"
  style={{
    background: "linear-gradient(135deg, #60a5fa, #7b5ea7)",
    borderRadius: "50%",
    width: "270px",
    height: "370px",
  }}
>
  <div
    className="w-full h-full overflow-hidden bg-[#12121a]"
    style={{ borderRadius: "50%" }}
  >
    <Image
      src={personalInfo.profileImage}
      alt="Kirtish Chaturvedi"
      width={250}
      height={320}
      className="w-full h-full object-cover"
      priority
    />
  </div>
</div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#12121a] border border-[#60a5fa]/30 rounded-lg px-3 py-2 neon-glow-cyan">
                <span className="text-[#60a5fa] font-sans text-xs">
                  &lt;Developer /&gt;
                </span>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-20 h-20 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#60a5fa]"
                    style={{
                      top: `${Math.floor(i / 3) * 30}%`,
                      left: `${(i % 3) * 30}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Engineering Digital Solutions
              <span className="text-[#60a5fa]"> with Precision</span>
            </h2>

            <p className="text-[#6b6b8a] font-sans text-sm leading-relaxed mb-6 mt-4">
              {personalInfo.bio}
            </p>

            {/* Highlight tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a24] border border-[#2a2a3a] rounded-lg text-[#a0a0b8] font-sans text-xs hover:border-[#60a5fa]/40 hover:text-[#60a5fa] transition-all duration-300"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2a2a3a]/50">
              {[
                { value: "2+", label: "Projects Built" },
                { value: "4+", label: "Technologies" },
                { value: "2025", label: "Available From" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-bold text-[#60a5fa] mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#6b6b8a] font-sans uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
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