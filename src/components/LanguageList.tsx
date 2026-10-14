import styled from "@emotion/styled";

import { List, ListItem } from "@/components/List";
import type { Language } from "@/types";

const StyledName = styled.span`
  font-weight: 500;
`;

interface Props {
  items: Language[];
}

export const LanguageList = ({ items }: Props) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={`${item.language}-${index}`}>
        <StyledName>{item.language}</StyledName>
        {item.level && <span>: {item.level}</span>}
      </ListItem>
    ))}
  </List>
);
