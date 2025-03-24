import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const themeContext = createContext();

export const useTheme = () => {
  return useContext(themeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true );

  const toggelTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode ? "dark" : "light";




useEffect(()=>{
  document.documentElement.setAttribute("data-theme",theme)
},[isDarkMode])



  return (
    <themeContext.Provider value={{ theme, toggelTheme }}>
      {children}
    </themeContext.Provider>
  );
};
