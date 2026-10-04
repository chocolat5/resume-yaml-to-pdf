interface Props {
  className?: string;
}

export const WarningIcon = ({ className }: Props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 2.5c.6 0 1.15.32 1.45.84l8.8 15.25A1.67 1.67 0 0 1 20.8 21H3.2a1.67 1.67 0 0 1-1.45-2.41l8.8-15.25c.3-.52.85-.84 1.45-.84ZM11 9.5a1 1 0 0 1 2 0V14a1 1 0 0 1-2 0ZM12 16.35a1.15 1.15 0 1 1 0 2.3a1.15 1.15 0 1 1 0-2.3Z"
    />
  </svg>
);
