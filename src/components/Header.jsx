import Navbar from "./Navbar";
import Button from "./Button";
import icons from "../lib/icons";

export default function Header({setIsMenuOpen}) {
    const handleClick = () => {
        setIsMenuOpen(true);
    };
    
    const OpenMenuIcon = icons.openmenu;
    const CloseMenuIcon = icons.closemenu;
    return (
        <header
            className={`fixed left-0 top-0 z-50 flex w-full justify-between bg-background-dark/80 px-4 py-4 font-['Space_Grotesk'] text-text-muted backdrop-blur-md lg:px-8`}
        >
            <div className="flex items-center justify-center text-xl font-bold text-primary/95 lg:text-2xl">
                <span className="block md:hidden">Vaibhav</span>
                <span className="hidden md:block">
                    Vaibhav | The Programmer
                </span>
            </div>

            <div className="flex gap-6">
                {/* navbar component */}
                <Navbar className={"hidden lg:flex"} />

                {/* resume download button */}
                <Button
                    href="https://drive.google.com/file/d/1aKFdzIZy3DO_chLKztYngyEPrxe_Y97w/view"
                    target="_blank"
                    children={"Resume"}
                    className={`hover:bg-primary/15 hidden h-10 w-28 cursor-pointer items-center justify-center rounded-md bg-primary/10 font-bold text-primary/95 transition-colors duration-300 sm:flex`}
                />

                {/* open menu button for hamburger menu */}
                <Button
                    children={<OpenMenuIcon />}
                    type={"button"}
                    onClick={handleClick}
                    className={`cursor-pointer text-primary lg:hidden`}
                />
            </div>
        </header>
    );
}
