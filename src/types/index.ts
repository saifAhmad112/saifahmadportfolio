export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Analytics" | "AI & Marketplace" | "Healthcare" | "Marketplace & SaaS";
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  description: string;
  highlights: string[];
  techStack: string[];
  gradient: string;
  accentColor: string;
  iconName: string;
  stats?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  isCurrent: boolean;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  duration?: string;
  type: string;
  details?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
