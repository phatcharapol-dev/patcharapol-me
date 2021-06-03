import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
