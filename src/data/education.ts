import { IEducationExtended } from './types';

export const educationData: IEducationExtended = {
  institution: "University of Petroleum and Energy Studies (UPES), Dehradun",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science Engineering — Data Science",
  minor: "Aerospace Engineering",
  graduationYear: "2028",
  cgpa: "8.72/10",
  currentStage: "5th Semester",
  coursework: [
    "Cryptography & Network Security",
    "Formal Languages & Automata Theory",
    "Object Oriented Analysis & Design",
    "Probability/Entropy/Monte Carlo Simulation",
    "Research Methodology in CS",
    "Data Visualization & Interpretation",
    "Advanced Communication",
    "Leadership & Team Building"
  ],
  sgpas: [
    { semester: "Semester 1 SGPA", sgpa: "7.94 / 10", context: "UPES" },
    { semester: "Semester 2 SGPA", sgpa: "8.71 / 10", context: "UPES" },
    { semester: "Semester 3 SGPA", sgpa: "9.19 / 10", context: "UPES" },
    { semester: "Semester 4 SGPA", sgpa: "8.78 / 10", context: "UPES" }
  ]
};
