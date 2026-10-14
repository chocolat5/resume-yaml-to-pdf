import styled from "@emotion/styled";

const StyledSummary = styled.section`
  @media print {
    break-inside: avoid;
  }
`;

const StyledSummaryText = styled.p`
  color: var(--c-text);
  font-size: var(--fs-xxs);
  line-height: var(--lh-normal);
  white-space: pre-wrap;

  & + & {
    margin-top: var(--sp-xs);
  }
`;

interface Props {
  text: string;
}

export const Summary = ({ text }: Props) => {
  const paragraphs = text.split(/\n\s*\n/);

  return (
    <StyledSummary>
      {paragraphs.map((paragraph, index) => (
        <StyledSummaryText key={index}>{paragraph}</StyledSummaryText>
      ))}
    </StyledSummary>
  );
};
