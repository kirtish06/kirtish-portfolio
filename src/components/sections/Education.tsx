"use client";

import { useEffect, useRef } from "react";
import { education } from "@/lib/data";

export default function Education() {
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
    <section id="education" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00fedf]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex items-center gap-3 mb-4">
          <span className="text-[#00fedf] font-mono text-xs uppercase tracking-[0.2em]">// 04</span>
          <span className="text-[#00fedf] font-mono text-xs uppercase tracking-[0.2em]">Academic Journey</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00fedf]/30 to-transparent" />
        </div>

        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Education & Background
          </h2>
          <p className="text-[#83948f] font-mono text-sm">
            My academic foundation in Information Technology
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00fedf]/60 via-[#d6baff]/40 to-transparent transform md:-translate-x-1/2" />

          {education.map((item, index) => (
            <div
              key={item.id}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 relative flex gap-6 md:gap-0 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10 mt-6">
                <div className="w-4 h-4 rounded-full bg-[#00fedf] shadow-[0_0_12px_rgba(0,254,223,0.6)] animate-pulse" />
                <div className="absolute w-8 h-8 rounded-full border border-[#00fedf]/30 animate-ping opacity-30" />
              </div>

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>
                <div className="bg-[#131318] border border-[#3a4a46] rounded-xl p-6 hover:border-[#00fedf]/40 hover:shadow-[0_0_20px_rgba(0,254,223,0.06)] transition-all duration-300 group">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-[#00fedf]/10 border border-[#00fedf]/20 rounded-md text-[#00fedf] font-mono text-[11px]">
                      {item.period}
                    </span>
                    {item.status === "ongoing" && (
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-[#d6baff]/10 border border-[#d6baff]/20 rounded-md text-[#d6baff] font-mono text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d6baff] animate-pulse" />
                        Ongoing
                      </span>
                    )}
                  </div>

                  {/* Degree */}
                  <h3
                    className="text-lg font-bold text-white mb-1 group-hover:text-[#00fedf] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-[#b9cac5] font-mono text-sm mb-3">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="text-[#83948f] font-mono text-xs leading-relaxed">
                    {item.description}
                  </p>
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