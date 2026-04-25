export default function TextArea({ id, name, label, value, onChange }) {
    return (
        <div className={`flex flex-col gap-2`}>
            <label className={`text-`} htmlFor={id}>
                {label}
            </label>
            <textarea
                className={`bg-neutral-900 resize-none text-sm px-2 py-1 h-32 overflow-y-auto focus:outline-none focus:ring-2 focus:ring-cyan-400/40`}
                id={id}
                value={value}
                name={name}
                onChange={onChange}
				placeholder="What’s on your mind?"
            />
        </div>
    );
}
