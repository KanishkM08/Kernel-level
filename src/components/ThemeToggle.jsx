import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark";
        }
        return false;
    });

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

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
                "top-4", // Adjust based on navbar height
                "left-1/2", // Center horizontally
                "transform -translate-x-1/2", // Perfect centering
                "z-50", // Ensure it stays on top
                "p-2",
                "rounded-full",
                "bg-background/80", // Match navbar's bg
                "backdrop-blur-sm", // Optional: matches navbar blur
                "shadow-sm", // Subtle shadow
                "transition-all",
                "duration-300",
                "hover:scale-110", // Gentle interaction
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
