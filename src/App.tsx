import { useRef, useState } from "react";

import type { Theme } from "@emotion/react";
import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import type { ChangeEvent, CSSProperties } from "react";

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
import {
  deleteLocalStorageYaml,
  getLocalStorageYaml,
  setLocalStorageYaml,
} from "@/utils/resumeStorage";

const StyledSplitView = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
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
  scrollbar-gutter: stable;

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

const yamlData = getLocalStorageYaml() || resumeYamlRaw;
const initialResult = parseResume(yamlData);
const HEADER_HEIGHT = "52px";
const FILE_TYPE = ".yaml, .yml";
const FILE_NAME = "resume.yaml";
const MAX_FILE_SIZE = 2 * 1024 * 1024;

function App() {
  const [yamlText, setYamlText] = useState(yamlData);
  const [lastValidResume, setLastValidResume] = useState<Resume | null>(
    initialResult.success ? initialResult.data : null
  );
  const [error, setError] = useState<ResumeError | null>(
    initialResult.success ? null : initialResult.error
  );
  const importRef = useRef<HTMLInputElement>(null);

  const handleChange = (text: string) => {
    setYamlText(text);

    const result = parseResume(text);
    if (result.success) {
      setLastValidResume(result.data);
      setLocalStorageYaml(text);
      setError(null);
    } else {
      setError(result.error);
    }
  };

  const handleImport = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";

    if (file.size > MAX_FILE_SIZE) {
      window.alert(
        `The file must be ${MAX_FILE_SIZE / 1024 / 1024} MB or smaller.`
      );
      return;
    }

    if (
      window.confirm(
        "Replace the current content with this file? This can't be undone."
      )
    ) {
      handleChange(await file.text());
    }
  };

  const handleExport = () => {
    const path = new Blob([yamlText], { type: "text/yaml" });
    const url = URL.createObjectURL(path);
    const exportAnchor = document.createElement("a");
    exportAnchor.setAttribute("href", url);
    exportAnchor.setAttribute("download", FILE_NAME);
    exportAnchor.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Reset to the sample resume? Your current content will be deleted. This can't be undone."
      )
    ) {
      handleChange(resumeYamlRaw);
      deleteLocalStorageYaml();
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
              <input
                type="file"
                accept={FILE_TYPE}
                ref={importRef}
                onChange={handleImport}
                hidden
              />
              <Button
                label="Import"
                icon={<ImportIcon size="var(--fs-base)" />}
                onClick={() => {
                  importRef.current?.click();
                }}
              />
              <Button
                label="Export"
                icon={<ExportIcon size="var(--fs-base)" />}
                onClick={handleExport}
              />
              <Button
                label="Reset"
                icon={<ResetIcon size="var(--fs-base)" />}
                onClick={handleReset}
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
