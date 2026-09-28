import styled from "@emotion/styled";
import type { ReactNode } from "react";

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-lg);
  padding: var(--sp-2xl) var(--sp-2xl) var(--sp-2xl) var(--sp-xl);
  background-color: var(--c-bg-alt);
`;

interface Props {
  children: ReactNode;
}

export const MainContent = ({ children }: Props) => (
  <StyledMainContent>{children}</StyledMainContent>
);
