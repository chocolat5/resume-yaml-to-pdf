import styled from "@emotion/styled";
import type { ReactElement } from "react";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-sm);
  padding: var(--sp-sm) calc(var(--sp-xs) * 3);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  background-color: var(--c-bg-alt);
  color: var(--c-text);
  font-size: var(--fs-xs);
  font-weight: 500;
  line-height: var(--lh-none);
  cursor: pointer;
`;

interface Props {
  icon?: ReactElement;
  label: string;
  onClick: () => void;
}

export const Button = ({ icon, label, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick} type="button">
      {icon}
      {label}
    </StyledButton>
  );
};
