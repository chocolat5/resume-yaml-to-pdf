import { useState } from "react";

import type { Theme } from "@emotion/react";
import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { Editor } from "@/components/Editor";
import { ErrorToast } from "@/components/ErrorToast";
import { ResumeContent } from "@/components/ResumeContent";
import resumeYamlRaw from "@/data/resume.yaml?raw";
import { theme } from "@/styles/theme";
import type { Resume, ResumeError } from "@/types";
import { parseResume } from "@/utils/parseResume";

const StyledSplitView = styled.div`
  display: grid;
  grid-template-columns: 1fr 210mm;
  min-width: 1200px;
  padding: var(--sp-2xl) 0 0;

  @media print {
    display: block;
    padding: 0;
    min-width: unset;
  }
`;

const StyledScrollArea = styled.div`
  height: calc(100vh - var(--sp-2xl));
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

const initialResult = parseResume(resumeYamlRaw);

function App() {
  const [yamlText, setYamlText] = useState(resumeYamlRaw);
  const [lastValidResume, setLastValidResume] = useState<Resume | null>(
    initialResult.success ? initialResult.data : null
  );
  const [error, setError] = useState<ResumeError | null>(
    initialResult.success ? null : initialResult.error
  );

  const handleChange = (text: string) => {
    setYamlText(text);

    const result = parseResume(text);
    if (result.success) {
      setLastValidResume(result.data);
      setError(null);
    } else {
      setError(result.error);
    }
  };

  return (
    <>
      <title>
        {lastValidResume
          ? `${lastValidResume.personal.name}_${lastValidResume.personal.title}`.replaceAll(
              " ",
              "_"
            )
          : ""}
      </title>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <StyledSplitView>
          <StyledEditorArea>
            <Editor value={yamlText} onChange={handleChange} />
          </StyledEditorArea>
          {lastValidResume && (
            <StyledScrollArea>
              <ResumeContent resume={lastValidResume} />
            </StyledScrollArea>
          )}
        </StyledSplitView>
        <ErrorToast error={error} />
      </ThemeProvider>
    </>
  );
}

export default App;
