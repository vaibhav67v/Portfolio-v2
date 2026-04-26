import Toolkit from "../components/Toolkit";
import {
    htmlIcon,
    cssIcon,
    jsIcon,
    reactIcon,
    githubIcon,
    nodejsIcon,
    mysqlIcon,
    expressjsIcon,
    mongodbIcon,
} from "../lib/iconIndex";

export default function About() {
    return (
        <div
            className={`flex px-16 py-8 justify-between gap-16 text-text-muted`}
        >
            {/* about content */}
            <div className="max-w-1/2 text-xl">
                <div className="text-4xl font-bold text-text">
                    Building with Purpose
                </div>
                <div className={`w-1/12 h-1.5 mt-4 bg-primary/95`}></div>
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
            <div className="w-2/5 bg-background  rounded-md p-6">
                <div className={`text-primary mb-6 text-2xl font-bold`}>Technical Toolkit</div>
                <div className="grid grid-cols-3 gap-7 p-2">
                    <Toolkit text={"HTML"} icon={htmlIcon} />
                    <Toolkit text={"CSS"} icon={cssIcon} />
                    <Toolkit text={"JS"} icon={jsIcon} />
                    <Toolkit text={"React"} icon={reactIcon} />
                    <Toolkit text={"GitHub"} icon={githubIcon} />
                    <Toolkit text={"NodeJS"} icon={nodejsIcon} />
                    <Toolkit text={"MySQL"} icon={mysqlIcon} />
                    <Toolkit text={"ExpressJS"} icon={expressjsIcon} />
                    <Toolkit text={"MongoDB"} icon={mongodbIcon} />
                </div>
            </div>
        </div>
    );
}
