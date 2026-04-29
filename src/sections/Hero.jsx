import profile_bw from "../assets/images/profile_bw.webp";
import profile_clr from "../assets/images/profile_clr.webp";
import Button from "../components/Button";
import { useState } from "react";

export default function Hero() {
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    return (
        // hero section container with content and profile picture
        <section
            id="hero"
            className={`flex w-full scroll-mt-20 flex-col gap-12 py-8 lg:flex-row lg:items-center lg:justify-between`}
        >
            {/* hero section profile picture */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-between">
                <div
                    className="relative h-40 w-40 rounded-full shadow-glow transition-all duration-300 hover:shadow-glow-hover sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 lg:rounded-2xl"
                    onMouseEnter={() => setIsProfileHovered(true)}
                    onMouseLeave={() => setIsProfileHovered(false)}
                >
                    <img
                        src={profile_bw}
                        className={`absolute top-0 left-0 rounded-full lg:rounded-2xl transition-opacity ${
                            isProfileHovered ? "opacity-0" : "opacity-100"
                        } duration-1000`}
                    />

                    <img src={profile_clr} className={`rounded-full lg:rounded-2xl`} />
                </div>
            </div>

            {/* hero section content */}
            <div className="lg:max-w-2/5 order-2 flex w-full flex-col gap-4 lg:order-1 lg:gap-8">
                {/* available for new projects or not?*/}
                <div className="flex w-fit items-center gap-2 rounded-2xl bg-background-light px-3 py-1.5 text-xs text-text lg:text-sm">
                    <div className={`h-2 w-2 rounded-xl bg-primary`}></div>
                    Available for new projects ...
                </div>

                {/* title text */}
                <div className="text-4xl md:text-5xl lg:text-6xl">
                    <div className="-mt-0.5 font-bold text-text">
                        Turning ideas into
                    </div>
                    <div className="font-bold text-primary/95">
                        real-world web solutions
                    </div>
                </div>

                {/* sub-text */}
                <div className="text-sm lg:text-xl">
                    I build modern web applications with a focus on performance
                    and usability. Currently diving deeper into backend
                    development and database systems.
                </div>

                {/* project and contact link */}
                <div className="flex gap-2">
                    <Button
                        href={"#projects"}
                        children={"View my work"}
                        className="bg-primary/85 w-fit cursor-pointer rounded-md p-3 text-center text-sm font-bold text-black hover:bg-primary/95 md:w-1/3 md:text-xl lg:w-2/5"
                    />

                    <Button
                        children={"Get In Touch"}
                        href={"#contact"}
                        className={
                            "text-primary/95 border-primary border-2 rounded-md text-center w-fit p-3 cursor-pointer hover:bg-primary/15 text-sm md:text-xl"
                        }
                    />
                </div>
            </div>
        </section>
    );
}
