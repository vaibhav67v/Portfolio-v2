import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
    return (
        <div
            className={`bg-background-dark min-h-screen font-['Space_Grotesk'] flex flex-col gap-8`}
        >
            <Hero />
            <About />
            <Projects />
            <Contact />

            {/* version info */}
            <div className="mt-10 text-center font-bold text-[11px] text-text/80">
                Portfolio <b>v2.0</b> — Built with React, featuring live contact
                system
            </div>
        </div>
    );
}
