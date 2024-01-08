import React, { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import CustomThemeContext, { ModeTypes, initialMode } from "./index";

type CustomThemeProviderProps = {
  children: React.ReactNode;
};

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<ModeTypes>(initialMode);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = createCustomTheme(mode);

  const contextValue = {
    mode,
    toggleMode,
    theme,
  };

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark-mode-bg", mode === "dark");
  }, [mode]);

  return (
    <CustomThemeContext.Provider value={contextValue}>
      {children}
    </CustomThemeContext.Provider>
  );
};

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

export default CustomThemeProvider;
