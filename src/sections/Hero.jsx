import profile_bw from "../assets/images/profile_bw.webp";
import profile_clr from "../assets/images/profile_clr.webp";
import Button from "../components/Button";
import {useState} from "react";

export default function Hero() {
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    return (
        // main container
        <section
            id="hero"
            className={`flex w-full scroll-mt-20 justify-between gap-12 px-16 py-8 text-text`}
        >
            {/* hero section content */}
            <div className="max-w-2/5 flex flex-col gap-8">
                {/* available or not*/}
                <div
                    className={`flex w-1/2 items-center gap-2 rounded-2xl bg-background-light py-1.5 pl-4 text-sm font-bold text-text-muted`}
                >
                    <div className={`h-2 w-2 rounded-xl bg-primary`}></div>
                    AVAILABLE FOR NEW PROJECTS
                </div>

                {/* title text */}
                <div>
                    <div className="-mt-0.5 text-6xl font-bold text-text">
                        Turning ideas into
                    </div>
                    <div className="text-6xl font-bold text-primary/95">
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
                        className={`bg-primary/85 w-48 cursor-pointer rounded-md p-3 text-center font-bold text-black hover:bg-primary/95`}
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
            <div className="rounded-2xl shadow-glow transition-all duration-300 hover:shadow-glow-hover">
                <div
                    className="w-lg relative"
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
        </section>
    );
}
