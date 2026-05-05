import { useState } from "react";
import Button from "./Button";
import icons from "../lib/icons";

export default function ThemeToggle({className}) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeSwitch = () => {
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle("dark");
        setIsDarkMode(!isDarkMode);
    };
    
    return (
        <>
            {/* theme toggle button */}
            <Button
                onClick={handleThemeSwitch}
                children={isDarkMode ? <icons.sun /> : <icons.moon />}
                className={`bg-bg h-8 w-8 cursor-pointer rounded-full text-primary border-border transition-all duration-300 lg:hover:shadow-depth-hover lg:h-9 lg:w-9 ${className}`}
            />
        </>
    );
}
