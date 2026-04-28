export default function Navlink({ href, className = "", children, isActive, onClick }) {
    return (
        <a
            href={`#${href}`}
            onClick={onClick}
            className={`font-bold transition-colors duration-300 ${className} ${isActive ? "text-primary" : "hover:text-primary/75"}`}
        >
            {children}
        </a>
    );
}
