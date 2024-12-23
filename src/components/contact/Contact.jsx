import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    
        // Set a default subject if you don't want the user to input one
        const defaultSubject = "New Message from Contact Form";
        emailjs.send(
            "service_8poivhn",  // Replace with your EmailJS service ID
            "template_tboaxu6",  // Replace with your EmailJS template ID
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                subject: defaultSubject, 
            },
            "sbItDBAjaR6NsxNUY"       // Replace with your EmailJS user ID
        ).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
            },
            (error) => {
                console.log("FAILED...", error);
                alert("Failed to send message.");
            }
        );
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-heading">
                <h2>Drop a Line</h2>
                <h1>Tech Talks Start Here</h1>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-inner">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send</button>
                </div>
                <div className="contact-message">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message here"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
        </section>
    );
};

export default Contact;
