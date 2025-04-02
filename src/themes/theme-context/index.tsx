import React, { createContext, useState, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themes } from "../theme-toggle";

interface ThemeContextType {
    theme: typeof themes.light;
    toggleTheme: () => void;
  }

export const ThemeContext = createContext<ThemeContextType>({
    theme: themes.light,
    toggleTheme: () => {},
});

interface ThemeProviderProps {
    children: ReactNode;
  }

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
      };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};