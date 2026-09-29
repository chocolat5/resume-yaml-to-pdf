import react from "@vitejs/plugin-react";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const srcPath = fileURLToPath(new URL("./src", import.meta.url));
const localPath = `${srcPath}/data/resume.local.yaml`;
const samplePath = `${srcPath}/data/sample.yaml`;

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Personal data is only used in dev; builds always use the sample
  const resumePath =
    command === "serve" && existsSync(localPath) ? localPath : samplePath;

  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: /^@\/data\/resume\.yaml/, replacement: resumePath },
        { find: "@", replacement: srcPath },
      ],
    },
  };
});
