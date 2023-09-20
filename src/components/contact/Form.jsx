import React from "react";

const Form = () => {
  return (
    <div className="contact__form all-form">
      <div className="contact__form form">
        <label className="contact__form label">Name</label>
        <input
          type="text"
          name="name"
          className="contact__form input"
          placeholder="Insert your name"
        />
      </div>
      <div className="contact__form form">
        <label className="contact__form label">Email</label>
        <input
          type="text"
          name="email"
          className="contact__form input"
          placeholder="Insert your email"
        />
      </div>
      <div className="contact__form form">
        <label className="contact__form label">Message</label>
        <textarea
          name="message"
          rows="10"
          className="contact__form input"
        ></textarea>
      </div>
      <a href="" className="button button--flex">
        Send Message
        <i className="uil uil-message button_icon"></i>
      </a>
    </div>
  );
};

export default Form;
