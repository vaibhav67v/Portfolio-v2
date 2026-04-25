import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { locationIcon, mailIcon } from "../lib/iconIndex";

export default function Contact() {
    const accentColor = "cyan-400";
    const primaryTextColor = "slate-400";

    return (
        <div
            className={`flex text-${primaryTextColor} text-xl px-16 py-8 gap-8`}
        >
            {/* contact content */}
            <div className="w-3/5 flex flex-col gap-4">
                {/* contact title */}
                <div className={`text-white font-bold text-4xl`}>
                    Let's build something <br />
                    <span className={`text-${accentColor}`}>Meaningful</span>.
                </div>
                {/* contact sub text */}
                <div>
                    Got an idea, a project, or just curious about what I do?{" "}
                    <br />
                    Let’s connect and build something that actually matters.
                </div>
                {/* contact info */}
                
                {/* mail info */}
                <ContactInfo
                    icon={mailIcon}
                    label={"Drop Me a Mail"}
                    value={"vishwakarmavaibhav2002@gmail.com"}
                />
                
                {/* location info */}
                <ContactInfo
                    icon={locationIcon}
                    label={"Location"}
                    value={"Available remotely"}
                />
            </div>

            {/* contact form */}
            <div className={`w-2/5 bg-neutral-800 rounded-md`}>
                <ContactForm />
            </div>
        </div>
    );
}
