import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
    const primaryBgClr = "neutral-900";
    const primaryTextClr = "slate-400";
    return (
        <div
            className={`bg-${primaryBgClr} min-h-screen font-['Space_Grotesk']`}
        >
            <Hero />
            <About />
            <Projects />
            <Contact />

            {/* version info */}
            <div className="mt-10 text-center text-[11px] text-slate-500 opacity-90">
                Portfolio <b>v2.0</b> — Built with React, featuring live contact
                system
            </div>
        </div>
    );
}
