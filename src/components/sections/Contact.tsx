"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e: React.MouseEvent) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.message) return;
  setStatus("sending");
  try {
    const res = await fetch("https://formspree.io/f/xdavkbrw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};

  const socialLinks = [
    {
      label: "GitHub",
      href: personalInfo.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: personalInfo.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Gmail",
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#d6baff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex items-center gap-3 mb-4">
          <span className="text-[#00fedf] font-mono text-xs uppercase tracking-[0.2em]">// 05</span>
          <span className="text-[#00fedf] font-mono text-xs uppercase tracking-[0.2em]">Get In Touch</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00fedf]/30 to-transparent" />
        </div>

        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Let&apos;s Build Something Together
          </h2>
          <p className="text-[#83948f] font-mono text-sm max-w-xl mx-auto">
            Available for professional inquiries, collaborations, or just a friendly hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left — Info */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-150 flex flex-col gap-6">
            <div className="bg-[#131318] border border-[#3a4a46] rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Contact Info
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-[#b9cac5] font-mono text-sm hover:text-[#00fedf] transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1f1f25] border border-[#3a4a46] group-hover:border-[#00fedf]/40 transition-all duration-300 text-[#00fedf]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </span>
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b9cac5] font-mono text-sm hover:text-[#00fedf] transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1f1f25] border border-[#3a4a46] group-hover:border-[#00fedf]/40 transition-all duration-300 text-[#00fedf]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  github.com/kirtish06
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b9cac5] font-mono text-sm hover:text-[#00fedf] transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1f1f25] border border-[#3a4a46] group-hover:border-[#00fedf]/40 transition-all duration-300 text-[#00fedf]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  linkedin.com/in/kirtish-chaturvedi
                </a>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Gmail" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#131318] border border-[#3a4a46] rounded-xl text-[#b9cac5] font-mono text-xs hover:border-[#00fedf]/50 hover:text-[#00fedf] hover:bg-[#00fedf]/5 transition-all duration-300"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <div className="bg-[#131318] border border-[#3a4a46] rounded-xl p-6 flex flex-col gap-4">
              <div>
                <label className="block text-[#83948f] font-mono text-xs uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-[#0e0e13] border border-[#3a4a46] rounded-lg px-4 py-3 text-[#e4e1e9] font-mono text-sm placeholder-[#3a4a46] focus:outline-none focus:border-[#00fedf]/50 focus:shadow-[0_0_0_2px_rgba(0,254,223,0.08)] transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#83948f] font-mono text-xs uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-[#0e0e13] border border-[#3a4a46] rounded-lg px-4 py-3 text-[#e4e1e9] font-mono text-sm placeholder-[#3a4a46] focus:outline-none focus:border-[#00fedf]/50 focus:shadow-[0_0_0_2px_rgba(0,254,223,0.08)] transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#83948f] font-mono text-xs uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={4}
                  className="w-full bg-[#0e0e13] border border-[#3a4a46] rounded-lg px-4 py-3 text-[#e4e1e9] font-mono text-sm placeholder-[#3a4a46] focus:outline-none focus:border-[#00fedf]/50 focus:shadow-[0_0_0_2px_rgba(0,254,223,0.08)] transition-all duration-300 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "sent"}
                className="w-full py-3.5 bg-[#00fedf] text-[#00372f] font-mono font-bold text-sm uppercase tracking-widest rounded-lg neon-glow-cyan hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {status === "idle" && "Send Transmission →"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "✓ Message Sent!"}
                {status === "error" && "Failed — Try Again"}
              </button>
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