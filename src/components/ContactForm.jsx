import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                console.log("Message sent!", result.text);
                alert("Message sent successfully");
            })
            .catch((error) => {
                console.log("Error:", error.text);
                alert("Something went wrong");
            });

        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className={`flex flex-col p-8 gap-4 text-text-muted`} onSubmit={handleSubmit}>
            {/* name input */}
            <Input
                label={"Name"}
                id={"name"}
                value={formData.name}
                type={"text"}
                name={"name"}
                placeholderText={"Enter your name"}
                onChange={handleChange}
            />

            {/* name input */}
            <Input
                label={"Email"}
                id={"email"}
                value={formData.email}
                type={"email"}
                name={"email"}
                placeholderText={"yourname@example.com"}
                onChange={handleChange}
            />

            {/* message input */}
            <TextArea
                label={"Message"}
                id={"message"}
                name={"message"}
                onChange={handleChange}
                value={formData.message}
            />

            {/* submit button */}
            <Button
                children="Start Conversation"
                type="submit"
                className="w-full mt-4 bg-primary/75 text-black py-3 rounded-lg font-medium transition-all duration-200 hover:bg-primary/85 hover:scale-101 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            />
        </form>
    );
}
