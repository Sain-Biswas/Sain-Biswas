"use client";

import { cn } from "@/libs/utils";
import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext(() => {});

interface ThemeProviderProps {
  children: ReactNode;
  className: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  className,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <body className={cn(className, theme)}>{children}</body>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
