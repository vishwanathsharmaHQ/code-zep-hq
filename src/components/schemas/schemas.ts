import { ProjectCategoryEnum } from "@/types/util.types";
import * as zod from "zod";

export const LoginSchema = zod.object({
  email: zod.string().email({
    message: "Email is required",
  }),
  password: zod.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = zod.object({
  name: zod.string().min(1, {
    message: "Name is required",
  }),
  email: zod.string().email({
    message: "Email is required",
  }),
  password: zod.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const ProjectSchema = zod.object({
  title: zod.string().min(1, {
    message: "Title is required",
  }),
  description: zod.string().min(1).max(200, {
    message: "Description should be less than 200 characters",
  }),
  url: zod.string().min(6, {
    message: "Url is required",
  }),
  repoUrl: zod.string(),
  coverImage: zod.string(),
  coverImageBg: zod.string(),
  technologies: zod.array(zod.string()),
  category: zod.enum(ProjectCategoryEnum).default("WEBSITE_DEVELOPMENT"),

  services: zod.array(zod.string()),
  projectNature: zod.enum(["Featured", "Work", ""]).default("Featured"),

  client: zod.string(),
  clientId: zod.string(),
  status: zod.string().default("IN_PROGRESS"),
  imageGallery: zod.array(zod.string()).min(1),
  startDate: zod.date(),
  endDate: zod.date(),
  budget: zod.number(),
  estimatedHours: zod.number(),
  internalNotes: zod.string(),
  clientFeedback: zod.string(),
  content: zod.string(),
});

export const ContactSchema = zod.object({
  name: zod.string().min(1, {
    message: "Name is required",
  }),
  email: zod.string().email({
    message: "Email is required",
  }),
  query: zod.string().min(6, {
    message: "Tell me something about your query",
  }),
});

export const CaseStudySchema = zod.object({
  projectId: zod.string().min(1, {
    message: "Project ID is required",
  }),
  title: zod.string().min(1, {
    message: "Title is required",
  }),
  description: zod.string().min(1, {
    message: "Description is required",
  }),
  showreel: zod.string().url({
    message: "Showreel must be a valid URL",
  }),
  tagline: zod.string().min(1, {
    message: "Tagline is required",
  }),
  colorPalette: zod
    .array(zod.string().regex(/^#([0-9A-F]{3}){1,2}$/i, "Invalid color format"))
    .min(2, {
      message: "At least two colors are required",
    }),
});
