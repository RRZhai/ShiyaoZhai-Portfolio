import React from "react";

const ContactItems = () => {
  return (
    <div className="contact all-contacts">
      <div className="contact-card email">
        <p className="contact subtitle">
          <i className="uil uil-mailbox contact-icon"></i>Email
        </p>
        <p className="contact description">shiyaozhaiwe@gmail.com</p>
      </div>
      <div className="contact-card phone">
        <p className="contact subtitle">
          <i className="uil uil-calling contact-icon"></i>
          Phone
        </p>
        <p className="contact description">925-876-4117</p>
      </div>
      <div className="contact-card insta">
        <p className="contact subtitle">
        <i className="uil uil-linkedin-alt contact-icon"></i>LinkedIn
        </p>
        <p className="contact description">https://www.linkedin.com/in/shiyao-zhai/</p>
      </div>
    </div>
  );
};

export default ContactItems;
