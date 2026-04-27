import Navbar from "./Navbar";
import Button from "./Button";
import icons from "../lib/icons";

export default function Header() {
    const handleClick = () => {};
    const OpenMenuIcon = icons.openmenu;
    const CloseMenuIcon = icons.closemenu;
    return (
        <header className={`fixed left-0 top-0 z-50 flex w-full justify-between bg-background-dark/80 px-8 py-4 font-['Space_Grotesk'] text-text-muted backdrop-blur-md`}>
           
            <div className="flex items-center justify-center text-sm font-bold text-primary/95 md:text-2xl">
                Vaibhav | The Programmer
            </div>

            {/* navbar component */}
            <Navbar className={"hidden lg:flex"}/>
            
            {/* resume download button */}
            <Button children={"Resume"} className={`hover:bg-primary/15 hidden h-10 w-28 cursor-pointer items-center justify-center rounded-md bg-primary/10 font-bold text-primary/95 transition-colors duration-300 lg:flex`} />
            
            {/* open menu button for hamburger menu */}
            <Button children={<OpenMenuIcon/>} type={"button"} onClick={handleClick} className={`text-primary lg:hidden`} />
        </header>
    );
}
