export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  imageAlt: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  type: ExperienceType;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type ProjectCategory = "frontend" | "backend" | "fullstack" | "mobile";
export type ProjectStatus = "production" | "open-source" | "archived" | "wip";
export type ExperienceType = "work" | "freelance" | "education";
export type SkillCategory = "language" | "framework" | "tool" | "database";
