import styled from "@emotion/styled";
import type { ReactNode } from "react";

type Variant = "sidebar" | "main";

const headingStyles = {
  sidebar: {
    color: "var(--theme-text)",
    fontWeight: 600,
    fontSize: "var(--fs-sm)",
  },
  main: {
    color: "var(--theme-accent-dark)",
    fontWeight: 500,
    fontSize: "var(--fs-base)",
  },
};

const StyledHeading = styled.h2<{ variant: Variant }>`
  margin-bottom: var(--sp-sm);
  color: ${({ variant }) => headingStyles[variant].color};
  font-size: ${({ variant }) => headingStyles[variant].fontSize};
  font-weight: ${({ variant }) => headingStyles[variant].fontWeight};
  line-height: var(--lh-tight);
`;

interface Props {
  children: ReactNode;
  title: string;
  variant: Variant;
}

export const Section = ({ children, title, variant }: Props) => (
  <section>
    <StyledHeading variant={variant}>{title}</StyledHeading>
    {children}
  </section>
);
