// Footer.js
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Subject of the Email");
    const body = encodeURIComponent(
      "Hello Jotish,\n\nI am reaching out to you..."
    );
    const mailtoLink = `mailto:jotishsharma03@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919002835282";
  };

  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4">
        <div className="footer-content">
          <div className="footer-info">
            <h4>Contact Information</h4>
            <p>
              <span className="contact-icon">
                <FaEnvelope />
              </span>{" "}
              <span className="cursor-pointer" onClick={handleEmailClick}>
                jotishsharma03@gmail.com
              </span>
            </p>
            <p>
              <span className="contact-icon">
                <FaLinkedin />
              </span>{" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <span className="contact-icon">
                <FaGithub />
              </span>{" "}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="footer-address">
            <h4>Address</h4>
            <p>Daragoan, Tadong 737102</p>
            <p>Gangtok, Sikkim</p>
            <p className="cursor-pointer" onClick={handlePhoneClick}>
              Phone: +91 9002-83-5282
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Jotish Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
