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
      "I graduated with a diploma in Computer Systems Technology after 2 years of studying, preparing me as a developer and training me in IT as well. I immediately found a job as a Student Research Assistant at Saskatchewan Polytechnic - Digital Integration Center of Excellence.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Freelance Software Engineer",
    location: "Saskatoon, SK, Canada (Remote)",
    description:
      "I got immediately contracted by a local non-profit along with a few other students to convert their native android application into a progressive web app and add additional features on, which we completed within 7 months. I then left after deploying the application to focus on my continued studies at the University of Saskatchewan.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer, Research Assistant",
    location: "Saskatoon, SK, Canada (Remote)",
    description:
      "At the same time, I worked as a Software Engineer and Research Assistant for over 3 years, engineering solutions for startups, and development of research projects that include creation of machine learning content for Surge Microcredentials C2R2 courses.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2025",
  },
  {
    title: "Graduated from the University of Saskatchewan",
    location: "Saskatoon, SK, Canada",
    description:
      "I graduated with a degree in Computer Science after 3 more years of studying. I immediately went full time at DICE and took up volunteer work at the non-profit I previously did work for that turned into contract work once they got a grant approved.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Volunteer Software Engineer",
    location: "Saskatoon, SK, Canada (Remote)",
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
