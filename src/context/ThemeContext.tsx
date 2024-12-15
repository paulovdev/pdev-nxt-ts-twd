"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string;
    changeTheme: (selectedTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState<string>("light");
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        const getInitialTheme = (): string => {
            const selectedTheme = localStorage.getItem("theme");
            if (selectedTheme) {
                return selectedTheme;
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        };

        setTheme(getInitialTheme());
        setIsClient(true); 
    }, []);

    useEffect(() => {
        if (isClient) {
            document.body.className = theme;
        }
    }, [theme, isClient]);

    const changeTheme = (selectedTheme: string) => {
        setTheme(selectedTheme);
        if (isClient) {
            localStorage.setItem("theme", selectedTheme);
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
