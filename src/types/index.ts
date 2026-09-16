export interface Profile {
  fullName: string;
  positioningTagline: string;
  shortIntro: string;
  about: string;
  location: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  photoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  summary: string;
  responsibilities: string[];
  impact: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  problem?: string;
  solution?: string;
  contribution?: string;
  technologies: string[];
  results?: string;
  image?: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
  featured: boolean;
}

export interface SkillGroup { id: string; groupName: string; skills: string[] }
export interface Education { id: string; institution: string; degree: string; period: string; gpa?: string; relevantCoursework?: string[] }
export interface Certification { id: string; name: string; issuer: string; summary: string; credentialUrl?: string }
export interface LeadershipExperience {
  id: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  impact: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}
export interface SocialLink { id: string; platform: string; url?: string; available: boolean }
