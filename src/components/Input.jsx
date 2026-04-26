export default function Input({
    id,
    name,
    label,
    value,
    type,
    placeholderText,
    onChange,
}) {
    return (
        <div className={`flex flex-col gap-2 rounded-md`}>
            <label htmlFor={id}>{label}</label>
            <input
                className={`bg-background-dark px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/35`}
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholderText}
                onChange={onChange}
            />
        </div>
    );
}
