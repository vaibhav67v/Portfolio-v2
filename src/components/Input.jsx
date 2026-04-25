export default function Input({id, name, label, value, type, placeholderText, onChange}) {
    const primaryBgClr = "neutral-900";
  return (
    <div className={` flex flex-col gap-2 rounded-md`}>
        <label htmlFor={id}>{label}</label>
        <input
            className={`bg-${primaryBgClr} px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40`}
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholderText}
            onChange={onChange}
        />
    </div>
  )
}
