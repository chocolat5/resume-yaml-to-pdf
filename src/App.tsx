import { useState } from "react";

import type { Theme } from "@emotion/react";
import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { parse } from "yaml";

import { Editor } from "@/components/Editor";
import { ResumeContent } from "@/components/ResumeContent";
import resumeYamlRaw from "@/data/resume.yaml?raw";
import { theme } from "@/styles/theme";
import type { Resume } from "@/types";

const StyledSplitView = styled.div`
  display: grid;
  grid-template-columns: 1fr 210mm;
  min-width: 1200px;
  padding: var(--sp-2xl) 0;

  @media print {
    display: block;
    padding: 0;
    min-width: unset;
  }
`;

const StyledScrollArea = styled.div`
  height: calc(100vh - (var(--sp-2xl) * 2));
  overflow-y: auto;

  @media print {
    height: 100%;
    overflow: unset;
  }
`;

const StyledEditorArea = styled(StyledScrollArea)`
  @media print {
    display: none;
  }
`;

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
        <StyledSplitView>
          <StyledEditorArea>
            <Editor value={resumeYaml} onChange={setResumeYaml} />
          </StyledEditorArea>
          {resume && (
            <StyledScrollArea>
              <ResumeContent resume={resume} />
            </StyledScrollArea>
          )}
        </StyledSplitView>
      </ThemeProvider>
    </>
  );
}

export default App;
