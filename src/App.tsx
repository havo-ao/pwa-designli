import { ThemeProvider } from "@mui/material/styles";

import "./App.scss";
import Home from "./components/pages/home";
import SwitchDarkMode from "./components/molecules/SwitchDarkMode";
import { useCustomTheme } from "./hooks/useThemeContext";

function App() {
  const { theme, mode, toggleMode } = useCustomTheme();

  const handleToggleMode = () => {
    toggleMode();
  };

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <SwitchDarkMode
        mode={mode}
        checked={mode === "dark"}
        onChange={handleToggleMode}
      />
    </ThemeProvider>
  );
}

export default App;
