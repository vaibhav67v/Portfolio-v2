export default function Button({ children, className, type, onClick, ...props }) {
    return (
        <button type={type} className={className} {...props}>
            {children}
        </button>
    );
}
