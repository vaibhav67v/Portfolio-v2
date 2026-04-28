import { useEffect, useState } from "react";
import Navlink from "./Navlink";

export default function Navbar({ className }) {
    const [activeSection, setActiveSection] = useState("hero");

    // highlights the active section based on click
    const handleClick = (section) => {
        setActiveSection(section);    
    }
    
    // highlights the active section based on scroll using Intersection Observer API
    useEffect(() => {
        const sections = ["hero", "about", "projects", "contact"];

        // create an intersection observer to observe when sections come into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },

            {
                threshold: 0.8, // sets how much of the section needs to be visible before it's considered active
            },
        );

        // start observing each section
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect(); // cleanup the observer on component unmount
    }, []);

    return (
        <nav className={className}>
            <ul className={`flex h-full items-center justify-center gap-8`}>
                <li>
                    <Navlink
                        href={"hero"}
                        children={"Home"}
                        isActive={activeSection === "hero"}
                        onClick={() => handleClick("hero")}
                    />
                </li>
                <li>
                    <Navlink href={"about"} children={"About"} isActive={activeSection === "about"} onClick = {() => handleClick("about")}/>
                </li>
                <li>
                    <Navlink href={"projects"} children={"Projects"} isActive={activeSection === "projects"} handleClick ={() => handleClick("projects")}/>
                </li>
                <li>
                    <Navlink href={"contact"} children={"Contact"} isActive={activeSection === "contact"} handleClick ={() => handleClick("contact")}/>
                </li>
            </ul>
        </nav>
    );
}
