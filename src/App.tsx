import type { Theme } from "@emotion/react";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "@/styles/theme";

const globalStyles = (theme: Theme) => ({
  ":root": {
    "--theme-text": theme.text,
    "--theme-accent": theme.accent,
    "--theme-accent-dark": theme.accentDark,
    "--theme-bg": theme.background,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      home
    </ThemeProvider>
  );
}

export default App;
