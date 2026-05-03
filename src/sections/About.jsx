import Toolkit from "../components/Toolkit";
import { typography } from "../styles/typography";

export default function About() {
    return (
        <section
            id="about"
            className={`flex scroll-mt-20 flex-col items-center justify-between gap-16 py-8 lg:flex-row lg:items-start`}
        >
            {/* about content */}
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
                <div className={`${typography.h2} font-bold text-text/95`}>
                    Building with Purpose
                </div>
                <div className={`h-1.5 w-12 bg-primary/95 md:w-16 lg:w-20`}></div>
                <p className={`mt-2 ${typography.body}`}>
                    I believe in writing code that is simple, structured, and purposeful. For me, development is not just about making things work, but making them work well. <br /> <br />
                    I’m currently exploring backend development and databases to build scalable and complete web solutions.
                </p>
            </div>

            {/* technical toolkit container */}
            <div className="w-70 shadow-depth flex flex-col items-center rounded-xl bg-background p-6 lg:w-auto">
                <div className={`mb-6 text-2xl font-bold text-text/95`}>Technical Toolkit</div>
                <div className="grid grid-cols-3 gap-x-12 gap-y-6 p-2 lg:gap-x-20">
                    <Toolkit text={"HTML"} icon={"html"} />
                    <Toolkit text={"CSS"} icon={"css"} />
                    <Toolkit text={"JS"} icon={"js"} />
                    <Toolkit text={"React"} icon={"react"} />
                    <Toolkit text={"GitHub"} icon={"github"} />
                    <Toolkit text={"NodeJS"} icon={"nodejs"} />
                    <Toolkit text={"MySQL"} icon={"mysql"} />
                    <Toolkit text={"ExpressJS"} icon={"expressjs"} />
                    <Toolkit text={"MongoDB"} icon={"mongodb"} />
                </div>
            </div>
        </section>
    );
}
