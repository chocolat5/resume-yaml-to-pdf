import styled from "@emotion/styled";

import type { ProjectLink } from "@/types";

const LINK_LABELS: Record<ProjectLink["type"], string> = {
  demo: "Live Demo",
  url: "URL",
  github: "GitHub",
};

const StyledItem = styled.article`
  @media print {
    break-inside: avoid;
  }

  & + & {
    margin-top: calc(var(--sp-xs) * 3);
  }
`;

const StyledHeader = styled.div`
  margin-bottom: var(--sp-sm);
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: flex-end;
`;

const StyledTitle = styled.h3`
  color: var(--c-text);
  font-size: var(--fs-sm);
  font-weight: 500;
  line-height: var(--lh-tight);
`;

const StyledSubtitle = styled.p`
  color: var(--c-text-sub);
  font-size: var(--fs-xxs);
  font-weight: 500;
  line-height: var(--lh-normal);
`;

const StyledMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-sm);
  margin-top: var(--sp-xs);
  color: var(--c-text-light);
  font-size: var(--fs-xxs);
  line-height: var(--lh-normal);
`;

const StyledLocation = styled.span`
  &:has(+ span)::after {
    margin-left: var(--sp-xs);
    content: "•";
  }
`;

const StyledDescription = styled.p`
  color: var(--c-text);
  font-size: var(--fs-xxs);
  line-height: var(--lh-normal);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
  list-style: disc inside;
`;

const StyledListItem = styled.li`
  padding-left: 1em;
  color: var(--c-text);
  font-size: var(--fs-xxs);
  line-height: var(--lh-normal);
  text-indent: -1.2em;

  &::marker {
    color: var(--c-text-light);
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-xs) var(--sp-md);
  margin-top: var(--sp-xs);
`;

const StyledLink = styled.a`
  display: flex;
  color: var(--c-text-light);
  font-size: var(--fs-xxs);
  line-height: var(--lh-normal);

  @media print {
    &[href^="http"]::after {
      content: none;
    }
  }
`;

const StyledUrl = styled.span`
  color: var(--c-link);
  text-decoration: underline;
  text-underline-offset: 4px;
`;

interface Props {
  title: string;
  subtitle?: string | null;
  period: string;
  location?: string;
  description?: string;
  items?: string[];
  links?: ProjectLink[];
}

export const TimelineItem = ({
  title,
  subtitle,
  period,
  location,
  description,
  items,
  links,
}: Props) => (
  <StyledItem>
    <StyledHeader>
      <StyledHeading>
        <StyledTitle>{title}</StyledTitle>
        {subtitle && <StyledSubtitle>, {subtitle}</StyledSubtitle>}
      </StyledHeading>
      {(location || period) && (
        <StyledMeta>
          {location && <StyledLocation>{location}</StyledLocation>}
          {period && <span>{period}</span>}
        </StyledMeta>
      )}
    </StyledHeader>

    {description && <StyledDescription>{description}</StyledDescription>}

    {items && items.length > 0 && (
      <StyledList>
        {items.map((item, index) => (
          <StyledListItem key={`${item}-${index}`}>{item}</StyledListItem>
        ))}
      </StyledList>
    )}

    {links && links.length > 0 && (
      <StyledLinks>
        {links.map((link, index) => (
          <StyledLink
            key={`${link.url}-${index}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${LINK_LABELS[link.type]}: `}
            <StyledUrl>{link.url}</StyledUrl>
          </StyledLink>
        ))}
      </StyledLinks>
    )}
  </StyledItem>
);
