import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    accent: string;
    accentDark: string;
    text: string;
    background: string;
  }
}

export interface Personal {
  name: string;
  title: string;
  location: string;
  phone: string[];
  email: string;
  nationality: string;
}

export interface SidebarLink {
  name: string;
  url: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface Experience {
  title: string;
  company?: string | null;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectLink {
  type: "demo" | "url" | "github";
  url: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  links: ProjectLink[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface Resume {
  personal: Personal;
  summary: string[];
  skills: string[];
  links: SidebarLink[];
  languages: Language[];
  interests: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}
