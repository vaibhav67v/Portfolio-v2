import Navlink from "./Navlink";

export default function Navbar({ className }) {
    return (
        <nav className={className}>
            <ul className={`flex h-full items-center justify-center gap-8`}>
                <li>
                    <Navlink
                        href={"hero"}
                        children={"Home"}
                        className={"text-primary"}
                    />
                </li>
                <li>
                    <Navlink href={"about"} children={"About"} />
                </li>
                <li>
                    <Navlink href={"projects"} children={"Projects"} />
                </li>
                <li>
                    <Navlink href={"contact"} children={"Contact"} />
                </li>
            </ul>
        </nav>
    );
}
