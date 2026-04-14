// ============================================================
//  PORTFOLIO CONFIG — Edit everything here, no need to touch components
//  File: src/data/portfolio.js
// ============================================================

// ── PERSONAL INFO ────────────────────────────────────────────
export const personal = {
  name: "Najeeb S",
  role: "Java Full Stack Developer",
  tagline: "I build full-stack web apps with Java — and design is my creative hobby.",
  location: "Tirunelveli, Tamil Nadu",
  email: "najeebnajee35@gmail.com",
  phone: "9600529520",
  about: `I'm a Computer Science graduate with a passion for building full-stack web applications with Java. My professional focus is Java Full Stack Development — designing is what I do for fun and creativity.

When I'm not writing Spring Boot APIs or building React interfaces, you'll find me creating logos, designing vector illustrations, or experimenting in Canva. I believe good software needs both solid engineering and beautiful design.

Currently deepening my skills at JSpiders Training Institute in Bangalore, building dynamic web apps with integrated Java-based backends.`,
  resumeUrl: "/resume/Najeeb_Resume.pdf", // Place your resume PDF in public/resume/
};

// ── SOCIAL MEDIA LINKS ───────────────────────────────────────
export const social = {
  linkedin: "https://www.linkedin.com/in/najeeb06/", // ← Replace with your LinkedIn URL
  github: "https://github.com/najeeb-dev-codes",           // ← Replace with your GitHub URL
  instagram: "https://instagram.com/your-instagram",  // ← Replace with your Instagram URL
  twitter: "",                                         // ← Leave empty to hide
  behance: "",                                         // ← Add Behance if you have one
};

// ── SKILLS ───────────────────────────────────────────────────
// category: "dev" | "design" | "tools"
export const skills = [
  // Development
  { name: "Java", level: 85, category: "dev" },
  { name: "Core Java / OOP", level: 85, category: "dev" },
  { name: "Spring Boot", level: 70, category: "dev" },
  { name: "React JS (Vite)", level: 75, category: "dev" },
  { name: "JavaScript", level: 70, category: "dev" },
  { name: "HTML & CSS", level: 90, category: "dev" },
  { name: "MySQL", level: 70, category: "dev" },
  { name: "MongoDB", level: 50, category: "dev" },
  { name: "Python", level: 50, category: "dev" },
  { name: "JDBC / Hibernate / JSP", level: 80, category: "dev" },

  // Design
  { name: "Canva", level: 85, category: "design" },
  { name: "Vector Art / Illustration", level: 70, category: "design" },
  { name: "Logo Design", level: 80, category: "design" },

  // Tools & Other
  { name: "WordPress", level: 60, category: "tools" },
  { name: "SEO", level: 40, category: "tools" },
  { name: "Digital Marketing", level: 65, category: "tools" },
  { name: "MS Office", level: 75, category: "tools" },
];

// ── CERTIFICATIONS ───────────────────────────────────────────
// Add your certifications here — no images needed, text cards only
export const certifications = [
  {
    id: 1,
    title: "Java Full Stack Development",
    issuer: "JSpiders Training Institute",
    date: "2025 — Ongoing",
    credentialId: "", // ← Add credential ID if available
    description: "Core Java, JDBC, Hibernate, JSP, Spring Boot, MySQL, HTML, CSS, JavaScript, React JS",
    color: "#FF6B00", // orange accent
  },
  {
    id: 2,
    title: "Web Development Internship",
    issuer: "Brassy Academy, Tirunelveli",
    date: "2024",
    credentialId: "",
    description: "Frontend development with HTML, CSS, JavaScript and Angular Framework",
    color: "#FF8C00",
  },
  {
    id: 3,
    title: "Digital Marketing Internship",
    issuer: "Blackben Technology, Madurai",
    date: "2023",
    credentialId: "",
    description: "SEO, WordPress development, Content creation with Canva",
    color: "#FF4500",
  },
  // ← Add more certifications below this line:
  // {
  //   id: 4,
  //   title: "Your Certification Name",
  //   issuer: "Issuing Organization",
  //   date: "Month Year",
  //   credentialId: "CERT-12345",
  //   description: "Brief description of what it covers",
  //   color: "#FF6B00",
  // },
];

// ── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "InventoMini - Wholesale Shop Management System",
    subtitle: "Java Full Stack Project",
    description:
      "Built a full-stack wholesale shop management system to handle products, customers, orders, and payments efficiently. Implemented secure JWT-based authentication, dynamic stock updates, delivery tracking, and real-time balance calculation. Designed a responsive React dashboard with analytics, charts, and recent activity tracking, integrated with a Spring Boot backend and MySQL database.",
    tech: ["React", "Spring Boot", "Java", "MySQL", "JWT", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/najeeb-dev-codes/inventomini",
    featured: true,
    color: "#39e8c8",
  },
  {
    id: 2,
    title: "Skin Cancer Prediction",
    subtitle: "Final Year Project",
    description:
      "Led a team to build a web-based skin cancer detection system integrated into a hospital website. Designed user-friendly interfaces for uploading skin lesion images, coordinated backend integration with a TensorFlow CNN model for real-time predictions.",
    tech: ["Python", "TensorFlow", "CNN", "HTML", "CSS", "JavaScript"],
    liveUrl: "",   // ← Add live URL if available
    githubUrl: "", // ← Add GitHub repo URL
    featured: true,
    color: "#FF6B00",
  },
  {
    id: 3,
    title: "Net Fusion Digital Marketing Website",
    subtitle: "WordPress Project",
    description:
      "Developed and launched a responsive marketing website using WordPress with custom themes, plugins, and SEO optimization. Ensured mobile-friendliness and great user experience.",
    tech: ["WordPress", "SEO", "HTML", "CSS", "Hosting"],
    liveUrl: "https://mediumspringgreen-lapwing-130315.hostingersite.com/",
    githubUrl: "",
    featured: true,
    color: "#FF8C00",
  },
  // ← Add more projects below:
  // {
  //   id: 3,
  //   title: "Your Project Name",
  //   subtitle: "Project Type",
  //   description: "What it does and what you built.",
  //   tech: ["React", "Spring Boot", "MySQL"],
  //   liveUrl: "https://your-project-url.com",
  //   githubUrl: "https://github.com/yourname/project",
  //   featured: false,
  //   color: "#FF6B00",
  // },
];

// ── DESIGN WORKS (Logos & Illustrations) ─────────────────────
// Add image paths relative to /public folder
// e.g. place images in public/works/ → path: "/works/logo1.png"
import logo1 from "../../public/works/logo1.jpg"
import logo2 from "../../public/works/logo2.jpg"
import logo3 from "../../public/works/logo3.jpg"
import logo4 from "../../public/works/logo4.jpg"
import logo5 from "../../public/works/logo5.jpg"
import logo6 from "../../public/works/logo6.jpeg"

import illu1 from "../../public/works/illustration1.jpeg"
import illu2 from "../../public/works/illustration2.png"
export const works = [
  {
    id: 1,
    title: "Logo Design ",
    category: "logo",
    description: "B Letter + 🦁 + 🎧 design",
    imageUrl: "../../public/works/logo1.jpg", // ← Replace with: "/works/your-logo-1.jpg"
    placeholder: false, // set to false once you add a real image
  },
  {
    id: 2,
    title: "Logo Design ",
    category: "logo",
    description: "SK Masala",
    imageUrl: "../../public/works/logo2.jpg",
    placeholder: false,
  },
  {
    id: 3,
    title: "Vector Illustration ",
    category: "illustration",
    description: "Digital vector art",
    imageUrl: "../../public/works/illustration1.jpeg",
    placeholder: false,
  },
  {
    id: 4,
    title: "Logo Design ",
    category: "logo",
    description: "SK Masala",
    imageUrl: "../../public/works/logo3.jpg",
    placeholder: false,
  }, {
    id: 5,
    title: "Logo Design ",
    category: "logo",
    description: "SK Masala",
    imageUrl: "../../public/works/logo4.jpg",
    placeholder: false,
  }, {
    id: 6,
    title: "Logo Design ",
    category: "logo",
    description: "SK Masala",
    imageUrl: "../../public/works/logo5.jpg",
    placeholder: false,
  }, {
    id: 7,
    title: "Logo Design ",
    category: "logo",
    description: "SK Masala",
    imageUrl: "../../public/works/logo6.jpeg",
    placeholder: false,
  },
  // ← Add more works below:
  // {
  //   id: 5,
  //   title: "Your Work Title",
  //   category: "logo",  // or "illustration"
  //   description: "Short description",
  //   imageUrl: "/works/your-image.jpg",
  //   placeholder: false,
  // },
];

// ── EXPERIENCE / INTERNSHIPS ──────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "Digital Marketing Intern",
    company: "Blackben Technology",
    location: "Madurai, Tamil Nadu",
    duration: "2024",
    type: "Internship",
    points: [
      "Gained hands-on experience in SEO strategy and implementation",
      "Built and managed websites using WordPress with custom themes and plugins",
      "Created marketing content and graphics using Canva",
    ],
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Brassy Academy",
    location: "Tirunelveli, Tamil Nadu",
    duration: "2023",
    type: "Internship",
    points: [
      "Developed frontend interfaces using HTML, CSS, and JavaScript",
      "Completed a focused internship on Angular Framework fundamentals",
    ],
  },
  {
    id: 3,
    role: "Java Full Stack Trainee",
    company: "JSpiders Training Institute",
    location: "BTM Layout, Bangalore",
    duration: "2025 — Ongoing",
    type: "Training",
    points: [
      "Intensive training in Core Java, OOPS, Collections, Multithreading",
      "Building dynamic web apps with Spring Boot and MySQL backend",
      "Frontend development with HTML, CSS, JavaScript and React JS",
    ],
  },
];
