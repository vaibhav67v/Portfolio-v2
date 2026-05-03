export default function ContactInfo({ icon: Icon, label, value }) {
    return (
        <div className={`mt-2 flex items-center gap-2`}>
            <div className={`shadow-depth flex items-center justify-center rounded-lg bg-background p-4 text-primary/95`}>
                <Icon />
            </div>
            <div>
                <div className={`text-xs lg:text-sm`}>{label}</div>
                <div className={`text-sm transition-colors duration-300 hover:text-primary/75 lg:text-xl`}>{value}</div>
            </div>
        </div>
    );
}
