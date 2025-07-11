import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const theme = localStorage.getItem("theme");
            // Default to dark if not set
            return theme ? theme === "dark" : true;
        }
        return true;
    });

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark" || !theme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed",
                "top-4",
                "left-1/2",
                "transform -translate-x-1/2",
                "z-50",
                "p-2",
                "rounded-full",
                "bg-background/80",
                "backdrop-blur-sm",
                "shadow-sm",
                "transition-all",
                "duration-300",
                "hover:scale-110",
                "focus:outline-none",
                "max-md:hidden"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};
