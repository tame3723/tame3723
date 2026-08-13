import { IExperience } from './types';

export const experienceData: IExperience[] = [
  {
    id: "upcl-internship",
    organization: "Uttarakhand Power Corporation Limited (UPCL)",
    role: "Technical Intern",
    period: "June – July 2026",
    skills: [
      "IT Infrastructure",
      "Smart Metering",
      "RTDAS",
      "Django",
      "Data Systems",
      "Cybersecurity"
    ],
    bullets: [
      "Gained hands-on technical exposure to state power grid IT infrastructure, networking protocols, and modern cybersecurity frameworks.",
      "Studied the implementation of Smart Metering systems and Real-Time Data Acquisition Systems (RTDAS) for real-time load management.",
      "Architected and developed the UPCL Utility Data Management System (UUDMS) to optimize data search and roles routing.",
      "Collaborated with engineering teams to analyze network topologies and ensure database reliability for high-frequency smart meter updates."
    ],
    projectLink: "/#/project/uudms" // Explicitly binds internship to the software project detail view
  }
];
