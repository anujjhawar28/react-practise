import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext<boolean>(false);
export const UpdateThemeContext = createContext<() => void>(() => {});

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const useUpdateThemeContext = () => {
    return useContext(UpdateThemeContext);
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState(false);

  const toggleTheme = () => {
    setValue((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={value}>
        <UpdateThemeContext.Provider value={toggleTheme}> 
         {children}
        </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
