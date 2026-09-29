import styled from "@emotion/styled";
import type { ReactNode } from "react";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
`;

const StyledListItem = styled.li`
  color: var(--theme-text);
  font-size: var(--fs-xs);
  line-height: var(--lh-normal);
`;

interface Props {
  children: ReactNode;
}

export const List = ({ children }: Props) => (
  <StyledList>{children}</StyledList>
);

export const ListItem = ({ children }: Props) => (
  <StyledListItem>{children}</StyledListItem>
);
