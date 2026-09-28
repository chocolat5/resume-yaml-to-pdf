import { ThemeProvider } from "@emotion/react";

import { theme } from "@/styles/theme";

function App() {
  return <ThemeProvider theme={theme}>home</ThemeProvider>;
}

export default App;
