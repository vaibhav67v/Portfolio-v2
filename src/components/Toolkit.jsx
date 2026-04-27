import icons from "../lib/icons";

export default function Toolkit({ text, icon }) {
    const Icon = icons[icon];

    return (
        <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-background-light">
                <Icon className="w-6.5 h-6.5 text-primary/95" />
            </div>
            <div>{text}</div>
        </div>
    );
}
