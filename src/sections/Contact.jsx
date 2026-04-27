import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import icons from "../lib/icons";

export default function Contact() {

    return (
        <section
            id="contact"
            className={`flex scroll-mt-20 gap-8 px-16 py-8 text-xl text-text-muted`}
        >
            {/* contact content */}
            <div className="flex w-3/5 flex-col gap-4">
                {/* contact title */}
                <div className={`text-4xl font-bold text-text`}>
                    Let's build something <br />
                    <span className={`text-primary/95`}>Meaningful</span>.
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
                    icon={icons.mail}
                    label={"Drop Me a Mail"}
                    value={"vishwakarmavaibhav2002@gmail.com"}
                />
                
                {/* location info */}
                <ContactInfo
                    icon={icons.location}
                    label={"Location"}
                    value={"Available remotely"}
                />
            </div>

            {/* contact form */}
            <div className={`w-3/7 rounded-md bg-background`}>
                <ContactForm />
            </div>
        </section>
    );
}
