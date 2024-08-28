import { CaseStudy } from "./casestudy.types";

export type LinkType = {
  title: string;
  href: string;
};

export type ProjectType = {
  id: number;
  rating: number;
  homeProject: boolean;
  slug: string;
  title: string;
  description: string;
  url: string;
  repoUrl: string | null;
  coverImage: string | null;
  coverImageBg: string | null;
  technologies?: Array<string> | null;
  category: string;
  projectNature: string;
  services: Array<string | null>;
  client: string;
  clientId: string | null;
  status: string;
  imageGallery: Array<string | null>;
  startDate?: Date | null;
  endDate?: Date | null;
  budget?: number | null;
  estimatedHours?: number | null;
  internalNotes?: string | null;
  clientFeedback?: string | null;
  content?: string | null;
  projectUniqueId: string;
  caseStudy?: CaseStudy | null;
};

export interface AllProjectsProps {
  projects: ProjectType[] | null;
}

export type ProjectSelectInputType = {
  label: string;
  value: string;
};

export type ProjectCaseStudy = {
  id: number;
  slug: string;
  rating: number;
  homeProject: boolean;
  title: string;
  description: string;
  url: string;
  repoUrl: string | null;
  coverImage: string | null;
  coverImageBg: string | null;
  technologies?: Array<string> | null;
  category: string;
  projectNature: string;
  services: Array<string | null>;
  client: string;
  clientId: string | null;
  status: string;
  imageGallery: Array<string | null>;
  startDate?: Date | null;
  endDate?: Date | null;
  budget?: number | null;
  estimatedHours?: number | null;
  internalNotes?: string | null;
  clientFeedback?: string | null;
  content?: string | null;
  caseStudy: CaseStudy;
};

export const ProjectCategoryEnum = [
  "WEBSITE_DESIGN",
  "WEBSITE_DEVELOPMENT",
  "SOFTWARE_DEVELOPMENT",
  "ECOMMERCE_STORE",
  "MOBILE_APP",
  "RESEARCH_AND_DEVELOPMENT",
  "PRODUCT_DESIGN",
  "IT_INFRASTRUCTURE",
] as const;
