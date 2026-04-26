import Navbar from "./Navbar";
import Button from "./Button";

export default function Header() {
    return (
        <div className={`flex justify-between text-text-muted bg-background-dark px-8 py-4 font-['Space_Grotesk']`}>
            <div className="flex justify-center items-center text-primary/95 text-xl font-bold">
                Vaibhav | The Programmer
            </div>
            <Navbar />
            <Button children={"Resume"} className={`text-primary/95 bg-primary/10 hover:bg-primary/15 flex justify-center items-center w-28 h-10 rounded-md font-bold cursor-pointer transition-colors duration-300`} />
        </div>
    );
}
