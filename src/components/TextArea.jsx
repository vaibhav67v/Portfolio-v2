import { typography } from "../styles/typography";

export default function TextArea({ id, name, label, value, onChange, error }) {
    return (
        <div className={`relative flex flex-col gap-2`}>
            <label className= {`${typography.body}`} htmlFor={id}>
                {label}
            </label>
            <textarea
                className={`focus:ring-primary/35 h-32 resize-none overflow-y-auto rounded-sm bg-background-dark px-2 py-1 text-sm focus:outline-none focus:ring-2`}
                id={id}
                value={value}
                name={name}
                onChange={onChange}
				placeholder="What’s on your mind?"
            />
            <p className="absolute top-full mt-1 text-xs font-bold text-secondary/95">{error}</p>
        </div>
    );
}
