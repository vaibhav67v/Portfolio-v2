import { typography } from "../styles/typography";

export default function TextArea({ id, name, label, value, onChange, error, className }) {
    return (
        <div className={className}>
            <label className= {`${typography.body}`} htmlFor={id}>
                {label}
            </label>
            <textarea
                className={`bg-bg-dark h-32 resize-none overflow-y-auto rounded-sm px-2 py-2 text-sm shadow-input focus:shadow-input-focus focus:outline-none`}
                id={id}
                value={value}
                name={name} 
                onChange={onChange}
				placeholder="What’s on your mind?"
            />
            <p className="absolute top-full mt-1 text-xs italic text-error/95">{error}</p>
        </div>
    );
}
