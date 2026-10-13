import { useState } from "react";

import type { Theme } from "@emotion/react";
import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import type { CSSProperties } from "react";

import { Button } from "@/components/Button";
import { Editor } from "@/components/Editor";
import { ErrorToast } from "@/components/ErrorToast";
import { Header } from "@/components/Header";
import { ExportIcon, ImportIcon, PdfIcon, ResetIcon } from "@/components/Icon";
import { ResumeContent } from "@/components/ResumeContent";
import resumeYamlRaw from "@/data/resume.yaml?raw";
import { theme } from "@/styles/theme";
import type { Resume, ResumeError } from "@/types";
import { parseResume } from "@/utils/parseResume";

const StyledSplitView = styled.div`
  display: grid;
  grid-template-columns: 1fr 210mm;
  min-width: 1200px;

  @media print {
    display: block;
    padding: 0;
    min-width: unset;
  }
`;

const StyledScrollArea = styled.div<{ headerHeight: CSSProperties["height"] }>`
  height: ${({ headerHeight }) => `calc(100vh - ${headerHeight})`};
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
const HEADER_HEIGHT = "52px";

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

  const onSave = () => {
    window.print();
  };

  return (
    <>
      <title>
        {lastValidResume
          ? `${lastValidResume.personal.name}${lastValidResume.personal.title && "_"}${lastValidResume.personal.title}`.replaceAll(
              " ",
              "_"
            )
          : ""}
      </title>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Header
          headerHeight={HEADER_HEIGHT}
          actions={
            <>
              <Button
                label="Import"
                icon={<ImportIcon size="var(--fs-base)" />}
                onClick={() => null}
              />
              <Button
                label="Export"
                icon={<ExportIcon size="var(--fs-base)" />}
                onClick={() => null}
              />
              <Button
                label="Reset"
                icon={<ResetIcon size="var(--fs-base)" />}
                onClick={() => null}
              />
            </>
          }
          primaryAction={
            <Button
              label="Save PDF"
              icon={<PdfIcon size="var(--fs-base)" />}
              onClick={onSave}
            />
          }
        />
        <StyledSplitView>
          <StyledEditorArea headerHeight={HEADER_HEIGHT}>
            <Editor value={yamlText} onChange={handleChange} />
          </StyledEditorArea>
          {lastValidResume && (
            <StyledScrollArea headerHeight={HEADER_HEIGHT}>
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
