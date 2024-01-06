import { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";

type ModeTypes = "dark" | "light";

const initialMode: ModeTypes = "dark";

function useDarkMode() {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode-bg");
    } else {
      document.body.classList.remove("dark-mode-bg");
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
  };

  const theme = createCustomTheme(mode);

  return { theme, toggleMode };
}

function createCustomTheme(mode: ModeTypes) {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#f50057",
      },
    },
    typography: {
      fontFamily: "Open sans, sans-serif",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 600,
      },
    },
    spacing: 4,
  });
}

export default useDarkMode;
