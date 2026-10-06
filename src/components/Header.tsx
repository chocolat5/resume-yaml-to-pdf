import styled from "@emotion/styled";
import type { CSSProperties, ReactNode } from "react";

import { GithubIcon } from "@/components/Icon";

const StyledHeader = styled.header<{ headerHeight: CSSProperties["height"] }>`
  display: flex;
  align-items: center;
  gap: var(--sp-md);
  height: ${({ headerHeight }) => headerHeight};
  padding: var(--sp-sm) var(--sp-lg);
  background-color: var(--c-bg-inverse);

  @media print {
    display: none;
  }
`;

const StyledTitle = styled.div`
  color: var(--c-text-inverse);
`;

const StyledHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  height: 100%;
  margin-left: auto;
`;

const StyledDivider = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--c-text-light);
`;

interface Props {
  headerHeight: CSSProperties["height"];
  actions: ReactNode;
  primaryAction: ReactNode;
}

export const Header = ({ headerHeight, actions, primaryAction }: Props) => (
  <StyledHeader headerHeight={headerHeight}>
    <StyledTitle>Resume YAML to PDF</StyledTitle>
    <a
      href="https://github.com/chocolat5/resume-yaml-to-pdf"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="GitHub repository (opens in new tab)"
    >
      <GithubIcon size="var(--fs-lg)" color="var(--c-text-inverse)" />
    </a>
    <StyledHeaderActions>
      {actions}
      <StyledDivider />
      {primaryAction}
    </StyledHeaderActions>
  </StyledHeader>
);
