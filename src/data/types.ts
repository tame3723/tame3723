export interface IProject {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  motivation: string;
  solution: string;
  challenges: string[];
  results: {
    metricName: string;
    metricValue: string;
  }[];
  lessonsLearned: string;
  futureImprovements: string;
}

export interface IExperience {
  id: string;
  organization: string;
  role: string;
  period: string;
  bullets: string[];
  skills: string[];
  projectLink?: string;
}

export interface ISkillGroup {
  category: string;
  skills: string[];
}

export interface IEducation {
  institution: string;
  degree: string;
  specialization: string;
  minor?: string;
  graduationYear: string;
  cgpa: string;
  currentStage: string;
}

export interface IAchievement {
  id: string;
  title: string;
  issuer?: string;
  description: string;
  verificationLink?: string;
  category: 'academic' | 'leadership' | 'certification';
}
