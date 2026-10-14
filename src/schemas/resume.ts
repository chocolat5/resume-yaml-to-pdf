import { z } from "zod";

const optionalString = z
  .string()
  .nullish()
  .transform((value) => value ?? "");

const requiredString = z.string().trim().min(1);

const isHttpUrl = (value: string) => {
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
};

const optionalHttpUrl = optionalString.refine(
  (value) => value === "" || isHttpUrl(value),
  { message: "URL must start with http:// or https://" }
);

const optionalArray = <T extends z.ZodType>(item: T) =>
  z
    .array(item)
    .nullish()
    .transform((value) => value ?? []);

const optionalStringArray = optionalArray(optionalString).transform((value) =>
  value.filter((v) => v)
);

const personalSchema = z.object({
  name: requiredString,
  title: optionalString,
  location: optionalString,
  phone: optionalStringArray,
  email: z.email(),
  nationality: optionalString,
});

const sidebarLinkSchema = z.object({
  name: optionalString,
  url: optionalHttpUrl,
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
  responsibilities: optionalStringArray,
});

const projectLinkSchema = z.object({
  type: z.enum(["demo", "url", "github"]),
  url: optionalHttpUrl,
});

const projectSchema = z.object({
  title: requiredString,
  period: optionalString,
  description: optionalString,
  links: optionalArray(projectLinkSchema).transform((value) =>
    value.filter((value) => value.url)
  ),
});

const educationSchema = z.object({
  degree: requiredString,
  school: optionalString,
  location: optionalString,
  period: optionalString,
});

export const resumeSchema = z.object({
  personal: personalSchema,
  summary: requiredString,
  skills: optionalStringArray,
  links: optionalArray(sidebarLinkSchema).transform((value) =>
    value.filter((value) => value.name && value.url)
  ),
  languages: optionalArray(languageSchema).transform((value) =>
    value.filter((value) => value.language)
  ),
  interests: optionalStringArray,
  experience: z.array(experienceSchema).min(1),
  projects: optionalArray(projectSchema),
  education: optionalArray(educationSchema),
});
