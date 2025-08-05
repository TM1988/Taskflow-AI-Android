import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

type Theme = {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    inputBackground: string;
    inputText: string;
    placeholder: string;
    buttonText: string;
    error: string;
    success: string;
    divider: string;
  };
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
};

const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: '#4F46E5',
    background: '#F9FAFB',
    card: '#FFFFFF',
    text: '#111827',
    border: '#E5E7EB',
    notification: '#EF4444',
    inputBackground: '#FFFFFF',
    inputText: '#111827',
    placeholder: '#9CA3AF',
    buttonText: '#FFFFFF',
    error: '#DC2626',
    success: '#10B981',
    divider: '#E5E7EB',
  },
};

const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: '#6366F1',
    background: '#111827',
    card: '#1F2937',
    text: '#F9FAFB',
    border: '#374151',
    notification: '#EF4444',
    inputBackground: '#1F2937',
    inputText: '#F9FAFB',
    placeholder: '#9CA3AF',
    buttonText: '#FFFFFF',
    error: '#F87171',
    success: '#34D399',
    divider: '#374151',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  
  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
