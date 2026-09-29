import styled from "@emotion/styled";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
  list-style: disc inside;
`;

const StyledListItem = styled.li`
  color: var(--c-text);
  font-size: var(--fs-xxs);
  line-height: var(--lh-normal);
  text-indent: -1.2em;
  padding-left: 1em;

  &::marker {
    color: var(--c-text-light);
  }

  &:first-child {
    padding-left: 0;
    text-indent: inherit;
    list-style: none;
  }
`;

interface Props {
  items: string[];
}

export const Summary = ({ items }: Props) => (
  <section>
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem key={`${item}-${index}`}>{item}</StyledListItem>
      ))}
    </StyledList>
  </section>
);
