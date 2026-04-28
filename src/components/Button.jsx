export default function Button({
    children,
    className = "", type ="button",
    href,
    target = "_self",
    onClick,
    ...props
}) {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : ""}
                className={`inline-flex items-center justify-center ${className}`}
                {...props}
            >
                {children}
            </a>
        );
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`inline-flex items-center justify-center ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
