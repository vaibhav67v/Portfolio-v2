import profile_bw from "../assets/images/profile_bw.webp";
import profile_clr from "../assets/images/profile_clr.webp";
import Button from "../components/Button";
import {useState} from "react";

export default function Hero() {
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    return (
        // main container
        <div
            className={`w-full flex gap-12 py-8 px-16 justify-between text-text`}
        >
            {/* hero section content */}
            <div className="flex flex-col gap-8 max-w-2/5">
                {/* available or not*/}
                <div
                    className={`flex items-center gap-2 text-sm text-text-muted bg-background-light font-bold py-1.5 pl-4 rounded-2xl w-1/2`}
                >
                    <div className={`h-2 w-2 rounded-xl bg-primary`}></div>
                    AVAILABLE FOR NEW PROJECTS
                </div>

                {/* title text */}
                <div>
                    <div className="-mt-0.5 text-6xl font-bold text-text">
                        Turning ideas into
                    </div>
                    <div className="font-bold text-6xl text-primary/95">
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
                        children={"View my work"}
                        className={`bg-primary/85 text-black font-bold w-48 p-3 text-center rounded-md cursor-pointer hover:bg-primary/95`}
                    />

                    <Button
                        children={"Get In Touch"}
                        className={
                            "text-primary/95 border-primary border-2 rounded-md text-center w-32 p-3 cursor-pointer hover:bg-primary/15"
                        }
                    />
                </div>
            </div>

            {/* hero section profile picture */}
            <div className="rounded-2xl shadow-glow transition-all hover:shadow-glow-hover duration-300">
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
