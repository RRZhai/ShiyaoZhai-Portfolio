import React from "react";

const ContactItems = () => {
  return (
    <div className="contact all-contacts">
      <div className="contact-card email">
        <p className="subtitle">
          <i class="uil uil-mailbox icon"></i>Email
        </p>
        <p className="description">zsshiyaozhai@gmail.com</p>
      </div>
      <div className="contact-card phone">
        <p className="subtitle">
          <i class="uil uil-calling icon"></i>
          Phone
        </p>
        <p className="description">707-509-0074</p>
      </div>
      <div className="contact-card insta">
        <p className="subtitle">
        <i class="uil uil-linkedin-alt icon"></i>LinkedIn
        </p>
        <p className="description">https://www.linkedin.com/in/shiyao-zhai/</p>
      </div>
    </div>
  );
};

export default ContactItems;
