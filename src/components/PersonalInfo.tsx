import styled from "@emotion/styled";

import { Section } from "@/components/Section";
import type { Personal } from "@/types";

const StyledName = styled.h1`
  margin-bottom: var(--sp-sm);
  color: var(--theme-text);
  font-size: var(--fs-xl);
  font-weight: 600;
  line-height: var(--lh-tight);
`;

const StyledTitle = styled.p`
  margin-bottom: var(--sp-lg);
  color: var(--theme-text);
  font-size: var(--fs-sm);
  font-weight: 500;
  line-height: var(--lh-tight);

  &::after {
    display: block;
    content: "";
    width: 32px;
    height: 1px;
    margin-top: var(--sp-lg);
    background-color: var(--c-text-lighter);
  }
`;

const StyledItem = styled.p`
  margin-bottom: var(--sp-xs);
  color: var(--theme-text);
  font-size: var(--fs-xxs);
  line-height: var(--lh-normal);
`;

const StyledLabel = styled.p`
  margin-top: var(--sp-md);
  margin-bottom: var(--sp-xs);
  color: var(--theme-text);
  font-size: var(--fs-xxs);
  font-weight: 500;
  line-height: var(--lh-normal);
`;

const StyledLink = styled.a`
  display: block;
  margin-bottom: var(--sp-xs);
  color: var(--theme-text);
  font-size: var(--fs-xxs);
  line-height: var(--lh-normal);
  text-decoration: underline;
  text-underline-offset: 4px;
  word-break: break-all;

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  personal: Personal;
}

export const PersonalInfo = ({ personal }: Props) => (
  <div>
    <StyledName>{personal.name}</StyledName>
    <StyledTitle>{personal.title}</StyledTitle>

    <Section title="Details" variant="sidebar">
      <StyledItem>{personal.location}</StyledItem>
      {personal.phone.map((phone, index) => (
        <StyledItem key={`${phone}-${index}`}>{phone}</StyledItem>
      ))}
      <StyledLink href={`mailto:${personal.email}`}>
        {personal.email}
      </StyledLink>
      <StyledLabel>Nationality</StyledLabel>
      <StyledItem>{personal.nationality}</StyledItem>
    </Section>
  </div>
);
