import styled from "@emotion/styled";

import { ListItem } from "@/components/List";

const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-sm);
`;

interface Props {
  items: string[];
}

export const GridList = ({ items }: Props) => (
  <StyledGrid>
    {items.map((item, index) => (
      <ListItem key={`${item}-${index}`}>{item}</ListItem>
    ))}
  </StyledGrid>
);
