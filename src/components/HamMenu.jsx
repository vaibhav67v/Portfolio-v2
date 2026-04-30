import icons from "../lib/icons";
import Button from "./Button";
import Navlink from "./Navlink";

export default function HamMenu({ onClose }) {
    const CloseMenuIcon = icons.closemenu;
    const handleClick = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* MENU PANEL */}
            <div className="h-90 relative z-50 mt-5 flex w-80 flex-col items-center gap-10 rounded-xl bg-background p-6">
                <div className="flex w-full justify-end">
                    <Button
                        children={<CloseMenuIcon />}
                        type={"button"}
                        onClick={handleClick}
                        className={`cursor-pointer text-primary lg:hidden`}
                    />
                </div>

                <ul className="flex flex-col gap-3 text-center text-xl text-text-muted">
                    <li>
                        <Navlink
                            href={"hero"}
                            children={"Home"}
                            onClick={handleClick}
                        />
                    </li>
                    <li>
                        <Navlink
                            href={"about"}
                            children={"About"}
                            onClick={handleClick}
                        />
                    </li>
                    <li>
                        <Navlink
                            href={"projects"}
                            children={"Projects"}
                            onClick={handleClick}
                        />
                    </li>
                    <li>
                        <Navlink
                            href={"contact"}
                            children={"Contact"}
                            onClick={handleClick}
                        />
                    </li>
                </ul>

                {/* resume download button */}
                <Button
                    href="https://drive.google.com/file/d/1aKFdzIZy3DO_chLKztYngyEPrxe_Y97w/view"
                    target="_blank"
                    children={"Resume"}
                    className={`hover:bg-primary/15 h-10 w-28 cursor-pointer items-center justify-center rounded-md bg-primary/10 font-bold text-primary/95 transition-colors duration-300`}
                />
            </div>
        </div>
    );
}
