import profile_bw from "../assets/images/profile_bw.webp";
import profile_clr from "../assets/images/profile_clr.webp";
import Button from "../components/Button";
import {useState} from "react";

export default function Hero() {
    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const availableClr = "bg-emerald-200";
    const notAvailableClr = "bg-red-400";

    return (
        // main container
        <div
            className={`w-full flex gap-12 py-8 px-16 justify-between text-slate-400 font-['Space_Grotesk']`}
        >
            {/* hero section content */}
            <div className="flex flex-col gap-8 max-w-2/5">
                {/* available or not*/}
                <div
                    className={`flex items-center gap-2 text-sm bg-neutral-800 font-bold py-1.5 pl-4 rounded-2xl w-1/2`}
                >
                    <div className={`h-2 w-2 rounded-xl ${availableClr}`}></div>
                    AVAILABLE FOR NEW PROJECTS
                </div>

                {/* title text */}
                <div>
                    <div className="-mt-0.5 text-6xl font-bold text-white">
                        Turning ideas into
                    </div>
                    <div className="font-bold text-6xl text-emerald-200">
                        real-world web solutions
                    </div>
                </div>

                {/* sub-text */}
                <div className="text-xl">
                    I build modern web applications with a focus on performance
                    and usability. Currently diving deeper into backend
                    development and database systems.
                </div>

                {/* project and contact link */}
                <div className="flex gap-2">
                    <Button
                        btnText={"View my work"}
                        className={`bg-emerald-200 text-emerald-800 font-bold w-48 p-3 text-center rounded-md cursor-pointer hover:bg-emerald-300`}
                    />

                    <Button
                        btnText={"Get In Touch"}
                        className={
                            "text-blue-400 border-blue-400 border rounded-md text-center w-32 p-3 cursor-pointer hover:bg-blue-400/10"
                        }
                    />
                </div>
            </div>

            {/* hero section profile picture */}
            <div className="rounded-2xl w-lg max-h-128 shadow-[0_0_24px_4px_rgba(167,243,208,0.6)] transition-all hover:shadow-[0_0_24px_6px_rgba(167,243,208,0.6)] duration-300">
                <div
                    className="relative w-lg"
                    onMouseEnter={() => setIsProfileHovered(true)}
                    onMouseLeave={() => setIsProfileHovered(false)}
                >
                    <img
                        src={profile_bw}
                        className={`absolute top-0 left-0 w-full rounded-2xl transition-opacity ${
                            isProfileHovered ? "opacity-0" : "opacity-100"
                        } duration-1000`}
                    />

                    <img src={profile_clr} className={`w-full rounded-2xl`} />
                </div>
            </div>
        </div>
    );
}
