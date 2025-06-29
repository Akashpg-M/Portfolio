import { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Create context with a default value
const ThemeContext = createContext({
  isDarkMode: false,
  theme: 'light',
  toggleTheme: () => {}
});

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set theme on initial load
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      
      setTheme(initialTheme);
      setIsDarkMode(initialTheme === 'dark');
      
      // Apply the theme class immediately
      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      setIsMounted(true);
    } catch (error) {
      console.error('Error initializing theme:', error);
      setIsMounted(true); // Still continue with the app
    }
  }, []);

  // Update theme when it changes
  useEffect(() => {
    if (!isMounted) return;
    
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
      setIsDarkMode(theme === 'dark');
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  }, [theme, isMounted]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  // Create the context value
  const contextValue = {
    isDarkMode,
    theme,
    toggleTheme,
  };

  // Prevent flash of unstyled content
  if (!isMounted) {
    return <div className="invisible">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
