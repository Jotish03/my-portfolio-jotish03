// ContactSection.js
import React, { useState } from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const form = e.target;
      const endpoint = "https://formspree.io/f/mnqkdnqv";
      const formData = new FormData(form);

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          form.reset();
          setShowModal(true);
          setFormErrors({}); // Clear form errors on successful submission
        } else {
          console.error("Form submission error");
        }
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    // Clear the name error when user types
    setFormErrors((prevErrors) => ({ ...prevErrors, name: "" }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear the email error when user types
    setFormErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    // Clear the message error when user types
    setFormErrors((prevErrors) => ({ ...prevErrors, message: "" }));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto px-4 mt-[-80px]">
        <h2 className="text-2xl font-semibold mb-6 text-green-500">
          Contact Me
        </h2>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                className="input-field"
                placeholder="Enter your name"
              />
              {formErrors.name && (
                <p className="validation-error">{formErrors.name}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="input-field"
                placeholder="Enter your email"
              />
              {formErrors.email && (
                <p className="validation-error">{formErrors.email}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                className="input-field textarea"
                placeholder="Enter your message"
              />
              {formErrors.message && (
                <p className="validation-error">{formErrors.message}</p>
              )}
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            {showModal && (
              <div className="modal" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="close-button" onClick={closeModal}>
                    Close
                  </span>
                  <h3>Thank You!</h3>
                  <p>Your message has been submitted successfully.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
