import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    accent: string;
    accentDark: string;
    text: string;
    background: string;
  }
}
