export default function ContactInfo({ icon: Icon, label, value }) {
    return (
        <div className="mt-2 flex items-center gap-2">
            <div className="bg-bg flex h-10 w-10 items-center justify-center rounded-lg text-primary/95 shadow-depth lg:h-12 lg:w-12">
                <Icon />
            </div>
            <div>
                <div className={`text-xs lg:text-sm`}>{label}</div>
                <div className={`cursor-default text-sm transition-colors duration-300 hover:text-accent lg:text-xl`}>{value}</div>
            </div>
        </div>
    );
}
