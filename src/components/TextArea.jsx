import { typography } from "../styles/typography";

export default function TextArea({ id, name, label, value, onChange, error }) {
    return (
        <div className={`relative flex flex-col gap-2`}>
            <label className= {`${typography.body}`} htmlFor={id}>
                {label}
            </label>
            <textarea
                className={`shadow-input focus:shadow-input-focus h-32 resize-none overflow-y-auto rounded-sm bg-background-dark px-2 py-2 text-sm focus:outline-none`}
                id={id}
                value={value}
                name={name}
                onChange={onChange}
				placeholder="What’s on your mind?"
            />
            <p className="absolute top-full mt-1 text-sm italic text-error/95">{error}</p>
        </div>
    );
}
