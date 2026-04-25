export default function ContactInfo({ icon: Icon, label, value }) {
    const accentColor = "cyan-400";
    return (
        <div className={`flex gap-2 mt-2`}>
            <div className={`bg-neutral-800 p-4 rounded-lg flex items-center justify-center text-${accentColor}`}>
                <Icon />
            </div>
            <div>
                <div className={`text-slate-500 text-sm`}>{label}</div>
                <div className={`text-xl`}>{value}</div>
            </div>
        </div>
    );
}
