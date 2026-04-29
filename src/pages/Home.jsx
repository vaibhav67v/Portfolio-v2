import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col gap-8 px-6 pt-20 font-['Space_Grotesk'] text-text-muted lg:px-16`}
        >
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}
