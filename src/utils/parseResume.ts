import { parse, YAMLParseError } from "yaml";

import { resumeSchema } from "@/schemas/resume";
import type { ParseResult } from "@/types";

export const parseResume = (yaml: string): ParseResult => {
  try {
    const data = parse(yaml);
    const result = resumeSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        error: {
          type: "schema",
          paths: result.error.issues.map(
            (issue) => issue.path.join(".") || "root"
          ),
        },
      };
    }
    return { success: true, data: result.data };
  } catch (error) {
    if (error instanceof YAMLParseError) {
      return {
        success: false,
        error: {
          type: "syntax",
          line: error.linePos?.[0].line ?? 0,
          col: error.linePos?.[0].col ?? 0,
          message: error.message.split("\n")[0],
        },
      };
    }
    throw error;
  }
};
