import type { ReactNode } from "react";

interface Props {
  className?: string;
  color?: string;
  size?: number | string;
}

interface BaseIconProps extends Props {
  children: ReactNode;
  viewBox?: string;
}

const BaseIcon = ({
  children,
  className,
  color,
  size,
  viewBox = "0 0 24 24",
}: BaseIconProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox={viewBox}
    color={color}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    style={{ fontSize: size }}
  >
    {children}
  </svg>
);

export const WarningIcon = (props: Props) => (
  <BaseIcon {...props}>
    <path
      fillRule="evenodd"
      d="M12 2.5c.6 0 1.15.32 1.45.84l8.8 15.25A1.67 1.67 0 0 1 20.8 21H3.2a1.67 1.67 0 0 1-1.45-2.41l8.8-15.25c.3-.52.85-.84 1.45-.84ZM11 9.5a1 1 0 0 1 2 0V14a1 1 0 0 1-2 0ZM12 16.35a1.15 1.15 0 1 1 0 2.3a1.15 1.15 0 1 1 0-2.3Z"
    />
  </BaseIcon>
);

export const GithubIcon = (props: Props) => (
  <BaseIcon {...props}>
    <path d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" />
  </BaseIcon>
);

export const ImportIcon = (props: Props) => (
  <BaseIcon {...props}>
    <path d="M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1M11.29 2.29a1 1 0 0 1 .33-.21a.94.94 0 0 1 .76 0a1 1 0 0 1 .33.21l4 4a1 1 0 0 1-1.42 1.42L13 5.41V15a1 1 0 0 1-2 0V5.41l-2.29 2.3a1 1 0 1 1-1.42-1.42Z" />
  </BaseIcon>
);

export const ExportIcon = (props: Props) => (
  <BaseIcon {...props}>
    <path d="M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1m-9.71 1.71a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l4-4a1 1 0 0 0-1.42-1.42L13 12.59V3a1 1 0 0 0-2 0v9.59l-2.29-2.3a1 1 0 1 0-1.42 1.42Z" />
  </BaseIcon>
);

export const ResetIcon = (props: Props) => (
  <BaseIcon {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 20A8 8 0 1 0 5 12V17M2 14L5 17L8 14"
    />
  </BaseIcon>
);

export const PdfIcon = (props: Props) => (
  <BaseIcon {...props} viewBox="0 0 15 15">
    <path d="M2.5 6.5V6H2v.5zm4 0V6H6v.5zm0 4H6v.5h.5zm7-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zM2.5 7h1V6h-1zm.5 4V8.5H2V11zm0-2.5v-2H2v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5zM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6zM6 6.5v4h1v-4zm.5 4.5h1v-1h-1zM9 9.5v-2H8v2zM7.5 6h-1v1h1zM9 7.5A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5zM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5zM10 6v5h1V6zm.5 1H13V6h-2.5zm0 2H12V8h-1.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5z" />
  </BaseIcon>
);
