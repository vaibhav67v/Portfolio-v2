import Navbar from "./Navbar";
import Button from "./Button";
import "./Header.css";

export default function Header() {
    const resBtnTextClr = 'text-emerald-200';
    const resBtnBgClr = 'bg-emerald-200/10';

    const primaryBgClr = "bg-neutral-900";
    return (
        <div className={`flex justify-between ${primaryBgClr} px-8 py-4 font-['Space_Grotesk']`}>
            <div className="flex justify-center items-center text-emerald-200 text-xl font-bold">
                Vaibhav | The Programmer
            </div>
            <Navbar />
            <Button btnText={"Resume"} className={`${resBtnTextClr} ${resBtnBgClr} flex justify-center items-center w-28 h-10 rounded-md font-bold cursor-pointer hover:bg-emerald-200/20 transition-colors duration-300`} />
        </div>
    );
}
