import type { Theme } from "@emotion/react";
import { Global, ThemeProvider } from "@emotion/react";
import { parse } from "yaml";

import { ResumeContent } from "@/components/ResumeContent";
import resumeYaml from "@/data/resume.yaml?raw";
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

const resume: Resume = parse(resumeYaml);

function App() {
  return (
    <>
      <title>
        {`${resume.personal.name}_${resume.personal.title}`.replaceAll(
          " ",
          "_"
        )}
      </title>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <ResumeContent resume={resume} />
      </ThemeProvider>
    </>
  );
}

export default App;
