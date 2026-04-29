import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import icons from "../lib/icons";
import { typography } from "../styles/typography";

export default function Contact() {

    return (
        <section
            id="contact"
            className={`flex scroll-mt-20 flex-col items-center gap-8 py-8 lg:flex-row lg:items-start lg:justify-between`}
        >
            {/* contact content */}
            <div className={`lg:w-3xl flex flex-col gap-4`}>
            
                {/* contact title */}
                <div className={`text-4xl font-bold text-text ${typography.h2}`}>
                    Let's build something <br />
                    <span className={`text-primary/95`}>Meaningful</span>.
                </div>
                
                {/* contact sub text */}
                <div className={`${typography.body}`}>
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
            <div className={`lg:w-xl w-75 rounded-xl bg-background`}>
                <ContactForm />
            </div>
        </section>
    );
}
