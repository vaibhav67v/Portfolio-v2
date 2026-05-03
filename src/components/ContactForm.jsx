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

    // form validation logic before sending the message
    const [errors, setErrors] = useState({});
    
    const validationConfig = {
        name: [
            { required: true, message: "Please enter a name !" },
            {
                minLength: 3,
                message: "Name should be at least 3 characters long !",
            },
        ],
        email: [
            { required: true, message: "Please enter an email !" },
            {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email !",
            },
        ],
        message: [
            { required: true, message: "Please enter a message !" },
            {
                minLength: 10,
                message: "Message should be at least 10 characters long !",
            },
        ],
    };

    const validateForm = (formData) => {
        const newErrors = {};

        Object.entries(formData).forEach(([key, value]) => {
            validationConfig[key].some((rule) => {
                if (rule.required && !value.trim()) {
                    newErrors[key] = rule.message;
                    return true;
                }

                if (rule.minLength && value.length < rule.minLength) {
                    newErrors[key] = rule.message;
                    return true;
                }

                if (rule.pattern && !rule.pattern.test(value)) {
                    newErrors[key] = rule.message;
                    return true;
                }
            });
        });

        setErrors(newErrors);
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate the form before sending the message
        const validationResult = validateForm(formData);
        if (Object.keys(validationResult).length) return; // stop if error exists

        // setup the email js parameters
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

    // function to handle any change in the form
    const handleChange = (e) => {
        // hide the error message when the user starts typing
        setErrors({});
        
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form
            className={`flex flex-col gap-8 px-4 py-3 text-text lg:gap-10 lg:px-7 lg:py-6`}
            onSubmit={handleSubmit}
        >
            {/* name input */}
            <Input
                label={"Name"}
                id={"name"}
                value={formData.name}
                type={"text"}
                name={"name"}
                placeholderText={"Enter your name"}
                onChange={handleChange}
                error={errors.name}
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
                error={errors.email}
            />

            {/* message input */}
            <TextArea
                label={"Message"}
                id={"message"}
                name={"message"}
                onChange={handleChange}
                value={formData.message}
                error={errors.message}
            />

            {/* submit button */}
            <Button
                children="Start Conversation"
                type="submit"
                className="shadow-depth hover:bg-primary/85 mt-4 w-full rounded-lg bg-primary/75 py-3 font-medium text-black hover:shadow-glow-hover"
            />
        </form>
    );
}
