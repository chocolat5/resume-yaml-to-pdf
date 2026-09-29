import styled from "@emotion/styled";
import type { ReactNode } from "react";

const StyledSidebar = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--sp-lg);
  padding: var(--sp-2xl) var(--sp-xl) var(--sp-2xl) var(--sp-2xl);
  background-color: var(--theme-accent);
`;

interface Props {
  children: ReactNode;
}

export const Sidebar = ({ children }: Props) => (
  <StyledSidebar>{children}</StyledSidebar>
);
