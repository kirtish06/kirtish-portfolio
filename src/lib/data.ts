export const personalInfo = {
  name: "Kirtish Chaturvedi",
  tagline: "Frontend Developer / Full Stack Developer / IT Engineer",
  roles: [
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "UI Engineer",
  ],
  bio: "I'm a passionate Frontend & Full Stack Developer from Ujjain, India. Currently pursuing M.Tech in Information Technology, I love crafting clean, responsive UIs and building real-world web applications. I'm actively looking for opportunities where I can contribute, grow, and turn ideas into impactful digital experiences.",
  email: "chaturvedikirtish2003@gmail.com",
  github: "https://github.com/kirtish06",
  linkedin: "https://www.linkedin.com/in/kirtish-chaturvedi",
  profileImage: "https://res.cloudinary.com/dfpfqfml1/image/upload/f_auto,q_auto/v1780506235/1000275988-Picsart-AiImageEnhancer_1_h2vhh0.webp",
  resumeUrl: "https://drive.google.com/file/d/1IpnMFLpPscnXpE8tMniZrIX2leXKcS5h/view",
  location: "Ujjain, Madhya Pradesh, India",
  available: true,
};

export const skills = [
  { name: "HTML", icon: "html5", color: "#E34F26" },
  { name: "CSS", icon: "css3", color: "#1572B6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "C++", icon: "cplusplus", color: "#00599C" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#ffffff" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
  { name: "Express", icon: "express", color: "#ffffff" },
];

export const projects = [
  {
    id: 1,
    title: "HTTP Web Server",
    description:
      "A high-performance server built from scratch in C++ that handles GET & POST requests with full CRUD operations. Demonstrates strong low-level programming fundamentals and networking concepts.",
    tags: ["C++", "Networking", "CRUD", "HTTP"],
    github: "https://github.com/kirtish06",
    live: null,
    featured: true,
    image: "/projects/http-server.png",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A modern full-stack e-commerce platform featuring product listings, cart management, and checkout flow. Built with Next.js and Tailwind CSS on the frontend, with Node.js, Express, and PostgreSQL on the backend.",
    tags: ["Next.js", "Tailwind CSS", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com/kirtish06",
    live: null,
    featured: true,
    image: "/projects/ecommerce.png",
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Technology (IT)",
    institution: "Mahakal Institute of Technology, Ujjain",
    period: "2025 – Present",
    status: "ongoing",
    description: "Specializing in advanced software engineering and full-stack development.",
  },
  {
    id: 2,
    degree: "Bachelor of Technology (IT)",
    institution: "Mahakal Institute of Technology, Ujjain",
    period: "2021 – 2025",
    status: "completed",
    description: "Graduated with strong foundations in programming, data structures, and web technologies.",
  },
  {
    id: 3,
    degree: "Class 12th (PCM – Science)",
    institution: "Ujjain Public School, Ujjain",
    period: "2020 – 2021",
    status: "completed",
    description: "Studied Physics, Chemistry & Mathematics. Built strong analytical and logical reasoning skills.",
  },
  {
    id: 4,
    degree: "Class 10th",
    institution: "Ujjain Public School, Ujjain",
    period: "2018 – 2019",
    status: "completed",
    description: "Completed foundational schooling with distinction.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];