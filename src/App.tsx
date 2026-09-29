import { useState } from "react";

import type { Theme } from "@emotion/react";
import { Global, ThemeProvider } from "@emotion/react";
import { parse } from "yaml";

import { ResumeContent } from "@/components/ResumeContent";
import resumeYamlRaw from "@/data/resume.yaml?raw";
import { theme } from "@/styles/theme";
import type { Resume } from "@/types";

const globalStyles = (theme: Theme) => ({
  ":root": {
    "--theme-text": theme.text,
    "--theme-accent": theme.accent,
    "--theme-accent-dark": theme.accentDark,
    "--theme-bg": theme.background,
  },
});

const parseResume = (yaml: string): Resume | null => {
  try {
    return parse(yaml);
  } catch {
    return null;
  }
};

function App() {
  const [resumeYaml, setResumeYaml] = useState(resumeYamlRaw);
  const resume = parseResume(resumeYaml);
  return (
    <>
      <title>
        {resume
          ? `${resume.personal.name}_${resume.personal.title}`.replaceAll(
              " ",
              "_"
            )
          : ""}
      </title>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {resume && <ResumeContent resume={resume} />}
      </ThemeProvider>
    </>
  );
}

export default App;
