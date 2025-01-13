import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import pfgNative from "@/public/PFG-Native.png";
import pfgPwa from "@/public/PFG-PWA.png";
import realmOfNightmares from "@/public/Realm-Of-Nightmares.png";
import portfolio from "@/public/Portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Saskatchewan Polytechnic",
    location: "Saskatoon, SK, Canada",
    description:
      "I graduated after 2 years of studying. I immediately found a job as a Student Research Assistant at Saskatchewan Polytechnic - Digital Integration Center of Excellence.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Contract developer",
    location: "Saskatoon, SK, Canada",
    description:
      "I got immediately contracted by a local non-profit along with a few other students to convert their native android application into a progressive web app and add additional features on, which we completed within 7 months. I then left after deploying the application to focus on my continued studies at the University of Saskatchewan.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Student Research Assistant",
    location: "Saskatoon, SK, Canada",
    description:
      "At the same time, I worked as a Student Research Assistant for over 3 years doing research and development of different web apps and research projects based on the needs of our clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2025",
  },
  {
    title: "Lead Contract Developer",
    location: "Saskatoon, SK, Canada",
    description:
      "I was re-engaged by the non-profit to lead a team of junior developers recruited through a job posting. Upon my return, I discovered that the application had been taken offline due to a large-scale cyber security attack on Microsoft Azure. Despite the previous team's efforts, they were unable to restore the application. I successfully recovered the application and restored its functionality within two weeks. Since then, I have been enhancing the application with additional features and improvements while mentoring junior developers and conducting code reviews.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Portfolio",
    description:
      "An e-portfolio showcasing my skills, projects, and experiences.",
    tags: ["React & Next.js", "TypeScript", "Tailwind", "Framer Motion", "React Email & Resend", "Vercel"],
    imageUrl: portfolio,
  },
  {
    title: "Prairie Forest Guide (PWA)",
    description:
      "Converted the native app to a Progressive Web App (PWA), enabling desktop access for users to view events.",
    tags: ["Angular", "TypeScript", "ASP.Net", "SQLite", "C#"],
    imageUrl: pfgPwa,
  },
  {
    title: "Realm of Nightmares",
    description:
      "A never-ending 2D dungeon crawler with procedurally generated content, increasing in difficulty as you progress. This project earned a perfect score.",
    tags: ["Unity", "C#"],
    imageUrl: realmOfNightmares,
  },
  {
    title: "Prairie Forest Guide Native Android App",
    description:
      "Native Android app providing interactive 'virtual signs' to engage park visitors.",
    tags: ["Xamarin", "ASP.Net MVC", "C#", "SQLite"],
    imageUrl: pfgNative,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Java",
  "C#",
  "PHP",
  "C/C++",
  "Python",
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express",
  "ASP.Net MVC",
  "Symfony",
  "Spring Boot",
  "Unity",
  "MongoDB",
  "Neo4j",
  "PostgreSQL",
  "Docker",
  "Git",
  "GitHub Actions",
  "Tailwind",
  "Framer Motion",
] as const;