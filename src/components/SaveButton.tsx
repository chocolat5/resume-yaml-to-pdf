import styled from "@emotion/styled";

const StyledButton = styled.button`
  position: fixed;
  top: var(--sp-md);
  right: var(--sp-md);
  z-index: var(--z-fixed);
  padding: calc(var(--sp-xs) * 3) var(--sp-md);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  background-color: var(--c-bg-alt);
  color: var(--c-text);
  font-size: var(--fs-sm);
  font-weight: 500;
  line-height: var(--lh-none);
  cursor: pointer;

  @media print {
    display: none;
  }
`;

export const SaveButton = () => {
  const onClick = () => {
    window.print();
  };

  return (
    <StyledButton onClick={onClick} type="button">
      Save as PDF
    </StyledButton>
  );
};
