import { typography } from "../styles/typography";

export default function Input({
    id,
    name,
    label,
    value,
    type,
    placeholderText,
    onChange,
    error
}) {
    return (
        <div className={`relative flex flex-col gap-2`}>
            <label className= {`${typography.body}`} htmlFor={id}>{label}</label>
            <input
                className="shadow-input focus:shadow-input-focus rounded-sm bg-background-dark px-2 py-2 text-sm focus:outline-none"
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholderText}
                onChange={onChange}
            />

            <p className="absolute top-full mt-1 text-xs italic text-error/95 md:text-sm">{error}</p>
        </div>
    );
}
