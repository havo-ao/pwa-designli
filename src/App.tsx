import { ThemeProvider } from "@mui/material/styles";

import "./App.scss";
import Home from "./components/pages/home";
import { useCustomTheme } from "./hooks/useThemeContext";

function App() {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
