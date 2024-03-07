'use client';

import React, { createContext, useEffect, useState } from 'react';

interface ContextProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});

interface Props {
  children?: React.ReactNode;
  defaultTheme: 'dark' | 'light';
}

export const ThemeProvider = ({ children, defaultTheme }: Props) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('data-theme') ;
    if (storedTheme) {
      setTheme(storedTheme as 'dark' | 'light');
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleThemeHandler = () => {
    const themeToSet = theme === 'dark' ? 'light' : 'dark';
    setTheme(themeToSet);
    document.documentElement.setAttribute('data-theme', themeToSet);
    localStorage.setItem('data-theme', `${themeToSet}`);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
