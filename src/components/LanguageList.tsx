import styled from "@emotion/styled";

import { List, ListItem } from "@/components/List";
import type { Language } from "@/types";

const StyledName = styled.span`
  font-weight: 500;
`;

const StyledLevel = styled.span`
  margin-left: var(--sp-xs);
`;

interface Props {
  items: Language[];
}

export const LanguageList = ({ items }: Props) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={`${item.language}-${index}`}>
        <StyledName>{item.language}:</StyledName>
        <StyledLevel>{item.level}</StyledLevel>
      </ListItem>
    ))}
  </List>
);
