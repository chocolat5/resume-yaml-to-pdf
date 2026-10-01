import { z } from "zod";

const optionalString = z
  .string()
  .nullish()
  .transform((value) => value ?? "");

const requiredString = z.string().trim().min(1);

const optionalArray = <T extends z.ZodType>(item: T) =>
  z
    .array(item)
    .nullish()
    .transform((value) => value ?? []);

const personalSchema = z.object({
  name: requiredString,
  title: optionalString,
  location: optionalString,
  phone: optionalArray(z.string()),
  email: z.email(),
  nationality: optionalString,
});

const sidebarLinkSchema = z.object({
  name: optionalString,
  url: optionalString,
});

const languageSchema = z.object({
  language: optionalString,
  level: optionalString,
});

const experienceSchema = z.object({
  title: requiredString,
  company: optionalString,
  location: optionalString,
  period: optionalString,
  responsibilities: optionalArray(z.string()),
});

const projectLinkSchema = z.object({
  type: z.enum(["demo", "url", "github"]),
  url: optionalString,
});

const projectSchema = z.object({
  title: requiredString,
  period: optionalString,
  description: optionalString,
  links: optionalArray(projectLinkSchema),
});

const educationSchema = z.object({
  degree: requiredString,
  school: optionalString,
  location: optionalString,
  period: optionalString,
});

export const resumeSchema = z.object({
  personal: personalSchema,
  summary: z.array(z.string()).refine((lines) => lines.join("").length >= 120, {
    message: "Summary must be at least 120 characters",
  }),
  skills: optionalArray(z.string()),
  links: optionalArray(sidebarLinkSchema),
  languages: optionalArray(languageSchema),
  interests: optionalArray(z.string()),
  experience: z.array(experienceSchema).min(1),
  projects: optionalArray(projectSchema),
  education: optionalArray(educationSchema),
});
