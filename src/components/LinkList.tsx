import styled from "@emotion/styled";

import { List, ListItem } from "@/components/List";
import type { SidebarLink } from "@/types";

const StyledLink = styled.a`
  color: var(--theme-text);
  font-size: var(--fs-xs);
  line-height: var(--lh-normal);
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  items: SidebarLink[];
}

export const LinkList = ({ items }: Props) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={`${item.name}-${index}`}>
        <StyledLink href={item.url} target="_blank" rel="noopener noreferrer">
          {item.name}
        </StyledLink>
      </ListItem>
    ))}
  </List>
);
