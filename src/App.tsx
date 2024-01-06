import { ThemeProvider } from "@mui/material/styles";

import "./App.scss";
import Home from "./components/pages/home";
import useThemeMode from "./hooks/useThemeMode";
import SwitchDarkMode from "./components/molecules/SwitchDarkMode";

function App() {
  const { theme, toggleMode } = useThemeMode();

  const handleToggleMode = () => {
    toggleMode();
  };

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <SwitchDarkMode
        theme={theme}
        checked={theme.palette.mode === "dark"}
        onChange={handleToggleMode}
      />
    </ThemeProvider>
  );
}

export default App;
