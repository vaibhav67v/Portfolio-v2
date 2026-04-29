import { typography } from "../styles/typography";

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
        <div className={`flex flex-col gap-2`}>
            <label className= {`${typography.body}`} htmlFor={id}>{label}</label>
            <input
                className={`focus:ring-primary/35 rounded-sm bg-background-dark px-2 py-2 text-sm focus:outline-none focus:ring-2`}
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
