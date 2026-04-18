import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";


export default function Home() {
	const primaryBgClr = "bg-neutral-900";
	return (
		<div className={`${primaryBgClr} min-h-screen font-['Space_Grotesk']`}>
			<Hero />
			<About />
			<Projects/>
			<Contact />
		</div>
	);
}
