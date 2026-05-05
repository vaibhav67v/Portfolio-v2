import icons from "../lib/icons";

export default function Toolkit({ text, icon }) {
    const Icon = icons[icon];

    return (
        <div className="flex flex-col items-center gap-2 text-sm">
            <div className="bg-bg-light flex h-10 w-10 items-center justify-center rounded-md shadow-depth transition-all duration-300 hover:shadow-depth-hover lg:h-12 lg:w-12">
                <Icon className="h-6 w-6 text-primary/95 lg:h-8 lg:w-8" />
            </div>
            <div className="hidden lg:flex">{text}</div>
        </div>
    );
}
