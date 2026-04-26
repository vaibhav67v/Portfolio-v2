export default function ContactInfo({ icon: Icon, label, value }) {
    const accentColor = "cyan-400";
    return (
        <div className={`flex gap-2 mt-2`}>
            <div className={`bg-background p-4 rounded-lg flex items-center justify-center text-primary/95`}>
                <Icon />
            </div>
            <div>
                <div className={` text-sm`}>{label}</div>
                <div className={`hover:text-primary/75 text-xl`}>{value}</div>
            </div>
        </div>
    );
}
