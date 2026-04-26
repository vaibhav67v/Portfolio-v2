export default function Navbar({ className }) {
    return (
        <div>
            <ul
                className={`h-full flex justify-center items-center gap-8`}
            >
                <li className={`text-primary font-bold cursor-pointer`}>
                    Home
                </li>
                <li className={`cursor-pointer font-bold`}>About</li>
                <li className={`cursor-pointer font-bold`}>Projects</li>
                <li className={`cursor-pointer font-bold`}>Contact</li>
            </ul>
        </div>
    );
}
