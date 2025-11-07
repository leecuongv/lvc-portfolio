export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Honor {
  icon: string;
  title: string;
  period: string;
  context: string;
  achievements?: string[];
  proofUrl?: string;
}