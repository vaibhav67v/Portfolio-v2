import Toolkit from "../components/Toolkit";

export default function About() {
    return (
        <div
            className={`flex justify-between gap-16 px-16 py-8 text-text-muted`}
        >
            {/* about content */}
            <div className="max-w-1/2 text-xl">
                <div className="text-4xl font-bold text-text">
                    Building with Purpose
                </div>
                <div className={`mt-4 h-1.5 w-1/12 bg-primary/95`}></div>
                <p className="mt-4">
                    I believe in writing code that is simple, structured, and
                    purposeful. For me, development is not just about making
                    things work, but making them work well.
                </p>
                <p className="mt-4">
                    I’m currently exploring backend development and databases to
                    build scalable and complete web solutions.
                </p>
            </div>

            {/* technical toolkit container */}
            <div className="w-2/5 rounded-md bg-background p-6">
                <div className={`mb-6 text-2xl font-bold text-primary`}>Technical Toolkit</div>
                <div className="grid grid-cols-3 gap-7 p-2">
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
        </div>
    );
}
