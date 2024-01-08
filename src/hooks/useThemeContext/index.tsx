import { createContext, useContext } from "react";

export type ModeTypes = "dark" | "light";
export const initialMode = "light";

type ThemeContextType = {
  mode: ModeTypes;
  toggleMode: () => void;
  theme: any;
};

const CustomThemeContext = createContext<ThemeContextType>({
  mode: initialMode,
  toggleMode: () => {},
  theme: {},
});

export const useCustomTheme = () => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error("useCustomTheme must be used within a CustomThemeProvider");
  }
  return context;
};

export default CustomThemeContext;
