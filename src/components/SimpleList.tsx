import { List, ListItem } from "@/components/List";

interface Props {
  items: string[];
}

export const SimpleList = ({ items }: Props) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={`${item}-${index}`}>{item}</ListItem>
    ))}
  </List>
);
