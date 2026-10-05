import type { z } from "zod";

import type { resumeSchema } from "@/schemas/resume";

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    accent: string;
    accentDark: string;
    text: string;
    background: string;
  }
}

export type Resume = z.infer<typeof resumeSchema>;

export type Personal = Resume["personal"];
export type SidebarLink = Resume["links"][number];
export type Language = Resume["languages"][number];

export type ProjectLink = Resume["projects"][number]["links"][number];

export type ResumeError =
  | { type: "syntax"; line: number; col: number; message: string }
  | { type: "schema"; issues: { path: string; message: string }[] };

export type ParseResult =
  { success: true; data: Resume } | { success: false; error: ResumeError };
