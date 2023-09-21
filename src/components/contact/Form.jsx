import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vaiwy9v",
        "template_luqedkf",
        form.current,
        "YjCGcopdRZyttKPBa"
      )
      e.target.reset()
  };

  return (
    <form
      className="contact__form all-form"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="contact__form form">
        <label className="contact__form label">Name</label>
        <input
          type="text"
          name="name"
          className="contact__form input"
          placeholder="Insert your name"
          required
        />
      </div>
      <div className="contact__form form">
        <label className="contact__form label">Email</label>
        <input
          type="email"
          name="email"
          className="contact__form input"
          placeholder="Insert your email"
          required
        />
      </div>
      <div className="contact__form form">
        <label className="contact__form label">Message</label>
        <textarea
          name="message"
          rows="10"
          className="contact__form input"
          required
        ></textarea>
      </div>
      <button className="button button--flex" type="submit">
        Send Message
        <i className="uil uil-message button_icon"></i>
      </button>
    </form>
  );
};

export default Form;
