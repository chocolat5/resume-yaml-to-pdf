import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { WarningIcon } from "@/components/WarningIcon";
import type { ResumeError } from "@/types";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const StyledErrorToast = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  margin: auto auto var(--sp-base);
  width: fit-content;
  height: fit-content;
  z-index: var(--z-toast);
  align-items: center;
  gap: var(--sp-sm);
  padding: calc(var(--sp-xs) * 3) var(--sp-md);
  border: 1px solid var(--c-error-light);
  border-radius: var(--radius-md);
  background-color: var(--c-error-lighter);
  color: var(--c-error);
  font-size: var(--fs-sm);
  font-weight: 500;
  line-height: var(--lh-none);
  animation: ${fadeIn} var(--transition-base) var(--ease-out-quart)
    var(--transition-slower) backwards;

  @media print {
    display: none;
  }
`;

const StyledWarningIcon = styled(WarningIcon)`
  font-size: var(--fs-md);
`;

interface Props {
  error: ResumeError | null;
}

const MAX_PATHS = 3;

const formatError = (error: ResumeError): string => {
  if (error.type === "schema") {
    const more =
      error.paths.length > MAX_PATHS
        ? ` and ${error.paths.length - MAX_PATHS} more`
        : "";
    return `Error in ${error.paths.slice(0, MAX_PATHS).join(", ")}${more}`;
  } else {
    return error.message.replace(/:$/, "");
  }
};

export const ErrorToast = ({ error }: Props) => {
  return error ? (
    <StyledErrorToast role="alert">
      <StyledWarningIcon />
      {formatError(error)}
    </StyledErrorToast>
  ) : null;
};
