import Navbar from "./Navbar";
import Button from "./Button";
import icons from "../lib/icons";
import { useState } from "react";
import ThemeToggler from "./ThemeToggler";

export default function Header({setIsMenuOpen}) {
    const handleClick = () => {
        setIsMenuOpen(true);
    };

    
    const OpenMenuIcon = icons.openmenu;
    const CloseMenuIcon = icons.closemenu;
    
    return (
        <header
            className="fixed left-0 top-0 z-50 flex w-full justify-between px-4 py-4 font-['Space_Grotesk'] text-text-muted backdrop-blur-md lg:px-8"
        >
            <div className="flex items-center justify-center text-xl font-bold text-primary/95 lg:text-2xl">
                <span className="block md:hidden">Vaibhav</span>
                <span className="hidden md:block">
                    Vaibhav | The Programmer
                </span>
            </div>

            <div className="flex items-center gap-6">
                {/* navbar component */}
                <Navbar className={"hidden lg:flex"} />
                
                {/* theme toggle button */}                
                <ThemeToggler className={"hidden lg:flex lg:shadow-depth"}/>
                
                {/* resume download button */}
                <Button
                    href="/resume/Vaibhav_Resume.pdf"
                    download
                    children={"Resume"}
                    className="bg-bg sm:text-primary/95t hidden h-10 w-28 cursor-pointer items-center justify-center rounded-md font-bold text-accent shadow-depth transition-all duration-300 hover:shadow-depth-hover sm:flex"
                />

                {/* open menu button for hamburger menu */}
                <Button
                    children={<OpenMenuIcon />}
                    aria-label="Open menu"
                    type={"button"}
                    onClick={handleClick}
                    className="bg-bg border-border h-10 w-10 cursor-pointer rounded-md text-primary/95 transition-all duration-300 lg:hidden"
                />
            </div>
        </header>
    );
}
