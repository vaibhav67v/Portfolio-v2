import profile from "../assets/images/profile.webp";
import Button from "../components/Button";
import { useState } from "react";

export default function Hero() {
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    return (
        // hero section container with content and profile picture
        <section
            id="hero"
            className="flex w-full scroll-mt-20 flex-col gap-12 py-8 lg:flex-row lg:items-center lg:justify-between"
        >
            {/* hero section profile picture */}
            <div className="order-1 flex justify-center transition-shadow duration-200 lg:order-2 lg:mr-8 lg:justify-between lg:rounded-2xl lg:hover:shadow-glow-hover">
                <div className="lg:shadow-depth relative h-48 w-48 overflow-hidden rounded-full shadow-glow sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-96 lg:w-96 lg:rounded-2xl">
                    <img
                        src={profile}
                        className="contrast-105 md:hover:contrast-110 h-full w-full object-cover transition-all duration-300 ease-out hover:scale-[1.01] md:hover:brightness-105"
                    />
                </div>
            </div>

            {/* hero section content */}
            <div className="lg:max-w-2/5 order-2 flex w-full flex-col gap-4 lg:order-1 lg:gap-8">
                {/* available for new projects or not?*/}
                <div className="shadow-depth flex w-fit items-center gap-2 rounded-2xl bg-background-light px-3 py-1.5 text-xs text-text lg:text-sm">
                    <div
                        className={`h-2 w-2 animate-pulse rounded-xl bg-accent`}
                    ></div>
                    Available for new projects ...
                </div>

                {/* title text */}
                <div className="animate-fade-up text-4xl md:text-5xl lg:text-6xl">
                    <div className="-mt-0.5 font-bold text-text/95">
                        Turning ideas into
                    </div>
                    <div className="bg-linear-to-r animate-fade-up from-primary to-accent bg-clip-text font-bold text-transparent delay-200">
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
                        className="shadow-depth bg-primary/85 w-fit cursor-pointer rounded-md p-3 text-center text-sm font-bold text-black hover:bg-primary/95 md:w-1/3 md:text-xl lg:w-2/5"
                    />

                    <Button
                        children={"Get In Touch"}
                        href={"#contact"}
                        className={
                            "shadow-input font-bold text-primary/95 border-primary border-2 rounded-md text-center w-fit p-3 cursor-pointer hover:bg-primary/15 text-sm md:text-xl"
                        }
                    />
                </div>
            </div>
        </section>
    );
}
