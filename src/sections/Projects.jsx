import { typography } from "../styles/typography";

export default function Projects() {
    return (
        <section
            id="projects"
            className={`flex scroll-mt-20 flex-col items-center justify-between gap-16 py-8 lg:flex-row lg:items-start`}
        >
            {/* about content */}
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
                <div className={`${typography.h2} font-bold text-text/95`}>
                    Projects
                </div>
                <div
                    className={`h-1.5 w-12 bg-primary/95 md:w-16 lg:w-20`}
                ></div>
                <p className={`mt-2 ${typography.body}`}>
                    Empty for now… but not for long. <br />
                    I don’t rush projects — I build them right. <br />
                    In the meantime, you can check out some of my mini projects{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vaibhav67v/WebDev-Mini-Projects"
                        className="border-b border-accent font-semibold text-accent hover:border-transparent"
                    >
                        here
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}
