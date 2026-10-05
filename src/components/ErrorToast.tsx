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
  align-items: flex-start;
  gap: var(--sp-sm);
  position: fixed;
  inset: 0;
  margin: auto auto var(--sp-base);
  padding: calc(var(--sp-xs) * 3) var(--sp-md);
  width: fit-content;
  max-width: 640px;
  height: fit-content;
  z-index: var(--z-toast);
  border: 1px solid var(--c-error-light);
  border-radius: var(--radius-md);
  background-color: var(--c-error-lighter);
  line-height: var(--lh-none);
  animation: ${fadeIn} var(--transition-base) var(--ease-out-quart)
    var(--transition-slower) backwards;

  @media print {
    display: none;
  }
`;

const StyledWarningIcon = styled(WarningIcon)`
  flex-shrink: 0;
  margin-top: calc(var(--sp-xs) / 2);
  color: var(--c-error);
  font-size: var(--fs-md);
  line-height: var(--lh-snug);
`;

const StyledErrorToastText = styled.ul`
  color: var(--c-error);
  font-size: var(--fs-sm);
  font-weight: 500;
  line-height: var(--lh-snug);

  span {
    font-family: monospace;
    font-weight: 600;
  }
`;

interface Props {
  error: ResumeError | null;
}

const MAX_ISSUES = 3;

const formatError = (
  error: ResumeError
): { path?: string; message: string }[] => {
  if (error.type === "schema") {
    const lines = error.issues
      .slice(0, MAX_ISSUES)
      .map((issue) => ({ path: issue.path, message: issue.message }));
    const rest = error.issues.length - MAX_ISSUES;
    return rest > 0 ? [...lines, { message: `and ${rest} more` }] : lines;
  } else {
    return [{ message: error.message.replace(/:$/, "") }];
  }
};

export const ErrorToast = ({ error }: Props) => {
  return error ? (
    <StyledErrorToast role="status">
      <StyledWarningIcon />
      <StyledErrorToastText>
        {formatError(error).map((line, index) => (
          <li key={index}>
            {line.path && (
              <>
                <span>{line.path}</span>
                {" - "}
              </>
            )}
            {line.message}
          </li>
        ))}
      </StyledErrorToastText>
    </StyledErrorToast>
  ) : null;
};
